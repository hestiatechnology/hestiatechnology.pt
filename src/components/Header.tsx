import Logo from "@/assets/HestiaTechnology.svg";
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
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "@/hooks/useTheme";
import { translations } from "@/lib/translations";
import { Globe } from "lucide-react";

interface HeaderProps {
  locale: keyof typeof translations;
}

export default function Header({ locale }: HeaderProps) {
  const { isDarkMode } = useTheme();

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
    <header className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky bottom-0 z-50 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{t("header.mobile_nav_toggle")}</title>
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink href={link.href} className="py-1.5">
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <div className="flex items-center gap-6">
            <a
              href={`/${locale}`}
              className="text-primary hover:text-primary/90"
            >
              <img
                src={isDarkMode ? LogoWhite.src : Logo.src}
                alt="Hestia Logo"
                className="h-10 w-auto"
              />
            </a>

            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="text-sm">
            <a href={`/${locale}/contact`}>{t("header.button.contact")}</a>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <a href={`/${locale}/contact`}>{t("header.button.signin")}</a>
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-36 p-1">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
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
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
