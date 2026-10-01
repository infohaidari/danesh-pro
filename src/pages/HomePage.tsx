import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { NewsSection } from '../components/NewsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. HeroSlider */}
      <HeroSlider />

      {/* 2. News & Announcements */}
      <NewsSection />
    </div>
  );
};