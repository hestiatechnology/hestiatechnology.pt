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
        "border shadow-lg hover:shadow-xl transition-shadow",
        data.disabled && "bg-secondary"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 ${data.bgColor} rounded-lg flex items-center justify-center mb-4`}
          >
            <data.icon className={`h-6 w-6 ${data.iconColor}`} />
          </div>

          {data.disabled && <Badge>Em breve</Badge>}
        </div>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
