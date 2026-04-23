import { Plug, ScanLine, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Data",
    description:
      "We integrate with your existing machines and systems without disrupting production. Setup in hours, not weeks.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Analyze in Real-Time",
    description:
      "Our AI dashboard identifies inefficiencies and suggests optimizations instantly. Full shop floor visibility.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Scale with Compliance",
    description:
      "Generate Digital Passports automatically and expand into new markets. Automatic regulatory updates included.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] uppercase tracking-widest text-primary mb-4">
              The Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Simple implementation, immediate results. Transform your factory in 3 steps.
            </p>
          </div>

          {/* Right: steps */}
          <div className="space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`flex gap-8 py-10 ${i < steps.length - 1 ? "border-b border-border/60" : ""}`}
                >
                  <div className="shrink-0 pt-1">
                    <span className="font-heading text-4xl text-muted-foreground/20 tabular-nums leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
