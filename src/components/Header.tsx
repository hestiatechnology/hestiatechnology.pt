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
    { href: `/${locale}/services`, label: t("header.nav.services") },
    { href: `/${locale}/prices`, label: t("header.nav.prices") },
    { href: `/${locale}/about`, label: t("header.nav.about") },
  ];

  return (
    <header className="border-b bg-background sticky top-0 z-50 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a
            href={`/${locale}`}
            className="text-primary hover:text-primary/90"
          >
            <img
              src={LogoWhite.src}
              alt="Hestia Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-muted-foreground hover:text-primary py-1.5 font-medium px-4"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="text-sm">
              <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
