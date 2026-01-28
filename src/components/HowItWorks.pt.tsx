import { ArrowRight, Box, BarChart, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground">Implementação simples, resultados imediatos. Transforme a sua fábrica em 3 passos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative w-24 h-24 rounded-2xl bg-background border shadow-lg flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                <Box className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">1</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Conecte os Dados</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              Integramos com as suas máquinas e sistemas atuais sem interromper a produção.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="relative w-24 h-24 rounded-2xl bg-background border shadow-lg flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                <BarChart className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">2</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Analise em Tempo Real</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              O nosso painel IA identifica ineficiências e sugere otimizações instantâneas.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="relative w-24 h-24 rounded-2xl bg-background border shadow-lg flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">3</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Escale com Conformidade</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              Gere Passaportes Digitais automaticamente e expanda para novos mercados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
