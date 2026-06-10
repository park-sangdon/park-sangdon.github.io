import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import ResearchView from './components/ResearchView';
import PublicationsView from './components/PublicationsView';
import TeachingView from './components/TeachingView';
import ContactView from './components/ContactView';
import TeamView from './components/TeamView';

// Core structured static data
import { 
  PROFILE_DATA, NEWS_DATA, PROJECTS_DATA, 
  PUBLICATIONS_DATA, COURSES_DATA 
} from './data';

import { 
  Mail, MapPin, GraduationCap, Github, Laptop, Users, Star, 
  BookOpen, FolderClosed, Kanban, HelpCircle, Building2, Link as LinkIcon, Award
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [followers, setFollowers] = useState(142);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowers(prev => prev - 1);
    } else {
      setFollowers(prev => prev + 1);
    }
    setIsFollowing(prev => !prev);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView 
            profile={PROFILE_DATA} 
            news={NEWS_DATA} 
            lang={lang} 
            setActiveTab={setActiveTab}
          />
        );
      case 'research':
        return (
          <ResearchView 
            projects={PROJECTS_DATA} 
            lang={lang} 
          />
        );
      case 'publications':
        return (
          <PublicationsView 
            publications={PUBLICATIONS_DATA} 
            lang={lang} 
          />
        );
      case 'team':
        return (
          <TeamView 
            lang={lang} 
          />
        );
      case 'teaching':
        return (
          <TeachingView 
            courses={COURSES_DATA} 
            lang={lang} 
          />
        );
      case 'contact':
        return (
          <ContactView 
            profile={PROFILE_DATA} 
            lang={lang} 
          />
        );
      default:
        return (
          <HomeView 
            profile={PROFILE_DATA} 
            news={NEWS_DATA} 
            lang={lang} 
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  // Profile page tabs with matching GitHub design and item counters
  const tabs = [
    { id: 'home', labelKo: '요약 (Overview)', labelEn: 'Overview', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'publications', labelKo: '연구 성과물 (Repositories)', labelEn: 'Repositories', icon: <FolderClosed className="h-4 w-4" />, count: PUBLICATIONS_DATA.length },
    { id: 'research', labelKo: '연구 과제 (Projects)', labelEn: 'Projects', icon: <Kanban className="h-4 w-4" />, count: PROJECTS_DATA.length },
    { id: 'team', labelKo: '연구실 인원 (People)', labelEn: 'People', icon: <Users className="h-4 w-4" /> },
    { id: 'teaching', labelKo: '교육 강의 (Teaching)', labelEn: 'Teaching', icon: <GraduationCap className="h-4 w-4" />, count: COURSES_DATA.length },
    { id: 'contact', labelKo: '문의 제출 (Issues)', labelEn: 'Inquiries', icon: <HelpCircle className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1f2328] flex flex-col font-sans selection:bg-[#0969da20] selection:text-[#0969da]">
      
      {/* 1. Black Global Header */}
      <Header 
        profile={PROFILE_DATA} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* 2. Main Profile Workspace Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Sidebar (Profile & Metadata) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Avatar and Name */}
          <div className="flex lg:flex-col items-center lg:items-start gap-4 sm:gap-6 lg:gap-4 relative group">
            <div className="relative shrink-0">
              {/* Circular Professional Avatar styled like GitHub */}
              <div className="h-24 w-24 sm:h-36 sm:w-36 lg:h-64 lg:w-64 rounded-full bg-gradient-to-tr from-[#111] via-[#1c2128] to-[#222] border-4 border-white shadow-md flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <Github className="h-10 w-10 sm:h-12 sm:w-12 text-[#58a6ff] mb-1 animate-pulse" />
                <span className="text-white font-mono text-xs sm:text-base font-bold tracking-tight">POSTECH</span>
                <span className="text-[#8b949e] font-sans text-3xs uppercase tracking-wider text-center">ML LAB</span>
              </div>
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-6 w-6 sm:h-8 sm:w-8 bg-white border border-[#d0d7de] rounded-full flex items-center justify-center shadow-xs">
                🎓
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2 lg:mt-4">
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold font-sans text-[#1f2328] leading-tight">
                {PROFILE_DATA.nameEn}
              </h2>
              <div className="text-sm font-semibold text-[#57606a] flex flex-col">
                <span>{PROFILE_DATA.nameKo}</span>
                <span className="font-mono text-xs font-normal text-[#57606a] lg:mt-0.5">johnsdpark</span>
              </div>
            </div>
          </div>

          {/* Followers count and interactive Follow button */}
          <div className="space-y-3.5 pt-2">
            <button 
              onClick={handleFollowToggle}
              className={`w-full py-1.5 px-3 rounded-md text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                isFollowing 
                  ? 'bg-[#f6f8fa] text-[#1f2328] border-[#d0d7de] hover:bg-[#e6e8ea]' 
                  : 'bg-[#24292f] text-white border-[#24292f] hover:bg-[#1f2328]'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>{isFollowing ? (lang === 'ko' ? "팔로잉 해제" : "Unfollow") : (lang === 'ko' ? "팔로우" : "Follow")}</span>
            </button>

            <div className="flex items-center gap-2 text-xs text-[#57606a] font-sans">
              <Users className="h-4 w-4 text-[#57606a]" />
              <div>
                <strong className="text-[#1f2328] font-bold">{followers}</strong>
                <span className="ml-1">{lang === 'ko' ? "팔로워" : "followers"}</span>
              </div>
              <span>•</span>
              <div>
                <strong className="text-[#1f2328] font-bold">42</strong>
                <span className="ml-1">{lang === 'ko' ? "팔로잉" : "following"}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-0.5">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <strong className="text-[#1f2328] font-bold">312</strong>
              </div>
            </div>
          </div>

          {/* Academic Profile coordinates */}
          <div className="space-y-3 pt-4 border-t border-[#d0d7de] text-xs font-sans text-[#1f2328]">
            <p className="text-3xs uppercase font-bold text-[#57606a] tracking-wider mb-2">Academic Info</p>
            
            <div className="flex items-start gap-2.5">
              <Building2 className="h-4 w-4 text-[#57606a] mt-0.5" />
              <div>
                <strong>{lang === 'ko' ? "포항공과대학교" : "POSTECH"}</strong>
                <p className="text-3xs text-[#57606a]">{lang === 'ko' ? "인공지능대학원 및 컴퓨터공학과" : "Graduate School of AI"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-[#57606a]" />
              <span>Pohang, Republic of Korea</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-[#57606a]" />
              <a href={`mailto:${PROFILE_DATA.email}`} className="text-[#0969da] hover:underline">
                {PROFILE_DATA.email}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <LinkIcon className="h-4 w-4 text-[#57606a]" />
              <a href="https://johnsdpark.github.io" target="_blank" rel="noreferrer" className="text-[#0969da] hover:underline truncate">
                johnsdpark.github.io
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-4 w-4 text-[#57606a]" />
              <a href={PROFILE_DATA.scholarUrl} target="_blank" rel="noreferrer" className="text-[#0969da] hover:underline flex items-center gap-1 font-semibold">
                Google Scholar
              </a>
            </div>
          </div>

          {/* Custom Achievements slot to look exactly like GitHub */}
          <div className="pt-4 border-t border-[#d0d7de] space-y-2.5">
            <p className="text-3xs uppercase font-bold text-[#57606a] tracking-wider">Achievements</p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-[#afb8c120] text-[#1f2328] px-2.5 py-1 rounded-full border border-[#d0d7de]">
                <Award className="h-3 w-3 text-amber-500" />
                <span>ICML Area Chair</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-[#afb8c120] text-[#1f2328] px-2.5 py-1 rounded-full border border-[#d0d7de]">
                <Star className="h-3 w-3 text-blue-500" />
                <span>KAIST Alumni</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-[#afb8c120] text-[#1f2328] px-2.5 py-1 rounded-full border border-[#d0d7de]">
                🏆 Postdoc UPenn
              </span>
            </div>
          </div>

          {/* Organizations list */}
          <div className="pt-4 border-t border-[#d0d7de] space-y-2">
            <p className="text-3xs uppercase font-bold text-[#57606a] tracking-wider">Organizations</p>
            <div className="flex gap-2">
              <div title="POSTECH" className="h-8 w-8 rounded border border-[#d0d7de] bg-[#f6f8fa] flex items-center justify-center text-[10px] font-bold text-[#24292f] select-none">
                P
              </div>
              <div title="GSAI" className="h-8 w-8 rounded border border-[#d0d7de] bg-[#f6f8fa] flex items-center justify-center text-[10px] font-bold text-[#0969da] select-none">
                AI
              </div>
              <div title="NAIRL" className="h-8 w-8 rounded border border-[#d0d7de] bg-[#f2f7fd] flex items-center justify-center text-[10px] font-bold text-[#1f2328] select-none">
                NL
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Tab layout and content */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Subnavigation Tab Bar styled exactly like GitHub Tab row */}
          <div className="border-b border-[#d0d7de] no-print">
            <nav className="flex space-x-1 overflow-x-auto scrollbar-none" aria-label="Tabs">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-2 text-xs font-semibold border-b-2 font-sans transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#fd7e14] text-[#1f2328] font-bold'
                        : 'border-transparent text-[#57606a] hover:text-[#1f2328] hover:border-[#afb8c1]'
                    }`}
                  >
                    {tab.icon}
                    <span>{lang === 'ko' ? tab.labelKo.split(' ')[0] : tab.labelEn}</span>
                    {tab.count !== undefined && (
                      <span className="ml-1 text-2xs font-normal text-[#57606a] bg-[#afb8c120] px-1.5 py-0.2 rounded-full font-mono">
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Active Tab View Frame */}
          <div key={activeTab} className="pt-2 animate-fade-in">
            {renderContent()}
          </div>

        </div>

      </div>

      {/* 3. Humble GitHub Gray Footer */}
      <footer className="border-t border-[#d0d7de] bg-[#f6f8fa] py-8 px-4 text-xs text-[#57606a] no-print mt-16 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex items-center gap-2.5">
            <Github className="h-6 w-6 text-[#8c949e]" />
            <span className="font-semibold text-xs text-[#1f2328]">
              Sangdon Park Research Workspace
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-2xs">
            <a href={PROFILE_DATA.scholarUrl} target="_blank" rel="noreferrer" className="hover:text-[#0969da] hover:underline">Google Scholar</a>
            <span>•</span>
            <a href="https://github.com/johnsdpark" target="blank" rel="noreferrer" className="hover:text-[#0969da] hover:underline">GitHub</a>
            <span>•</span>
            <a href="#about" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="hover:text-[#0969da] hover:underline">About</a>
            <span>•</span>
            <a href="#recruitment" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }} className="hover:text-[#0969da] hover:underline">Admission Form</a>
          </div>

          <p className="text-3xs text-[#8c949e] font-mono">
            &copy; {new Date().getFullYear()} Sangdon Park. Aligned with ML, Trustworthiness and Verification bounds.
          </p>
        </div>
      </footer>

    </div>
  );
}
