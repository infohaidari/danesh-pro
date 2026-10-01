import React, { useState } from 'react';
import { ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FAQ_DATA, BARAN_BRANCH_1_FAQS, BARAN_BRANCH_2_FAQS } from '../data/schoolData';

export interface FaqSectionProps {
  branchNumber?: 1 | 2;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ branchNumber }) => {
  const { language, navigateTo } = useApp();
  const isFa = language === 'fa';
  // All questions closed by default
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs =
    branchNumber === 1
      ? BARAN_BRANCH_1_FAQS
      : branchNumber === 2
      ? BARAN_BRANCH_2_FAQS
      : FAQ_DATA;

  const getNumLabel = (index: number) => {
    const num = index + 1;
    const formatted = num < 10 ? `0${num}` : `${num}`;
    if (!isFa) return formatted;
    const faMap: Record<string, string> = {
      '0': '۰',
      '1': '۱',
      '2': '۲',
      '3': '۳',
      '4': '۴',
      '5': '۵',
      '6': '۶',
      '7': '۷',
      '8': '۸',
      '9': '۹',
    };
    return formatted.replace(/[0-9]/g, (w) => faMap[w] || w);
  };

  let titleFa = 'سوالات پر تکرار اولیاء و دانش‌آموزان';
  let titleEn = 'Frequently Asked Questions';
  let subtitleFa = 'اطلاعات کامل در خصوص ثبت‌نام، شهریه، سرویس، آزمون‌ها و خدمات تحصیلی نگین دانش';
  let subtitleEn = 'Detailed answers on admissions, tuition, transportation, exams, and academic offerings';

  if (branchNumber === 1) {
    titleFa = 'سوالات پر تکرار مدرسه باران دانش ۱';
    titleEn = 'Frequently Asked Questions - Baran Danesh 1';
    subtitleFa = 'پاسخ به سوالات اولیای گرامی در مورد اپلیکیشن مدرسه، تکالیف، شهریه، کارنامه و حضور و غیاب ';
    subtitleEn = 'Answers regarding app features, homework, tuition, report cards, and attendance at Branch 1';
  } else if (branchNumber === 2) {
    titleFa = 'سوالات پر تکرار مدرسه باران دانش ۲';
    titleEn = 'Frequently Asked Questions - Baran Danesh 2';
    subtitleFa = 'پاسخ به پرسش‌های اولیاء پیرامون ساعات مدرسه، ارتباط با معلمان، تکالیف، لوازم‌التحریر و اطلاعیه‌ها';
    subtitleEn = 'Answers regarding school hours, teacher communication, homework, supplies, and notices at Branch 2';
  }

  return (
    <section id="faq-section" className="py-16 lg:py-24 scroll-mt-28 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
            {isFa ? 'پاسخ به ابهامات شما' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            {isFa ? titleFa : titleEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            {isFa ? subtitleFa : subtitleEn}
          </p>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            const numLabel = getNumLabel(index);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#0f172a] border-pink-300 dark:border-pink-900/60 shadow-md shadow-pink-500/5'
                    : 'bg-white/80 dark:bg-[#0A1128]/80 border-slate-200 dark:border-slate-800 hover:border-pink-200 dark:hover:border-pink-900/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-right rtl:text-right ltr:text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Number Badge beside question */}
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-pink-600 text-white shadow-xs'
                          : 'bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-pink-900/30'
                      }`}
                    >
                      {numLabel}
                    </span>

                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {isFa ? faq.questionFa : faq.questionEn}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400'
                        : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/80 mt-1">
                    <p className="pr-12 rtl:pr-12 ltr:pl-12">{isFa ? faq.answerFa : faq.answerEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Assistance Card */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-pink-500/5 border border-pink-200 dark:border-pink-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
            <MessageSquare className="w-6 h-6 text-pink-600 dark:text-pink-400 shrink-0" />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {isFa ? 'سوال دیگری دارید یا نیاز به مشاوره حضوری دارید؟' : 'Have another inquiry or need guidance?'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isFa
                  ? 'مشاوران ما در ساعات اداری مشتاقانه پاسخگوی تماس‌ها و پیام‌های شما هستند.'
                  : 'Our advisors are ready to consult with you via phone or in-person.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-sm shrink-0 cursor-pointer flex items-center gap-1.5 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{isFa ? 'ارسال پیام و تماس با ما' : 'Contact Admissions'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};