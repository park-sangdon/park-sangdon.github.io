import React from 'react';
import { Mail, GraduationCap, Github, BookOpen, Bell, Plus, Search, HelpCircle, Menu } from 'lucide-react';
import { ProfileData } from '../types';

interface HeaderProps {
  profile: ProfileData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

export default function Header({ profile, activeTab, setActiveTab, lang, setLang }: HeaderProps) {
  return (
    <header className="bg-[#24292f] text-white py-3 px-4 sm:px-6 no-print border-b border-[#2f353c]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Logo & Search & Global Links */}
        <div className="flex items-center gap-4 flex-1">
          {/* GitHub Logo Icon (represented by Github) */}
          <div 
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveTab('home')}
          >
            <Github className="h-8 w-8 text-white fill-white" />
            <span className="font-semibold text-sm hidden sm:inline-block font-mono tracking-tight bg-[#ffffff15] px-2 py-0.5 rounded text-stone-200">
              johnsdpark
            </span>
          </div>

          {/* Dumb Search bar styled exactly like GitHub */}
          <div className="relative hidden md:block w-72">
            <span className="absolute inset-y-0 right-3 flex items-center pr-2 pointer-events-none">
              <span className="text-[10px] bg-[#ffffff15] text-[#8c949e] border border-[#eff1f330] px-1.5 py-0.2 rounded font-mono">
                /
              </span>
            </span>
            <div className="flex items-center bg-[#1c2128] border border-[#2f353c] hover:border-[#8c949e] rounded-md px-3 py-1 text-xs text-[#8c949e] w-full transition-colors cursor-text">
              <Search className="h-3.5 w-3.5 mr-2" />
              <span>{lang === 'ko' ? "프로필 탐색 및 검색..." : "Type / to search repositories..."}</span>
            </div>
          </div>

          {/* Global Links mimicking GitHub */}
          <nav className="hidden lg:flex items-center gap-4 text-xs font-semibold text-[#f0f6fc]">
            <a href="#pulls" onClick={(e) => { e.preventDefault(); setActiveTab('publications'); }} className="hover:text-[#c9d1d9] transition-colors">
              {lang === 'ko' ? "게재 연구물" : "Publications"}
            </a>
            <a href="#issues" onClick={(e) => { e.preventDefault(); setActiveTab('research'); }} className="hover:text-[#c9d1d9] transition-colors">
              {lang === 'ko' ? "연구 과제" : "Projects"}
            </a>
            <a href="#codespaces" onClick={(e) => { e.preventDefault(); setActiveTab('team'); }} className="hover:text-[#c9d1d9] transition-colors">
              {lang === 'ko' ? "참여 학생" : "Team Members"}
            </a>
            <a href="#marketplace" onClick={(e) => { e.preventDefault(); setActiveTab('teaching'); }} className="hover:text-[#c9d1d9] transition-colors">
              {lang === 'ko' ? "강의 교육" : "Pedagogy"}
            </a>
            <a href="#explore" onClick={(e) => { e.preventDefault(); setActiveTab('contact'); }} className="hover:text-[#c9d1d9] transition-colors">
              {lang === 'ko' ? "연구실 문의" : "Inquiries"}
            </a>
          </nav>
        </div>

        {/* Right: Actions, Language Switcher, Notifications, New Indicator */}
        <div className="flex items-center gap-3">
          
          {/* Custom Language Toggle disguised as GitHub Action Button */}
          <div className="flex items-center bg-[#1c2128] border border-[#2f353c] p-0.5 rounded-md text-3xs sm:text-2xs font-mono">
            <button
              onClick={() => setLang('ko')}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                lang === 'ko'
                  ? 'bg-[#31363d] text-white font-bold'
                  : 'text-[#8c949e] hover:text-white'
              }`}
            >
              KO
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#31363d] text-white font-bold'
                  : 'text-[#8c949e] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Notification bell and utilities */}
          <button className="p-1 text-[#c9d1d9] hover:text-white hover:bg-[#31363d] rounded-md transition-colors hidden sm:block relative cursor-pointer">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1 right-1 h-1.5 w-1.5 bg-[#0969da] rounded-full" />
          </button>

          <button className="p-1 text-[#c9d1d9] hover:text-white hover:bg-[#31363d] rounded-md transition-colors hidden sm:block cursor-pointer">
            <Plus className="h-4 w-4" />
          </button>

          {/* User profile bubble avatar */}
          <div 
            onClick={() => setActiveTab('home')}
            className="h-7 w-7 rounded-full bg-[#afb8c1] border border-[#2f353c] flex items-center justify-center font-bold text-xs text-[#24292f] cursor-pointer"
          >
            SP
          </div>

        </div>

      </div>
    </header>
  );
}
