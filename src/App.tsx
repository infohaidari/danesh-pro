import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PortalModal } from './components/PortalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GradePage } from './pages/GradePage';
import { BaranPage } from './pages/BaranPage';
import { BaranBranchPage } from './pages/BaranBranchPage';
import { NeginPage } from './pages/NeginPage';

const MainContent: React.FC = () => {
  const { activePage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#0A1128] dark:text-white transition-colors duration-300">
      {/* Navbar is persistent across the entire site */}
      <Navbar />

      {/* Main page view */}
      <main className="flex-1 w-full">
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'baran' && <BaranPage />}
        {activePage === 'baran-branch-1' && <BaranBranchPage branchNumber={1} />}
        {activePage === 'baran-branch-2' && <BaranBranchPage branchNumber={2} />}
        {activePage === 'negin' && <NeginPage />}
        {activePage === 'preschool' && <GradePage gradeId="preschool" />}
        {activePage === 'elementary' && <GradePage gradeId="elementary" />}
        {activePage === 'middle' && <GradePage gradeId="middle" />}
        {activePage === 'high' && <GradePage gradeId="high" />}
        {activePage === 'vocational' && <GradePage gradeId="vocational" />}
      </main>

      {/* Footer is persistent across the entire site */}
      <Footer />

      {/* Personal Portal Modal (ورود به پنل شخصی) */}
      <PortalModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}