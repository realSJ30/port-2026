"use client";

import { Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/utils/constants/navigation";
import { site } from "@/utils/constants/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground lg:hidden"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="fixed inset-0 z-30 cursor-default bg-foreground/30 backdrop-blur-sm lg:hidden"
          />
          <div
            id="mobile-nav-panel"
            className="absolute inset-x-0 top-full z-40 border-t border-border bg-background shadow-lg lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto flex max-w-7xl flex-col px-6 py-4 sm:px-10"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="border-b border-line py-4 text-xl font-semibold tracking-tight transition-colors last:border-b-0 hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                onClick={close}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-base font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <span>Let&apos;s Talk</span>
                <Send aria-hidden="true" className="size-4" />
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
