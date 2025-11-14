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
      <div className="container mx-auto px-4 md:px-6">
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
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isReversed ? "md:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`space-y-4 ${isReversed ? "md:col-start-2" : ""}`}>
                  <div className="inline-block bg-primary/10 p-3 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">
                    {feature.description}
                  </p>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <video
                    autoplay
                    loop
                    muted
                    playsinline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://cdn.dribbble.com/userupload/12642457/file/original-100a4b8493117d721a001f2a0e3f5b89.mp4" type="video/mp4" />
                  </video>
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
