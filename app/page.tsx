import { ArrowLeft, Bookmark, Clock3, Menu, PlayCircle, Search, ShieldCheck, TrendingUp, Video } from "lucide-react";

const stories = [
  {
    category: "سوريا الآن",
    time: "منذ ١٢ دقيقة",
    title: "متابعة لأبرز التطورات المحلية.. أخبار ومعلومات من مصادر موثوقة",
    excerpt: "مساحة لتغطية التطورات اليومية وتقديم السياق اللازم للقارئ مع توضيح المصادر وتوقيت التحديث.",
    tone: "photo-one",
    label: "تغطية مستمرة"
  },
  {
    category: "تقارير",
    time: "منذ ٣٥ دقيقة",
    title: "ما الذي نعرفه حتى الآن؟ قراءة في التفاصيل والخلفيات",
    excerpt: "ملخص منظم يساعد القارئ على فهم الصورة الأوسع بعيدًا عن العناوين المقتضبة.",
    tone: "photo-two",
    label: "تحليل"
  },
  {
    category: "المجتمع",
    time: "منذ ساعة",
    title: "قصص من الناس.. مبادرات محلية تستحق أن تُروى",
    excerpt: "نوافذ على الحياة اليومية والمبادرات المجتمعية في مختلف المناطق السورية.",
    tone: "photo-three",
    label: "قصة إنسانية"
  }
];

const latest = [
  ["سياسة", "ملخص لأهم التصريحات والمواقف خلال اليوم", "قبل ٨ دقائق"],
  ["اقتصاد", "متابعة الأسواق والخدمات وتأثيرها على الحياة اليومية", "قبل ٢٢ دقيقة"],
  ["محليات", "أخبار المحافظات في موجز واحد مع روابط المصادر", "قبل ٤٠ دقيقة"],
  ["تحقق", "كيف نتحقق من الصور والمعلومات المتداولة؟", "قبل ساعة"]
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span><span className="live-dot" /> تغطية الأخبار على مدار اليوم</span>
          <span className="topline-note">الدقة أولًا · المصدر أساس الخبر</span>
        </div>
      </div>

      <header className="container masthead">
        <button className="icon-button mobile-menu" aria-label="فتح القائمة"><Menu size={21} /></button>
        <a className="brand" href="#" aria-label="صوت الحق السوري - الرئيسية">
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-copy"><strong>صوت الحق السوري</strong><small>خبرٌ بمصدر.. وصوتٌ بمسؤولية</small></span>
        </a>
        <nav className="main-nav" aria-label="القائمة الرئيسية">
          <a className="active" href="#home">الرئيسية</a>
          <a href="#latest">آخر الأخبار</a>
          <a href="#reports">تقارير وتحليلات</a>
          <a href="#video">مرئيات</a>
          <a href="#about">من نحن</a>
        </nav>
        <button className="icon-button search-button" aria-label="بحث"><Search size={20} /></button>
      </header>

      <section className="container breaking" aria-label="آخر التطورات">
        <span className="breaking-label"><TrendingUp size={15} /> موجز الأخبار</span>
        <p>تابع آخر المستجدات من خلال تغطية واضحة وروابط للمصادر الأصلية.</p>
        <a href="#latest">كل الأخبار <ArrowLeft size={15} /></a>
      </section>

      <section className="container hero-grid" id="home">
        <article className="hero-feature">
          <div className="hero-art">
            <div className="hero-sun" />
            <div className="hero-mountain mountain-back" />
            <div className="hero-mountain mountain-front" />
            <div className="hero-art-caption"><span className="live-dot" /> نافذة على سوريا</div>
          </div>
          <div className="hero-content">
            <div className="eyebrow"><span /> الواجهة الرئيسية <span className="eyebrow-line" /></div>
            <h1>الحقيقة تبدأ من <em>المعلومة</em></h1>
            <p>منصة إخبارية تضع الخبر في سياقه، وتمنح القارئ التفاصيل والمصادر التي يحتاجها لفهم ما يحدث.</p>
            <a className="primary-link" href="#latest">استكشف آخر الأخبار <ArrowLeft size={17} /></a>
          </div>
        </article>

        <aside className="side-panel">
          <div className="panel-heading"><div><span className="section-kicker">مختارات المحررين</span><h2>على الواجهة</h2></div><span className="heading-number">٠٣</span></div>
          {stories.map((story, index) => (
            <article className="side-story" key={story.title}>
              <div className={`story-thumb ${story.tone}`}><span>{story.label}</span></div>
              <div className="side-story-copy">
                <span className="story-category">{story.category}</span>
                <h3>{story.title}</h3>
                <span className="story-time"><Clock3 size={12} /> {story.time}</span>
              </div>
              {index < stories.length - 1 && <div className="story-divider" />}
            </article>
          ))}
        </aside>
      </section>

      <section className="container trust-strip" id="about">
        <div className="trust-icon"><ShieldCheck size={22} /></div>
        <div><strong>التحقق قبل النشر</strong><p>نوضح المصادر ونميّز بين الخبر والرأي والمعلومة غير المؤكدة.</p></div>
        <div className="trust-divider" />
        <div className="trust-icon"><Bookmark size={21} /></div>
        <div><strong>محتوى مسؤول</strong><p>تصحيح الأخطاء وتحديث المعلومات جزء من التزامنا التحريري.</p></div>
        <a href="#about" className="trust-more">معاييرنا التحريرية <ArrowLeft size={15} /></a>
      </section>

      <section className="container latest-section" id="latest">
        <div className="section-heading">
          <div><span className="section-kicker">ابقَ على اطلاع</span><h2>آخر الأخبار</h2></div>
          <a href="#latest">عرض كل الأخبار <ArrowLeft size={16} /></a>
        </div>
        <div className="latest-layout">
          <div className="latest-list">
            {latest.map(([category, title, time], index) => (
              <article className="latest-item" key={title}>
                <span className="latest-index">٠{index + 1}</span>
                <div className="latest-copy"><span className="story-category">{category}</span><h3>{title}</h3><span className="story-time"><Clock3 size={12} /> {time}</span></div>
                <ArrowLeft className="latest-arrow" size={17} />
              </article>
            ))}
          </div>
          <aside className="video-card" id="video">
            <div className="video-visual"><div className="video-orbit" /><Video size={32} /><span className="video-play"><PlayCircle size={42} /></span><span className="video-label">قريبًا</span></div>
            <div className="video-copy"><span className="section-kicker">صوت وصورة</span><h3>مرئيات وتقارير ميدانية</h3><p>مساحة للفيديو والتغطيات المباشرة بعد تجهيز خدمة البث.</p><span className="coming-soon">قيد التجهيز</span></div>
          </aside>
        </div>
      </section>

      <section className="container newsletter">
        <div><span className="section-kicker">ملخص اليوم</span><h2>الأخبار المهمة، بلا ضجيج.</h2><p>تصميم أولي لقسم النشرة البريدية — سيتم تفعيله بعد إعداد خدمة الاشتراك.</p></div>
        <span className="newsletter-mark">ص.ح</span>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner"><a className="footer-brand" href="#home">صوت الحق السوري</a><span>منصة إعلامية قيد التطوير</span><span>© {new Date().getFullYear()} صوت الحق السوري</span></div>
      </footer>
    </main>
  );
}
