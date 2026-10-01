import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRANCHES_CONTACT } from '../data/schoolData';
import { SchoolLogo } from '../components/SchoolLogo';

export const ContactPage: React.FC = () => {
  const { language } = useApp();
  const isFa = language === 'fa';

  const toPersianDigits = (str: string) => {
    const faDigits: Record<string, string> = {
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
    return str.replace(/[0-9]/g, (w) => faDigits[w] || w);
  };

  return (
    <div className="w-full py-12 lg:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
            {isFa ? 'راه‌های ارتباطی و تماس' : 'Contact & Campus Information'}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3">
            {isFa ? 'اطلاعات تماس شعب مدارس' : 'School Contacts'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3">
            {isFa
              ? 'اطلاعات شعب باران دانش ۱، باران دانش ۲ و نگین دانش را در زیر مشاهده فرمایید.'
              : 'View contact details, physical address, and hours for Baran Danesh 1, Baran Danesh 2, and Negin Danesh.'}
          </p>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Dedicated Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BRANCHES_CONTACT.map((branch) => {
            return (
              <div
                key={branch.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-pink-300 dark:hover:border-pink-900/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Card Top Header: Logo + Title */}
                  <div className="flex items-center gap-3 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                    <SchoolLogo variant={branch.logoVariant} size={44} />
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      {isFa ? branch.nameFa : branch.nameEn}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-5 pt-5">
                    {/* 1. شماره تلفن های مدرسه */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                        <div className="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span>{isFa ? 'شماره تلفن های مدرسه' : 'School Phone Numbers'}</span>
                      </div>

                      {branch.phones && branch.phones.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {branch.phones.map((phone, idx) => {
                            const formattedPhone = isFa
                              ? toPersianDigits(phone.number)
                              : phone.number;

                            return (
                              <div
                                key={idx}
                                dir="ltr"
                                className={`px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-slate-100 dark:border-slate-800/80 text-center font-bold font-mono text-sm text-pink-600 dark:text-pink-400 select-all cursor-default ${
                                  branch.phones.length % 2 !== 0 && idx === branch.phones.length - 1
                                    ? 'col-span-2'
                                    : ''
                                }`}
                              >
                                {formattedPhone}
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-dashed border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-400 dark:text-slate-500 text-center font-medium">
                          {isFa ? '—' : '—'}
                        </div>
                      )}
                    </div>

                    {/* 2. آدرس مدرسه */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                        <div className="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span>{isFa ? 'آدرس مدرسه' : 'School Address'}</span>
                      </div>

                      {branch.addressFa ? (
                        <p className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {isFa ? branch.addressFa : branch.addressEn}
                        </p>
                      ) : (
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-dashed border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-400 dark:text-slate-500 text-center font-medium">
                          {isFa ? '—' : '—'}
                        </div>
                      )}
                    </div>

                    {/* 3. ساعات کاری */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                        <div className="p-1.5 rounded-lg bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <span>{isFa ? 'ساعات کاری' : 'Working Hours'}</span>
                      </div>

                      {branch.hoursFa ? (
                        <p className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {isFa ? branch.hoursFa : branch.hoursEn}
                        </p>
                      ) : (
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0A1128] border border-dashed border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-400 dark:text-slate-500 text-center font-medium">
                          {isFa ? '—' : '—'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};