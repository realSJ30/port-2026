import { ArrowUpRight, Code2 } from "lucide-react";

import { MotionReveal } from "@/components/custom/motion-reveal";
import { SectionShell } from "@/components/custom/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/utils/constants/projects";

function ProjectPreview({ project }: { project: Project }) {
  const primaryImage = project.images.desktop ?? project.images.mobile;
  const hasDesktop = Boolean(project.images.desktop);
  const hasMobile = Boolean(project.images.mobile);

  return (
    <div className="etched-rule sketch-panel relative min-h-72 overflow-hidden border border-border bg-paper p-5 transition-transform duration-300 group-hover:-translate-y-1 sm:min-h-80 lg:min-h-[23rem]">
      {hasDesktop ? (
        <div className="relative z-10">
          <div className="flex h-8 items-center gap-2 border border-border border-b-0 bg-paper px-4">
            <span className="size-2 rounded-full bg-foreground" />
            <span className="size-2 rounded-full border border-border" />
            <span className="size-2 rounded-full border border-border" />
          </div>
          <div
            className="h-52 border border-border bg-cover bg-top sm:h-60 lg:h-72"
            style={{ backgroundImage: `url("${project.images.desktop}")` }}
            role="img"
            aria-label={`${project.title} desktop preview`}
          />
        </div>
      ) : null}

      {hasMobile ? (
        <div
          className={
            hasDesktop
              ? "absolute bottom-5 right-5 z-20 w-28 rotate-2 border-2 border-border bg-paper p-1.5 shadow-[6px_6px_0_#141414] transition-transform duration-300 group-hover:rotate-0 sm:w-32"
              : "absolute inset-x-0 top-5 mx-auto flex h-[calc(100%-2.5rem)] max-w-[14rem] flex-col border-2 border-border bg-paper p-1.5 shadow-[6px_6px_0_#141414] sm:max-w-[16rem]"
          }
        >
          <div className="mx-auto mb-1.5 h-1.5 w-8 rounded-full bg-foreground" />
          <div
            className={
              hasDesktop
                ? "h-44 bg-cover bg-top sm:h-52"
                : "min-h-0 flex-1 bg-cover bg-top"
            }
            style={{ backgroundImage: `url("${project.images.mobile}")` }}
            role="img"
            aria-label={`${project.title} mobile preview`}
          />
        </div>
      ) : null}

      {!primaryImage ? (
        <div className="flex h-64 items-center justify-center border border-dashed border-border font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Preview coming soon
        </div>
      ) : null}
    </div>
  );
}

export function WorksSection() {
  return (
    <SectionShell id="works">
      <MotionReveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected Works
        </h2>
      </MotionReveal>

      <div className="mt-8 grid gap-x-10 gap-y-14 lg:grid-cols-2">
        {projects.map((project, index) => (
          <MotionReveal
            key={project.title}
            transition={{ delay: Math.min(index * 0.03, 0.2) }}
            className="group"
          >
            <ProjectPreview project={project} />
            <div className="mt-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
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
