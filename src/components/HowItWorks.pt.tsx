import { Plug, ScanLine, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Conecte os Dados",
    description:
      "Integramos com as suas máquinas e sistemas atuais sem interromper a produção. Configuração em horas, não semanas.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "Analise em Tempo Real",
    description:
      "O nosso painel IA identifica ineficiências e sugere otimizações instantâneas. Visibilidade total das operações têxteis.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Escale com Conformidade",
    description:
      "Gere Passaportes Digitais automaticamente e expanda para novos mercados. Atualizações regulatórias automáticas incluídas.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-4">
              O Processo
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementação simples, resultados imediatos. Transforme a sua empresa têxtil em 3 passos.
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
                    <span className="font-heading text-4xl font-bold text-muted-foreground/20 tabular-nums leading-none">
                      {step.number}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">{step.title}</h3>
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
