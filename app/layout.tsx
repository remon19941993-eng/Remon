import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "صوت الحق السوري | أخبار سوريا",
  description: "منصة إعلامية سورية للأخبار والتقارير والتحليلات.",
  applicationName: "صوت الحق السوري"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
