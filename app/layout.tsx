import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Seth Joshua Moraga | Software Engineer",
  description:
    "One-page portfolio for Seth Joshua Moraga, a software engineer building modern web, mobile, and cloud solutions.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased",
        "font-sans",
        geist.variable,
      )}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
