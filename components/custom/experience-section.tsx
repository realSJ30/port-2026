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
            className="grid grid-cols-[18px_1fr] gap-x-5 pb-8 last:pb-0 lg:grid-cols-[18px_190px_1fr] lg:gap-x-10"
          >
            <div className="relative flex justify-center">
              <span className="mt-1.5 size-4 rounded-full border border-border bg-paper" />
              {index < experiences.length - 1 ? (
                <span className="absolute top-6 bottom-[-2rem] left-1/2 w-px -translate-x-1/2 bg-border" />
              ) : null}
            </div>
            <div className="font-mono text-sm text-foreground/75">
              {experience.duration}
            </div>
            <article className="col-start-2 mt-3 lg:col-start-auto lg:mt-0">
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
