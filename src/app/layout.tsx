import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "구름냥 - gurum.cat",
  description: "디시인사이드 ChatGPT 갤러리 주딱, 오픈소스 개발자 구름냥의 포트폴리오 사이트",
  metadataBase: new URL("https://gurum.cat"),
  openGraph: {
    title: "구름냥 - gurum.cat",
    description: "디시인사이드 ChatGPT 갤러리 주딱, 오픈소스 개발자 구름냥의 포트폴리오 사이트",
    url: "/",
    siteName: "gurum.cat",
    locale: "ko_KR",
    type: "website",
    images: [
      { url: "/profile.png", width: 512, height: 512, alt: "gurum.cat" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "구름냥 - gurum.cat",
    description: "디시인사이드 ChatGPT 갤러리 주딱, 오픈소스 개발자 구름냥의 포트폴리오 사이트",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 초기 테마 적용 스크립트: FOUC 방지 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const isDark = saved ? saved === 'dark' : prefersDark; const c = document.documentElement.classList; if (isDark) c.add('dark'); else c.remove('dark'); } catch(e){} })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
