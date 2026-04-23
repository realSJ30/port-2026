import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { experiences } from "@/utils/constants/experience";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <MotionReveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h2>
      </MotionReveal>

      <div className="mt-8 space-y-0">
        {experiences.map((experience, index) => (
          <MotionReveal
            key={`${experience.company}-${experience.duration}`}
            transition={{ delay: Math.min(index * 0.04, 0.22) }}
            className="grid gap-5 border-l border-border pb-8 pl-8 last:pb-0 md:grid-cols-[160px_1fr] md:gap-12"
          >
            <div className="relative font-mono text-sm text-foreground/75">
              <span className="absolute -left-[2.34rem] top-1 size-4 rounded-full border border-border bg-paper" />
              {experience.duration}
            </div>
            <article>
              <h3 className="text-xl font-semibold">{experience.position}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {experience.company}
              </p>
              <ul className="mt-3 max-w-3xl space-y-2 text-sm leading-6 text-foreground/80">
                {experience.work.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
