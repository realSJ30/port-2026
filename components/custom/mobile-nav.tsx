"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems } from "@/utils/constants/navigation";

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
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground lg:hidden"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-20 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur lg:hidden"
          onClick={() => setOpen(false)}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-10"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 text-2xl font-semibold tracking-tight transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
