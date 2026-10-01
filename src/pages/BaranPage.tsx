import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { useApp } from '../context/AppContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const BaranPage: React.FC = () => {
  const { language, navigateTo } = useApp();
  const isFa = language === 'fa';
  const BackIcon = isFa ? ArrowRight : ArrowLeft;

  const handleBack = () => {
    navigateTo('home');
  };

  return (
    <div className="w-full">
      {/* Top Bar with Back to Previous Page Button */}
      <div className="w-full bg-slate-900 border-b border-slate-800 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors cursor-pointer"
          >
            <BackIcon className="w-4 h-4" />
            <span>
              {isFa ? 'بازگشت به صفحه قبل' : 'Back to Previous Page'}
            </span>
          </button>
        </div>
      </div>

      {/* Baran Danesh dedicated HeroSlider with 2 buttons: Preschool and Elementary */}
      <HeroSlider variant="baran" />
    </div>
  );
};