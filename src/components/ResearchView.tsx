import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Network, ShieldAlert, Cpu, Award, Zap, Library, 
  Lightbulb, FileText, CheckCircle2, FlaskConical, Search
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ResearchViewProps {
  projects: ProjectItem[];
  lang: 'ko' | 'en';
}

export default function ResearchView({ projects, lang }: ResearchViewProps) {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const researchPillars = [
    {
      icon: <Cpu className="h-6 w-6 text-indigo-600" />,
      titleKo: "사물인터넷 및 헬스케어 무선 센서 네트워크",
      titleEn: "Healthcare IoT & Wireless Sensor Networks",
      bulletsKo: [
        "웨어러블 생체 신호 복합 중계 및 네트워크 지연(Jitter) 최소화",
        "신체 무선 센서 네트워크(WBAN)에서의 전송 채널 손실 예방 핸드오버 프로토콜",
        "진동 및 동작 잡음 구별을 통한 의료 생체 원격 측정(Patient Telemetry) 알람 정확도 제고",
        "저전력 광대역(LPWAN, LoRaWAN) 기술 연구 및 스마트 미터링 전력 최적화"
      ],
      bulletsEn: [
        "Minimizes telemetry jitter and delay during packet encapsulation of vital metrics.",
        "Implements predictive handover algorithms inside Wireless Body Area Networks (WBAN).",
        "Develops temporal LSTM models to diminish medical telemetry false alarm rates.",
        "Designs highly low-power Wide Area Network (LPWAN) protocols for smart city nodes."
      ]
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-indigo-600" />,
      titleKo: "소프트웨어 정의 네트워크(SDN) 보안 및 분산 공격 차단",
      titleEn: "SDN-based Network Security & DDoS Defense",
      bulletsKo: [
        "자원 제약형 IoT 가전 오염 위조 트래픽 수집용 지능형 인라인 게이트웨이 파싱 기법",
        "OpenFlow 수집 상태 분석을 통한 고성능 DDoS 볼륨 트래픽 분류 및 실시간 격리 배포",
        "에지 단말 해킹 유입 사전 차단을 위한 다중 노드 실시간 지능형 위협 격리 방안",
        "네트워크 가상화(NFV) 기반 분산 보안 위협 대응 솔루션 개발"
      ],
      bulletsEn: [
        "Integrates lightweight traffic telemetry pipelines for asset tracking inside smart grids.",
        "Leverages inline Machine Learning on SDN Controllers for early-stage dDoS containment.",
        "Addresses in-network classification to isolate compromised, rogue IoT botnet transceivers.",
        "Studies Security Orchestration, Automation, and Response inside virtualized infrastructures."
      ]
    },
    {
      icon: <Network className="h-6 w-6 text-indigo-600" />,
      titleKo: "모바일 에지 컴퓨팅(MEC) 자원 최적화",
      titleEn: "Mobile Edge Computing Resource Optimization",
      bulletsKo: [
        "실시간 진단 신호 로드 벨런싱용 임베디드 오프로딩 하이브리드 리아푸노프(Lyapunov) 모델",
        "다중 클러스터 노드 간의 에너지 소모 및 데이터 품질 교환을 위한 에지 스케줄링 기법",
        "보안 개인정보 프라이버시 강화를 위한 에지-연합 학습(Federated Learning) 구조 설계",
        "스마트 가전 및 인더스트리얼 IoT 단말기의 전력 관리 및 가용 자원 동적 자원 배정"
      ],
      bulletsEn: [
        "Deploys Lyapunov optimization models for low-overhead dynamic load balancing.",
        "Balances throughput, battery depletion, and wireless attenuation over collaborative edge nodes.",
        "Designs secure federated learning schedules to protect user privacy in telemetry streams.",
        "Explores optimal dynamic sleep-state allocations for industrial IoT gateways."
      ]
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Introduction Section */}
      <section className="space-y-4">
        <span className="text-2xs font-semibold uppercase tracking-widest text-indigo-600 font-sans">
          {lang === 'ko' ? "연구 설계" : "Research Framework"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
          {lang === 'ko' ? "연구 분야 및 비전" : "Research Directions & Vision"}
        </h2>
        <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
          {lang === 'ko' 
            ? "네트워크 및 인공지능 연구실(NAIRL)은 대전대학교 조교수 박상돈 지도 아래, 진화하는 사물인터넷(IoT) 환경에서 초저지연, 초고신뢰성, 그리고 지능형 강력 보안을 제공하는 혁신적 토폴로지와 스케줄링 기법 개발을 주도합니다. 가교 역할을 수행하는 에지 환경에서의 지능형 최적화(Optimization) 및 머신러닝 응용 설계가 연구실 핵심 경쟁력입니다."
            : "Under the leadership of Dr. Sangdon Park, the Network & AI Research Lab (NAIRL) designs robust communication and security protocols to empower the next generation of Internet of Things (IoT) ecosystems. We bridge foundational network theories with modern machine learning paradigms to implement secure, energy-efficient, and low-latency networks."
          }
        </p>
      </section>

      {/* Pillars of Research */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold text-stone-900 font-serif border-b border-stone-100 pb-2">
          {lang === 'ko' ? "핵심 연구 분야" : "Key Research Pillars"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {researchPillars.map((p, idx) => (
            <div key={idx} className="p-6 bg-stone-50 rounded-2xl border border-stone-150 relative hover:shadow-xs transition-shadow">
              <div className="p-3 bg-white w-fit rounded-xl border border-stone-100 shadow-3xs mb-5">
                {p.icon}
              </div>
              <h4 className="text-sm font-bold text-stone-900 font-serif tracking-tight mb-4 min-h-[40px]">
                {lang === 'ko' ? p.titleKo : p.titleEn}
              </h4>
              <ul className="space-y-2.5">
                {(lang === 'ko' ? p.bulletsKo : p.bulletsEn).map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start text-stone-600 font-sans text-xs leading-relaxed">
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsored Projects / Grants */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-2">
          <h3 className="text-lg font-bold text-stone-900 font-serif flex items-center space-x-2">
            <FlaskConical className="h-5 w-5 text-indigo-600 animate-pulse" />
            <span>{lang === 'ko' ? "수행 연구 과제" : "Research Projects & Grants"}</span>
          </h3>

          {/* Status Filter */}
          <div className="flex bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs self-start sm:self-auto no-print">
            {(['all', 'active', 'completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1 font-semibold rounded-md transition-all cursor-pointer capitalize ${
                  filter === status
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {status === 'all' ? (lang === 'ko' ? "전체" : "All") : status === 'active' ? (lang === 'ko' ? "진행중" : "Active") : (lang === 'ko' ? "완료" : "Completed")}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredProjects.map((p) => {
            const isActive = p.status === 'active';
            return (
              <div 
                key={p.id} 
                className="p-5 sm:p-6 bg-white border border-stone-150 rounded-2xl relative hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-xs shrink-0 ${
                      isActive 
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-150'
                        : 'bg-stone-100 text-stone-650'
                    }`}>
                      {isActive ? (lang === 'ko' ? "진행중" : "Active") : (lang === 'ko' ? "연구완료" : "Finished")}
                    </span>
                    <span className="text-3xs text-stone-400 font-mono">
                      {p.period}
                    </span>
                  </div>
                  
                  <span className="text-3xs font-medium text-stone-500 px-2 py-1 bg-stone-50 rounded-sm">
                    {lang === 'ko' ? p.sponsorKo : p.sponsorEn}
                  </span>
                </div>

                <h4 className="text-base font-bold text-stone-950 font-serif leading-snug tracking-tight mb-3">
                  {lang === 'ko' ? p.titleKo : p.titleEn}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                  {lang === 'ko' ? p.descriptionKo : p.descriptionEn}
                </p>

                {/* Tags and Roles */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-50 text-2xs">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-stone-50 border border-stone-200 text-stone-500 rounded-sm font-sans">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-stone-500 font-sans italic text-right">
                    {lang === 'ko' ? p.roleKo : p.roleEn}
                  </div>
                </div>

              </div>
            );
          })}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-stone-400 text-sm">
              {lang === 'ko' ? "해당 필터 조건에 맞는 프로젝트가 존재하지 않습니다." : "No projects match the selected status filter."}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
