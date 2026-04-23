import { ArrowUpRight, Code2 } from "lucide-react";

import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/utils/constants/projects";

export function WorksSection() {
  return (
    <SectionShell id="works">
      <MotionReveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected Works
        </h2>
      </MotionReveal>

      <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.title}
            transition={{ delay: Math.min(index * 0.03, 0.2) }}
            className="group"
          >
            <div
              className="sketch-panel h-32 border border-border bg-cover bg-center transition-transform duration-300 group-hover:-translate-y-1 sm:h-36"
              style={{ backgroundImage: `url("${project.image}")` }}
              role="img"
              aria-label={`${project.title} project preview`}
            />
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">{project.title}</h3>
                <span className="font-mono text-xs uppercase text-muted-foreground">
                  {project.type}
                </span>
              </div>
              <p className="mt-1 min-h-12 text-sm leading-6 text-foreground/75">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <Badge
                    key={tool}
                    variant="outline"
                    className="rounded-none border-border bg-transparent font-mono text-[10px] uppercase tracking-wide"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm font-semibold">
                {project.site !== "#" ? (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    Live <ArrowUpRight aria-hidden="true" className="size-3" />
                  </a>
                ) : null}
                {project.github !== "#" ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    Code <Code2 aria-hidden="true" className="size-3" />
                  </a>
                ) : null}
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>

      <MotionReveal className="mt-10 flex justify-center">
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-none border-border bg-transparent px-8 hover:bg-muted"
        >
          <a
            href="https://github.com/realSJ30"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
          </a>
        </Button>
      </MotionReveal>
    </SectionShell>
  );
}
