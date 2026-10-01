import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ABOUT_INFO, SCHOOL_IMAGES } from '../data/schoolData';

export const HistorySection: React.FC = () => {
  const { language } = useApp();
  const isFa = language === 'fa';

  return (
    <section id="history-section" className="py-16 lg:py-24 scroll-mt-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
            {isFa ? 'داستان شکل‌گیری و بالندگی' : 'Our Foundation & Heritage'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {isFa ? 'تاریخچه مدرسه غیردولتی نگین دانش' : 'History of Negin Danesh School'}
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={SCHOOL_IMAGES.negin1}
                  alt={isFa ? 'ساختمان و پردیس مدرسه نگین دانش' : 'Negin Danesh Campus Building'}
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
              <p>
                {isFa
                  ? 'مجتمع آموزشی غیردولتی «نگین دانش» در پاییز سال ۱۳۷۸ خورشیدی، با آرمان پایه‌ریزی یک ساختار آموزشی اخلاق‌مدار، شاداب و مجهز به دانش روز، توسط تیمی از استادان فرهیخته و مدرسین باسابقه آموزش و پرورش بنیان نهاده شد.'
                  : 'Negin Danesh Educational Complex was established in the autumn of 1999 with the vision of laying an ethical, cheerful, and vanguard pedagogical framework founded by esteemed university professors and master schoolteachers.'}
              </p>
              <p>
                {isFa
                  ? 'نگین دانش کار خود را با یک دوره ابتدایی آغاز نمود و در کمتر از یک دهه، با استقبال کم‌نظیر اولیاء و کسب پی‌درپی رتبه‌های برتر آزمون‌های علمی و المپیادها، به تمامی مقاطع تحصیلی از پیش‌دبستانی تا پایان دبیرستان و هنرستان فنی و حرفه‌ای گسترش یافت.'
                  : 'Starting with a premier elementary branch, Negin Danesh witnessed extraordinary parental trust and student accomplishments, expanding organically into a complete K-12 and vocational campus within a decade.'}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30">
                <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block">
                    {isFa ? 'آموزش پژوهش‌محور' : 'Inquiry-Based Learning'}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {isFa ? 'تأکید بر آزمایشگری و استدلال مستقل دانش‌آموز' : 'Hands-on scientific reasoning & logic'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-pink-50/50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30">
                <Users className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white block">
                    {isFa ? 'کادر اساتید ممتاز' : 'Distinguished Faculty'}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {isFa ? 'بیش از ۱۲۰ معلم و مشاور دارای مدارک عالی' : '120+ credentialed educators & mentors'}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-200/80 dark:border-slate-800">
              {ABOUT_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-xl sm:text-2xl font-black font-mono text-pink-600 dark:text-pink-400">
                    {isFa ? stat.valueFa : stat.valueEn}
                  </div>
                  <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {isFa ? stat.labelFa : stat.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};