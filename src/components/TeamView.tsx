import React from 'react';
import { Users, GraduationCap, Code2, Briefcase, Award } from 'lucide-react';
import { LAB_TEAM_DATA } from '../data';

interface TeamViewProps {
  lang: 'ko' | 'en';
}

export default function TeamView({ lang }: TeamViewProps) {
  const t = LAB_TEAM_DATA;

  const renderSection = (titleKo: string, titleEn: string, list: typeof t.phd, icon: React.ReactNode) => {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[#1f2328] flex items-center gap-2 border-b border-[#d0d7de] pb-2 font-sans">
          {icon}
          <span>{lang === 'ko' ? titleKo : titleEn}</span>
          <span className="text-xs font-normal text-[#57606a] bg-[#afb8c120] px-2 py-0.5 rounded-full font-mono">
            {list.length}
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((m, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 p-4 bg-white border border-[#d0d7de] rounded-lg hover:border-[#0969da] hover:shadow-sm transition-all"
            >
              {/* Circular Avatar Badge modeled after GitHub */}
              <div className="h-12 w-12 rounded-full bg-[#afb8c130] border border-[#d0d7de] flex items-center justify-center font-mono font-bold text-[#24292f] text-sm shrink-0">
                {m.avatarText}
              </div>
              
              <div className="space-y-0.5 min-w-0">
                <h4 className="font-bold text-[#1f2328] text-sm hover:text-[#0969da] transition-colors truncate">
                  {m.name}
                </h4>
                <p className="text-[#57606a] text-xs font-medium font-sans">
                  {m.role}
                </p>
                <p className="text-[#57606a] text-3xs font-mono truncate">
                  {m.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Introduction Banner */}
      <div className="p-6 bg-[#f6f8fa] border border-[#d0d7de] rounded-lg">
        <h2 className="text-xl font-bold text-[#1f2328] mb-2 flex items-center gap-2 font-serif">
          <Users className="h-5 w-5 text-[#24292f]" />
          <span>{lang === 'ko' ? "머신러닝 연구실 구성원" : "Machine Learning Lab Team"}</span>
        </h2>
        <p className="text-sm text-[#57606a] leading-relaxed">
          {lang === 'ko' 
            ? "포항공과대학교(POSTECH) 인공지능대학원/컴퓨터공학과 박상돈 교수 연구 지도하에 자율 주도형 연구를 수행하는 우수한 학자 및 리서처들입니다. 최신 AI 정렬(AI Alignment), Conformal Prediction, 스마트 레드티밍 등을 탐색합니다." 
            : "Introducing the brilliant minds and research scholars at POSTECH GSAI / CSE ML Lab, exploring foundational AI Alignment, conformal security boundaries, and automated adversarial red teaming under the direction of Prof. Sangdon Park."}
        </p>
      </div>

      {/* Leader card */}
      <div className="p-5 border border-[#d0d7de] bg-[#f6f8fa] rounded-lg space-y-3.5">
        <h3 className="text-sm font-semibold text-[#1f2328] uppercase tracking-wider block font-sans">
          {lang === 'ko' ? "공동 지도 지휘 (PI)" : "Principal Investigator"}
        </h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-5 border border-[#d0d7de] rounded-lg">
          <div className="h-16 w-16 rounded-full bg-[#24292f] border border-[#1f2328] flex items-center justify-center font-serif font-bold text-white text-lg shrink-0">
            {t.leader.avatarText}
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#1f2328]">{t.leader.name}</h4>
            <p className="text-xs font-semibold text-[#0969da]">{t.leader.role} • {t.leader.affiliation}</p>
            <p className="text-xs text-[#57606a]">{t.leader.bio}</p>
          </div>
        </div>
      </div>

      {/* PhD section */}
      {renderSection("박사과정원 및 석박통합생", "Ph.D. & Integrated Students", t.phd, <GraduationCap className="h-4 w-4 text-[#24292f]" />)}

      {/* MS section */}
      {renderSection("석사과정생", "M.S. Students", t.ms, <Code2 className="h-4 w-4 text-[#24292f]" />)}

      {/* Interns section */}
      {renderSection("학부 인턴 연구원", "Undergraduate Interns", t.intern, <Briefcase className="h-4 w-4 text-[#24292f]" />)}

      {/* Admin \& Alumni */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderSection("연구실 행정실", "Administrative Unit", t.admin, <Award className="h-4 w-4 text-[#24222f]" />)}
        {renderSection("연구실 졸업생 및 동문", "Alumni & Placements", t.alumni, <Users className="h-4 w-4 text-[#24222f]" />)}
      </div>

    </div>
  );
}
