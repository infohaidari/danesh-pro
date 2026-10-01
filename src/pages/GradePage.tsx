import React from 'react';
import { Clock, Image as ImageIcon, ArrowRight, ArrowLeft, LayoutDashboard } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GRADES_DATA, SCHOOL_IMAGES } from '../data/schoolData';

interface GradePageProps {
  gradeId: 'preschool' | 'elementary' | 'middle' | 'high' | 'vocational';
}

const preschoolBranch1Gallery = [
  SCHOOL_IMAGES.baran1,
  SCHOOL_IMAGES.baran9,
  SCHOOL_IMAGES.baran3,
  SCHOOL_IMAGES.baran18,
  SCHOOL_IMAGES.baran2,
  SCHOOL_IMAGES.negin6,
];

const preschoolBranch2Gallery = [
  SCHOOL_IMAGES.baran4,
  SCHOOL_IMAGES.baran14,
  SCHOOL_IMAGES.baran7,
  SCHOOL_IMAGES.baran20,
  SCHOOL_IMAGES.baran19,
  SCHOOL_IMAGES.baran18,
];

const elementaryBranch1Gallery = [
  SCHOOL_IMAGES.baran1,
  SCHOOL_IMAGES.baran14,
  SCHOOL_IMAGES.baran7,
  SCHOOL_IMAGES.baran16,
  SCHOOL_IMAGES.baran8,
  SCHOOL_IMAGES.baran17,
];

const elementaryBranch2Gallery = [
  SCHOOL_IMAGES.baran21,
  SCHOOL_IMAGES.baran22,
  SCHOOL_IMAGES.baran6,
  SCHOOL_IMAGES.baran23,
  SCHOOL_IMAGES.baran24,
  SCHOOL_IMAGES.baran4,
];

const middleGallery = [
  SCHOOL_IMAGES.negin4,
  SCHOOL_IMAGES.negin8,
  SCHOOL_IMAGES.negin6,
  SCHOOL_IMAGES.negin5,
  SCHOOL_IMAGES.negin2,
  SCHOOL_IMAGES.negin3,
];

const highGallery = [
  SCHOOL_IMAGES.negin11,
  SCHOOL_IMAGES.negin12,
  SCHOOL_IMAGES.negin13,
  SCHOOL_IMAGES.negin8,
  SCHOOL_IMAGES.negin9,
  SCHOOL_IMAGES.negin10,
];

const vocationalGallery = [
  SCHOOL_IMAGES.negin6,
  SCHOOL_IMAGES.negin4,
  SCHOOL_IMAGES.negin3,
  SCHOOL_IMAGES.negin1,
  SCHOOL_IMAGES.negin7,
  SCHOOL_IMAGES.negin2,
];

export const GRADE_SECTIONS_MEDIA: Record<
  string,
  {
    sideImage: string;
    gallery: string[];
  }
> = {
  preschool_branch_1: {
    sideImage: SCHOOL_IMAGES.hero3,
    gallery: preschoolBranch1Gallery,
  },

  preschool_branch_2: {
    sideImage: SCHOOL_IMAGES.hero4,
    gallery: preschoolBranch2Gallery,
  },

  elementary_branch_1: {
    sideImage: SCHOOL_IMAGES.hero3,
    gallery: elementaryBranch1Gallery,
  },

  elementary_branch_2: {
    sideImage: SCHOOL_IMAGES.hero4,
    gallery: elementaryBranch2Gallery,
  },

  middle: {
    sideImage: SCHOOL_IMAGES.hero1,
    gallery: middleGallery,
  },

  high: {
    sideImage: SCHOOL_IMAGES.hero1,
    gallery: highGallery,
  },

  vocational: {
    sideImage: SCHOOL_IMAGES.hero1,
    gallery: vocationalGallery,
  },
};

const toEnglishDigits = (str: string): string => {
  const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const arDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[۰-۹٠-٩]/g, (w) => {
    const faIndex = faDigits.indexOf(w);
    if (faIndex > -1) return String(faIndex);
    const arIndex = arDigits.indexOf(w);
    if (arIndex > -1) return String(arIndex);
    return w;
  });
};

export const GradePage: React.FC<GradePageProps> = ({ gradeId }) => {
  const { language, navigateTo, selectedBaranBranch } = useApp();
  const isFa = language === 'fa';
  const BackIcon = isFa ? ArrowRight : ArrowLeft;
  const grade = GRADES_DATA[gradeId];

  if (!grade) {
    return (
      <div className="py-24 text-center">
        <p className="text-lg">Grade not found</p>
        <button
          onClick={() => navigateTo('home')}
          className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg"
        >
          {isFa ? 'بازگشت به خانه' : 'Back to Home'}
        </button>
      </div>
    );
  }

  // Exact Theme Mapping with enhanced color halos
  const themeClasses: Record<
    string,
    {
      bannerBg: string;
      haloColor: string;
      accentText: string;
      accentBg: string;
      cardBg: string;
      borderCol: string;
      btnClass: string;
      badgeClass: string;
      tableHeadClass: string;
    }
  > = {
    preschool: {
      bannerBg: 'from-lime-400/40 via-lime-300/25 to-emerald-400/30 dark:from-lime-900/60 dark:via-lime-950/70 dark:to-emerald-950/40',
      haloColor: 'bg-lime-400/50 dark:bg-lime-500/30',
      accentText: 'text-lime-700 dark:text-lime-400',
      accentBg: 'bg-lime-500',
      cardBg: 'bg-white dark:bg-[#0f172a]',
      borderCol: 'border-lime-300 dark:border-lime-500/40',
      btnClass: 'bg-lime-500 hover:bg-lime-600 text-slate-950 font-bold shadow-lime-500/25',
      badgeClass: 'bg-lime-200/80 text-lime-950 dark:bg-lime-950/80 dark:text-lime-300',
      tableHeadClass: 'bg-lime-100/70 dark:bg-lime-950/60 text-lime-950 dark:text-lime-300',
    },
    elementary: {
      bannerBg: 'from-red-500/35 via-red-400/20 to-rose-500/30 dark:from-red-950/80 dark:via-red-900/60 dark:to-rose-950/40',
      haloColor: 'bg-red-500/45 dark:bg-red-600/30',
      accentText: 'text-red-700 dark:text-red-400',
      accentBg: 'bg-red-600',
      cardBg: 'bg-white dark:bg-[#0f172a]',
      borderCol: 'border-red-300 dark:border-red-600/40',
      btnClass: 'bg-red-600 hover:bg-red-700 text-white font-bold shadow-red-600/25',
      badgeClass: 'bg-red-200/80 text-red-950 dark:bg-red-950/80 dark:text-red-300',
      tableHeadClass: 'bg-red-100/70 dark:bg-red-950/60 text-red-950 dark:text-red-300',
    },
    middle: {
      bannerBg: 'from-emerald-600/35 via-emerald-500/20 to-teal-600/30 dark:from-emerald-950/80 dark:via-emerald-900/60 dark:to-teal-950/40',
      haloColor: 'bg-emerald-500/45 dark:bg-emerald-600/30',
      accentText: 'text-emerald-800 dark:text-emerald-400',
      accentBg: 'bg-emerald-700',
      cardBg: 'bg-white dark:bg-[#0f172a]',
      borderCol: 'border-emerald-300 dark:border-emerald-600/40',
      btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white font-bold shadow-emerald-700/25',
      badgeClass: 'bg-emerald-200/80 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-300',
      tableHeadClass: 'bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-950 dark:text-emerald-300',
    },
    high: {
      bannerBg: 'from-purple-500/35 via-purple-400/20 to-indigo-500/30 dark:from-purple-950/80 dark:via-purple-900/60 dark:to-indigo-950/40',
      haloColor: 'bg-purple-500/45 dark:bg-purple-600/30',
      accentText: 'text-purple-700 dark:text-purple-400',
      accentBg: 'bg-purple-600',
      cardBg: 'bg-white dark:bg-[#0f172a]',
      borderCol: 'border-purple-300 dark:border-purple-600/40',
      btnClass: 'bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-purple-600/25',
      badgeClass: 'bg-purple-200/80 text-purple-950 dark:bg-purple-950/80 dark:text-purple-300',
      tableHeadClass: 'bg-purple-100/70 dark:bg-purple-950/60 text-purple-950 dark:text-purple-300',
    },
    vocational: {
      bannerBg: 'from-orange-500/35 via-amber-400/20 to-orange-600/30 dark:from-orange-950/80 dark:via-orange-900/60 dark:to-amber-950/40',
      haloColor: 'bg-orange-500/45 dark:bg-orange-600/30',
      accentText: 'text-orange-700 dark:text-orange-400',
      accentBg: 'bg-orange-600',
      cardBg: 'bg-white dark:bg-[#0f172a]',
      borderCol: 'border-orange-300 dark:border-orange-600/40',
      btnClass: 'bg-orange-600 hover:bg-orange-700 text-white font-bold shadow-orange-600/25',
      badgeClass: 'bg-orange-200/80 text-orange-950 dark:bg-orange-950/80 dark:text-orange-300',
      tableHeadClass: 'bg-orange-100/70 dark:bg-orange-950/60 text-orange-950 dark:text-orange-300',
    },
  };

  const style = themeClasses[gradeId];
  const isNeginGrade = gradeId === 'middle' || gradeId === 'high' || gradeId === 'vocational';

  let panelButtonLabel = '';
  let panelButtonUrl = '';
  if (gradeId === 'middle') {
    panelButtonLabel = isFa ? 'پنل متوسطه اول' : 'Middle School Portal';
    panelButtonUrl = 'https://portal.maktabsoft.ir/96028743';
  } else if (gradeId === 'high') {
    panelButtonLabel = isFa ? 'پنل متوسطه دوم' : 'High School Portal';
    panelButtonUrl = 'https://p3.maktabsoft.ir/96011729';
  } else if (gradeId === 'vocational') {
    panelButtonLabel = isFa ? 'پنل هنرستان' : 'Vocational School Portal';
    panelButtonUrl = 'https://portal.maktabsoft.ir/40975404';
  }

  const mediaKey =
    gradeId === 'preschool'
      ? selectedBaranBranch === 2
        ? 'preschool_branch_2'
        : 'preschool_branch_1'
      : gradeId === 'elementary'
      ? selectedBaranBranch === 2
        ? 'elementary_branch_2'
        : 'elementary_branch_1'
      : gradeId;

  const mediaData = GRADE_SECTIONS_MEDIA[mediaKey] || GRADE_SECTIONS_MEDIA[gradeId];

  return (
    <div className="w-full pb-16 transition-colors">
      {/* Back button banner for Baran Danesh preschool and elementary */}
      {(gradeId === 'preschool' || gradeId === 'elementary') && (
        <div className="bg-slate-900 border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-start">
            <button
              type="button"
              onClick={() =>
                navigateTo(selectedBaranBranch === 2 ? 'baran-branch-2' : 'baran-branch-1')
              }
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
            >
              <BackIcon className="w-4 h-4" />
              <span>
                {isFa
                  ? `بازگشت به شعبه ${selectedBaranBranch === 2 ? '۲' : '۱'} باران دانش`
                  : `Back to Baran Danesh Branch ${selectedBaranBranch === 2 ? '2' : '1'}`}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Back button banner for Negin Danesh middle, high, vocational */}
      {(gradeId === 'middle' || gradeId === 'high' || gradeId === 'vocational') && (
        <div className="bg-slate-900 border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-start">
            <button
              type="button"
              onClick={() => navigateTo('negin')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
            >
              <BackIcon className="w-4 h-4" />
              <span>
                {isFa ? 'بازگشت به مقاطع نگین دانش' : 'Back to Negin Danesh Grades'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* 1. Grade Description Banner */}
      <div
        className={`relative w-full py-10 lg:py-14 bg-gradient-to-r ${style.bannerBg} border-b ${style.borderCol} overflow-hidden shadow-sm transition-colors`}
      >
        {/* هاله رنگ */}
        <div
          className={`absolute -top-16 right-10 w-96 h-96 rounded-full ${style.haloColor} blur-3xl pointer-events-none`}
        />
        <div
          className={`absolute -bottom-16 left-10 w-80 h-80 rounded-full ${style.haloColor} blur-2xl pointer-events-none opacity-80`}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              {isFa
                ? selectedBaranBranch && (gradeId === 'preschool' || gradeId === 'elementary')
                  ? gradeId === 'preschool'
                    ? `پیش دبستانی باران دانش ${selectedBaranBranch === 2 ? '۲' : '۱'}`
                    : `دبستان باران دانش ${selectedBaranBranch === 2 ? '۲' : '۱'}`
                  : grade.titleFa
                : selectedBaranBranch && (gradeId === 'preschool' || gradeId === 'elementary')
                  ? gradeId === 'preschool'
                    ? `Baran Danesh Preschool ${selectedBaranBranch === 2 ? '2' : '1'}`
                    : `Baran Danesh Elementary School ${selectedBaranBranch === 2 ? '2' : '1'}`
                  : grade.titleEn}
            </h1>

            {panelButtonLabel && panelButtonUrl && (
              <a
                href={panelButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm md:text-base shadow-md transition-all duration-300 cursor-pointer shrink-0 ${style.btnClass} hover:opacity-95 hover:shadow-lg active:scale-[0.98]`}
              >
                <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{panelButtonLabel}</span>
              </a>
            )}
          </div>

          <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 font-semibold leading-relaxed max-w-4xl">
            {isFa ? grade.subtitleFa : grade.subtitleEn}
          </p>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className={`p-2.5 rounded-xl ${style.badgeClass}`}>
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {isFa ? 'برنامه زمان‌بندی روزانه' : 'Daily Schedule & Timetable'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Daily Schedule Box */}
            <div className="lg:col-span-7 flex flex-col">
              <div className={`rounded-2xl border overflow-hidden ${style.cardBg} ${style.borderCol} shadow-sm flex-1 flex flex-col`}>
                <div className="overflow-x-auto w-full flex-1">
                  <table className="w-full text-right rtl:text-right ltr:text-left text-xs sm:text-sm">
                    <thead className={`border-b ${style.tableHeadClass} ${style.borderCol}`}>
                      <tr>
                        <th className="py-3.5 px-5 font-bold w-[38%] sm:w-[34%]">{isFa ? 'ساعت' : 'Time'}</th>
                        <th className="py-3.5 px-6 sm:px-10 font-bold w-[62%] sm:w-[66%]">{isFa ? 'عنوان فعالیت' : 'Activity'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                      {grade.schedule.map((item, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <td className="py-3.5 px-5 font-mono font-bold whitespace-nowrap text-slate-700 dark:text-slate-300">
                            {isFa ? item.time : (item.timeEn || toEnglishDigits(item.time))}
                          </td>
                          <td className="py-3.5 px-6 sm:px-10 font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                            {isFa ? item.activityFa : item.activityEn}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Left Side Photo */}
            <div className="lg:col-span-5 flex flex-col">
              <div className={`rounded-2xl overflow-hidden border ${style.borderCol} ${style.cardBg} shadow-sm flex-1 relative min-h-[300px] lg:min-h-0 group`}>
                <img
                  src={mediaData.sideImage}
                  alt={isFa ? 'محیط مقطع' : 'Grade environment'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Section below Daily Schedule */}
        <div className="space-y-6 pt-2">
          {/* تصاویر و محیط این مقطع */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${style.cardBg} ${style.borderCol} shadow-sm flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${style.badgeClass}`}>
                <ImageIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {isFa ? 'تصاویر و محیط این مقطع' : 'Classrooms & Student Life'}
                </h2>
              </div>
            </div>
          </div>

          {/* 6 Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaData.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden border ${style.borderCol} ${style.cardBg} shadow-sm hover:shadow-md transition-all duration-300 group`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={imgSrc}
                    alt={`عکس ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};