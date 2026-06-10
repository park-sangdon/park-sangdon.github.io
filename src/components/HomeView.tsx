import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, GitPullRequest, ArrowDown, Award, Star, Radio, Quote, BookOpenText,
  Calendar, Cpu, KeyRound, Flame, ChevronRight, Bell, Terminal, Check
} from 'lucide-react';
import { ProfileData, NewsItem } from '../types';

interface HomeViewProps {
  profile: ProfileData;
  news: NewsItem[];
  lang: 'ko' | 'en';
  setActiveTab: (tab: string) => void;
}

export default function HomeView({ profile, news, lang, setActiveTab }: HomeViewProps) {
  // Render a mock GitHub contribution calendar
  const buildContributionCalendar = () => {
    // Generate a list of days for a realistic 53-week developer commit index
    const days = Array.from({ length: 371 }, (_, i) => {
      // Create some random intensity for commits (0 to 4)
      let level = 0;
      const rand = Math.random();
      if (rand > 0.85) level = 4; // deep green
      else if (rand > 0.70) level = 3; // medium green
      else if (rand > 0.50) level = 2; // light green
      else if (rand > 0.30) level = 1; // pale green
      return level;
    });

    const levelColors = [
      'bg-[#ebedf0]', // 0: gray
      'bg-[#9be9a8]', // 1: pale green
      'bg-[#40c463]', // 2: light green
      'bg-[#30a14e]', // 3: medium green
      'bg-[#216e39]', // 4: deep green
    ];

    return (
      <div className="p-4 border border-[#d0d7de] rounded-lg bg-white space-y-3">
        <div className="flex items-center justify-between text-xs text-[#57606a]">
          <span className="font-semibold">{lang === 'ko' ? "개인 학술 기여도 (Contribution Activity)" : "368 contributions in the last year"}</span>
          <div className="flex items-center gap-1">
            <span>{lang === 'ko' ? "범례" : "Less"}</span>
            <span className="h-2.5 w-2.5 bg-[#ebedf0] rounded-xs" />
            <span className="h-2.5 w-2.5 bg-[#9be9a8] rounded-xs" />
            <span className="h-2.5 w-2.5 bg-[#40c463] rounded-xs" />
            <span className="h-2.5 w-2.5 bg-[#30a14e] rounded-xs" />
            <span className="h-2.5 w-2.5 bg-[#216e39] rounded-xs" />
            <span>{lang === 'ko' ? "높음" : "More"}</span>
          </div>
        </div>

        {/* Contribution Calendar Scroll Grid */}
        <div className="overflow-x-auto scrollbar-none pb-1">
          <div className="flex flex-col flex-wrap h-24 gap-1 w-[640px] md:w-full">
            {days.map((level, idx) => (
              <div 
                key={idx} 
                title={`Active research output level: ${level}`}
                className={`h-2 w-2 rounded-xs transition-colors hover:scale-125 ${levelColors[level]}`} 
              />
            ))}
          </div>
        </div>

        <div className="flex text-[10px] text-[#57606a] justify-between">
          <span>{lang === 'ko' ? "1년 전" : "1 year ago"}</span>
          <span>{lang === 'ko' ? "현재" : "Present"}</span>
        </div>
      </div>
    );
  };

  // Render Pinned Featured Repos (His top Publications styled like repos)
  const popularRepos = [
    {
      name: "selective-code-generation",
      description: "Selective Code Generation via Conformal Safety Calibration (ICML 2026)",
      lang: "TypeScript",
      langColor: "bg-[#3178c6]",
      stars: 12,
      citations: "ICML 2026"
    },
    {
      name: "llm-watermark-evasion",
      description: "LLM Watermarking Evasion via Bias Inversion. Neutralizing generated text boundaries (ICML 2026)",
      lang: "Python",
      langColor: "bg-[#3572A5]",
      stars: 8,
      citations: "ICML 2026"
    },
    {
      name: "online-conformal-prediction",
      description: "Online Conformal Prediction with Adversarial Semi-bandit Feedback (ICLR 2026)",
      lang: "Python",
      langColor: "bg-[#3572A5]",
      stars: 15,
      citations: "ICLR 2026"
    },
    {
      name: "idecode-conformal-ood",
      description: "In-distribution Equivariance for Conformal Out-of-distribution Detection (ICML 2022)",
      lang: "C++",
      langColor: "bg-[#f34b7d]",
      stars: 89,
      citations: "ICML 2022"
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. README.md Box */}
      <div className="border border-[#d0d7de] rounded-lg bg-white overflow-hidden shadow-xs">
        
        {/* Readme Title Header */}
        <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-4 py-3 flex items-center justify-between text-xs text-[#24292f] font-mono">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-[#57606a]" />
            <span className="font-semibold text-[#1f2328]">johnsdpark / README.md</span>
          </div>
          <span className="text-3xs text-[#c9d1d9] bg-[#57606a] px-1.5 py-0.2 rounded font-sans uppercase">
            Markdown
          </span>
        </div>

        {/* Readme Content Section */}
        <div className="p-6 md:p-8 space-y-6 text-sm leading-relaxed text-[#1f2328]">
          <div className="border-b border-[#d0d7de] pb-4 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#1f2328] tracking-tight">
              {lang === 'ko' ? "안녕하세요, 박상돈입니다 👋" : "Hi there, I'm Sangdon Park 👋"}
            </h1>
            <p className="text-[#57606a] font-sans text-xs sm:text-sm">
              {lang === 'ko' ? "포항공과대학교 (POSTECH) 인공지능대학원 및 컴퓨터공학과 조교수" : "Assistant Professor @ GSAI & CSE, POSTECH"}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#1f2328] font-sans border-b border-[#d0d7de]/50 pb-1 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#0969da]" />
              <span>{lang === 'ko' ? "학제적 이령 및 바이오" : "Biography & Core Research"}</span>
            </h3>
            <p className="text-[#24292f] text-sm">
              {lang === 'ko' ? profile.bioKo : profile.bioEn}
            </p>
          </div>

          {/* Research Interest Bulleted list of his real academic pursuits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 border border-[#d0d7de]/60 rounded-lg bg-[#f6f8fa]/50">
              <h4 className="font-bold text-[#1f2328] text-xs flex items-center gap-1.5 mb-2 font-mono">
                <KeyRound className="h-3.5 w-3.5 text-[#0969da]" />
                <span>AI Alignment</span>
              </h4>
              <p className="text-[#57606a] text-xs">
                {lang === 'ko' 
                  ? "Conformal Prediction 및 수리적 기출력 교정을 통한 생성 모델의 할루시네이션 극복 및 안전 정렬 보장"
                  : "Enforcing safety boundaries using selective classification, conformal inference, and rigorous statistics."}
              </p>
            </div>

            <div className="p-4 border border-[#d0d7de]/60 rounded-lg bg-[#f6f8fa]/50">
              <h4 className="font-bold text-[#1f2328] text-xs flex items-center gap-1.5 mb-2 font-mono">
                <Flame className="h-3.5 w-3.5 text-[#cf222e]" />
                <span>Adversarial Red Teaming</span>
              </h4>
              <p className="text-[#57606a] text-xs">
                {lang === 'ko'
                  ? "에이전틱 AI 모델 및 자율 연동 시스템 하의 우회 제어 및 인버팅 피드백 레드티밍 탐색"
                  : "Continuous automated audits to construct robust boundaries against modern multi-agent evasion profiles."}
              </p>
            </div>

            <div className="p-4 border border-[#d0d7de]/60 rounded-lg bg-[#f6f8fa]/50">
              <h4 className="font-bold text-[#1f2328] text-xs flex items-center gap-1.5 mb-2 font-mono">
                <Cpu className="h-3.5 w-3.5 text-[#1a7f37]" />
                <span>Physical AI Safety</span>
              </h4>
              <p className="text-[#57606a] text-xs">
                {lang === 'ko'
                  ? "물리적 공간의 인프라 및 자율주행 모바일 로봇을 보호하는 기계 학습 검증 이론 설계"
                  : "Creating bulletproof trajectories for embedded systems, cyber-physical robotics, and mission-critical controls."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Recruiting Banner */}
      <div className="border border-[#d0d7de] rounded-lg p-5 bg-[#ddf4ff] border-l-4 border-l-[#0969da] flex items-start gap-4">
        <div className="p-2.5 bg-white rounded-lg border border-[#388bfd] text-[#0969da] shrink-0">
          <Bell className="h-5 w-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-[#1f2328]">
            {lang === 'ko' ? "📣 포스텍 ML 연구실 모집 안내" : "📣 ML Lab Recruitment Notice"}
          </h3>
          <p className="text-xs text-[#57606a] leading-relaxed">
            {lang === 'ko' ? profile.hiringMessage.ko : profile.hiringMessage.en}
          </p>
          <button 
            onClick={() => setActiveTab('contact')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0969da] hover:underline pt-1.5 cursor-pointer"
          >
            <span>{lang === 'ko' ? "온라인 지원서 전송하기" : "Access Admission Form"}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* 3. Popular Repositories List */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#1f2328]">
          {lang === 'ko' ? "대표 연구 성과물 (Pinned Publications)" : "Pinned Publications"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularRepos.map((repo, idx) => (
            <div 
              key={idx} 
              className="p-4 border border-[#d0d7de] rounded-lg bg-white flex flex-col justify-between hover:border-[#0969da] transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpenText className="h-4 w-4 text-[#57606a]" />
                  <span className="text-sm font-bold text-[#0969da] hover:underline cursor-pointer" onClick={() => setActiveTab('publications')}>
                    {repo.name}
                  </span>
                  <span className="text-3xs text-[#57606a] border border-[#d0d7de] px-1.5 py-0.2 rounded-full bg-[#f6f8fa] font-mono">
                    Public
                  </span>
                </div>
                <p className="text-xs text-[#57606a] leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#57606a] pt-4 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.lang}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-[#0969da] cursor-pointer" onClick={() => setActiveTab('publications')}>
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                  <span>{repo.stars} citations</span>
                </div>
                <div>
                  {repo.citations}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Contribution Calendar Graph */}
      {buildContributionCalendar()}

      {/* 5. Latest Timeline Announcements */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-[#1f2328]">
          {lang === 'ko' ? "최신 연구 동향 및 알림" : "Latest Activity & News"}
        </h3>
        <div className="border border-[#d0d7de] rounded-lg bg-white divide-y divide-[#d0d7de] overflow-hidden">
          {news.map((item) => (
            <div key={item.id} className="p-4 flex items-start gap-3 hover:bg-[#f6f8fa] transition-colors">
              <div className="text-xs font-mono text-[#57606a] shrink-0 pt-0.5 w-20">
                {item.date}
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.2 rounded-full border ${
                    item.type === 'paper'
                      ? 'bg-[#dafbe1] text-[#1a7f37] border-[#dafbe1]'
                      : 'bg-[#ddf4ff] text-[#0969da] border-[#ddf4ff]'
                  }`}>
                    {item.type}
                  </span>
                  {item.isImportant && (
                    <span className="text-[10px] bg-[#ffd8a8] text-[#d9480f] px-1.5 py-0.2 rounded font-bold uppercase font-sans">Pinned</span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-[#1f2328] truncate">{item.title}</h4>
                <p className="text-xs text-[#57606a] leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
