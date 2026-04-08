import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Loader2, MessageSquare, RefreshCw, Send, Sparkles, User, X } from "lucide-react";
import { LAB_INFO } from "../constants";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  reply: string;
  model?: string;
}

interface HealthResponse {
  ok: boolean;
  status?: "online" | "misconfigured";
  model?: string;
  hasApiKey?: boolean;
}

type BackendState = "checking" | "online" | "offline" | "misconfigured" | "request_failed";

interface BackendStatus {
  state: BackendState;
  detail: string;
  model?: string;
}

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL?.trim() || "/api/chat";

function getSiteContext() {
  return {
    name: LAB_INFO.name,
    fullName: LAB_INFO.fullName,
    professor: LAB_INFO.professor,
    university: LAB_INFO.university,
    department: LAB_INFO.department,
    location: LAB_INFO.location,
    email: LAB_INFO.email,
    phone: LAB_INFO.phone,
    researchAreas: LAB_INFO.researchAreas,
    publications: LAB_INFO.publications.slice(0, 8),
    members: LAB_INFO.members.slice(0, 8),
  };
}

function getHealthUrl(chatUrl: string) {
  if (chatUrl.endsWith("/chat")) {
    return `${chatUrl.slice(0, -5)}/health`;
  }

  return chatUrl.endsWith("/") ? `${chatUrl}health` : `${chatUrl}/health`;
}

function formatModelName(model: string) {
  return model
    .replace(/[-_]/g, " ")
    .replace(/\b(\w)/g, (match) => match.toUpperCase())
    .replace(/Flash Preview/i, "Flash Preview")
    .replace(/Flash Lite Preview/i, "Flash Lite Preview");
}

function createBackendStatus(state: BackendState, detail: string, model?: string): BackendStatus {
  return { state, detail, model };
}

function failureCopy(state: BackendState) {
  if (state === "misconfigured") {
    return "The backend is reachable, but the Gemini API key is missing. Confirm the backend secret or environment variable, then redeploy the backend and retry.";
  }

  if (state === "request_failed") {
    return "The backend reached Gemini but the request failed. Retry later or check the backend logs and model configuration.";
  }

  if (state === "checking") {
    return "The backend is still being checked. Try again in a moment.";
  }

  return "The backend is unreachable. Check the backend URL or confirm the backend deployment, then retry.";
}

function classifyHealthResponse(response: Response, data: Partial<HealthResponse>): BackendStatus {
  if (!response.ok) {
    return createBackendStatus("offline", "Backend health check failed. Check the backend URL and deployment.");
  }

  if (data.status === "misconfigured" || data.hasApiKey === false) {
    return createBackendStatus(
      "misconfigured",
      "Backend is reachable, but the Gemini API key is missing. Confirm the backend secret and redeploy.",
      data.model,
    );
  }

  return createBackendStatus("online", "Backend is reachable.", data.model || "gemini-3-flash-preview");
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello. I'm the ${LAB_INFO.name} site assistant. Ask me about the profile, research, publications, or contact details.`,
    },
  ]);
  const [backendStatus, setBackendStatus] = useState<BackendStatus>(createBackendStatus("checking", "Checking backend connection..."));
  const scrollRef = useRef<HTMLDivElement>(null);
  const healthUrl = getHealthUrl(CHAT_API_URL);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const refreshBackendStatus = async () => {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    setBackendStatus(createBackendStatus("checking", "Checking backend connection..."));

    try {
      const response = await fetch(healthUrl, {
        signal: controller.signal,
        cache: "no-store",
      });

      const data = (await response.json()) as Partial<HealthResponse>;
      setBackendStatus(classifyHealthResponse(response, data));
    } catch (error) {
      setBackendStatus(
        createBackendStatus(
          "offline",
          error instanceof DOMException && error.name === "AbortError"
            ? "Backend health check timed out. Check the backend URL and deployment, then retry."
            : "Backend is unreachable. Check the backend URL or confirm the backend deployment, then retry.",
        ),
      );
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  useEffect(() => {
    let active = true;
    let intervalId: number | undefined;

    const probe = async () => {
      if (!active) {
        return;
      }

      await refreshBackendStatus();
    };

    void probe();
    intervalId = window.setInterval(() => {
      void probe();
    }, 30000);

    return () => {
      active = false;
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [healthUrl]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) {
      return;
    }

    if (backendStatus.state === "offline" || backendStatus.state === "misconfigured" || backendStatus.state === "checking") {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: failureCopy(backendStatus.state),
        },
      ]);
      return;
    }

    const userMessage = input.trim();
    const nextMessages = [...messages, { role: "user" as const, content: userMessage }];

    setInput("");
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-10),
          siteContext: getSiteContext(),
        }),
      });

      const data = (await response.json()) as Partial<ChatResponse> & { error?: string; errorCode?: string; status?: string };

      if (!response.ok || !data.reply) {
        const requestState: BackendState =
          data.errorCode === "MISCONFIGURED" || data.status === "misconfigured"
            ? "misconfigured"
            : data.errorCode === "REQUEST_FAILED" || response.status >= 500
              ? "request_failed"
              : response.status === 503
                ? "misconfigured"
                : "offline";

        setBackendStatus(
          requestState === "misconfigured"
            ? createBackendStatus("misconfigured", "Backend is reachable, but the Gemini API key is missing. Confirm the backend secret and redeploy.")
            : requestState === "request_failed"
              ? createBackendStatus("request_failed", "The backend reached Gemini but the request failed. Retry later or check the backend logs and model configuration.")
              : createBackendStatus("offline", "The backend request failed. Check the backend URL and deployment, then retry."),
        );

        throw new Error(data.error || "The chat server did not return a valid response.");
      }

      const activeModel = data.model || backendStatus.model || "gemini-3-flash-preview";
      setBackendStatus(
        createBackendStatus(
          "online",
          "Backend responded successfully.",
          activeModel,
        ),
      );
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply as string }]);
    } catch (error) {
      console.error("Chatbot error:", error);

      if (backendStatus.state !== "misconfigured" && backendStatus.state !== "request_failed") {
        setBackendStatus(createBackendStatus("offline", "The backend request failed. Check the backend URL and deployment, then retry."));
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error && error.message.includes("Failed to fetch")
              ? "The backend is unreachable. Check the backend URL or confirm the backend deployment, then retry."
              : "The backend request failed after reaching the server. Retry later or check the backend logs and model configuration.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const statusLabel =
    backendStatus.state === "online"
      ? `Online ¡¤ ${formatModelName(backendStatus.model || "gemini-3-flash-preview")}`
      : backendStatus.state === "misconfigured"
        ? "Misconfigured"
        : backendStatus.state === "request_failed"
          ? "Request failed"
          : backendStatus.state === "offline"
            ? "Offline"
            : "Checking...";

  const statusTone =
    backendStatus.state === "online"
      ? "text-emerald-700"
      : backendStatus.state === "misconfigured"
        ? "text-amber-700"
        : backendStatus.state === "request_failed"
          ? "text-rose-700"
          : backendStatus.state === "offline"
            ? "text-slate-700"
            : "text-slate-700";

  const canSend = backendStatus.state === "online" && !isLoading && input.trim().length > 0;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="mb-4 flex h-[560px] w-[360px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl sm:w-[420px]"
          >
            <div className="flex items-center justify-between bg-slate-950 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-600 p-2 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{LAB_INFO.name} AI</h3>
                  <span className="text-[11px] text-slate-400">{statusLabel}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <p className={cn("font-semibold", statusTone)}>
                    {backendStatus.state === "online"
                      ? "Backend online"
                      : backendStatus.state === "offline"
                        ? "Backend offline"
                        : backendStatus.state === "misconfigured"
                          ? "Backend misconfigured"
                          : backendStatus.state === "request_failed"
                            ? "Request failed"
                            : "Checking backend"}
                  </p>
                  <p className="truncate text-slate-500">{backendStatus.detail}</p>
                </div>
                <button
                  type="button"
                  onClick={() => void refreshBackendStatus()}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900"
                >
                  <RefreshCw className="h-3 w-3" />
                  Retry
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={cn("flex gap-3", message.role === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-600",
                    )}
                  >
                    {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[82%] rounded-2xl p-3 text-sm leading-relaxed",
                      message.role === "user"
                        ? "rounded-tr-none bg-blue-600 text-white"
                        : "rounded-tl-none border border-slate-200 bg-white text-slate-700 shadow-sm",
                    )}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none border border-slate-200 bg-white p-3 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 bg-white p-4">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      void handleSend();
                    }
                  }}
                  placeholder={
                    backendStatus.state === "online"
                      ? "Ask about this site..."
                      : "Backend offline. Check status above."
                  }
                  disabled={backendStatus.state !== "online"}
                  className="w-full rounded-2xl bg-slate-100 py-3 pl-4 pr-12 text-sm text-slate-800 outline-none ring-0 transition-all focus:bg-slate-50 focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                />
                <button
                  onClick={() => void handleSend()}
                  disabled={!canSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl p-2 text-blue-600 transition-all hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen((value) => !value)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300",
          isOpen ? "bg-slate-950" : "bg-blue-600",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
