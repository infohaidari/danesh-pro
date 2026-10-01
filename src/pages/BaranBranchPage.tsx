import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { AboutSection } from '../components/AboutSection';
import { FaqSection } from '../components/FaqSection';
import { useApp } from '../context/AppContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface BaranBranchPageProps {
  branchNumber: 1 | 2;
}

export const BaranBranchPage: React.FC<BaranBranchPageProps> = ({ branchNumber }) => {
  const { language, navigateTo } = useApp();
  const isFa = language === 'fa';
  const BackIcon = isFa ? ArrowRight : ArrowLeft;

  return (
    <div className="w-full">
      {/* Back button banner */}
      <div className="bg-slate-900 border-b border-white/10 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <button
            type="button"
            onClick={() => navigateTo('baran')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
          >
            <BackIcon className="w-4 h-4" />
            <span>
              {isFa ? 'بازگشت به انتخاب شعب باران دانش' : 'Back to Baran Danesh Branches'}
            </span>
          </button>
        </div>
      </div>

      {/* 1. HeroSlider with 2 buttons: Preschool and Elementary */}
      <HeroSlider variant={branchNumber === 1 ? 'baran-branch-1' : 'baran-branch-2'} />

      {/* 2. School Facilities Section */}
      <FacilitiesSection branchNumber={branchNumber} />

      {/* 3. About Us Section */}
      <AboutSection branchNumber={branchNumber} />

      {/* 4. Frequently Asked Questionsh */}
      <FaqSection branchNumber={branchNumber} />
    </div>
  );
};