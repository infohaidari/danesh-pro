import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Sun, Moon, LogIn, Menu, X, ChevronDown, Sparkles, BookOpen, Compass, GraduationCap, Palette } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SchoolLogo } from './SchoolLogo';
import { IranFlag, UkFlag } from './FlagIcons';

export const Navbar: React.FC = () => {
  const {
    language,
    toggleLanguage,
    themeMode,
    toggleThemeMode,
    navigateTo,
    activePage,
    selectedBaranBranch,
    openPortal,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalDropdownOpen, setPortalDropdownOpen] = useState(false);
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);
  const isHeroPage =
    activePage === 'home' ||
    activePage === 'baran' ||
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'negin';
  const [isOnHero, setIsOnHero] = useState(isHeroPage);
  const portalDropdownRef = useRef<HTMLDivElement>(null);

  const isFa = language === 'fa';

  const isBaran =
    activePage === 'baran' ||
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'preschool' ||
    activePage === 'elementary';

  const isNegin =
    activePage === 'negin' ||
    activePage === 'middle' ||
    activePage === 'high' ||
    activePage === 'vocational';

  const isHomeOrContact = activePage === 'home' || activePage === 'contact';

  const isBranch1 =
    activePage === 'baran-branch-1' ||
    ((activePage === 'preschool' || activePage === 'elementary') && selectedBaranBranch === 1);

  const isBranch2 =
    activePage === 'baran-branch-2' ||
    ((activePage === 'preschool' || activePage === 'elementary') && selectedBaranBranch === 2);

  const isBaranBranch =
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'preschool' ||
    activePage === 'elementary';

  const isCenterIconsPage =
    activePage === 'home' || activePage === 'contact' || activePage === 'baran';

  const showPortalButton =
    activePage === 'baran-branch-1' ||
    activePage === 'baran-branch-2' ||
    activePage === 'preschool' ||
    activePage === 'elementary' ||
    isNegin;

  const currentPortalButtons = useMemo(() => {
    if (isNegin) {
      return [
        {
          id: 'middle-panel',
          nameFa: 'پنل متوسطه اول',
          nameEn: 'Middle School Panel',
          url: 'https://portal.maktabsoft.ir/96028743',
          icon: Compass,
          btnClass:
            'bg-emerald-700 hover:bg-emerald-600 text-white font-bold border border-emerald-500 shadow-md shadow-emerald-700/20',
        },
        {
          id: 'high-panel',
          nameFa: 'پنل متوسطه دوم',
          nameEn: 'High School Panel',
          url: 'https://p3.maktabsoft.ir/96011729',
          icon: GraduationCap,
          btnClass:
            'bg-purple-600 hover:bg-purple-500 text-white font-bold border border-purple-400 shadow-md shadow-purple-600/20',
        },
        {
          id: 'vocational-panel',
          nameFa: 'پنل هنرستان',
          nameEn: 'Vocational Panel',
          url: 'https://portal.maktabsoft.ir/40975404',
          icon: Palette,
          btnClass:
            'bg-orange-600 hover:bg-orange-500 text-white font-bold border border-orange-400 shadow-md shadow-orange-600/20',
        },
      ];
    }
    return [];
  }, [isNegin]);

  const baranPortalUrl = isBranch2
    ? 'https://portal.maktabsoft.ir/960864382'
    : 'https://portal.maktabsoft.ir/95120155';

  const directPortalUrl = isBaranBranch
    ? baranPortalUrl
    : activePage === 'middle'
    ? 'https://portal.maktabsoft.ir/96028743'
    : activePage === 'high'
    ? 'https://p3.maktabsoft.ir/96011729'
    : activePage === 'vocational'
    ? 'https://portal.maktabsoft.ir/40975404'
    : null;

  const handlePortalButtonClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setPortalDropdownOpen(false);
    setMobilePortalOpen(false);
    openPortal();
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        portalDropdownRef.current &&
        !portalDropdownRef.current.contains(event.target as Node)
      ) {
        setPortalDropdownOpen(false);
      }
    };
    if (portalDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [portalDropdownOpen]);

  useEffect(() => {
    const isHeroPageNow =
      activePage === 'home' ||
      activePage === 'baran' ||
      activePage === 'baran-branch-1' ||
      activePage === 'baran-branch-2' ||
      activePage === 'negin';
    if (!isHeroPageNow) {
      setIsOnHero(false);
      return;
    }

    const checkHeroVisibility = () => {
      const heroEl = document.getElementById('hero-slider-section');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setIsOnHero(rect.bottom > 80);
      } else {
        setIsOnHero(window.scrollY < 480);
      }
    };

    checkHeroVisibility();
    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkHeroVisibility);
  }, [activePage]);

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

  const navLinks = isBranchOrNeginPage
    ? [
        {
          id: 'home',
          labelFa: 'خانه',
          labelEn: 'Home',
          action: () => {
            navigateTo('home');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'facilities',
          labelFa: 'امکانات مدرسه',
          labelEn: 'School Facilities',
          action: () => {
            navigateTo(targetBranchOrNeginPage, 'facilities-section');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'about',
          labelFa: 'درباره ما',
          labelEn: 'About Us',
          action: () => {
            navigateTo(targetBranchOrNeginPage, 'about-section');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'news',
          labelFa: 'اخبار',
          labelEn: 'News',
          action: () => {
            navigateTo('home', 'news-section');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'contact',
          labelFa: 'تماس با ما',
          labelEn: 'Contact Us',
          action: () => {
            navigateTo('contact');
            setMobileMenuOpen(false);
          },
        },
      ]
    : [
        {
          id: 'home',
          labelFa: 'خانه',
          labelEn: 'Home',
          action: () => {
            navigateTo('home');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'news',
          labelFa: 'اخبار',
          labelEn: 'News',
          action: () => {
            navigateTo('home', 'news-section');
            setMobileMenuOpen(false);
          },
        },
        {
          id: 'contact',
          labelFa: 'تماس با ما',
          labelEn: 'Contact Us',
          action: () => {
            navigateTo('contact');
            setMobileMenuOpen(false);
          },
        },
      ];

  const renderThemeButton = (extraClass = '') => (
    <button
      type="button"
      onClick={toggleThemeMode}
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
        isOnHero
          ? 'border-white/20 text-white hover:border-pink-400 hover:bg-white/10'
          : 'border-slate-200 text-slate-700 hover:text-pink-600 hover:border-pink-300 hover:bg-pink-50/50 dark:border-slate-800 dark:text-slate-300 dark:hover:text-pink-400 dark:hover:border-pink-900/50 dark:hover:bg-pink-950/30'
      } ${extraClass}`}
      title={
        themeMode === 'light'
          ? isFa
            ? 'تغییر به حالت شب (دارک مود)'
            : 'Switch to Dark Mode'
          : isFa
          ? 'تغییر به حالت روز (لایت مود)'
          : 'Switch to Light Mode'
      }
      aria-label="Toggle theme mode"
    >
      {themeMode === 'light' ? (
        <Moon className={`w-4 h-4 sm:w-5 sm:h-5 ${isOnHero ? 'text-slate-100' : 'text-slate-700'}`} />
      ) : (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
      )}
    </button>
  );

  const renderLanguageButton = (extraClass = '') => (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 p-1 sm:p-1.5 ${
        isOnHero
          ? 'border-white/20 hover:border-pink-400 hover:bg-white/10'
          : 'border-slate-200 hover:border-pink-300 hover:bg-pink-50/50 dark:border-slate-800 dark:hover:border-pink-900/50 dark:hover:bg-pink-950/30'
      } ${extraClass}`}
      title={isFa ? 'تغییر زبان به انگلیسی (English)' : 'تغییر زبان به فارسی'}
      aria-label="Toggle language"
    >
      {language === 'fa' ? <IranFlag size={20} /> : <UkFlag size={20} />}
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 border-b ${
        isOnHero
          ? 'bg-slate-950/85 text-white border-white/10 shadow-xl'
          : 'bg-white/95 text-slate-900 border-pink-100 shadow-xs dark:bg-[#0A1128]/95 dark:text-white dark:border-pink-900/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center gap-3 select-none shrink-0 pointer-events-none z-10">
            {isHomeOrContact ? (
              <>
                {/* Desktop: Baran Danesh on the right and Negin Danesh is on the opposite corner */}
                <div className="hidden md:flex items-center gap-3">
                  <SchoolLogo variant="baran" size={46} />
                  <div className="flex flex-col">
                    <span
                      className={`text-base sm:text-lg font-bold tracking-tight ${
                        isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                      }`}
                    >
                      {isFa ? 'مدرسه غیردولتی باران دانش' : 'Baran Danesh School'}
                    </span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden flex-col justify-center gap-1.5">
                  <div className="flex items-center gap-2">
                    <SchoolLogo variant="baran" size={26} />
                    <span
                      className={`text-xs font-bold tracking-tight whitespace-nowrap ${
                        isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                      }`}
                    >
                      {isFa ? 'مدرسه غیردولتی باران دانش' : 'Baran Danesh School'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <SchoolLogo variant="negin" size={26} />
                    <span
                      className={`text-xs font-bold tracking-tight whitespace-nowrap ${
                        isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                      }`}
                    >
                      {isFa ? 'مدرسه غیردولتی نگین دانش' : 'Negin Danesh School'}
                    </span>
                  </div>
                </div>
              </>
            ) : isBaran ? (
              <>
                <SchoolLogo variant="baran" size={46} />
                <div className="flex flex-col">
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                    }`}
                  >
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
                <div className="flex flex-col">
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                    }`}
                  >
                    {isFa ? 'مدرسه غیردولتی نگین دانش' : 'Negin Danesh School'}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Center */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2 z-20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isOnHero
                    ? 'text-slate-100 hover:text-pink-300 hover:bg-white/10'
                    : 'text-slate-700 hover:text-pink-600 hover:bg-pink-50/60 dark:text-slate-200 dark:hover:text-pink-300 dark:hover:bg-pink-950/20'
                }`}
              >
                {isFa ? link.labelFa : link.labelEn}
              </button>
            ))}

            {isCenterIconsPage && (
              <div className="flex items-center gap-1.5 sm:gap-2 rtl:mr-2 ltr:ml-2">
                {renderThemeButton()}
                {renderLanguageButton()}
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-10">
            {!isCenterIconsPage && (
              <>
                {renderThemeButton()}
                {renderLanguageButton()}
              </>
            )}

            {isCenterIconsPage && (
              <div className="flex lg:hidden items-center gap-1.5">
                {renderThemeButton()}
                {renderLanguageButton()}
              </div>
            )}

            {showPortalButton && (
              directPortalUrl ? (
                <a
                  href={directPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs md:text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 active:scale-95 shadow-md shadow-pink-600/25 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <LogIn className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'ورود به پنل شخصی' : 'Personal Portal'}</span>
                </a>
              ) : (
                <div className="relative hidden sm:inline-block" ref={portalDropdownRef}>
                  <button
                    type="button"
                    onClick={() => setPortalDropdownOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs md:text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 active:scale-95 shadow-md shadow-pink-600/25 transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      portalDropdownOpen ? 'ring-2 ring-pink-400 ring-offset-2 dark:ring-offset-slate-900' : ''
                    }`}
                    aria-expanded={portalDropdownOpen}
                    aria-haspopup="true"
                  >
                    <LogIn className="w-4 h-4 shrink-0" />
                    <span>{isFa ? 'ورود به پنل شخصی' : 'Personal Portal'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                        portalDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {portalDropdownOpen && (
                    <div
                      className="absolute top-full mt-2.5 rtl:left-0 rtl:right-auto ltr:right-0 ltr:left-auto w-56 sm:w-64 bg-white dark:bg-[#0A1128] rounded-2xl shadow-2xl border border-slate-200/90 dark:border-pink-900/40 p-2.5 space-y-2 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-md"
                    >
                      <div className="flex flex-col gap-2">
                        {currentPortalButtons.map((portal) => {
                          const IconComp = portal.icon;
                          return (
                            <a
                              key={portal.id}
                              href={portal.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setPortalDropdownOpen(false)}
                              className={`w-full flex items-center justify-start gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-150 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer text-right rtl:text-right ltr:text-left ${portal.btnClass}`}
                            >
                              <IconComp className="w-4 h-4 shrink-0" />
                              <span className="flex-1 whitespace-nowrap">
                                {isFa ? portal.nameFa : portal.nameEn}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}

            {isHomeOrContact && (
              <div className="hidden md:flex items-center gap-3 select-none shrink-0 pointer-events-none mr-1 sm:mr-2 rtl:mr-1 rtl:sm:mr-2 ltr:ml-1 ltr:sm:ml-2">
                <SchoolLogo variant="negin" size={46} />
                <div className="flex flex-col">
                  <span
                    className={`text-base sm:text-lg font-bold tracking-tight ${
                      isOnHero ? 'text-pink-400' : 'text-pink-600 dark:text-pink-400'
                    }`}
                  >
                    {isFa ? 'مدرسه غیردولتی نگین دانش' : 'Negin Danesh School'}
                  </span>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                isOnHero
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-slate-700 hover:text-pink-600 hover:bg-pink-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800'
              }`}
              aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منوی دکمه‌های سایت'}
              title={isFa ? 'منوی دسترسی به صفحات' : 'Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-2 ${
            isOnHero
              ? 'border-white/10 bg-slate-950 text-white'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A1128]'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={link.action}
              className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isOnHero
                  ? 'text-slate-100 hover:bg-white/10'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {isFa ? link.labelFa : link.labelEn}
            </button>
          ))}

          {/* Mobile Portal */}
          {showPortalButton && (
            <div
              className={`pt-3 border-t ${
                isOnHero ? 'border-white/10' : 'border-slate-100 dark:border-slate-800'
              }`}
            >
              {directPortalUrl ? (
                <a
                  href={directPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-sm cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{isFa ? 'ورود به پنل شخصی' : 'Personal Portal'}</span>
                </a>
              ) : (
                <>
                  {/* Mobile Portal Accordion Trigger for Negin */}
                  <button
                    type="button"
                    onClick={() => setMobilePortalOpen(!mobilePortalOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      <span>{isFa ? 'ورود به پنل شخصی' : 'Personal Portal'}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobilePortalOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Expanded Portal Buttons for Negin */}
                  {mobilePortalOpen && (
                    <div className="mt-2.5 space-y-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
                      {currentPortalButtons.map((portal) => {
                        const IconComp = portal.icon;
                        return (
                          <a
                            key={portal.id}
                            href={portal.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMobilePortalOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-start gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-tight transition-all duration-150 transform active:scale-95 cursor-pointer text-right rtl:text-right ltr:text-left ${portal.btnClass}`}
                          >
                            <IconComp className="w-4 h-4 shrink-0" />
                            <span className="flex-1 whitespace-nowrap">
                              {isFa ? portal.nameFa : portal.nameEn}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
};