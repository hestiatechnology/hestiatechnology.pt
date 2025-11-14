import LogoWhite from "@/assets/HestiaTechnologyWhite.svg";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { translations } from "@/lib/translations";
import { Globe } from "lucide-react";

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
    <header className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 px-4 md:px-6">
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
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-48 p-2">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                  <hr className="w-full my-2 border-border" />
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink href="/en" className="py-1.5">
                      English
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <NavigationMenuLink href="/pt" className="py-1.5">
                      Português
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <hr className="w-full my-2 border-border" />
                  <div className="flex w-full gap-2">
                    <Button asChild variant="outline" size="sm" className="text-sm w-full">
                      <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
                    </Button>
                    <Button asChild size="sm" className="text-sm w-full">
                      <a href={`/${locale}/contact`}>{t("header.button.signin")}</a>
                    </Button>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
