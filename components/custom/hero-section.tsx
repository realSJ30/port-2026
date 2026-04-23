import { ArrowUpRight } from "lucide-react";

import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { Button } from "@/components/ui/button";
import { site } from "@/utils/constants/site";

export function HeroSection() {
  return (
    <SectionShell
      id="home"
      className="grid min-h-[540px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div>
        <MotionReveal>
          <p className="mb-6 text-xl">Hello, I&apos;m {site.name}</p>
          <h1 className="text-sketch group max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block text-foreground transition-colors duration-500 ease-out group-hover:text-muted-foreground">
              Software
            </span>
            <span className="block text-muted-foreground transition-colors duration-500 ease-out group-hover:text-foreground">
              Engineer
            </span>
          </h1>
        </MotionReveal>

        <MotionReveal transition={{ delay: 0.12 }}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/80">
            {site.intro}
          </p>
        </MotionReveal>

        <MotionReveal
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            className="h-12 rounded-none border-border bg-foreground px-8 text-base text-background hover:bg-foreground/90"
          >
            <a href="#works">View My Work</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-none border-border bg-transparent px-8 text-base hover:bg-muted"
          >
            <a href={site.resumePath} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </MotionReveal>
      </div>

      <MotionReveal
        transition={{ delay: 0.18 }}
        className="flex min-h-80 flex-col justify-center pt-12 lg:items-end lg:pt-20"
      >
        <ul className="flex max-w-xs flex-col gap-5 text-right font-mono text-sm uppercase tracking-wide">
          {site.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group mt-16 inline-flex items-center justify-end gap-2 self-end text-sm font-semibold uppercase tracking-[0.2em]"
        >
          Talk
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </MotionReveal>
    </SectionShell>
  );
}
