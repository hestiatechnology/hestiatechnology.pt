import type React from "react";
import type { LucideIcon } from "lucide-react";
import { features as featuresPt } from "@/data/pt/features.tsx";
import { features as featuresEn } from "@/data/en/features.tsx";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  renderVisual?: () => React.ReactNode;
}

interface FeatureShowcaseProps {
  locale?: string;
  title: string;
  description: string;
  // Deprecated: features prop is no longer used directly to avoid serialization issues
  features?: Feature[]; 
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  locale = "en",
  title,
  description,
}) => {
  const currentFeatures = locale === "pt" ? featuresPt : featuresEn;

  return (
    <section className="py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-16 md:gap-32">
          {currentFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`aspect-[4/3] rounded-2xl border bg-muted/30 relative overflow-hidden group-hover:border-primary/30 transition-all duration-500 shadow-sm ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                  {feature.renderVisual ? (
                    <div className="w-full h-full">
                        {feature.renderVisual()}
                    </div>
                  ) : (
                    <>
                    <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-muted/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Icon className="w-32 h-32" />
                    </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
