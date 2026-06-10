import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, Copy, Check, Download, ExternalLink, 
  ChevronDown, ChevronUp, Quote, Award, Calendar, Layers 
} from 'lucide-react';
import { PublicationItem, PubType } from '../types';

interface PublicationsViewProps {
  publications: PublicationItem[];
  lang: 'ko' | 'en';
}

export default function PublicationsView({ publications, lang }: PublicationsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeType, setActiveType] = useState<PubType | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedAbstract, setExpandedAbstract] = useState<Record<string, boolean>>({});
  const [expandedBibtex, setExpandedBibtex] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // All unique keywords from all publications to generate tagging sidebar/chips
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    publications.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [publications]);

  const toggleAbstract = (id: string) => {
    setExpandedAbstract(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBibtex = (id: string) => {
    setExpandedBibtex(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyBibtex = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadBibtex = (title: string, bib: string) => {
    const element = document.createElement("a");
    const file = new Blob([bib], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, "_")}.bib`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Filter & Search logic
  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = activeType === 'all' || pub.type === activeType;
      
      const matchesTag = !selectedTag || pub.tags.includes(selectedTag);

      return matchesSearch && matchesType && matchesTag;
    });
  }, [publications, searchTerm, activeType, selectedTag]);

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Intro section & stats */}
      <section className="space-y-4">
        <span className="text-2xs font-semibold uppercase tracking-widest text-indigo-600 font-sans">
          {lang === 'ko' ? "연구 성과" : "Publications Catalogue"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
          {lang === 'ko' ? "대표 게재 학술인쇄물" : "Research Publications"}
        </h2>
        <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
          {lang === 'ko'
            ? "지도교수 박상돈 박사가 대내외적으로 연구해 온 국내외 저명 저널 및 최상위 학술대회 게재 논문 목록입니다. 주로 IEEE, MDPI, Elsevier 등의 상위 쿼타일(Q1) 저널 전산 논문이 다수 포함되어 있습니다."
            : "A chronological directory of peer-reviewed journal papers and international conferences authored or co-authored by Dr. Sangdon Park, demonstrating continuous contribution across IoT networks, computing models, and security matrices."
          }
        </p>
      </section>

      {/* Publications Workspace */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* Filtering Toolbox (3 cols on lg, full on small) */}
        <div className="lg:col-span-3 space-y-6 no-print">
          
          {/* Main Search Panel */}
          <div className="p-4 border border-stone-150 bg-stone-50 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
              {lang === 'ko' ? "문헌 검색" : "Search Publication"}
            </h4>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'ko' ? "제목, 저자, 저널명..." : "Title, author, journal..."}
                id="pub-search-input"
                className="w-full pl-9 pr-4 py-2 bg-white text-stone-800 border border-stone-200 rounded-lg text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="text-2xs font-sans text-stone-500 hover:text-stone-800 underline block"
              >
                {lang === 'ko' ? "검색어 초기화" : "Clear search query"}
              </button>
            )}
          </div>

          {/* Type Filter Panel */}
          <div className="p-4 border border-stone-150 bg-stone-50 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
              {lang === 'ko' ? "유형 분류" : "Publication Type"}
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs">
              {(['all', 'journal', 'conference'] as const).map(type => (
                <button
                  key={type}
                  id={`pub-type-btn-${type}`}
                  onClick={() => setActiveType(type)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    activeType === type
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-200/50 hover:text-stone-900'
                  }`}
                >
                  <span className="capitalize">{type === 'all' ? (lang === 'ko' ? "전체 보기" : "All Articles") : type}</span>
                  <span className="text-3xs bg-stone-100 text-stone-800 px-1.5 py-0.5 rounded-full font-mono group-hover:bg-white">
                    {type === 'all' 
                      ? publications.length 
                      : publications.filter(p => p.type === type).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Keyword tags panel */}
          <div className="p-4 border border-stone-150 bg-stone-50 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest font-sans">
              {lang === 'ko' ? "분야별 키워드" : "Keywords Filter"}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {allTags.map(tag => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`px-2 py-1 rounded-sm text-3xs font-medium border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-indigo-600 border-indigo-700 text-white'
                        : 'bg-white border-stone-200 text-stone-600 hover:border-stone-450 hover:text-stone-800'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
            </div>
            {selectedTag && (
              <button 
                onClick={() => setSelectedTag(null)}
                className="text-3xs font-sans text-indigo-600 hover:text-indigo-800 block underline pt-1 font-semibold"
              >
                {lang === 'ko' ? "키워드 선택 취소" : "Reset keyword tags"}
              </button>
            )}
          </div>

        </div>

        {/* Papers Catalogue List (9 cols on lg) */}
        <div className="lg:col-span-9 space-y-5">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-3">
            <span className="text-xs font-medium text-stone-500">
              {filteredPublications.length} {lang === 'ko' ? "개의 저술물 검색됨" : "articles found"}
            </span>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((pub, idx) => {
              const isAbsExpanded = !!expandedAbstract[pub.id];
              const isBibExpanded = !!expandedBibtex[pub.id];
              
              return (
                <div 
                  key={pub.id} 
                  className="p-5 sm:p-6 bg-white border border-stone-150 rounded-2xl relative hover:shadow-2xs transition-shadow"
                >
                  
                  {/* Title & Badge line */}
                  <div className="flex flex-wrap items-start justify-between gap-2.5 mb-2.5">
                    <div className="flex items-center space-x-2">
                      <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm ${
                        pub.type === 'journal' 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                          : 'bg-blue-50 text-blue-800 border border-blue-100'
                      }`}>
                        {pub.type}
                      </span>
                      {pub.journalImpact && (
                        <span className="text-[9px] font-semibold text-stone-500 bg-stone-50 border border-stone-150 px-1.5 py-0.5 rounded-sm flex items-center space-x-1">
                          <Award className="h-2.5 w-2.5 text-amber-500" />
                          <span>{pub.journalImpact}</span>
                        </span>
                      )}
                    </div>

                    <div className="text-3xs text-stone-400 font-mono">
                      Citations: <strong className="text-stone-700 font-semibold text-xs ml-0.5">{pub.citations}</strong>
                    </div>
                  </div>

                  {/* Absolute Title */}
                  <h4 className="text-base sm:text-lg font-bold text-stone-950 font-serif leading-snug tracking-tight mb-2">
                    {pub.title}
                  </h4>

                  {/* Authors: Highlight Prof. Sangdon Park in bold */}
                  <p className="text-xs font-sans text-stone-600 mb-2">
                    {pub.authors.map((author, index) => {
                      const isMe = author.includes('Sangdon Park') || author.includes('박상돈');
                      return (
                        <React.Fragment key={index}>
                          {isMe ? <strong className="text-stone-900 font-semibold underline">{author}</strong> : author}
                          {index < pub.authors.length - 1 ? ', ' : ''}
                        </React.Fragment>
                      );
                    })}
                  </p>

                  {/* Venue descriptor */}
                  <p className="text-xs font-mono text-stone-500 italic mb-4">
                    {pub.venue}, {pub.year}
                  </p>

                  {/* Tags line */}
                  <div className="flex flex-wrap gap-1 mb-4 text-3xs text-stone-400">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 bg-stone-50 border border-stone-200 text-stone-500 rounded-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-3.5 border-t border-stone-50 text-2xs font-semibold uppercase no-print">
                    
                    <button 
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center space-x-1 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                    >
                      <span>{isAbsExpanded ? (lang === 'ko' ? "초록 숨기기" : "Hide Abstract") : (lang === 'ko' ? "초록 읽기" : "Show Abstract")}</span>
                      {isAbsExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>

                    <button 
                      onClick={() => toggleBibtex(pub.id)}
                      className="inline-flex items-center space-x-1 text-indigo-650 hover:text-indigo-850 transition-colors cursor-pointer"
                    >
                      <Quote className="h-3 w-3 shrink-0" />
                      <span>{isBibExpanded ? (lang === 'ko' ? "BibTeX 숨기기" : "Close BibTeX") : "BibTeX"}</span>
                    </button>

                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-stone-500 hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>DOI URL</span>
                      </a>
                    )}

                  </div>

                  {/* Expandable Abstract Panel */}
                  {isAbsExpanded && (
                    <div className="mt-4 p-4 bg-stone-50 border border-stone-200/60 rounded-xl text-xs text-stone-650 font-sans leading-relaxed">
                      <h5 className="font-bold text-stone-900 mb-2 font-serif">{lang === 'ko' ? "초록 (Abstract)" : "Abstract"}</h5>
                      <p>{pub.abstract || "Abstract description is currently being synchronized."}</p>
                    </div>
                  )}

                  {/* Expandable BibTeX Exporter Panel */}
                  {isBibExpanded && (
                    <div className="mt-4 p-4 bg-stone-950 rounded-xl border border-stone-850 text-white relative">
                      
                      {/* Copy and Download Tools */}
                      <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                        <button
                          onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                          title="Copy to Clipboard"
                          className="p-1 px-2 rounded-md bg-stone-850 hover:bg-stone-750 transition-colors text-stone-300 text-3xs flex items-center space-x-1 cursor-pointer"
                        >
                          {copiedId === pub.id ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              <span className="text-emerald-450 uppercase font-semibold text-3xs">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              <span className="uppercase text-3xs font-semibold">Copy</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleDownloadBibtex(pub.title, pub.bibtex)}
                          title="Download .bib file"
                          className="p-1 rounded-md bg-stone-850 hover:bg-stone-750 transition-colors text-stone-300 cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <h5 className="text-3xs uppercase font-bold text-stone-400 tracking-wider mb-2 font-mono">
                        BibTeX Citation Code
                      </h5>
                      
                      <pre className="text-[11px] overflow-x-auto whitespace-pre font-mono text-indigo-300">
                        {pub.bibtex}
                      </pre>
                    </div>
                  )}

                </div>
              );
            })}

            {filteredPublications.length === 0 && (
              <div className="text-center py-16 text-stone-400 text-sm">
                {lang === 'ko' ? "검색조건에 부합하는 연구 성과물이 존재하지 않습니다." : "No publications found. Try altering your filter inputs or search term."}
              </div>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}
