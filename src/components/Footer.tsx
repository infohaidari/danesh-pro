import React from 'react';
import { useApp } from '../context/AppContext';
import { SchoolLogo } from './SchoolLogo';

export const Footer: React.FC = () => {
  const { language, navigateTo, activePage, selectedBaranBranch } = useApp();
  const isFa = language === 'fa';

  const isNegin =
    activePage === 'negin' ||
    activePage === 'middle' ||
    activePage === 'high' ||
    activePage === 'vocational';

  const isBranchOrNeginPage =
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'preschool' ||
    activePage === 'elementary' ||
    isNegin;

  const targetBranchOrNeginPage =
    activePage === 'baran-branch-1'
      ? 'baran-branch-1'
      : activePage === 'baran-branch-2'
      ? 'baran-branch-2'
      : activePage === 'preschool' || activePage === 'elementary'
      ? (selectedBaranBranch === 2 ? 'baran-branch-2' : 'baran-branch-1')
      : 'negin';

  const footerLinks = isBranchOrNeginPage
    ? [
        { id: 'home', labelFa: 'خانه', labelEn: 'Home', action: () => navigateTo('home') },
        { id: 'facilities', labelFa: 'امکانات مدرسه', labelEn: 'School Facilities', action: () => navigateTo(targetBranchOrNeginPage, 'facilities-section') },
        { id: 'about', labelFa: 'درباره ما', labelEn: 'About Us', action: () => navigateTo(targetBranchOrNeginPage, 'about-section') },
        { id: 'news', labelFa: 'اخبار', labelEn: 'News', action: () => navigateTo('home', 'news-section') },
        { id: 'contact', labelFa: 'تماس با ما', labelEn: 'Contact Us', action: () => navigateTo('contact') },
      ]
    : [
        { id: 'home', labelFa: 'خانه', labelEn: 'Home', action: () => navigateTo('home') },
        { id: 'news', labelFa: 'اخبار', labelEn: 'News', action: () => navigateTo('home', 'news-section') },
        { id: 'contact', labelFa: 'تماس با ما', labelEn: 'Contact Us', action: () => navigateTo('contact') },
      ];

  const isBaranOnly =
    activePage === 'baran' ||
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'preschool' ||
    activePage === 'elementary';

  const isBranch1 =
    activePage === 'baran-branch-1' ||
    ((activePage === 'preschool' || activePage === 'elementary') && selectedBaranBranch === 1);

  const isBranch2 =
    activePage === 'baran-branch-2' ||
    ((activePage === 'preschool' || activePage === 'elementary') && selectedBaranBranch === 2);

  const isNeginOnly =
    activePage === 'negin' ||
    activePage === 'middle' ||
    activePage === 'high' ||
    activePage === 'vocational';
  const isHomeOrContact = activePage === 'home' || activePage === 'contact';

  return (
    <footer className="w-full border-t transition-colors duration-300 bg-white text-slate-900 border-pink-100 dark:bg-[#0A1128] dark:text-white dark:border-pink-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Responsive layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 select-none shrink-0 pointer-events-none">
            {isHomeOrContact || isBaranOnly ? (
              <>
                <SchoolLogo variant="baran" size={46} />
                <div className="flex flex-col text-right">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-pink-600 dark:text-pink-400">
                    {isBranch1
                      ? (isFa ? 'مدرسه غیردولتی باران دانش ۱' : 'Baran Danesh School 1')
                      : isBranch2
                      ? (isFa ? 'مدرسه غیردولتی باران دانش ۲' : 'Baran Danesh School 2')
                      : (isFa ? 'مدرسه غیردولتی باران دانش' : 'Baran Danesh School')}
                  </span>
                </div>
              </>
            ) : (
              <>
                <SchoolLogo variant="negin" size={46} />
                <div className="flex flex-col text-right">
                  <span className="text-base sm:text-lg font-bold tracking-tight text-pink-600 dark:text-pink-400">
                    {isFa ? 'مدرسه غیردولتی نگین دانش' : 'Negin Danesh School'}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Center */}
          <div className="flex-1 flex justify-center items-center">
            <nav className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-1 sm:gap-2 md:gap-3">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={link.action}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-pink-600 hover:bg-pink-50/70 dark:text-slate-200 dark:hover:text-pink-300 dark:hover:bg-pink-950/20 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {isFa ? link.labelFa : link.labelEn}
                </button>
              ))}
            </nav>
          </div>

          {isHomeOrContact ? (
            <div className="flex items-center gap-3 shrink-0 select-none pointer-events-none">
              <SchoolLogo variant="negin" size={46} />
              <div className="text-right rtl:text-right ltr:text-left">
                <span className="text-base sm:text-lg font-bold text-pink-600 dark:text-pink-400 whitespace-nowrap">
                  {isFa ? 'مدرسه غیردولتی نگین دانش' : 'Negin Danesh School'}
                </span>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block w-[220px] shrink-0 pointer-events-none" />
          )}
        </div>

        {/* Bottom (under footer): Copyright Text */}
        <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-center">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
            {isFa
              ? isBaranOnly
                ? 'کلیه حقوق مادی و معنوی متعلق به مدرسه غیردولتی باران دانش می‌باشد.'
                : isNeginOnly
                ? 'کلیه حقوق مادی و معنوی متعلق به مدرسه غیردولتی نگین دانش می‌باشد.'
                : 'کلیه حقوق مادی و معنوی متعلق به مدارس غیردولتی نگین دانش و باران دانش می‌باشد.'
              : isBaranOnly
              ? 'All rights reserved for Baran Danesh Non-Profit School © 2026.'
              : isNeginOnly
              ? 'All rights reserved for Negin Danesh Non-Profit School © 2026.'
              : 'All rights reserved for Negin Danesh & Baran Danesh Non-Profit Schools © 2026.'}
          </p>
        </div>
      </div>
    </footer>
  );
};