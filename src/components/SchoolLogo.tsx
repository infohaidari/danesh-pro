import React from 'react';
import { SCHOOL_IMAGES } from '../data/schoolData';

export interface SchoolLogoProps {
  className?: string;
  size?: number;
  variant?: 'negin' | 'baran';
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 42,
  variant = 'negin',
}) => {
  const cornerRadiusClass =
    size <= 28
      ? 'rounded-[5px]'
      : size <= 36
      ? 'rounded-md'
      : 'rounded-xl';

  if (variant === 'baran') {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${cornerRadiusClass} bg-white border border-pink-300/80 dark:border-pink-800/80 shadow-md shadow-pink-500/20 overflow-hidden shrink-0 ${className}`}
        style={{ width: size, height: size, backgroundColor: '#ffffff' }}
        aria-label="لوگو باران دانش"
      >
        <img
          src={SCHOOL_IMAGES.baranLogo}
          alt="لوگو باران دانش"
          className="w-full h-full object-contain p-0.5 bg-white"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center ${cornerRadiusClass} bg-white border border-pink-300/80 dark:border-pink-800/80 shadow-md shadow-pink-500/20 overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size, backgroundColor: '#ffffff' }}
      aria-label="لوگو نگین دانش"
    >
      <img
        src={SCHOOL_IMAGES.neginLogo}
        alt="لوگو نگین دانش"
        className="w-full h-full object-contain p-0.5 bg-white"
      />
    </div>
  );
};
