import { useState, useEffect } from "react";
import Logo from "@/assets/HestiaTechnology.svg";
import LogoWhite from "@/assets/HestiaTechnologyWhite.svg";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  locale: keyof typeof translations;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  const navigationLinks = [
    { href: `/${locale}`, label: t("header.nav.home") },
    { href: `/${locale}/features`, label: t("header.nav.features") },
    { href: `/${locale}/prices`, label: t("header.nav.prices") },
    { href: `/${locale}/about`, label: t("header.nav.about") },
    { href: `/${locale}/blog`, label: t("header.nav.blog") },
  ];

  const altLocale = locale === "en" ? "pt" : "en";
  const altLangLabel = locale === "en" ? "PT" : "EN";

  const [altUrl, setAltUrl] = useState(`/${altLocale}`);

  useEffect(() => {
    setAltUrl(window.location.pathname.replace(`/${locale}`, `/${altLocale}`));

    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <header
        className={`w-full border-b transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-border/60 shadow-sm"
            : "bg-background/0 backdrop-blur-0 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex h-16 items-center justify-between gap-6">
            {/* Logo */}
            <a
              href={`/${locale}`}
              className="flex items-center shrink-0 hover:opacity-80 transition-opacity"
            >
              <img
                src={Logo.src}
                alt="Hestia"
                className="h-7 w-auto block dark:hidden"
              />
              <img
                src={LogoWhite.src}
                alt="Hestia"
                className="h-7 w-auto hidden dark:block"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href={altUrl}
                className="inline-flex items-center justify-center h-8 w-9 rounded-lg text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                aria-label={`Switch to ${altLocale === "en" ? "English" : "Português"}`}
              >
                {altLangLabel}
              </a>
              <Button
                asChild
                variant="default"
                size="sm"
                className="rounded-lg px-4 h-8 font-medium text-sm shadow-none"
              >
                <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg hover:bg-muted/50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={t("header.mobile_nav_toggle")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-border/60 flex items-center gap-2 mt-2">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="flex-1 rounded-lg font-medium"
                >
                  <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
                </Button>
                <a
                  href={altUrl}
                  className="inline-flex items-center justify-center h-9 px-4 rounded-lg text-xs font-semibold border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  {altLangLabel}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
