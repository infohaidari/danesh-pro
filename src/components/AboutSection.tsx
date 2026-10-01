import React from 'react';
import { HeartHandshake, ShieldCheck, Sparkles, Award, Users, BookOpen, GraduationCap, UserCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ABOUT_INFO } from '../data/schoolData';

export interface AboutSectionProps {
  branchNumber?: 1 | 2;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ branchNumber }) => {
  const { language } = useApp();
  const isFa = language === 'fa';

  // Staff lists
  const staffBaran1 = [
    {
      roleFa: 'موسس',
      roleEn: 'Founder',
      nameFa: 'اعظم الهی',
      nameEn: 'Azam Elahi',
      icon: Award,
    },
    {
      roleFa: 'مدیریت آموزشی و پرورشی',
      roleEn: 'Educational & Cultural Director',
      nameFa: 'محبوبه رجبی',
      nameEn: 'Mahboubeh Rajabi',
      icon: GraduationCap,
    },
    {
      roleFa: 'مدیر و مسئول ارزیابی پایه اول',
      roleEn: '1st Grade Director & Assessment Lead',
      nameFa: 'نفیسه عبدالهی',
      nameEn: 'Nafiseh Abdollahi',
      icon: Sparkles,
    },
    {
      roleFa: 'معاونت آموزشی',
      roleEn: 'Vice Principal of Academics',
      nameFa: 'مریم تک نارکی',
      nameEn: 'Maryam Tak Naraki',
      icon: BookOpen,
    },
    {
      roleFa: 'معاونت پرورشی',
      roleEn: 'Vice Principal of Student Affairs',
      nameFa: 'نیلوفر خوشابی',
      nameEn: 'Niloufar Khoshabi',
      icon: HeartHandshake,
    },
    {
      roleFa: 'مشاوره تحصیلی و تربیتی و بهداشتی',
      roleEn: 'Academic, Behavioral & Health Counselor',
      nameFa: 'تورانیان',
      nameEn: 'Touranian',
      icon: ShieldCheck,
    },
    {
      roleFa: 'مسئول اداری و بایگانی',
      roleEn: 'Administrative & Archives Officer',
      nameFa: 'آمنه حصاری',
      nameEn: 'Ameneh Hesari',
      icon: Users,
    },
  ];

  const staffBaran2 = [
    {
      roleFa: 'موسس',
      roleEn: 'Founder',
      nameFa: 'خانم اعظم الهی',
      nameEn: 'Ms. Azam Elahi',
      icon: Award,
    },
    {
      roleFa: 'مدیریت',
      roleEn: 'Principal / Director',
      nameFa: 'زهره خطیبی سخا',
      nameEn: 'Zohreh Khatibi Sakha',
      icon: GraduationCap,
    },
    {
      roleFa: 'معاون آموزشی',
      roleEn: 'Vice Principal of Academics',
      nameFa: 'سکینه کجویی',
      nameEn: 'Sakineh Kojouri',
      icon: BookOpen,
    },
    {
      roleFa: 'معاون اجرایی',
      roleEn: 'Executive Vice Principal',
      nameFa: 'فاطمه میرزایی',
      nameEn: 'Fatemeh Mirzaei',
      icon: ShieldCheck,
    },
    {
      roleFa: 'مشاوره تحصیلی، تربیتی و بهداشتی',
      roleEn: 'Academic, Behavioral & Health Counselor',
      nameFa: 'سارا بورقی',
      nameEn: 'Sara Bouraghi',
      icon: HeartHandshake,
    },
  ];

  const staffNegin = [
    {
      roleFa: 'موسس',
      roleEn: 'Founder',
      nameFa: 'اعظم الهی',
      nameEn: 'Azam Elahi',
      icon: Award,
    },
    {
      roleFa: 'مدیر داخلی',
      roleEn: 'Internal Director',
      nameFa: 'زهرا کاوند',
      nameEn: 'Zahra Kavand',
      icon: GraduationCap,
    },
    {
      roleFa: 'معاون اجرایی-مالی',
      roleEn: 'Executive & Financial Vice Principal',
      nameFa: 'زهرا تاجیک',
      nameEn: 'Zahra Tajik',
      icon: ShieldCheck,
    },
    {
      roleFa: 'معاون آموزشی',
      roleEn: 'Vice Principal of Academics',
      nameFa: 'لیلا خاکپور - وحیده حاجی مزدارانی',
      nameEn: 'Leila Khakpour & Vahideh Haji Mazdarani',
      icon: BookOpen,
    },
  ];

  const currentStaff =
    branchNumber === 1
      ? staffBaran1
      : branchNumber === 2
      ? staffBaran2
      : staffNegin;

  let titleFa = 'درباره مجتمع آموزشی نگین دانش';
  let titleEn = 'About Negin Danesh Educational Complex';
  let subtitleFa = '۲۵ سال تجربه پیشگام در ساختن بستری پویا، خلاق و اخلاق‌مدار برای بالندگی همه‌جانبه فرزندان این مرز و بوم';
  let subtitleEn = '25 years of pioneering excellence in creating a vibrant, innovative, and ethical environment for holistic student growth';
  let storyFa = ABOUT_INFO.storyFa;
  let storyEn = ABOUT_INFO.storyEn;

  if (branchNumber === 1) {
    titleFa = 'درباره مدرسه غیردولتی باران دانش ۱';
    titleEn = 'About Baran Danesh School 1';
    subtitleFa = 'پردیس تخصصی دوره‌های پیش‌دبستان و دبستان با تمرکز بر یادگیری فعال، خلاقیت و طرح پیشگام کیف در مدرسه';
    subtitleEn = 'Dedicated campus for preschool and elementary education focusing on active inquiry and child development at Branch 1';
  } else if (branchNumber === 2) {
    titleFa = 'درباره مدرسه غیردولتی باران دانش ۲';
    titleEn = 'About Baran Danesh School 2';
    subtitleFa = 'محیطی تمام‌هوشمند برای شکوفایی خلاقیت نوآموزان و دانش‌آموزان با کلاس‌های تعاملی و مربیان باسابقه';
    subtitleEn = 'Smart primary campus fostering creativity and critical skills with interactive displays and veteran educators at Branch 2';
  }

  return (
    <section
      id="about-section"
      className="py-16 lg:py-24 scroll-mt-28 bg-white dark:bg-[#070D1E] border-t border-slate-200/80 dark:border-pink-900/30 transition-colors"
      aria-label="About School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>{isFa ? 'درباره ما' : 'About Us'}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {isFa ? titleFa : titleEn}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {isFa ? subtitleFa : subtitleEn}
          </p>
          <div className="w-16 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Founding Story & Campus Photo / Dedicated Card */}
        {branchNumber === 1 ? (
          <div className="w-full">
            {/*Baran Danesh 1 */}
            <div className="w-full">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-pink-50/90 via-white to-pink-50/50 dark:from-pink-950/30 dark:via-slate-900 dark:to-pink-900/20 border-2 border-pink-300/80 dark:border-pink-600/40 shadow-xl space-y-5">
                {/* Header in Card */}
                <div className="flex items-center gap-3 pb-3 border-b border-pink-200/70 dark:border-pink-900/50">
                  <div className="w-10 h-10 rounded-2xl bg-pink-600 text-white flex items-center justify-center text-lg shadow-md">
                    🌧️
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                      {isFa ? 'باران دانش؛ ده سال مهر و آگاهی 🌧️📚' : 'Baran Danesh; A Decade of Care & Wisdom 🌧️📚'}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {isFa
                    ? 'مدرسه «باران دانش» در سال ۱۳۹۰ با مدیریت و همت سرکار خانم اعظم الهی پایه‌گذاری شد. هدف ما از همان روز نخست، فراتر از یک فضای آموزشی، ساختن «خانه‌ای دوم» برای دانش‌آموزان بود؛ جایی که در آن آموزش با مهارت‌های زندگی، نشاط و اخلاق‌مداری گره خورده است.'
                    : 'Founded in 2011 (1390) under the leadership and dedication of Ms. Azam Elahi, "Baran Danesh" school aimed from day one to create a "second home" for students where academic learning intertwines with life skills, joy, and ethical development.'}
                </p>

                <div className="space-y-3 pt-1">
                  <h4 className="text-sm sm:text-base font-bold text-pink-700 dark:text-pink-400">
                    {isFa ? 'آنچه در این سال‌ها ساخته‌ایم:' : 'What we have built over these years:'}
                  </h4>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">
                          {isFa ? 'تجربه و اعتماد: ' : 'Experience & Trust: '}
                        </strong>
                        {isFa
                          ? 'بیش از یک دهه فعالیت مستمر در تربیت نسل آینده.'
                          : 'Over a decade of continuous excellence in nurturing future generations.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">
                          {isFa ? 'کیفیت آموزشی: ' : 'Educational Quality: '}
                        </strong>
                        {isFa
                          ? 'تلفیق روش‌های نوین با فضایی شاد و امن.'
                          : 'Blending modern methodologies with a joyful and safe environment.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        <strong className="text-slate-900 dark:text-white font-bold">
                          {isFa ? 'کادر متخصص: ' : 'Expert Faculty: '}
                        </strong>
                        {isFa
                          ? 'تیمی دلسوز که دانش‌آموز را در مرکز توجه قرار می‌دهد.'
                          : 'A dedicated team that places the student at the heart of attention.'}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal pt-1">
                  {isFa
                    ? 'امروز، با راه‌اندازی این اپلیکیشن، گامی تازه برداشته‌ایم تا پلی باشیم برای ارتباط شفاف‌تر، سریع‌تر و صمیمانه‌تر میان ما و شما خانواده‌های عزیز.'
                    : 'Today, with the launch of this application, we have taken a fresh step to serve as a bridge for clearer, faster, and warmer communication between our school and dear families.'}
                </p>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-center text-xs sm:text-sm shadow-md">
                  {isFa
                    ? 'باران دانش؛ همراهِ مطمئن شما در مسیر رشد فرزندتان. ✨'
                    : 'Baran Danesh; Your trusted companion in your child’s growth. ✨'}
                </div>
              </div>
            </div>
          </div>
        ) : branchNumber === 2 ? (
          <div className="space-y-8">
            <div className="w-full">
              {/* Baran Danesh 2 */}
              <div className="w-full">
                <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-pink-50/90 via-white to-pink-50/50 dark:from-pink-950/30 dark:via-slate-900 dark:to-pink-900/20 border-2 border-pink-300/80 dark:border-pink-600/40 shadow-xl space-y-5">
                  {/* Header in Card */}
                  <div className="flex items-center gap-3 pb-3 border-b border-pink-200/70 dark:border-pink-900/50">
                    <div className="w-10 h-10 rounded-2xl bg-pink-600 text-white flex items-center justify-center text-lg shadow-md">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                        {isFa ? 'درباره دبستان غیردولتی باران دانش ۲' : 'About Baran Danesh Elementary School (Branch 2)'}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    <p>
                      {isFa
                        ? 'مدرسه باران دانش ۲ در سال ۱۳۹۰ توسط سرکار خانم الهی تاسیس شده است.'
                        : 'Baran Danesh School Branch 2 was founded in 2011 (1390) by Ms. Elahi.'}
                    </p>
                    <p>
                      {isFa
                        ? 'مدرسه‌ای که از آغاز فعالیت، با رویکردی دانش‌آموزمحور، تلاش کرده است محیطی امن، شاد، پویا، خلاق و سرشار از فرصت‌های یادگیری برای دانش‌آموزان فراهم آورد.'
                        : 'From the beginning, with a student-centered approach, the school has strived to provide a safe, joyful, dynamic, creative environment rich with learning opportunities for students.'}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center gap-2 text-pink-700 dark:text-pink-400 font-bold text-sm sm:text-base">
                      <span>🎯</span>
                      <h4>{isFa ? 'اهداف مدرسه' : 'School Goals & Mission'}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {isFa
                        ? 'دبستان غیردولتی باران دانش ۲ با هدف ایجاد محیطی امن، شاد، پویا و سرشار از یادگیری فعالیت می‌کند و در مسیر رشد همه‌جانبه دانش‌آموزان، بر موارد زیر تأکید دارد:'
                        : 'Baran Danesh 2 Elementary School operates with the goal of fostering a safe, joyful, and dynamic environment, focusing on the holistic growth of students through:'}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        {
                          fa: 'پرورش استعدادها، خلاقیت و تفکر دانش‌آموزان',
                          en: 'Nurturing student talents, creativity, and critical thinking',
                        },
                        {
                          fa: 'تقویت اعتمادبه‌نفس، مسئولیت‌پذیری و مهارت‌های اجتماعی',
                          en: 'Fostering self-confidence, responsibility, and social skills',
                        },
                        {
                          fa: 'توجه همزمان به رشد علمی، اخلاقی، عاطفی و مهارتی',
                          en: 'Harmonious development of academic, ethical, emotional, and practical skills',
                        },
                        {
                          fa: 'ایجاد انگیزه و علاقه به یادگیری در محیطی با‌نشاط',
                          en: 'Igniting passion for learning within an uplifting atmosphere',
                        },
                        {
                          fa: 'تقویت همکاری و ارتباط سازنده میان مدرسه، دانش‌آموز و خانواده',
                          en: 'Strengthening constructive collaboration between school, student, and family',
                        },
                        {
                          fa: 'تربیت دانش‌آموزانی توانمند، خلاق، مسئول و آماده برای آینده',
                          en: 'Raising empowered, creative, and responsible leaders for the future',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30 shadow-xs"
                        >
                          <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                            {isFa ? item.fa : item.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-center text-xs sm:text-sm shadow-md">
                    {isFa
                      ? 'باران دانش ۲؛ پیشرو در پرورش استعداد و ساختن آینده‌ای روشن ✨'
                      : 'Baran Danesh 2; Leading in Talent Development & Shaping a Bright Future ✨'}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white via-pink-50/40 to-rose-50/60 dark:from-slate-900 dark:via-pink-950/20 dark:to-slate-900 border-2 border-pink-300/80 dark:border-pink-600/40 shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-pink-200/70 dark:border-pink-900/50">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center text-lg shadow-md">
                  🌸
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {isFa ? '🌸 هدف دبستان غیردولتی باران دانش ۲' : '🌸 Mission of Baran Danesh Elementary School (Branch 2)'}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                <p>
                  {isFa
                    ? 'هدف ما در دبستان غیردولتی باران دانش ۲، فراهم کردن محیطی شاد، امن، پویا و سرشار از یادگیری است؛ محیطی که در آن هر دانش‌آموز فرصت داشته باشد استعدادها و توانمندی‌های خود را کشف و شکوفا کند.'
                    : 'Our goal at Baran Danesh 2 Elementary is to provide a joyful, safe, dynamic environment rich with learning; an environment where every student has the opportunity to discover and flourish their talents.'}
                </p>

                <p>
                  {isFa
                    ? 'ما تلاش می‌کنیم در کنار آموزش علمی و تقویت مهارت‌های درسی، به رشد شخصیتی، اجتماعی، اخلاقی، خلاقیت، مسئولیت‌پذیری و اعتمادبه‌نفس دانش‌آموزان توجه ویژه داشته باشیم.'
                    : 'Along with academic education, we pay special attention to personal, social, ethical, creative, and responsible development of students.'}
                </p>

                <p>
                  {isFa
                    ? 'در باران دانش ۲، مدرسه را تنها مکانی برای یادگیری کتاب‌های درسی نمی‌دانیم؛ بلکه آن را فضایی برای تجربه کردن، پرسیدن، اندیشیدن، همکاری، خلاقیت و ساختن آینده‌ای روشن می‌دانیم.'
                    : 'At Baran Danesh 2, we do not view school merely as a place for textbooks; rather, we see it as a space for experiencing, questioning, thinking, collaborating, and shaping a bright future.'}
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-200 dark:border-pink-900/40 shadow-xs flex items-start gap-3">
                  <span className="text-lg">🌱</span>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {isFa
                      ? 'هدف ما تربیت دانش‌آموزانی دانا، خلاق، مسئول، بااخلاق و توانمند است؛ دخترانی که با اعتمادبه‌نفس، مهارت و امید، آینده خود و جامعه را زیباتر بسازند.'
                      : 'Our mission is to nurture knowledgeable, creative, responsible, and capable students; girls who shape a brighter future for themselves and society.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-center text-xs sm:text-sm shadow-md">
                {isFa
                  ? 'باران دانش ۲؛ جایی برای روییدن اندیشه‌ها و شکوفایی استعدادها 🌸'
                  : 'Baran Danesh 2; Where Thoughts Bloom and Talents Flourish 🌸'}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Negin Danesh */}
            <div className="lg:col-span-12">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-pink-50/90 via-white to-pink-50/50 dark:from-pink-950/30 dark:via-slate-900 dark:to-pink-900/20 border-2 border-pink-300/80 dark:border-pink-600/40 shadow-xl space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-pink-200/70 dark:border-pink-900/50">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600 text-white flex items-center justify-center text-xl shadow-md">
                    💎
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {isFa ? 'داستان شکل‌گیری و رسالت آموزشی مجتمع نگین دانش' : 'Our Founding Story & Mission'}
                    </h3>
                    <p className="text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-semibold">
                      {isFa ? 'نگین دانش؛ درخشان در مسیر دانایی 💎📚' : 'Negin Danesh; Shining on the Path of Wisdom'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base">
                  <p>{isFa ? storyFa : storyEn}</p>

                  <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900/50">
                      <ShieldCheck className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                      <span>{isFa ? 'مجوز رسمی درجه ۱ آموزش و پرورش' : 'Certified Grade 1 National License'}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900/50">
                      <HeartHandshake className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                      <span>{isFa ? 'همراهی مستمر با اولیاء و خانواده‌ها' : 'Close Parental Partnership'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-pink-200/60 dark:border-pink-900/40 space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-pink-700 dark:text-pink-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                    <span>{isFa ? 'اهداف و رویکردهای اساسی مدرسه' : 'Core Objectives & Approach'}</span>
                  </h4>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'هدف مدرسه، فراهم کردن محیطی امن، پویا و مناسب برای رشد همه‌جانبه دانش‌آموزان است.'
                          : 'The school’s goal is to provide a safe, dynamic, and nurturing environment for the comprehensive growth of students.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'تلاش می‌کنیم در کنار آموزش، روحیه پرسشگری، خلاقیت و علاقه به یادگیری را در دانش‌آموزان تقویت کنیم.'
                          : 'Alongside academics, we strive to cultivate inquiry, creativity, and a genuine passion for lifelong learning in students.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'دانش‌آموزان را برای شناخت بهتر توانایی‌ها و استعدادهای خود و استفاده درست از آنها همراهی می‌کنیم.'
                          : 'We guide and accompany students in discovering their unique talents and applying them effectively.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'پرورش مسئولیت‌پذیری، نظم، احترام و همکاری از ارزش‌های مهم مدرسه است.'
                          : 'Fostering responsibility, discipline, mutual respect, and teamwork are fundamental pillars of our school values.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'می‌خواهیم دانش‌آموزانی آگاه، توانمند و آماده برای رویارویی با مسائل زندگی تربیت کنیم.'
                          : 'We aim to raise aware, capable, and resilient students prepared to face life challenges.'}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30">
                      <span className="w-2 h-2 rounded-full bg-pink-500 mt-1.5 shrink-0" />
                      <p>
                        {isFa
                          ? 'با ایجاد فرصت‌های آموزشی و فرهنگی، مسیر پیشرفت و شکوفایی استعدادهای دانش‌آموزان را هموار می‌کنیم.'
                          : 'By offering diverse educational and cultural opportunities, we pave the way for students to excel and flourish.'}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-pink-100/70 dark:bg-pink-950/40 border border-pink-300 dark:border-pink-800 text-pink-900 dark:text-pink-200 font-bold text-center text-xs sm:text-sm">
                      {isFa
                        ? 'هدف ما این است که هر دانش‌آموز، چراغی روشن برای آینده خود و جامعه باشد؛ «نگین دانش، درخشان در مسیر دانایی».'
                        : 'Our mission is for every student to be a beacon of light for their future and community; "Negin Danesh, Shining on the Path of Wisdom."'}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-pink-200/60 dark:border-pink-900/40 space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-7 h-7 rounded-xl bg-pink-600 text-white flex items-center justify-center text-xs font-black">
                      ۷
                    </span>
                    <span>{isFa ? 'منشور مدرسه من؛ نگین دانش' : 'My School Charter; Negin Danesh'}</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {[
                      {
                        num: '۱',
                        fa: 'مدرسه من می‌خواهد هر دانش‌آموز را مثل یک نگین دانش ببیند و کاری کند که در مسیر دانایی خودش بدرخشد.',
                        en: 'My school views every student as a precious gem of wisdom, empowering each to shine brightly on their own learning path.',
                      },
                      {
                        num: '۲',
                        fa: 'هدفش این نیست که فقط نمره بالا بگیریم، بلکه می‌خواهد یاد بگیریم درست فکر کنیم، سؤال بپرسیم و دنبال جواب باشیم.',
                        en: 'The goal is not merely high grades, but learning how to think critically, ask questions, and seek answers.',
                      },
                      {
                        num: '۳',
                        fa: 'می‌خواهد در کنار درس، مهربانی، صداقت، احترام و مسئولیت‌پذیری را هم یاد بگیریم.',
                        en: 'Alongside academics, we learn kindness, honesty, mutual respect, and responsibility.',
                      },
                      {
                        num: '۴',
                        fa: 'تلاش می‌کند استعدادهای هر کدام ما را پیدا کند؛ چه در علم، چه در هنر، چه در ورزش و چه در کار گروهی.',
                        en: 'It strives to discover the unique talents of each student in science, art, athletics, or teamwork.',
                      },
                      {
                        num: '۵',
                        fa: 'می‌خواهد ما با اعتماد به نفس رشد کنیم و از اشتباه کردن نترسیم، چون هر اشتباه می‌تواند پلی برای یادگیری باشد.',
                        en: 'It encourages us to grow with confidence without fear of making mistakes, seeing every error as a bridge to learning.',
                      },
                      {
                        num: '۶',
                        fa: 'معلمان و خانواده‌ها هم کنار ما هستند تا این مسیر دانایی فقط درس خواندن نباشد، بلکه برای زندگی آماده‌مان کند.',
                        en: 'Teachers and families stand beside us so that the journey of wisdom prepares us for real life, not just tests.',
                      },
                      {
                        num: '۷',
                        fa: 'در پایان، مدرسه من جایی باشد که هر روز با علاقه به آن بیاییم و مثل نگینی درخشان، هم خودمان و هم جامعه را روشن کنیم.',
                        en: 'Ultimately, my school is a place we love coming to each day, illuminating ourselves and society like a radiant jewel.',
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-pink-100 dark:border-pink-900/30 shadow-xs flex items-start gap-3 ${
                          i === 6 ? 'md:col-span-2 bg-gradient-to-r from-pink-50/80 to-rose-50/80 dark:from-pink-950/30 dark:to-rose-950/30 border-pink-300 dark:border-pink-800' : ''
                        }`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-pink-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          {isFa ? item.num : i + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                          {isFa ? item.fa : item.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-pink-500 text-white font-bold text-center text-xs sm:text-sm shadow-md">
                  {isFa
                    ? 'نگین دانش؛ درخشان در مسیر دانایی، پرورش‌دهنده آینده‌سازان ایران زمین ✨'
                    : 'Negin Danesh; Radiant on the Path of Wisdom, Nurturing the Future ✨'}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border-2 border-pink-500 text-black dark:text-black bg-pink-50 text-xs sm:text-sm font-bold shadow-xs">
              <UserCheck className="w-4 h-4 text-pink-600" />
              <span>{isFa ? 'معرفی کادر مدرسه' : 'Faculty & Staff'}</span>
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {isFa
                ? branchNumber === 1
                  ? 'کادر باران دانش ۱'
                  : branchNumber === 2
                  ? 'کادر دبستان باران دانش ۲'
                  : 'کادر مجتمع نگین دانش'
                : branchNumber === 1
                ? 'Baran Danesh 1 Staff'
                : branchNumber === 2
                ? 'Baran Danesh 2 Staff'
                : 'Negin Danesh Faculty & Staff'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {isFa
                ? 'تیم مدیریتی، آموزشی و تربیتی دلسوز و متعهد در خدمت آینده‌سازان'
                : 'Dedicated leadership and pedagogical team committed to student excellence'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {currentStaff.map((staff, idx) => {
              const StaffIcon = staff.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-gradient-to-br from-white via-pink-50/20 to-slate-50/80 dark:from-slate-900 dark:via-slate-900/90 dark:to-pink-950/20 border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-600 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-pink-100 dark:bg-pink-950/70 text-pink-700 dark:text-pink-300 text-xs font-bold border border-pink-200/80 dark:border-pink-800/50">
                      {isFa ? staff.roleFa : staff.roleEn}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0">
                      <StaffIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {isFa ? staff.nameFa : staff.nameEn}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};