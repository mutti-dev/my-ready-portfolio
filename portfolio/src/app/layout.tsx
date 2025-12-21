import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ThemeInit from "@/src/components/ThemeInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mutti Ullah | Full-Stack Developer",
  description:
    "Portfolio of Mutti Ullah, a mid-level full-stack developer specializing in React, Next.js, Node.js, and Django.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "Web Developer",
    "AI",
    "AI Engineer"
  ],
  authors: [{ name: "Mutti Ullah" }],
  openGraph: {
    title: "Mutti Ullah | Full-Stack Developer",
    description:
      "Mid-level full-stack developer building scalable web and mobile applications.",
    type: "website",
    url: "https://my-ready-portfolio.vercel.app/",
    images: [{ url: "/my_cv_n.pdf" }]
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
        <ThemeInit/>
        {children}
      </body>
    </html>
  );
}
