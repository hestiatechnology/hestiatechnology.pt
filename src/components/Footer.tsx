import { Linkedin, Instagram, Facebook } from "lucide-react";
import { translations } from "@/lib/translations";
import CTAHome from "@/components/home/CTAHome";

interface FooterProps {
  locale: keyof typeof translations;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  return (
    <footer className="bg-background text-foreground">
      <CTAHome />

      {/* Footer body */}
      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 md:col-span-1 space-y-5">
              <h3 className="font-heading text-base">
                Hestia Technology
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("footer.description")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/hestia-technology-pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/hestiatechnology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/hestiatechnology.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">
                {t("footer.links.product")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    href: `/${locale}/features`,
                    label: t("footer.nav.features"),
                  },
                  {
                    href: `/${locale}/prices`,
                    label: t("footer.nav.prices"),
                  },
                  {
                    href: `/${locale}/integrations`,
                    label: t("footer.nav.integrations"),
                  },
                  { href: `/${locale}/dpp`, label: "DPP" },
                  { href: `/${locale}/migration`, label: t("footer.nav.migration") },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">
                {t("footer.links.company")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    href: `/${locale}/about`,
                    label: t("footer.nav.about"),
                  },
                  {
                    href: `/${locale}/blog`,
                    label: t("footer.nav.blog"),
                  },
                  {
                    href: `/${locale}/contact`,
                    label: t("footer.nav.contact"),
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-5">
                {t("footer.links.legal")}
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    href: `/${locale}/privacy`,
                    label: t("footer.nav.privacy"),
                  },
                  {
                    href: `/${locale}/terms`,
                    label: t("footer.nav.terms"),
                  },
                  {
                    href: `/${locale}/faq`,
                    label: t("footer.nav.faq"),
                  },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              {t("footer.copyright").replace(
                "{currentYear}",
                currentYear.toString(),
              )}
            </p>
            <p className="text-xs text-muted-foreground">
              Barcelos, Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
