import React, { useState, useEffect, useRef } from 'react';
import { FlaskConical, Music, Trophy, Video, Users, Trees, Sparkles, Crown, Monitor, Cctv, PartyPopper, ClipboardCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FACILITIES_DATA, FACILITIES_DATA_BRANCH_1, FACILITIES_DATA_BRANCH_2 } from '../data/schoolData';

const iconMap: Record<string, React.ElementType> = { FlaskConical, Music, Trophy, Video, Users, Trees, Crown, Monitor, Sparkles, Cctv, PartyPopper, ClipboardCheck };

export interface FacilitiesSectionProps {
  branchNumber?: 1 | 2;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ branchNumber }) => {
  const { language } = useApp();
  const isFa = language === 'fa';
  const facilities =
    branchNumber === 1
      ? FACILITIES_DATA_BRANCH_1
      : branchNumber === 2
      ? FACILITIES_DATA_BRANCH_2
      : FACILITIES_DATA;
  const [activeIdx, setActiveIdx] = useState(0);

  const DURATION = 5000;
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardStartTimeRef = useRef<number>(performance.now());
  const activeIdxRef = useRef<number>(0);
  const facilitiesRef = useRef(facilities);
  facilitiesRef.current = facilities;
  const reqIdRef = useRef<number>(0);

  activeIdxRef.current = activeIdx;

  const selectCard = (idx: number) => {
    progressBarsRef.current.forEach((bar) => {
      if (bar) bar.style.width = '0%';
    });
    cardStartTimeRef.current = performance.now();
    activeIdxRef.current = idx;
    setActiveIdx(idx);
  };

  useEffect(() => {
    cardStartTimeRef.current = performance.now();
    let lastTime = performance.now();

    const animate = (now: number) => {
      if (now - lastTime > 1000) {
        cardStartTimeRef.current = now;
      }
      lastTime = now;

      const elapsed = now - cardStartTimeRef.current;
      const progressPercent = Math.min(100, (elapsed / DURATION) * 100);
      const currentIdx = activeIdxRef.current;

      // Update the active card's progress bar smoothly
      const activeBar = progressBarsRef.current[currentIdx];
      if (activeBar) {
        activeBar.style.width = `${progressPercent}%`;
      }

      progressBarsRef.current.forEach((bar, i) => {
        if (bar && i !== currentIdx) {
          bar.style.width = '0%';
        }
      });

      if (elapsed >= DURATION) {
        const nextIdx = (currentIdx + 1) % facilitiesRef.current.length;
        cardStartTimeRef.current = now;
        if (activeBar) {
          activeBar.style.width = '0%';
        }
        activeIdxRef.current = nextIdx;
        setActiveIdx(nextIdx);
      }

      reqIdRef.current = requestAnimationFrame(animate);
    };

    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  let titleFa = 'امکانات مدرسه نگین دانش';
  let titleEn = 'Negin Danesh School Facilities';
  let subtitleFa = 'فضایی استاندارد و الهام‌بخش جهت رشد علمی، فرهنگی، ورزشی و رفاهی دانش‌آموزان';
  let subtitleEn = 'Inspiring spaces tailored to foster academic, cultural, athletic, and personal student growth';

  if (branchNumber === 1) {
    titleFa = 'امکانات مدرسه باران دانش ۱';
    titleEn = 'Baran Danesh School Facilities 1';
    subtitleFa = 'کارگاه های خلافیت، مهارت اموزی، فضای پویا و ازمایشگاهی برای کشف و پژوهش';
    subtitleEn = 'Creative workshops, life-skills spaces, science stations, and dynamic classrooms at Branch 1';
  } else if (branchNumber === 2) {
    titleFa = 'امکانات مدرسه باران دانش ۲';
    titleEn = 'Baran Danesh School Facilities 2';
    subtitleFa = 'کلاس های تعاملی، ازمایشگاه، فضای پویا و حیاط مدرسه';
    subtitleEn = 'Interactive classrooms, laboratory, dynamic environment and school courtyard at Branch 2';
  }

  return (
    <section
      id="facilities-section"
      className="py-16 lg:py-24 scroll-mt-28 bg-slate-50/60 dark:bg-[#080d20] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
            {isFa ? 'امکانات' : 'Facilities'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {isFa ? titleFa : titleEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {isFa ? subtitleFa : subtitleEn}
          </p>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div className="relative bg-white dark:bg-[#0f172a] rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-200/80 dark:border-pink-900/30 overflow-hidden h-full flex flex-col justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[580px]">
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[560px] rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                {facilities.map((facility, idx) => (
                  <img
                    key={facility.id}
                    src={facility.imageUrl}
                    alt={isFa ? facility.titleFa : facility.titleEn}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      idx === activeIdx
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 h-full">
              {facilities.map((facility, idx) => {
                const IconComp = iconMap[facility.iconName] || Sparkles;
                const isActive = idx === activeIdx;

                return (
                  <div
                    key={facility.id}
                    onClick={() => selectCard(idx)}
                    onMouseEnter={() => selectCard(idx)}
                    className={`p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden select-none ${
                      isActive
                        ? 'bg-white dark:bg-[#0f172a] border-pink-500 shadow-xl shadow-pink-500/10 ring-2 ring-pink-500/25 scale-[1.01] z-10'
                        : 'bg-white/85 dark:bg-[#0A1128]/70 border-slate-200/90 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-800/80 hover:bg-white dark:hover:bg-[#0f172a]/60'
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                  >
                    <div>
                      {/* Header: Icon beside Title */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div
                          className={`p-2 rounded-xl transition-colors shrink-0 ${
                            isActive
                              ? 'bg-pink-600 text-white shadow-md shadow-pink-600/30'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive
                              ? 'text-pink-600 dark:text-pink-400'
                              : 'text-slate-900 dark:text-white'
                          }`}
                        >
                          {isFa ? facility.titleFa : facility.titleEn}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {isFa ? facility.descFa : facility.descEn}
                      </p>
                    </div>

                    <div className="mt-3.5 w-full bg-slate-100 dark:bg-slate-800/90 h-1.5 rounded-full overflow-hidden">
                      <div
                        ref={(el) => {
                          progressBarsRef.current[idx] = el;
                        }}
                        className={`h-full rounded-full transition-opacity duration-200 ${
                          isActive
                            ? 'bg-pink-500 shadow-xs shadow-pink-500/50 opacity-100'
                            : 'bg-transparent opacity-0'
                        }`}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};