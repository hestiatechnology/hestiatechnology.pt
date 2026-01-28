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
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-bold text-lg">Hestia Technology</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/hestia-technology-pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t("footer.links.product")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`/${locale}/features`} className="hover:text-foreground transition-colors">{t("footer.nav.features")}</a></li>
              <li><a href={`/${locale}/prices`} className="hover:text-foreground transition-colors">{t("footer.nav.prices")}</a></li>
              <li><a href={`/${locale}/integrations`} className="hover:text-foreground transition-colors">{t("footer.nav.integrations")}</a></li>
              <li><a href={`/${locale}/dpp`} className="hover:text-foreground transition-colors">DPP</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.links.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`/${locale}/about`} className="hover:text-foreground transition-colors">{t("footer.nav.about")}</a></li>
              <li><a href={`/${locale}/blog`} className="hover:text-foreground transition-colors">{t("footer.nav.blog")}</a></li>
              <li><a href={`/${locale}/investments`} className="hover:text-foreground transition-colors">{t("footer.nav.investments")}</a></li>
              <li><a href={`/${locale}/contact`} className="hover:text-foreground transition-colors">{t("footer.nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.links.legal")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`/${locale}/privacy`} className="hover:text-foreground transition-colors">{t("footer.nav.privacy")}</a></li>
              <li><a href={`/${locale}/terms`} className="hover:text-foreground transition-colors">{t("footer.nav.terms")}</a></li>
              <li><a href={`/${locale}/faq`} className="hover:text-foreground transition-colors">{t("footer.nav.faq")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {t("footer.copyright").replace(
              "{currentYear}",
              currentYear.toString(),
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
