import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles } from "lucide-react";
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModel, setActiveModel] = useState<string>("Gemini Chat");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello. I'm the ${LAB_INFO.name} site assistant. Ask me about the profile, research, publications, or contact details.`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) {
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

      const data = (await response.json()) as Partial<ChatResponse> & { error?: string };

      if (!response.ok || !data.reply) {
        throw new Error(data.error || "The chat server did not return a valid response.");
      }

      setActiveModel(data.model || "Gemini Chat");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply as string }]);
    } catch (error) {
      console.error("Chatbot error:", error);

      const message =
        error instanceof Error && error.message.includes("Failed to fetch")
          ? "The chat server is not reachable. Configure VITE_CHAT_API_URL on the frontend and run the Gemini backend."
          : "Sorry, the assistant is unavailable right now. Please try again later.";

      setMessages((prev) => [...prev, { role: "assistant", content: message }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="mb-4 flex h-[520px] w-[360px] flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl sm:w-[420px]"
          >
            <div className="flex items-center justify-between bg-slate-950 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-600 p-2 text-white">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{LAB_INFO.name} AI</h3>
                  <span className="text-[11px] text-slate-400">{activeModel}</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-slate-400 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
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
                  placeholder="Ask about this site..."
                  className="w-full rounded-2xl bg-slate-100 py-3 pl-4 pr-12 text-sm text-slate-800 outline-none ring-0 transition-all focus:bg-slate-50 focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => void handleSend()}
                  disabled={!input.trim() || isLoading}
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
