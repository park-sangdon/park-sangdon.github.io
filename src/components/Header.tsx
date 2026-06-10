import React from 'react';
import { Mail, GraduationCap, Github, BookOpen } from 'lucide-react';
import { ProfileData } from '../types';

interface HeaderProps {
  profile: ProfileData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: 'ko' | 'en';
  setLang: (lang: 'ko' | 'en') => void;
}

export default function Header({ profile, activeTab, setActiveTab, lang, setLang }: HeaderProps) {
  const tabs = [
    { id: 'home', labelKo: '소개', labelEn: 'About' },
    { id: 'research', labelKo: '연구 분야', labelEn: 'Research' },
    { id: 'publications', labelKo: '연구 성과', labelEn: 'Publications' },
    { id: 'teaching', labelKo: '강의', labelEn: 'Teaching' },
    { id: 'contact', labelKo: '연구실 정보', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-100 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Heading */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="p-2.5 bg-stone-900 rounded-lg text-white font-serif font-semibold hidden sm:flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-stone-900 font-serif tracking-tight">
                {lang === 'ko' ? profile.nameKo : profile.nameEn}
              </h1>
              <p className="text-xs text-stone-500 font-sans tracking-wide">
                Daejeon University • NAIRL
              </p>
            </div>
          </div>

          {/* Navigation Links and Language Switcher */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <nav className="flex space-x-1 sm:space-x-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`nav-btn-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-stone-100 text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                    }`}
                  >
                    {lang === 'ko' ? tab.labelKo : tab.labelEn}
                  </button>
                );
              })}
            </nav>

            <span className="h-4 w-px bg-stone-200 hidden sm:inline" />

            {/* Language Toggle */}
            <div className="flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200/50">
              <button
                onClick={() => setLang('ko')}
                className={`px-2 py-1 text-2xs sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'ko'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                한
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 text-2xs sm:text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                EN
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </header>
  );
}
