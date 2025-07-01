import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import type { ModuleType } from "@/data/features";

interface FeatureCardProps {
  data: ModuleType;
}

export default function FeatureCard({ data }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "border shadow-lg hover:shadow-xl transition-shadow z-50",
        data.disabled && "bg-muted"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 ${data.bgColor} rounded-lg flex items-center justify-center mb-4`}
            // TODO: Consider using bg-primary or bg-muted if data.bgColor is not a CSS variable
          >
            <data.icon
              className={`h-6 w-6 ${data.iconColor}`} /* TODO: Consider using text-primary or text-foreground if data.iconColor is not a CSS variable */
            />
          </div>

          {data.disabled && <Badge>Em breve</Badge>}
        </div>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
