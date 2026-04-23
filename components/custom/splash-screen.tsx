"use client";

import { useEffect, useState } from "react";

const messages = [
  "Booting up the workspace...",
  "Checking out my stuff, please wait...",
  "Polishing a few pixels...",
  "Almost there...",
];

const MESSAGE_INTERVAL_MS = 700;
const TOTAL_DURATION_MS = messages.length * MESSAGE_INTERVAL_MS;

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setIndex((current) => {
        if (current + 1 >= messages.length) {
          clearInterval(tick);
          return current;
        }
        return current + 1;
      });
    }, MESSAGE_INTERVAL_MS);

    const hide = setTimeout(() => setVisible(false), TOTAL_DURATION_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [visible]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        <div className="text-sketch text-5xl font-black tracking-tight sm:text-6xl">
          sethjoshua<span className="text-muted-foreground">.</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="size-2.5 animate-pulse rounded-full bg-foreground"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="size-2.5 animate-pulse rounded-full bg-foreground"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="size-2.5 animate-pulse rounded-full bg-foreground"
            style={{ animationDelay: "300ms" }}
          />
        </div>

        <p
          key={index}
          className="animate-in fade-in slide-in-from-bottom-1 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground duration-300 sm:text-sm"
        >
          {messages[index]}
        </p>
      </div>
    </div>
  );
}
