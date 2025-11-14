import type React from "react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

interface FeatureShowcaseProps {
  features: Feature[];
  title: string;
  description: string;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  features,
  title,
  description,
}) => {
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
        <div className="grid gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-4">
                  <div className="inline-block border p-3">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {feature.description}
                  </p>
                </div>
                <div className="aspect-video bg-muted border">
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
