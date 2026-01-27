import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Mutti Ullah",
  description: "Read articles about web development, React, Next.js, and modern web technologies.",
  keywords: ["blog", "web development", "React", "Next.js", "tutorials"],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
