import type { ModuleType } from "@/data/schemas";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { DollarSign, Info, Plus, Users } from "lucide-react";
import { Separator } from "./ui/separator";
import { useStore } from "@nanostores/react";
import { $selectedModules } from "@/states/modules";
import { translations } from "@/lib/translations";

interface PricingBudgetProps {
  locale: keyof typeof translations;
}

export default function PricingBudget({ locale }: PricingBudgetProps) {
  const selectedModules = useStore($selectedModules);

  const t = (
    key: keyof (typeof translations)[typeof locale],
    replacements?: { [key: string]: string | number },
  ) => {
    let translation = translations[locale][key] || translations["en"][key];
    if (replacements) {
      for (const [placeholder, value] of Object.entries(replacements)) {
        translation = translation.replace(`{${placeholder}}`, String(value));
      }
    }
    return translation;
  };

  const calculateModuleTotal = (module: ModuleType) => {
    let total = module.price || 0;
    if (module.extraPrice) {
      total += module.extraPrice;
    }
    return total;
  };

  const grandTotal = selectedModules.reduce(
    (sum, module) => sum + calculateModuleTotal(module),
    0,
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          {t("budget.title")}
        </h1>
        <p className="text-muted-foreground">{t("budget.description")}</p>
      </div>
      <div className="space-y-4">
        {selectedModules.map((module, index) => {
          const moduleTotal = calculateModuleTotal(module);
          const IconComponent = module.icon;

          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${module.bgColor}`}>
                      <IconComponent
                        className={`w-5 h-5 ${module.iconColor}`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-lg font-semibold px-3 py-1"
                  >
                    €{moduleTotal.toFixed(2)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  {module.price && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">
                          {t("budget.base_price")}
                        </span>
                      </div>
                      <span className="font-medium">
                        €{module.price.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Included Users */}
                  {module.includedUsers && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">
                          {t("budget.included_users")}
                        </span>
                      </div>
                      <span className="font-medium">
                        {module.includedUsers}
                      </span>
                    </div>
                  )}

                  {/* Extra Price (includes extra users if any) */}
                  {module.extraPrice && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Plus className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">
                          {module.extraUsers
                            ? t("budget.extra_users", {
                                count: module.extraUsers,
                              })
                            : t("budget.extras")}
                        </span>
                      </div>
                      <span className="font-medium">
                        €{module.extraPrice.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {/* Module Information */}
                  {module.information && (
                    <div className="mt-4 pt-3 border-t border-border">
                      <div className="flex items-start space-x-2">
                        <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-foreground mb-1">
                            {module.information.title}
                          </h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {module.information.included.map(
                              (item: string, idx: number) => (
                                <li
                                  key={idx}
                                  className="flex items-center space-x-1"
                                >
                                  <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                                  <span>{item}</span>
                                </li>
                              ),
                            )}
                          </ul>
                          {module.information.comment && (
                            <p className="text-xs text-muted-foreground mt-2 italic">
                              {module.information.comment}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Total Summary */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {t("budget.total_budget")}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {selectedModules.length} {t("budget.module")}
                {selectedModules.length !== 1 ? t("budget.plural_suffix") : ""}{" "}
                {t("budget.selected")}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">
                €{grandTotal.toFixed(2)}
              </div>
              <p className="text-sm text-primary">{t("budget.per_year")}</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">
                {selectedModules.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("budget.modules")}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {selectedModules.reduce(
                  (sum, m) =>
                    sum + (m.includedUsers || 0) + (m.extraUsers || 0),
                  0,
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {t("budget.users")}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                €{grandTotal.toFixed(2)}
              </div>
              <div className="text-sm text-primary">{t("budget.annual")}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
