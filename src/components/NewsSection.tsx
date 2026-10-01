import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Newspaper } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NEWS_DATA } from '../data/schoolData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const { language } = useApp();
  const isFa = language === 'fa';
  const ArrowIcon = isFa ? ArrowLeft : ArrowRight;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { key: 'all', labelFa: 'همه اخبار', labelEn: 'All News' },
  ];

  const filteredNews = NEWS_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.categoryKey === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const title = isFa ? item.titleFa.toLowerCase() : item.titleEn.toLowerCase();
    const summary = isFa ? item.summaryFa.toLowerCase() : item.summaryEn.toLowerCase();
    return matchesCategory && (title.includes(query) || summary.includes(query));
  });

  const featuredItem = filteredNews.find((item) => item.featured) || filteredNews[0];
  const otherItems = filteredNews.filter((item) => item.id !== featuredItem?.id);

  const handleShare = (item: NewsItem) => {
    const shareUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <section
      id="news-section"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#070D1E] dark:via-[#0A1128] dark:to-[#070D1E] border-t border-b border-slate-200/80 dark:border-pink-900/30 transition-colors"
      aria-label="News & Announcements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-bold shadow-xs">
            <Newspaper className="w-4 h-4" />
            <span>{isFa ? 'اطلاع‌رسانی و رویدادها' : 'News & Updates'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isFa ? 'اخبار و اطلاعیه‌های مجتمع آموزشی' : 'School News & Announcements'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {isFa
              ? 'تازه‌ترین رویدادها، دستاوردهای پژوهشی و ورزشی و اطلاعیه‌های رسمی مدارس غیردولتی باران دانش و نگین دانش'
              : 'Latest happenings, Olympiad triumphs, sports achievements, and official announcements across Baran & Negin Danesh campuses'}
          </p>
        </div>

        {NEWS_DATA.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-8 sm:p-12 max-w-2xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 flex items-center justify-center shadow-xs">
              <Newspaper className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {isFa ? 'اخبار و رویدادهای جدید به زودی قرار خواهد گرفت' : 'News and updates will be posted soon'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
              {isFa
                ? 'در حال حاضر خبر یا اطلاعیه‌ای درج نشده است. اطلاعیه‌های رسمی و رویدادهای مدارس باران دانش و نگین دانش به زودی در این قسمت منتشر خواهند شد.'
                : 'No announcements at the moment. School updates and news will be uploaded here shortly.'}
            </p>
          </div>
        ) : (
          <>
            {/* Grid of Other News */}
            {otherItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"></div>
            )}
          </>
        )}
      </div>
    </section>
  );
};