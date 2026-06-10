import React, { useState } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import ResearchView from './components/ResearchView';
import PublicationsView from './components/PublicationsView';
import TeachingView from './components/TeachingView';
import ContactView from './components/ContactView';

// Core structured static data
import { 
  PROFILE_DATA, NEWS_DATA, PROJECTS_DATA, 
  PUBLICATIONS_DATA, COURSES_DATA 
} from './data';

import { 
  Mail, MapPin, GraduationCap, Github, Laptop 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

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

  return (
    <div className="min-h-screen bg-stone-50/20 text-stone-900 flex flex-col font-sans selection:bg-indigo-150 selection:text-indigo-900">
      
      {/* 1. Header Navigation Bar */}
      <Header 
        profile={PROFILE_DATA} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* 2. Main content container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div key={activeTab}>
          {renderContent()}
        </div>
      </main>

      {/* 3. Footer Area */}
      <footer className="border-t border-stone-200/50 bg-white py-12 px-4 text-center text-xs text-stone-500 no-print mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          
          <div className="text-left space-y-1.5 max-w-md">
            <h4 className="font-serif font-bold text-stone-900 text-sm">
              {lang === 'ko' ? "네트워크 및 인공지능 연구실" : "Network & AI Research Lab (NAIRL)"}
            </h4>
            <p className="font-sans leading-relaxed text-3xs sm:text-2xs">
              {lang === 'ko' 
                ? "대전대학교 공과대학 컴퓨터소프트웨어공학과 • 지도교수 박상돈" 
                : "Department of Computer Software Engineering, Daejeon University • Lead Dr. Sangdon Park"
              }
            </p>
            <p className="text-3xs text-stone-400 font-mono">
              Convergence Science Building Room 409, Daejeon, Republic of Korea
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-3xs sm:text-2xs font-sans">
            <div className="flex items-center space-x-3 text-stone-400">
              <a href={PROFILE_DATA.scholarUrl} target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">Google Scholar</a>
              <span>•</span>
              <a href={PROFILE_DATA.researchgateUrl} target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">ResearchGate</a>
              <span>•</span>
              <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">GitHub</a>
            </div>
            <p className="text-3xs text-stone-400 text-center md:text-right font-mono">
              &copy; {new Date().getFullYear()} Sangdon Park. All rights reserved. Powered by React, Vite, Tailwind CSS.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
