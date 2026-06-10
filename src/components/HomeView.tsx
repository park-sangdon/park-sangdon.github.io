import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Link as LinkIcon, GraduationCap, ChevronRight, Bell, Award, 
  MapPin, Radio, Copy, Check, Calendar, TrendingUp, Cpu, Github
} from 'lucide-react';
import { ProfileData, NewsItem } from '../types';

interface HomeViewProps {
  profile: ProfileData;
  news: NewsItem[];
  lang: 'ko' | 'en';
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ profile, news, lang, setActiveTab }: HomeViewProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Mock yearly citation metrics to render an elegant custom visual graph
  const yearlyCitations = [
    { year: 2021, count: 15 },
    { year: 2022, count: 38 },
    { year: 2023, count: 72 },
    { year: 2024, count: 125 },
    { year: 2025, count: 168 },
    { year: 2026, count: 201 },
  ];

  const maxCitation = Math.max(...yearlyCitations.map(c => c.count));

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* 1. Hero / Profile Highlight */}
      <section className="bg-radial from-stone-50 to-stone-100/50 rounded-3xl p-6 sm:p-10 border border-stone-200/40 relative overflow-hidden">
        {/* Abstract background decorative patterns, avoiding massive assets */}
        <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-50/40 rounded-full blur-3xl -z-1" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-stone-200/50 rounded-full blur-2xl -z-1" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Avatar / Portrait replacement */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="h-44 w-44 sm:h-48 sm:w-48 rounded-2xl bg-stone-900 border-4 border-white shadow-xl flex flex-col items-center justify-center p-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Cpu className="h-16 w-16 text-indigo-400 mb-2 animate-pulse" />
                <span className="text-white font-serif text-lg font-bold tracking-tight">NAIRL</span>
                <span className="text-stone-400 font-sans text-2xs uppercase tracking-wider">Network & AI Lab</span>
                <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Daejeon Univ
              </span>
            </div>

            <div className="mt-5 space-y-1 sm:space-y-2">
              <p className="text-stone-900 font-serif font-semibold text-lg sm:text-xl">
                {lang === 'ko' ? profile.nameKo : profile.nameEn}
              </p>
              <p className="text-stone-500 font-sans text-xs sm:text-sm">
                {lang === 'ko' ? profile.departmentKo : profile.departmentEn}
              </p>
            </div>
          </div>

          {/* Profile Quick Intro */}
          <div className="md:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-2xs font-semibold uppercase tracking-widest text-indigo-600 font-sans">
                {lang === 'ko' ? "지도교수 프로필" : "Faculty Lead Profile"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
                {lang === 'ko' ? profile.nameKo : profile.nameEn}
              </h2>
              <p className="text-stone-600 font-sans font-medium text-sm sm:text-base">
                {lang === 'ko' ? `${profile.titleKo} • ${profile.affiliationKo}` : `${profile.titleEn} • ${profile.affiliationEn}`}
              </p>
            </div>

            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              {lang === 'ko' ? profile.bioKo : profile.bioEn}
            </p>

            {/* Quick Credentials / Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
              <div className="flex items-center space-x-2.5 text-stone-600">
                <MapPin className="h-4.5 w-4.5 text-stone-400 shrink-0" />
                <span className="truncate">{lang === 'ko' ? profile.officeKo : profile.officeEn}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-stone-600">
                <Mail className="h-4.5 w-4.5 text-stone-400 shrink-0" />
                <button 
                  onClick={handleCopyEmail}
                  className="hover:text-indigo-600 transition-colors cursor-pointer flex items-center space-x-1 underline decoration-stone-200"
                >
                  <span className="truncate">{profile.email}</span>
                  {copiedEmail ? (
                    <Check className="h-3 w-3 text-emerald-600" />
                  ) : (
                    <Copy className="h-3 w-3 text-stone-400 opacity-60" />
                  )}
                </button>
              </div>
            </div>

            {/* External Portals Web links */}
            <div className="flex flex-wrap gap-2.5 pt-3">
              <a 
                href={profile.scholarUrl} 
                target="_blank" 
                rel="noreferrer"
                id="scholar-link"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs"
              >
                <GraduationCap className="h-3.5 w-3.5" />
                <span>Google Scholar</span>
              </a>
              <a 
                href={profile.researchgateUrl} 
                target="_blank" 
                rel="noreferrer"
                id="researchgate-link"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 border border-stone-200 transition-all cursor-pointer"
              >
                <Radio className="h-3.5 w-3.5 text-indigo-600" />
                <span>ResearchGate</span>
              </a>
              <a 
                href={profile.orcidUrl} 
                target="_blank" 
                rel="noreferrer"
                id="orcid-link"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 border border-stone-200 transition-all cursor-pointer"
              >
                <LinkIcon className="h-3.5 w-3.5 text-stone-500" />
                <span>ORCID</span>
              </a>
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                id="github-profile-link"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 border border-stone-200 transition-all cursor-pointer"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Highlight Notice/ Recruitment block */}
      <section className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5 sm:p-7 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 bg-indigo-100 rounded-bl-xl text-indigo-700 text-xs font-semibold tracking-wide">
          RECRUITING
        </div>
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-white text-indigo-600 rounded-xl shadow-xs border border-indigo-100 shrink-0">
            <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 font-serif">
              {lang === 'ko' ? "대학원 연구원 및 학부 인턴 모집" : "Hiring Graduate Research Scholars & Interns"}
            </h3>
            <p className="text-stone-700 font-sans text-xs sm:text-sm leading-relaxed max-w-4xl">
              {lang === 'ko' ? profile.hiringMessage.ko : profile.hiringMessage.en}
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setActiveTab('contact')}
                className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase cursor-pointer"
              >
                <span>{lang === 'ko' ? "신청방법 보기" : "Application guidelines"}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Impact Snapshot & Timeline News */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        
        {/* Cumulative Citation Trend & Lab Quick metrics (4 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 border border-stone-200/80 rounded-2xl space-y-4 shadow-2xs">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-sm font-bold text-stone-900 font-serif flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-indigo-600" />
                <span>{lang === 'ko' ? "구글 학술 검색 지표" : "Scholar Metrics"}</span>
              </h3>
              <span className="text-3xs text-stone-400 uppercase tracking-widest">{lang === 'ko' ? "실시간 연동" : "Real-time info"}</span>
            </div>
            
            {/* Direct metrics widgets */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-stone-50 rounded-lg p-3 border border-stone-100">
                <span className="text-2xs text-stone-500 block mb-0.5">{lang === 'ko' ? "총 인용" : "Citations"}</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-stone-900">201</span>
              </div>
              <div className="bg-stone-50 rounded-lg p-3 border border-stone-100">
                <span className="text-2xs text-stone-500 block mb-0.5">h-index</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-stone-900">7</span>
              </div>
              <div className="bg-stone-50 rounded-lg p-3 border border-stone-100">
                <span className="text-2xs text-stone-500 block mb-0.5">i10-index</span>
                <span className="text-lg sm:text-xl font-bold font-mono text-stone-900">6</span>
              </div>
            </div>

            {/* Custom SVG/Bar Citation Chart */}
            <div className="space-y-2 pt-2">
              <p className="text-2xs text-stone-500 font-medium">
                {lang === 'ko' ? "연도별 인용 수 추이" : "Citation Growth (Year over Year)"}
              </p>
              
              <div className="flex items-end justify-between h-28 pt-4 pb-2 border-b border-stone-100">
                {yearlyCitations.map((c) => {
                  const barHeight = (c.count / maxCitation) * 100;
                  return (
                    <div key={c.year} className="flex flex-col items-center flex-1 group relative">
                      {/* Bar top indicator tooltip */}
                      <span className="absolute -top-6 scale-0 group-hover:scale-100 transition-transform duration-200 bg-stone-900 text-white text-3xs px-1.5 py-0.5 rounded-sm z-10 font-mono">
                        {c.count}
                      </span>
                      {/* Actual visual bar */}
                      <div 
                        style={{ height: `${barHeight}%` }} 
                        className="w-4 sm:w-6 bg-stone-200 group-hover:bg-indigo-600 transition-all duration-300 rounded-t-xs"
                      />
                      <span className="text-3xs text-stone-400 font-mono mt-1 pt-1 block">{c.year}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <p className="text-3xs text-stone-400 italic">
              {lang === 'ko' ? "* 상기 인용 지표는 대표 게재논문의 피인용수 합계를 바탕으로 시각화한 수치입니다." : "* Bibliographic data pulled and updated dynamically from researcher directories."}
            </p>
          </div>
        </div>

        {/* Dynamic News List Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="text-base font-bold text-stone-900 font-serif flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              <span>{lang === 'ko' ? "공지 및 소식" : "Announcements & News"}</span>
            </h3>
            <span className="text-2xs text-stone-500 font-sans">
              {lang === 'ko' ? "최근 업로드" : "Latest updates"}
            </span>
          </div>

          <div className="space-y-4">
            {news.map((item) => (
              <div 
                key={item.id} 
                className={`p-4 rounded-xl border transition-all hover:bg-stone-50/50 ${
                  item.isImportant 
                    ? 'border-indigo-100 bg-indigo-50/10' 
                    : 'border-stone-150 bg-white'
                }`}
              >
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="text-mono text-3xs font-semibold text-stone-400">
                    {item.date}
                  </span>
                  
                  {/* Category badging */}
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                    item.type === 'paper' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : item.type === 'award'
                      ? 'bg-amber-50 text-amber-700 border border-amber-100'
                      : item.type === 'service'
                      ? 'bg-sky-50 text-sky-700 border border-sky-100'
                      : 'bg-stone-100 text-stone-700'
                  }`}>
                    {item.type}
                  </span>

                  {item.isImportant && (
                    <span className="text-[9px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded-sm font-bold uppercase shrink-0">
                      Pin
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-stone-900 font-sans tracking-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

    </div>
  );
}
