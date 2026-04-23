import { Send } from "lucide-react";

import { MobileNav } from "@/components/custom/mobile-nav";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { navigationItems } from "@/utils/constants/navigation";
import { site } from "@/utils/constants/site";

export function SiteHeader() {
  return (
    <header className="etched-rule sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        <a
          href="#home"
          aria-label="Go to home section"
          className="text-xl font-black tracking-tight sm:text-2xl"
        >
          {site.wordmark.slice(0, -1)}
          <span className="text-muted-foreground">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 text-base font-medium tracking-wide lg:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MobileNav />
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:text-base"
          >
            <span>Let&apos;s Talk</span>
            <Send
              aria-hidden="true"
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
