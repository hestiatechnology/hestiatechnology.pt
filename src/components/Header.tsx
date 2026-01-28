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

interface HeaderProps {
  locale: keyof typeof translations;
}

export default function Header({ locale }: HeaderProps) {
  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  const navigationLinks = [
    { href: `/${locale}`, label: t("header.nav.home") },
    { href: `/${locale}/features`, label: t("header.nav.features") },
    { href: `/${locale}/prices`, label: t("header.nav.prices") },
    { href: `/${locale}/about`, label: t("header.nav.about") },
  ];

  return (
    <div className="sticky top-4 z-50 w-full px-4 pointer-events-none pb-4">
      <header className="pointer-events-auto mx-auto max-w-5xl border bg-background/70 backdrop-blur-md rounded-full px-6 shadow-sm">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href={`/${locale}`} className="text-primary hover:text-primary/90 transition-colors">
              <img
                src={Logo.src}
                alt="Hestia Logo"
                className="h-8 w-auto dark:hidden"
              />
              <img
                src={LogoWhite.src}
                alt="Hestia Logo"
                className="h-8 w-auto hidden dark:block"
              />
            </a>
          </div>

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
              <Button asChild variant="default" size="sm" className="rounded-full px-5 h-9 font-medium shadow-none">
                <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
