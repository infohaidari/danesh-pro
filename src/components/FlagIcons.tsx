import React from 'react';

export const IranFlag: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg
    width={size}
    height={(size * 3) / 4}
    viewBox="0 0 24 16"
    className={`rounded-xs overflow-hidden shadow-xs shrink-0 ${className}`}
    aria-label="پرچم ایران"
  >
    <rect width="24" height="5.33" fill="#239F40" />
    <rect y="5.33" width="24" height="5.34" fill="#FFFFFF" />
    <rect y="10.67" width="24" height="5.33" fill="#DA0000" />
    <circle cx="12" cy="8" r="2.2" fill="#DA0000" />
    <path
      d="M12 6.5C11.3 7.2 11.3 8.8 12 9.5C12.7 8.8 12.7 7.2 12 6.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const UkFlag: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg
    width={size}
    height={(size * 3) / 4}
    viewBox="0 0 24 16"
    className={`rounded-xs overflow-hidden shadow-xs shrink-0 ${className}`}
    aria-label="UK Flag"
  >
    <rect width="24" height="16" fill="#012169" />
    <path d="M0 0L24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
    <path d="M12 0V16M0 8H24" stroke="#FFFFFF" strokeWidth="5" />
    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3" />
  </svg>
);