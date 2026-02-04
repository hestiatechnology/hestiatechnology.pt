import React, { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { MousePointer2, ChevronDown } from "lucide-react";
import { features as featuresPt } from "@/data/pt/features.tsx";
import { features as featuresEn } from "@/data/en/features.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphingDevice } from "@/components/visuals/MorphingDevice";

gsap.registerPlugin(ScrollTrigger);

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
  features?: Feature[]; 
}

const getDeviceState = (index: number): "laptop" | "tablet" | "phone" => {
    switch (index) {
        case 0: return 'laptop';
        case 1: return 'laptop';
        case 2: return 'tablet';
        case 3: return 'phone';
        default: return 'laptop';
    }
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  locale = "en",
  title,
  description,
}) => {
  const currentFeatures = locale === "pt" ? featuresPt : featuresEn;
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveFeature(index);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentFeatures]);

  // Text Entrance Animations
  useEffect(() => {
    const rows = containerRef.current?.querySelectorAll(".feature-text");
    
    if (rows) {
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, [currentFeatures]);

  return (
    <section className="py-12 md:py-24" ref={containerRef}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Left Column: Scrollable Text (Desktop) / Stacked (Mobile) */}
          <div className="w-full md:w-1/2 space-y-24 md:space-y-48 pb-20">
            {currentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  data-index={index}
                  className={`feature-text group flex flex-col justify-center transition-all duration-500 md:min-h-[40vh] ${
                    activeFeature === index ? "md:opacity-100" : "md:opacity-30 md:blur-[1px]"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Mobile Only: Show visual inline */}
                    <div className="md:hidden mt-8 aspect-square rounded-2xl border bg-muted/30 relative overflow-hidden">
                       {feature.renderVisual ? feature.renderVisual() : null}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Scroll Hint */}
            <div className={`hidden md:flex items-center gap-3 text-muted-foreground/60 transition-all duration-700 fixed bottom-12 left-[calc(50%-12rem)] md:left-[8%] z-10 ${activeFeature > 0 ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 animate-bounce'}`}>
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary/60 rounded-full animate-scroll"></div>
                </div>
                <span className="text-xs font-medium uppercase tracking-widest">Scroll to explore</span>
            </div>
          </div>

          {/* Right Column: Sticky Morphing Device (Desktop Only) */}
          <div className="hidden md:flex w-1/2 sticky top-24 h-[80vh] items-center justify-center">
             <div className="w-full h-full relative">
                {/* Background Blob/Glow */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <MorphingDevice state={getDeviceState(activeFeature)}>
                    <div className="w-full h-full relative">
                        {/* We can transition content here too if we want a crossfade, 
                            but for now direct switch is okay or maybe a simple key-based mount */}
                        <div key={activeFeature} className="w-full h-full animate-fade-in">
                            {currentFeatures[activeFeature].renderVisual ? currentFeatures[activeFeature].renderVisual() : null}
                        </div>
                    </div>
                </MorphingDevice>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;




