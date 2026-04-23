import { Mail } from "lucide-react";

import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { site } from "@/utils/constants/site";

const socialMarks: Record<string, string> = {
  GitHub: "GH",
  LinkedIn: "in",
  Facebook: "f",
  Instagram: "ig",
};

export function ContactSection() {
  return (
    <footer id="contact">
      <SectionShell className="border-b-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <MotionReveal>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-foreground/80">
              Have a project in mind or just want to say hello? I&apos;d love
              to hear from you.
            </p>
          </MotionReveal>

          <MotionReveal className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="space-y-5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 hover:underline"
              >
                <Mail aria-hidden="true" className="size-5" />
                {site.email}
              </a>
              <p className="text-sm leading-6 text-muted-foreground">
                Available for frontend, fullstack, mobile, and cloud-focused
                product work.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {site.socials.map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-full border border-border font-mono text-xs font-bold transition-colors hover:bg-foreground hover:text-background"
                  >
                    {socialMarks[social.label]}
                  </a>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      </SectionShell>

      <div className="sketch-panel border-t border-border px-6 py-5 text-center font-mono text-xs text-foreground/80 sm:px-10">
        © 2026 {site.wordmark} All rights reserved.
      </div>
    </footer>
  );
}
