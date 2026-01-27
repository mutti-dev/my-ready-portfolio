import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ThemeInit from "@/src/components/ThemeInit";
import Script from "next/script";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mutti Ullah | Full-Stack Developer & Blogger",
  description:
    "Portfolio of Mutti Ullah, a mid-level full-stack developer specializing in React, Next.js, Node.js, and Django. Explore my projects, experience, and blog articles on web development.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "Web Developer",
    "AI",
    "AI Engineer",
    "Blog",
    "Web Development Articles"
  ],
  authors: [{ name: "Mutti Ullah" }],
  creator: "Mutti Ullah",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://my-ready-portfolio.vercel.app"),
  openGraph: {
    title: "Mutti Ullah | Full-Stack Developer & Blogger",
    description:
      "Mid-level full-stack developer building scalable web and mobile applications. Read my blog for insights on modern web development.",
    type: "website",
    url: "https://my-ready-portfolio.vercel.app/",
    images: [{ url: "/my_cv_n.pdf" }],
    locale: "en_US",
    siteName: "Mutti Ullah Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutti Ullah | Full-Stack Developer & Blogger",
    description: "Explore my portfolio, projects, and blog articles on web development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="light" suppressHydrationWarning>
      <head>
        {/* ✅ Google Analytics - LOAD SCRIPT */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
      `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute(
                    'data-bs-theme',
                    prefersDark ? 'dark' : 'light'
                  );
                } catch (e) {}
              })();
            `,
          }}
        />



      </head>

      <body className={inter.className}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
