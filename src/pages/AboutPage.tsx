import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ABOUT_INFO, SCHOOL_IMAGES } from '../data/schoolData';

export const AboutPage: React.FC = () => {
  const { language } = useApp();
  const isFa = language === 'fa';

  const values = isFa ? ABOUT_INFO.valuesFa : ABOUT_INFO.valuesEn;

  const faDigits = ['۰۱', '۰۲', '۰۳', '۰۴'];
  const enDigits = ['01', '02', '03', '04'];

  return (
    <div className="w-full pb-16 transition-colors">
      {/* 1. Full-Width Horizontal Hero Banner */}
      <div className="w-full py-12 lg:py-16 bg-gradient-to-r from-pink-500/15 via-rose-500/5 to-pink-500/10 dark:from-pink-950/40 dark:via-[#0A1128] dark:to-pink-950/30 border-b border-pink-200 dark:border-pink-900/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFa ? 'شناخت بهتر مجتمع آموزشی نگین دانش' : 'Discover Our Legacy'}</span>
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {isFa
              ? '۲۵ سال پایه‌گذاری آینده‌ای روشن برای فرزندان ایران'
              : '25 Years Building Bright Futures for Tomorrow’s Leaders'}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal max-w-4xl">
            {isFa
              ? 'نگین دانش تنها یک مدرسه نیست؛ اکوسیستمی است که در آن علم، اخلاق، خلاقیت، فناوری و هویت انسانی در پیوندی ناگسستنی رشد می‌کنند.'
              : 'Negin Danesh is an ecosystem where scientific rigor, moral integrity, innovation, and individuality thrive in balance.'}
          </p>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 space-y-16">
        {/* Founding Story & Campus Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {isFa ? 'داستان شکل‌گیری و رسالت ما' : 'Our Story & Purpose'}
            </h2>
            <div className="whitespace-pre-line space-y-4">
              <p>{isFa ? ABOUT_INFO.storyFa : ABOUT_INFO.storyEn}</p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span>{isFa ? 'مجوز رسمی درجه ۱ آموزش و پرورش' : 'Certified Grade 1 National License'}</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                <span>{isFa ? 'همراهی مستمر با خانواده‌ها' : 'Close Parental Partnership'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src={SCHOOL_IMAGES.negin1}
                alt={isFa ? 'فضای باز و پردیس نگین دانش' : 'Campus grounds'}
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Educational Philosophy */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
              {isFa ? 'رویکردهای تربیتی و آموزشی' : 'Core Principles'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-3">
              {isFa ? 'اصول چهارگانه فلسفه نگین دانش' : 'Four Pillars of Our Educational Vision'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:border-pink-300 dark:hover:border-pink-800 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-base mb-4">
                  {isFa ? faDigits[idx] : enDigits[idx]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};