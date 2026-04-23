import { useState, useEffect, useId } from "react";
import { translations } from "@/lib/translations";

import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import type { ModuleType } from "@/data/schemas";

interface FeatureCardProps {
  data: ModuleType;
  onSelect?: (data: ModuleType) => void;
  onUpdate?: (data: ModuleType) => void;
  isSelected?: boolean;
  showInfo?: boolean;
  locale: keyof typeof translations;
}

export default function FeatureCardSelect({
  data,
  onSelect,
  isSelected,
  showInfo,
  onUpdate,
  locale,
}: FeatureCardProps) {
  const counterId = useId();
  const [userCount, setUserCount] = useState(
    (data.includedUsers ?? 1) + (data.extraUsers ?? 0),
  );

  useEffect(() => {
    setUserCount((data.includedUsers ?? 1) + (data.extraUsers ?? 0));
  }, [data.includedUsers, data.extraUsers]);

  if (!data) {
    return null;
  }

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

  const includedList = [
    ...(data.includedUsers ? [`${data.includedUsers} Utilizadores`] : []),
    ...(data.information?.included ?? []),
  ];

  //const extraUsers = userCount - (data.includedUsers ?? 1);

  //const extraPrice =
  //  extraUsers > 0 && data.pricePerUser ? extraUsers * data.pricePerUser : 0;

  return (
    <Card
      className={cn(
        "border shadow-lg hover:shadow-xl transition-shadow z-20",
        isSelected ? "border-2 border-primary border-solid" : "border-border",
        data.disabled && "bg-muted",
      )}
      onClick={!data.disabled ? () => onSelect?.(data) : undefined}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 ${data.bgColor} rounded-lg flex items-center justify-center mb-4 ${
              isSelected ? "ring-2 ring-primary" : ""
            }`}
          >
            <data.icon className={`h-6 w-6 ${data.iconColor}`} />
          </div>

          {data.disabled && <Badge>{t("pricing.coming_soon")}</Badge>}

          {showInfo && (
            <div className="flex items-center gap-x-3">
              <p className="text-xl">
                {data.price}
                <span className="text-sm text-foreground">
                  {t("pricing.per_year")}
                </span>
              </p>
              {userCount > (data.includedUsers ?? 1) && data.pricePerUser && (
                <span className="block text-sm text-primary font-medium mt-1">
                  +{(userCount - (data.includedUsers ?? 1)) * data.pricePerUser}
                  {t("pricing.per_year")}
                </span>
              )}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Badge
                    className="h-7 min-w-7 rounded-full px-1 tabular-nums"
                    variant="default"
                  >
                    <Info />
                  </Badge>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between gap-4">
                    <div className="space-y-1">
                      <h1 className="text-md">
                        {data.information?.title}
                      </h1>
                      <ul>
                        {includedList.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <span className="text-sm text-muted-foreground">
                        {data.information?.comment}
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )}
        </div>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      {!data.disabled && isSelected && (
        <CardContent>
          <div className="flex items-center justify-center gap-x-2">
            <div className="flex items-center gap-x-2">
              <Label htmlFor={counterId}>Utilizadores</Label>
              <Input
                id={counterId}
                value={userCount}
                readOnly
                className="text-center"
                aria-live="polite"
              />
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                const newCount = Math.max(1, userCount - 1);
                setUserCount(newCount);
                const newExtraUsers = newCount - (data.includedUsers ?? 1);
                const newExtraPrice =
                  newExtraUsers > 0 && data.pricePerUser
                    ? newExtraUsers * data.pricePerUser
                    : 0;
                onUpdate?.({
                  ...data,
                  extraUsers: newExtraUsers,
                  extraPrice: newExtraPrice,
                });
              }}
              aria-label="Remover utilizador"
              disabled={userCount <= 1}
            >
              -
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                const newCount = userCount + 1;
                setUserCount(newCount);
                const newExtraUsers = newCount - (data.includedUsers ?? 1);
                const newExtraPrice =
                  newExtraUsers > 0 && data.pricePerUser
                    ? newExtraUsers * data.pricePerUser
                    : 0;
                onUpdate?.({
                  ...data,
                  extraUsers: newExtraUsers,
                  extraPrice: newExtraPrice,
                });
              }}
              aria-label="Adicionar utilizador"
            >
              +
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
