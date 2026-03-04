import { useState, useEffect } from "react";
import Logo from "@/assets/HestiaTechnology.svg";
import LogoWhite from "@/assets/HestiaTechnologyWhite.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { translations } from "@/lib/translations";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  locale: keyof typeof translations;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync altUrl after mount to avoid SSR/client mismatch
    setAltUrl(window.location.pathname.replace(`/${locale}`, `/${altLocale}`));

    // Read initial dark mode state and watch for changes
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-4 z-50 w-full px-4 pointer-events-none pb-4">
      <header
        className={`pointer-events-auto mx-auto max-w-5xl border bg-background/70 backdrop-blur-md shadow-sm transition-all duration-200 ${
          mobileOpen ? "rounded-2xl" : "rounded-full"
        } px-6`}
      >
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <a
              href={`/${locale}`}
              className="text-primary hover:text-primary/90 transition-colors"
            >
              <img
                src={isDark ? LogoWhite.src : Logo.src}
                alt="Hestia Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 hidden md:flex">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all rounded-full py-1.5 px-4 text-sm font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
              {/* Language Switcher — Desktop */}
              <a
                href={altUrl}
                className="hidden md:inline-flex items-center justify-center h-9 w-10 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                aria-label={`Switch to ${altLocale === "en" ? "English" : "Português"}`}
              >
                {altLangLabel}
              </a>

              <Button
                asChild
                variant="default"
                size="sm"
                className="hidden md:inline-flex rounded-full px-5 h-9 font-medium shadow-none"
              >
                <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
              </Button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden flex items-center justify-center h-9 w-9 rounded-full hover:bg-muted/50 transition-colors"
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
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileOpen && (
          <nav className="md:hidden border-t pt-4 pb-4">
            <ul className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t flex items-center gap-2 px-1">
              <Button
                asChild
                variant="default"
                size="sm"
                className="flex-1 rounded-full font-medium"
              >
                <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
              </Button>
              <a
                href={altUrl}
                className="inline-flex items-center justify-center h-9 px-4 rounded-full text-xs font-semibold border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              >
                {altLangLabel}
              </a>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
