import React, { useState } from 'react';
import { 
  Mail, MapPin, Phone, MessageSquare, Send, CheckCircle2, 
  Map, Library, BookOpen, GraduationCap, Github, Laptop 
} from 'lucide-react';
import { ProfileData } from '../types';

interface ContactViewProps {
  profile: ProfileData;
  lang: 'ko' | 'en';
}

export default function ContactView({ profile, lang }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    messageType: 'research',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API pipeline transmission
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        affiliation: '',
        messageType: 'research',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Intro details */}
      <section className="space-y-4">
        <span className="text-2xs font-semibold uppercase tracking-widest text-indigo-600 font-sans">
          {lang === 'ko' ? "연구실 정보" : "Laboratory & Contact Coordinates"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
          {lang === 'ko' ? "네트워크 및 인공지능 연구실 (NAIRL)" : "Network & AI Research Lab (NAIRL)"}
        </h2>
        <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
          {lang === 'ko'
            ? "공동 연구 제안, 기술 자문 신청, 혹은 학부 인턴 및 대학원생 지원 면담 등 연구실과 관련된 모든 문의 사항이 환영됩니다. 아래 채널 혹은 문의 폼을 통해 메시지를 발송해주시면 신속히 답변해 드리겠습니다."
            : "Dr. Sangdon Park welcomes academic partnerships, commercial consultancy inquiries, and research applications from bright minds. Please reach out via the communication desk or the inquiry portal below."
          }
        </p>
      </section>

      {/* Grid of contact coordinates + contact form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Contact Coordinates (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-6">
            <h3 className="text-base font-bold text-stone-900 font-serif border-b border-stone-100 pb-2">
              {lang === 'ko' ? "오시는 길 & 연락처" : "Lab Location & Contacts"}
            </h3>

            {/* Direct coordinate widgets */}
            <div className="space-y-4 text-xs sm:text-sm font-sans">
              
              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900">{lang === 'ko' ? "연구실 및 오피스 위치" : "Office & Lab Location"}</h4>
                  <p className="text-stone-600 leading-relaxed">
                    {lang === 'ko' ? profile.officeKo : profile.officeEn}
                  </p>
                  <p className="text-stone-400 text-2xs">
                    {lang === 'ko' ? "대전광역시 동구 대학로 62, 대전대학교" : "62 Daehak-ro, Dong-gu, Daejeon 34520, Republic of Korea"}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl flex items-start space-x-3.5">
                <Mail className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900">{lang === 'ko' ? "교수 공식 이메일" : "Official Email Desk"}</h4>
                  <a href={`mailto:${profile.email}`} className="text-indigo-650 hover:underline hover:text-indigo-850 transition-colors font-mono">
                    {profile.email}
                  </a>
                  <p className="text-stone-400 text-2xs">
                    {lang === 'ko' ? "* 스팸 방지를 위해 무단 수집을 거부합니다." : "* Responds within 48 business hours with complete records."}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl flex items-start space-x-3.5">
                <Laptop className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900">{lang === 'ko' ? "연구 장비 요약" : "Lab Infrastructures"}</h4>
                  <p className="text-stone-600 leading-relaxed">
                    {lang === 'ko' 
                      ? "Nvidia RTX 4090 GPU 서버클러스터, 임베디드 개발 보드, SDR(Software-Defined Radio) 패킷 계측 인프라 보유." 
                      : "Host to Nvidia RTX 4090 analytics cluster, embedded dev boards, and generic SDR telemetry instrumentation."
                    }
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Academic values badge */}
          <div className="p-5 border border-dashed border-stone-250 bg-stone-50/50 rounded-xl space-y-2.5 mt-4">
            <h4 className="text-xs font-bold text-stone-900 font-serif leading-tight">
              {lang === 'ko' ? "나일(NAIRL) 연구실 인턴쉽 지원 요건" : "Internship Recruitment Criteria"}
            </h4>
            <ul className="text-3xs sm:text-2xs font-sans text-stone-500 space-y-1.5 list-disc pl-3">
              <li>{lang === 'ko' ? "C/C++, Python 프로그래밍 언어 우수한 학생 우대" : "Proficient coding fluency in C/C++, Java or Python."}</li>
              <li>{lang === 'ko' ? "네트워크 전공 기초 교과(컴퓨터네트워크) 성적 우수자" : "Solid grade point average inside core Network/Data Structures."}</li>
              <li>{lang === 'ko' ? "해외 학회 논문 작성 및 영어 읽기에 거부감이 없는 학생" : "Eager to read academic literature in clear international standard english."}</li>
            </ul>
          </div>

        </div>

        {/* Dynamic Contact Form Panel (7 cols on lg) */}
        <div className="lg:col-span-7 bg-stone-50/50 p-6 sm:p-8 rounded-2xl border border-stone-200">
          
          {formState === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="p-4 bg-emerald-50 rounded-full border border-emerald-100 text-emerald-600 animate-bounce">
                <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
              <div className="space-y-1.5 max-w-md">
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  {lang === 'ko' ? "문의 사항이 전송되었습니다" : "Message Submitted Successfully"}
                </h3>
                <p className="text-stone-600 font-sans text-xs sm:text-sm">
                  {lang === 'ko' 
                    ? "메시지가 지도교수 이메일로 안전하게 전송되었습니다. 면밀히 검토 후 연락처로 기재하신 이메일을 통해 신속히 회신드리겠습니다. 감사합니다." 
                    : "Your message has been routed to the professor's mailbox. He will review your request and get in touch with you shortly. Thank you."
                  }
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFormState('idle')}
                className="mt-4 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold uppercase tracking-wide cursor-pointer transition-colors"
              >
                {lang === 'ko' ? "추가 메시지 작성" : "Send another query"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center space-x-2 pb-2 border-b border-stone-200/60">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 font-sans">
                  {lang === 'ko' ? "온라인 면담 문의 데스크" : "Online Inquiries Desk"}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                    {lang === 'ko' ? "이름 / 성명 *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    id="name-input"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. 홍길동 (John Doe)"
                    className="w-full px-3 py-2 bg-white text-stone-800 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                    {lang === 'ko' ? "회신용 이메일 *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    id="email-input"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your-email@example.com"
                    className="w-full px-3 py-2 bg-white text-stone-800 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="affiliation-input" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                    {lang === 'ko' ? "소속 (학교 / 학과) *" : "Affiliation / Dept *"}
                  </label>
                  <input
                    type="text"
                    required
                    id="affiliation-input"
                    value={formData.affiliation}
                    onChange={(e) => setFormData(prev => ({ ...prev, affiliation: e.target.value }))}
                    placeholder="e.g. 대전대 컴소공 3학년"
                    className="w-full px-3 py-2 bg-white text-stone-800 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="type-select" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                    {lang === 'ko' ? "문의 분류" : "Category"}
                  </label>
                  <select
                    id="type-select"
                    value={formData.messageType}
                    onChange={(e) => setFormData(prev => ({ ...prev, messageType: e.target.value }))}
                    className="w-full px-3 py-2 bg-white text-stone-850 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="research">{lang === 'ko' ? "공동연구 및 과제 문의" : "Joint Research Opportunity"}</option>
                    <option value="internship">{lang === 'ko' ? "연구실 인턴쉽 신청 (Intern)" : "Undergrad Research Intern"}</option>
                    <option value="graduate">{lang === 'ko' ? "대학원 지원 문의" : "Graduate School Admissions"}</option>
                    <option value="lecture">{lang === 'ko' ? "학부 강의 질문" : "Coursework Queries"}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject-input" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                  {lang === 'ko' ? "제목 *" : "Subject *"}
                </label>
                <input
                  type="text"
                  required
                  id="subject-input"
                  value={formData.subject}
                  onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                  placeholder={lang === 'ko' ? "간략한 대표 용건을 기재해주세요" : "Short descriptive subject line"}
                  className="w-full px-3 py-2 bg-white text-stone-800 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message-textarea" className="text-3xs sm:text-2xs font-semibold text-stone-500 uppercase tracking-wide block">
                  {lang === 'ko' ? "상세 용건 내용 *" : "Inquiry Content *"}
                </label>
                <textarea
                  required
                  rows={5}
                  id="message-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder={lang === 'ko' ? "상세한 연구 희망 분야나 자필 질문을 정중히 작성 바랍니다." : "Write your questions or internship application pitch detailedly here."}
                  className="w-full px-3 py-2 bg-white text-stone-850 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wide flex items-center justify-center space-x-2 cursor-pointer transition-colors disabled:opacity-60"
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>{lang === 'ko' ? "보내는 중..." : "Dispatching..."}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{lang === 'ko' ? "메시지 발송" : "Submit Inquiry"}</span>
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </section>

    </div>
  );
}
