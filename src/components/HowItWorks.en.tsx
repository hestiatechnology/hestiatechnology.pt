import { ArrowRight, Box, BarChart, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Simple implementation, immediate results. Transform your factory in 3 steps.</p>
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
            <h3 className="text-xl font-bold mb-3">Connect Your Data</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              We integrate with your existing machines and systems without disrupting production.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="relative w-24 h-24 rounded-2xl bg-background border shadow-lg flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                <BarChart className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">2</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Analyze in Real-Time</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              Our AI dashboard identifies inefficiencies and suggests optimizations instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
             <div className="relative w-24 h-24 rounded-2xl bg-background border shadow-lg flex items-center justify-center mb-6 group hover:scale-105 transition-transform duration-300">
                <CheckCircle2 className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">3</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Scale with Compliance</h3>
            <p className="text-muted-foreground text-sm max-w-[250px]">
              Generate Digital Passports automatically and expand into new markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
