import { Play } from "lucide-react";

const content = {
  en: {
    label: "Product Demo",
    heading: "See Hestia in Action",
    coming: "Video coming soon",
  },
  pt: {
    label: "Demonstração",
    heading: "Veja a Hestia em Ação",
    coming: "Vídeo em breve",
  },
};

interface DemoVideoSectionProps {
  locale: "en" | "pt";
  videoUrl?: string;
}

export function DemoVideoSection({ locale, videoUrl }: DemoVideoSectionProps) {
  const t = content[locale];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-widest text-primary mb-4">
            {t.label}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-tight">
            {t.heading}
          </h2>
        </div>

        {videoUrl ? (
          <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={t.heading}
            />
          </div>
        ) : (
          <div className="aspect-video rounded-2xl bg-[#0D1A3A] border border-border/30 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative flex flex-col items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Play className="w-7 h-7 md:w-8 md:h-8 text-white/60 ml-1" />
              </div>
              <p className="text-white/40 text-sm font-medium tracking-wide uppercase">
                {t.coming}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
