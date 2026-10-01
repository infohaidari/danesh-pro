import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, BookOpen, GraduationCap, Compass, Palette } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HERO_SLIDES_HOME, HERO_SLIDES_BARAN, HERO_SLIDES_BARAN_BRANCH_1, HERO_SLIDES_BARAN_BRANCH_2, HERO_SLIDES_NEGIN } from '../data/schoolData';
import { PageId } from '../types';

export interface HeroSliderProps {
  variant?: 'home' | 'baran' | 'baran-branch-1' | 'baran-branch-2' | 'negin';
  titleFa?: string;
  titleEn?: string;
  subtitleFa?: string;
  subtitleEn?: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  variant = 'home',
  titleFa,
  titleEn,
  subtitleFa,
  subtitleEn,
}) => {
  const { language, navigateTo, setSelectedBaranBranch } = useApp();
  const isFa = language === 'fa';

  const slides =
    variant === 'baran'
      ? HERO_SLIDES_BARAN
      : variant === 'baran-branch-1'
      ? HERO_SLIDES_BARAN_BRANCH_1
      : variant === 'baran-branch-2'
      ? HERO_SLIDES_BARAN_BRANCH_2
      : variant === 'negin'
      ? HERO_SLIDES_NEGIN
      : HERO_SLIDES_HOME;

  const [currentSlide, setCurrentSlide] = useState(0);

  const progressRef = useRef<HTMLDivElement>(null);
  const slideStartTimeRef = useRef<number>(performance.now());
  const currentSlideRef = useRef<number>(0);
  const slidesRef = useRef(slides);
  slidesRef.current = slides;
  const reqIdRef = useRef<number>(0);

  const SLIDE_DURATION = 7000;

  currentSlideRef.current = currentSlide;

  const goToSlide = (newIndex: number) => {
    setCurrentSlide(newIndex);
    currentSlideRef.current = newIndex;
    slideStartTimeRef.current = performance.now();
    if (progressRef.current) {
      progressRef.current.style.width = '0%';
    }
  };

  // Reset slide index when variant changes
  useEffect(() => {
    goToSlide(0);
  }, [variant]);

  const nextSlide = () => {
    goToSlide((currentSlideRef.current + 1) % slidesRef.current.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlideRef.current - 1 + slidesRef.current.length) % slidesRef.current.length);
  };

  useEffect(() => {
    slideStartTimeRef.current = performance.now();
    let lastTime = performance.now();

    const animate = (now: number) => {
      if (now - lastTime > 1000) {
        slideStartTimeRef.current = now;
      }
      lastTime = now;

      const elapsed = now - slideStartTimeRef.current;
      const progressPercent = Math.min(100, (elapsed / SLIDE_DURATION) * 100);

      if (progressRef.current) {
        progressRef.current.style.width = `${progressPercent}%`;
      }

      if (elapsed >= SLIDE_DURATION) {
        slideStartTimeRef.current = now;
        if (progressRef.current) {
          progressRef.current.style.width = '0%';
        }
        const nextIdx = (currentSlideRef.current + 1) % slidesRef.current.length;
        currentSlideRef.current = nextIdx;
        setCurrentSlide(nextIdx);
      }

      reqIdRef.current = requestAnimationFrame(animate);
    };

    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  const handleLeftButtonClick = () => {
    if (isFa) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const handleRightButtonClick = () => {
    if (isFa) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  let activeButtons: {
    id: PageId;
    nameFa: string;
    nameEn: string;
    icon: React.ElementType;
    btnClass: string;
  }[] = [];

  let gridClass = 'grid grid-cols-2 max-w-lg mx-auto gap-3 sm:gap-4';

  let heroTitleFa = titleFa;
  let heroTitleEn = titleEn;
  let heroSubtitleFa = subtitleFa;
  let heroSubtitleEn = subtitleEn;

  if (variant === 'baran') {
    // باران دانش: ۲ دکمه شعبه ۱ و شعبه ۲
    heroTitleFa = heroTitleFa || 'مدرسه باران دانش';
    heroTitleEn = heroTitleEn || 'Baran Danesh School';
    heroSubtitleFa =
      heroSubtitleFa ||
      'لطفاً شعبه مورد نظر خود را جهت مشاهده دوره‌های آموزشی پیش‌دبستانی و دبستان انتخاب نمایید';
    heroSubtitleEn =
      heroSubtitleEn ||
      'Please select your desired branch to explore Preschool and Elementary educational programs';

    activeButtons = [
      {
        id: 'baran-branch-1',
        nameFa: 'شعبه ۱',
        nameEn: 'Branch 1',
        icon: Sparkles,
        btnClass:
          'bg-gradient-to-r from-pink-300 via-pink-200 to-rose-300 hover:from-pink-200 hover:to-rose-200 text-pink-950 font-black text-sm sm:text-base border-2 border-pink-300/80 shadow-xl shadow-pink-300/30 py-3.5 sm:py-4 px-6',
      },
      {
        id: 'baran-branch-2',
        nameFa: 'شعبه ۲',
        nameEn: 'Branch 2',
        icon: Compass,
        btnClass:
          'bg-gradient-to-r from-pink-700 via-pink-600 to-rose-700 hover:from-pink-600 hover:to-rose-600 text-white font-black text-sm sm:text-base border-2 border-pink-400 shadow-xl shadow-pink-600/35 py-3.5 sm:py-4 px-6',
      },
    ];
    gridClass = 'grid grid-cols-2 max-w-md mx-auto gap-4 sm:gap-6';
  } else if (variant === 'baran-branch-1' || variant === 'baran-branch-2') {
    // شعب باران دانش: ۲ دکمه پیش‌دبستانی و دبستان
    const isBranch1 = variant === 'baran-branch-1';
    heroTitleFa =
      heroTitleFa || (isBranch1 ? 'مدرسه باران دانش ۱' : 'مدرسه باران دانش ۲');
    heroTitleEn =
      heroTitleEn ||
      (isBranch1 ? 'Baran Danesh School 1' : 'Baran Danesh School 2');
    heroSubtitleFa =
      heroSubtitleFa ||
      (isBranch1
        ? 'دوره‌های آموزشی هوشمند پیش‌دبستانی و دبستان شعبه ۱ با استانداردهای نوین آموزشی'
        : 'دوره‌های آموزشی هوشمند پیش‌دبستانی و دبستان شعبه ۲ با کادر مجرب و فضای پویا');
    heroSubtitleEn =
      heroSubtitleEn ||
      (isBranch1
        ? 'Smart Preschool and Elementary Educational Programs at Branch 1'
        : 'Smart Preschool and Elementary Educational Programs at Branch 2');

    activeButtons = [
      {
        id: 'preschool',
        nameFa: 'پیش‌دبستانی',
        nameEn: 'Preschool',
        icon: Sparkles,
        btnClass:
          'bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold border border-lime-300 shadow-md shadow-lime-500/25 text-sm sm:text-base py-3 sm:py-3.5',
      },
      {
        id: 'elementary',
        nameFa: 'دبستان',
        nameEn: 'Elementary',
        icon: BookOpen,
        btnClass:
          'bg-red-600 hover:bg-red-500 text-white font-bold border border-red-400 shadow-md shadow-red-600/25 text-sm sm:text-base py-3 sm:py-3.5',
      },
    ];
    gridClass = 'grid grid-cols-2 max-w-md mx-auto gap-3.5 sm:gap-5';
  } else if (variant === 'negin') {
    // نگین دانش: متوسطه اول، متوسطه دوم، هنرستان
    heroTitleFa = heroTitleFa || 'مدرسه نگین دانش';
    heroTitleEn = heroTitleEn || 'Negin Danesh School';
    heroSubtitleFa =
      heroSubtitleFa ||
      'تخصصی‌ترین دوره‌های متوسطه اول، متوسطه دوم و هنرستان فنی با امکانات آزمایشگاهی و کارگاهی پیشرفته';
    heroSubtitleEn =
      heroSubtitleEn ||
      'Specialized Middle School, High School, and Vocational Academy with advanced labs';

    activeButtons = [
      {
        id: 'middle',
        nameFa: 'متوسطه اول',
        nameEn: 'Middle School',
        icon: Compass,
        btnClass:
          'bg-emerald-700 hover:bg-emerald-600 text-white font-bold border border-emerald-500 shadow-md shadow-emerald-700/25 text-xs sm:text-sm py-3 sm:py-3.5',
      },
      {
        id: 'high',
        nameFa: 'متوسطه دوم',
        nameEn: 'High School',
        icon: GraduationCap,
        btnClass:
          'bg-purple-600 hover:bg-purple-500 text-white font-bold border border-purple-400 shadow-md shadow-purple-600/25 text-xs sm:text-sm py-3 sm:py-3.5',
      },
      {
        id: 'vocational',
        nameFa: 'هنرستان',
        nameEn: 'Vocational',
        icon: Palette,
        btnClass:
          'bg-orange-600 hover:bg-orange-500 text-white font-bold border border-orange-400 shadow-md shadow-orange-600/25 text-xs sm:text-sm py-3 sm:py-3.5',
      },
    ];
    gridClass = 'grid grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto gap-3 sm:gap-4';
  } else {
    // صفحه اصلی: = باران دانش و نگین دانش
    heroTitleFa = heroTitleFa || 'خوش آمدید';
    heroTitleEn = heroTitleEn || 'Welcome';
    heroSubtitleFa =
      heroSubtitleFa ||
      'تجربه‌ای پایدار، با کیفیت و تعاملی برای آموزش و برگزاری جلسات آنلاین بسازید.';
    heroSubtitleEn =
      heroSubtitleEn ||
      'Build a stable, high-quality, and interactive experience for education and online sessions.';

    activeButtons = [
      {
        id: 'baran',
        nameFa: 'باران دانش',
        nameEn: 'Baran Danesh',
        icon: Sparkles,
        btnClass:
          'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base border border-pink-400/40 shadow-xl shadow-pink-600/25 py-3.5 sm:py-4 px-6',
      },
      {
        id: 'negin',
        nameFa: 'نگین دانش',
        nameEn: 'Negin Danesh',
        icon: GraduationCap,
        btnClass:
          'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base border border-pink-400/40 shadow-xl shadow-pink-600/25 py-3.5 sm:py-4 px-6',
      },
    ];
    gridClass = 'grid grid-cols-2 max-w-md mx-auto gap-4 sm:gap-6';
  }

  return (
    <section
      id="hero-slider-section"
      className="relative w-full flex flex-col justify-between overflow-hidden bg-slate-950 min-h-[560px] sm:min-h-[620px] lg:min-h-[calc(100vh-5rem)]"
      aria-label="School Slideshow"
    >
      {/* Background Images Auto-Slider */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 pointer-events-auto z-0' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={isFa ? slide.titleFa : slide.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-10" />

      {/* Prev / Next Navigation Arrows */}
      <button
        type="button"
        onClick={handleRightButtonClick}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs border border-white/20 transition-all hover:scale-105 cursor-pointer"
        aria-label={isFa ? 'عکس قبلی' : 'Next slide'}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={handleLeftButtonClick}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs border border-white/20 transition-all hover:scale-105 cursor-pointer"
        aria-label={isFa ? 'عکس بعدی' : 'Previous slide'}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Top / Center Area */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-12 sm:pt-16 pb-3 sm:pb-4">
        <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
          {/* Large Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-xl leading-tight">
            {isFa ? heroTitleFa : heroTitleEn}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-slate-100 font-normal leading-relaxed drop-shadow-md mx-auto ${
              variant === 'negin' || variant === 'baran'
                ? 'whitespace-nowrap max-w-full overflow-hidden text-ellipsis text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xl px-2'
                : 'max-w-3xl text-xs sm:text-sm md:text-base lg:text-xl'
            }`}
          >
            {isFa ? heroSubtitleFa : heroSubtitleEn}
          </p>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-28">
        <div className={gridClass}>
          {activeButtons.map((btn) => {
            const IconComp = btn.icon;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => {
                  if (variant === 'baran-branch-1') {
                    setSelectedBaranBranch(1);
                  } else if (variant === 'baran-branch-2') {
                    setSelectedBaranBranch(2);
                  }
                  navigateTo(btn.id);
                }}
                className={`flex items-center justify-center gap-2 rounded-xl tracking-tight transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 cursor-pointer ${btn.btnClass}`}
              >
                <IconComp className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">{isFa ? btn.nameFa : btn.nameEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Pink Progress Line */}
      <div
        dir={isFa ? 'rtl' : 'ltr'}
        className="absolute bottom-0 inset-x-0 w-full h-1 sm:h-1.5 z-40 bg-white/15 backdrop-blur-xs overflow-hidden pointer-events-none"
      >
        <div
          ref={progressRef}
          className="h-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.95)]"
          style={{ width: '0%' }}
        />
      </div>
    </section>
  );
};