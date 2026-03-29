import {
  Brain,
  Cpu,
  Database,
  FileText,
  Layers,
  Plug,
  ShieldCheck,
  BarChart3,
  Sparkles,
} from "lucide-react";

const content = {
  en: {
    label: "Platform",
    heading: "An Extensible Platform, Not a Closed Tool",
    description:
      "Hestia is built API-first with an open architecture designed for an ecosystem of integrations and modules. Today it powers your factory — tomorrow it connects your entire supply chain.",
    topLabel: "Intelligence",
    topItems: [
      { label: "AI Analytics", icon: Brain },
      { label: "Predictions", icon: BarChart3 },
      { label: "Automation", icon: Sparkles },
    ],
    midLabel: "Built-in Capabilities",
    midItems: [
      { label: "Production", icon: Cpu },
      { label: "Compliance", icon: ShieldCheck },
      { label: "DPP", icon: FileText },
      { label: "IoT", icon: Plug },
    ],
    botLabel: "Hestia Core",
    botSubs: ["Data Layer", "Integrations Engine", "RESTful API", "Webhooks"],
  },
  pt: {
    label: "Plataforma",
    heading: "Uma Plataforma Extensível, Não Uma Ferramenta Fechada",
    description:
      "A Hestia é construída API-first com uma arquitetura aberta pensada para um ecossistema de integrações e módulos. Hoje opera a sua fábrica — amanhã conecta toda a sua cadeia de abastecimento.",
    topLabel: "Inteligência",
    topItems: [
      { label: "Análise IA", icon: Brain },
      { label: "Previsões", icon: BarChart3 },
      { label: "Automação", icon: Sparkles },
    ],
    midLabel: "Funcionalidades Nativas",
    midItems: [
      { label: "Produção", icon: Cpu },
      { label: "Conformidade", icon: ShieldCheck },
      { label: "DPP", icon: FileText },
      { label: "IoT", icon: Plug },
    ],
    botLabel: "Hestia Core",
    botSubs: [
      "Camada de Dados",
      "Motor de Integrações",
      "API RESTful",
      "Webhooks",
    ],
  },
};

interface EcosystemSectionProps {
  locale: "en" | "pt";
}

export function EcosystemSection({ locale }: EcosystemSectionProps) {
  const t = content[locale];

  return (
    <section className="py-20 md:py-28 bg-muted/20 border-y border-border/60">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">
              {t.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
              {t.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {t.description}
            </p>
          </div>

          {/* Right: layered architecture */}
          <div className="flex flex-col gap-3">
            {/* Top layer — Intelligence */}
            <div className="relative">
              <div className="border border-primary/25 bg-primary/[0.04] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {t.topLabel}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {t.topItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl bg-background/60 border border-border/60"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-foreground/80 text-center leading-tight">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-4 bg-border" />
            </div>

            {/* Middle layer — Built-in Capabilities */}
            <div className="border border-border rounded-2xl p-5 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/30" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {t.midLabel}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {t.midItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2.5 py-4 px-3 rounded-xl border border-border/60 bg-background/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-foreground/80 text-center">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-4 bg-border" />
            </div>

            {/* Bottom layer — Hestia Core */}
            <div className="relative border-2 border-primary/20 rounded-2xl p-5 bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] overflow-hidden">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {t.botLabel}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.botSubs.map((sub) => (
                    <span
                      key={sub}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70 bg-background/70 border border-border/60 rounded-full px-3 py-1.5"
                    >
                      <Database className="w-3 h-3 text-primary/60" />
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
