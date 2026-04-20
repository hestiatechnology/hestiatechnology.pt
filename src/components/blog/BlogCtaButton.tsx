import { ArrowRight } from "lucide-react";

type BlogCtaButtonProps = {
  href: string;
  label: string;
};

export function BlogCtaButton({ href, label }: BlogCtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground no-underline transition-all hover:bg-primary/90 sm:w-auto"
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </a>
  );
}
