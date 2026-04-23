import { Cloud, Code2, Database, Megaphone, Paintbrush } from "lucide-react";

import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { skills } from "@/utils/constants/skills";

const icons = [Code2, Paintbrush, Database, Cloud, Megaphone];

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <MotionReveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills
        </h2>
      </MotionReveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill, index) => {
          const Icon = icons[index] ?? Code2;

          return (
            <MotionReveal
              key={skill.title}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-[1.2rem] border border-border bg-paper">
                <Icon aria-hidden="true" className="size-7 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/75">
                {skill.summary}
              </p>
              <p className="mt-3 font-mono text-xs leading-5 text-muted-foreground">
                {skill.items.join(" / ")}
              </p>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
