import React, { useState } from 'react';
import { 
  BookOpen, Clock, Users, MapPin, ChevronRight, CheckCircle2, 
  HelpCircle, CalendarDays, ExternalLink, Calendar, Compass
} from 'lucide-react';
import { CourseItem } from '../types';

interface TeachingViewProps {
  courses: CourseItem[];
  lang: 'ko' | 'en';
}

export default function TeachingView({ courses, lang }: TeachingViewProps) {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(courses[0]?.id || null);

  const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Intro section */}
      <section className="space-y-4">
        <span className="text-2xs font-semibold uppercase tracking-widest text-indigo-600 font-sans">
          {lang === 'ko' ? "정규 교육" : "Pedagogy & Classroom"}
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 tracking-tight">
          {lang === 'ko' ? "개설 및 진행 강의" : "Teaching & Pedagogy"}
        </h2>
        <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed max-w-4xl">
          {lang === 'ko'
            ? "대전대학교 컴퓨터소프트웨어공학과 학부 정규 교육과정입니다. 이론적 기반(자료구조, 컴퓨터네트워크)에 충실할 뿐 아니라 실질적인 테스트 및 임베디드 시뮬레이션(사물인터넷 실무)을 접목하여, 현업 즉시 전력감의 글로벌 인재를 육성하고 있습니다."
            : "Undergraduate courses offered inside the Department of Computer Software Engineering at Daejeon University. Dr. Park merges theoretical models (Data Structures, Networks) with hands-on labs (IoT prototyping, Packet diagnostics) to stimulate interactive, research-driven engineering wisdom."
          }
        </p>
      </section>

      {/* Course Selection and Details Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar (4 cols on lg, full on small) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center space-x-2 border-b border-stone-100 pb-2">
            <Calendar className="h-4 w-4 text-indigo-600" />
            <h3 className="text-sm font-bold text-stone-900 font-serif lowercase">
              {lang === 'ko' ? "강의 학기별 목록" : "Course schedules"}
            </h3>
          </div>

          <div className="space-y-2 no-print">
            {courses.map((course) => {
              const isSelected = activeCourseId === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  id={`course-nav-btn-${course.id}`}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-stone-900 text-white shadow-xs'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50 hover:border-stone-300'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-mono block ${isSelected ? 'text-indigo-300' : 'text-indigo-600'}`}>
                      {course.code}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold truncate max-w-[210px] sm:max-w-xs font-sans">
                      {lang === 'ko' ? course.titleKo : course.titleEn}
                    </h4>
                    <span className={`text-[10px] block ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                      {course.semester}
                    </span>
                  </div>
                  <ChevronRight className={`h-4 w-4 ${isSelected ? 'text-indigo-400' : 'text-stone-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Academic Consultation Information */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
            <h4 className="text-xs font-bold text-stone-900 border-b border-stone-200/60 pb-1.5 font-serif flex items-center space-x-1.5">
              <Compass className="h-4 w-4 text-indigo-600" />
              <span>{lang === 'ko' ? "학생 면담 안내" : "Office Hours"}</span>
            </h4>
            <div className="space-y-2 text-2xs sm:text-xs font-sans text-stone-600 leading-relaxed">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-stone-400" />
                <span>{lang === 'ko' ? "수요일 14:00 - 17:00" : "Wednesdays 14:00 - 17:00"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-stone-400 hover:text-indigo-600" />
                <span>{lang === 'ko' ? "융합과학관 409호실" : "Room 409, Convergence Science Bldg"}</span>
              </div>
              <p className="text-stone-500 pt-1 border-t border-stone-200/40 text-[10px]">
                {lang === 'ko'
                  ? "* 면담을 원하는 학생은 사전에 이메일로 일정 조율 바랍니다."
                  : "* Please schedule via email ahead of visit to avoid overlapping times."
                }
              </p>
            </div>
          </div>

        </div>

        {/* Selected Course Content display (8 cols on lg) */}
        {activeCourse && (
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white border border-stone-200 rounded-2xl space-y-6 shadow-2xs">
            
            {/* Header info */}
            <div className="border-b border-stone-100 pb-4 space-y-2">
              <span className="text-2xs font-semibold text-indigo-600 block uppercase font-mono tracking-widest">
                {activeCourse.code} • {activeCourse.semester}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950 tracking-tight leading-tight">
                {lang === 'ko' ? activeCourse.titleKo : activeCourse.titleEn}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 pt-1 font-sans">
                <div className="flex items-center space-x-1.5 bg-stone-50 px-2 py-0.5 rounded-sm">
                  <Users className="h-4.5 w-4.5 text-stone-400" />
                  <span>{lang === 'ko' ? activeCourse.targetKo : activeCourse.targetEn}</span>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-sans">
                {lang === 'ko' ? "강의 개요" : "Course Summary"}
              </h4>
              <p className="text-stone-700 font-sans text-sm leading-relaxed">
                {lang === 'ko' ? activeCourse.descriptionKo : activeCourse.descriptionEn}
              </p>
            </div>

            {/* Course Syllabus Items */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 font-sans">
                {lang === 'ko' ? "주요 학습 단원" : "Scope of Learning"}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                {activeCourse.syllabusItems.map((item, id) => (
                  <div key={id} className="p-3 bg-stone-50 border border-stone-100 rounded-lg flex items-start space-x-2.5">
                    <span className="h-5 w-5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-2xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {id + 1}
                    </span>
                    <span className="text-xs font-sans font-medium text-stone-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Syllabus / Material Downloads */}
            <div className="pt-4 border-t border-stone-150 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-2xs font-sans">
              <span className="text-stone-500 italic">
                {lang === 'ko' 
                  ? "* 수업 실습 소스코드 자료실은 대전대 e-Class 포털에 탑재됩니다." 
                  : "* Course syllabus, assignments list, and quiz solutions are hosted on dju e-Class."
                }
              </span>
              <button className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors uppercase inline-flex items-center space-x-1 cursor-pointer">
                <span>{lang === 'ko' ? "e-Class 바로가기" : "Visit dju e-Class"}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        )}

      </section>

    </div>
  );
}
