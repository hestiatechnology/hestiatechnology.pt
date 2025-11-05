import Logo from "@/assets/HestiaTechnologyWhite.svg";
import LogoNormal from "@/assets/HestiaTechnology.svg";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { translations } from "@/lib/translations";

interface FooterProps {
  locale: keyof typeof translations;
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { isDarkMode } = useTheme();

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className="flex flex-col gap-4">
            {isDarkMode ? (
              <img
                src={LogoNormal.src}
                alt="Hestia Logo"
                className="h-10 w-auto mr-auto"
                loading="lazy"
              />
            ) : (
              <img
                src={Logo.src}
                alt="Hestia Logo"
                className="h-10 w-auto mr-auto"
                loading="lazy"
              />
            )}

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Hestia Technology, Lda</p>
              <p>NIF: 518567680</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">{t("footer.links.quick")}</h3>
            <nav className="flex flex-col gap-2">
              <a
                href={`/${locale}`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.home")}
              </a>
              <a
                href={`/${locale}/prices`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.prices")}
              </a>
              <a
                href={`/${locale}/about`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.about")}
              </a>
              <a
                href={`/${locale}/contact`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.contact")}
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">{t("footer.links.legal")}</h3>
            <nav className="flex flex-col gap-2">
              <a
                href={`/${locale}/privacy`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.privacy")}
              </a>
              <a
                href={`/${locale}/terms`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.terms")}
              </a>
              <a
                href={`/${locale}/cookies`}
                className="hover:text-primary-foreground/80 transition-colors"
              >
                {t("footer.nav.cookies")}
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">
              {t("footer.links.contact")}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <p>Incubadora START@IPCA</p>
                  <p>Campus do IPCA, Lugar do Aldão</p>
                  <p>4750-810 Vila Frescainha (São Martinho)</p>
                  <p>Portugal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@hestiatechnology.pt"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  info@hestiatechnology.pt
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+351928251008"
                  className="hover:text-primary-foreground/80 transition-colors"
                >
                  +351 928 251 008
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              {t("footer.copyright").replace(
                "{currentYear}",
                currentYear.toString(),
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
