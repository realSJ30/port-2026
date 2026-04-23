import { cn } from "@/utils/cn";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border px-6 py-12 sm:px-10 lg:px-16 lg:py-16",
        className,
      )}
    >
      {children}
    </section>
  );
}
