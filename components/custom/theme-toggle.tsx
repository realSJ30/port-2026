"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-foreground hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}
