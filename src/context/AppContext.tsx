import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, PageId, ThemeMode } from '../types';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  navigateTo: (page: PageId, targetSectionId?: string) => void;
  selectedBaranBranch: 1 | 2;
  setSelectedBaranBranch: (branch: 1 | 2) => void;
  isPortalOpen: boolean;
  openPortal: () => void;
  closePortal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fa');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedBaranBranch, setSelectedBaranBranch] = useState<1 | 2>(1);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navigateTo = (page: PageId, targetSectionId?: string) => {
    if (page === 'baran-branch-1') {
      setSelectedBaranBranch(1);
    } else if (page === 'baran-branch-2') {
      setSelectedBaranBranch(2);
    }
    setActivePage(page);

    if (!targetSectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const scrollToTarget = () => {
      const el = document.getElementById(targetSectionId);
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: Math.max(0, elementPosition - navOffset),
          behavior: 'smooth',
        });
      }
    };

    scrollToTarget();
    setTimeout(scrollToTarget, 60);
    setTimeout(scrollToTarget, 200);
  };

  const openPortal = () => setIsPortalOpen(true);
  const closePortal = () => setIsPortalOpen(false);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        themeMode,
        setThemeMode,
        toggleThemeMode,
        activePage,
        setActivePage,
        navigateTo,
        selectedBaranBranch,
        setSelectedBaranBranch,
        isPortalOpen,
        openPortal,
        closePortal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};