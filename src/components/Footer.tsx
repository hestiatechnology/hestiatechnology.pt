import { Linkedin } from "lucide-react";
import { translations } from "@/lib/translations";

interface FooterProps {
  locale: keyof typeof translations;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  return (
    <footer className="bg-background text-foreground border-t">
      <div className="px-4 md:px-6">
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright").replace(
                "{currentYear}",
                currentYear.toString(),
              )}
            </p>
            <nav className="flex items-center gap-4">
              <a
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.nav.privacy")}
              </a>
              <a
                href={`/${locale}/terms`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("footer.nav.terms")}
              </a>
              <a
                href="https://www.linkedin.com/company/hestia-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
