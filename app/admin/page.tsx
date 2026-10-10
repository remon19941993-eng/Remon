import { Activity, FileText, Eye, Users, Plus, Settings, ShieldCheck, Clock3, ArrowUpLeft } from "lucide-react";

const drafts = [
  { title: "عنوان الخبر قيد التحرير", section: "محليات", status: "مسودة", tone: "draft" },
  { title: "تقرير يحتاج مراجعة المصادر", section: "تقارير", status: "بانتظار المراجعة", tone: "review" },
  { title: "موجز الأخبار اليومية", section: "سوريا الآن", status: "مجدول", tone: "scheduled" }
];

export default function AdminPage() {
  return (
    <main className="admin-shell" dir="rtl">
      <header className="admin-topbar">
        <a className="admin-brand" href="/"><span className="admin-logo">ص.ح</span><span><strong>صوت الحق السوري</strong><small>مركز التحرير</small></span></a>
        <a href="/" className="admin-back">العودة إلى الموقع <ArrowUpLeft size={16} /></a>
      </header>
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <span className="admin-side-label">مساحة العمل</span>
          <a className="admin-side-active" href="/admin"><Activity size={17} /> لوحة التحكم</a>
          <a href="/news"><FileText size={17} /> الأخبار والتقارير</a>
          <a href="#review"><ShieldCheck size={17} /> مراجعة المحتوى</a>
          <a href="#team"><Users size={17} /> المحررون</a>
          <a href="#settings"><Settings size={17} /> الإعدادات</a>
          <div className="admin-sidebar-note"><ShieldCheck size={19} /><strong>النشر المسؤول</strong><p>راجع المصدر والتاريخ قبل اعتماد أي مادة.</p></div>
        </aside>
        <section className="admin-content">
          <div className="admin-welcome"><div><span className="section-kicker">مركز الإدارة</span><h1>مساحة التحرير</h1><p>نظرة أولية على المحتوى وسير العمل التحريري.</p></div><a className="admin-create" href="#new"><Plus size={17} /> خبر جديد</a></div>
          <div className="admin-notice"><ShieldCheck size={19} /><p><strong>نسخة أولية للوحة الإدارة.</strong> تسجيل الدخول والصلاحيات وقاعدة البيانات لم تُربط بعد؛ لا تُدخل بيانات حساسة هنا.</p></div>
          <div className="admin-stats">
            <article><span className="stat-icon"><FileText size={19} /></span><span className="stat-label">مواد في قائمة العمل</span><strong>١٢</strong><small>بيانات تجريبية للواجهة</small></article>
            <article><span className="stat-icon amber"><Clock3 size={19} /></span><span className="stat-label">بانتظار المراجعة</span><strong>٠٣</strong><small>بيانات تجريبية للواجهة</small></article>
            <article><span className="stat-icon blue"><Eye size={19} /></span><span className="stat-label">زيارات اليوم</span><strong>—</strong><small>تحتاج ربط التحليلات</small></article>
            <article><span className="stat-icon purple"><Users size={19} /></span><span className="stat-label">فريق التحرير</span><strong>—</strong><small>تحتاج إعداد الحسابات</small></article>
          </div>
          <section className="admin-panel" id="review">
            <div className="admin-panel-head"><div><h2>قائمة التحرير</h2><p>نماذج توضيحية لشكل سير العمل.</p></div><a href="/news">فتح الأرشيف <ArrowUpLeft size={15} /></a></div>
            <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>عنوان المادة</th><th>القسم</th><th>الحالة</th></tr></thead><tbody>{drafts.map(item => <tr key={item.title}><td>{item.title}</td><td>{item.section}</td><td><span className={`status-pill ${item.tone}`}>{item.status}</span></td></tr>)}</tbody></table></div>
          </section>
          <section className="admin-panel admin-next" id="new"><h2>الخطوات التالية لتفعيل الإدارة</h2><div className="admin-next-grid"><div><span>١</span><strong>إعداد تسجيل دخول آمن</strong><p>تحديد حسابات الإدارة والمحررين المعتمدين.</p></div><div><span>٢</span><strong>ربط قاعدة البيانات</strong><p>حفظ الأخبار والمصادر والصور وحالات المراجعة.</p></div><div><span>٣</span><strong>اختبار النشر</strong><p>التأكد من أن النشر متاح للمخولين فقط.</p></div></div></section>
        </section>
      </div>
    </main>
  );
}
