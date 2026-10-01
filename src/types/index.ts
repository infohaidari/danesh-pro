export type Language = 'fa' | 'en';
export type ThemeMode = 'light' | 'dark';

export type PageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'baran'
  | 'baran-branch-1'
  | 'baran-branch-2'
  | 'negin'
  | 'preschool'
  | 'elementary'
  | 'middle'
  | 'high'
  | 'vocational';

export interface ScheduleItem {
  time: string;
  timeEn?: string;
  activityFa: string;
  activityEn: string;
  descriptionFa: string;
  descriptionEn: string;
}

export interface GradeInfo {
  id: 'preschool' | 'elementary' | 'middle' | 'high' | 'vocational';
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  ageGroupFa: string;
  ageGroupEn: string;
  descriptionFa: string;
  descriptionEn: string;
  theme: {
    accentColor: string; 
    badgeColor: string;
    lightBg: string;
    darkBg: string;
    lightCard: string;
    darkCard: string;
    lightBorder: string;
    darkBorder: string;
    lightText: string;
    darkText: string;
    accentBtn: string;
    accentBtnHover: string;
    ringColor: string;
  };
  featuresFa: string[];
  featuresEn: string[];
  curriculumFa: string[];
  curriculumEn: string[];
  schedule: ScheduleItem[];
  images: {
    url: string;
    captionFa: string;
    captionEn: string;
  }[];
}

export interface FacilityItem {
  id: number;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  iconName: string;
  imageUrl: string;
  statFa?: string;
  statEn?: string;
}

export interface FaqItem {
  id: number;
  questionFa: string;
  questionEn: string;
  answerFa: string;
  answerEn: string;
  categoryFa: string;
  categoryEn: string;
}

export interface NewsItem {
  id: string;
  titleFa: string;
  titleEn: string;
  summaryFa: string;
  summaryEn: string;
  contentFa: string;
  contentEn: string;
  categoryFa: string;
  categoryEn: string;
  categoryKey: 'academic' | 'honors' | 'events' | 'announcements';
  dateFa: string;
  dateEn: string;
  readTimeFa: string;
  readTimeEn: string;
  imageUrl: string;
  tagFa: string;
  tagEn: string;
  featured?: boolean;
}