import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Legacy Tachyon — 포트폴리오",
  description:
    "서울을 기반으로 Action Unit 기반 3D 얼굴 복원과 실시간 인터랙션을 연구하는 크리에이티브 테크놀로지스트의 포트폴리오.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Legacy Tachyon — 포트폴리오",
    description:
      "Action Unit, 조건부 GAN, Unity 실험을 넘나드는 연구와 프로젝트를 소개합니다.",
    url: "https://example.com",
    siteName: "Legacy Tachyon Portfolio",
    locale: "ko_KR",
    type: "website"
  }
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="app-shell">{children}</body>
    </html>
  );
}

