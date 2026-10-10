import { ArrowRight, Clock3, Search } from "lucide-react";

const sections = ["الكل", "سوريا الآن", "سياسة", "اقتصاد", "مجتمع", "تقارير", "تحقق"];
const items = [
  { category: "سوريا الآن", title: "متابعة لأبرز التطورات المحلية", description: "نموذج لبطاقة خبر. ستظهر هنا المواد المنشورة بعد ربط نظام إدارة المحتوى.", time: "يُضاف وقت النشر عند الربط" },
  { category: "تقارير", title: "قراءة في التفاصيل والخلفيات", description: "قسم مخصص للتقارير والتحليلات مع إظهار المصادر وتاريخ آخر تحديث.", time: "قيد الإعداد" },
  { category: "تحقق", title: "التحقق من المعلومات المتداولة", description: "مساحة لشرح طريقة التحقق من الادعاءات والصور والمواد المتداولة.", time: "قيد الإعداد" }
];

export default function NewsPage() {
  return (
    <main className="archive-shell" dir="rtl">
      <header className="archive-header"><a className="archive-brand" href="/">صوت الحق السوري</a><a className="archive-home" href="/">الرئيسية <ArrowRight size={15} /></a></header>
      <section className="archive-hero"><span className="section-kicker">المشهد كاملًا</span><h1>الأخبار والتقارير</h1><p>أرشيف منظم للأخبار والتقارير والتحليلات، مع توثيق المصدر وتوقيت النشر.</p><div className="archive-search"><Search size={18} /><span>البحث في الأخبار — سيتم تفعيله مع قاعدة البيانات</span></div></section>
      <nav className="archive-categories" aria-label="تصنيفات الأخبار">{sections.map(section => <span key={section} className={section === "الكل" ? "archive-chip selected" : "archive-chip"}>{section}</span>)}</nav>
      <section className="archive-list">{items.map((item, i) => <article className="archive-item" key={item.title}><span className="archive-number">٠{i + 1}</span><div><span className="story-category">{item.category}</span><h2>{item.title}</h2><p>{item.description}</p><span className="story-time"><Clock3 size={12} /> {item.time}</span></div><span className="archive-state">نموذج واجهة</span></article>)}</section>
      <footer className="archive-footer">صوت الحق السوري · أرشيف الأخبار قيد التطوير</footer>
    </main>
  );
}
