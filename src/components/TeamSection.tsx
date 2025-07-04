import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import CEO from "@/assets/CEO.jpg";

export default function TeamSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Avatar className="w-24 h-auto mx-auto mb-4">
            <AvatarImage src={CEO.src} alt="CEO" className="object-cover" />
            <AvatarFallback className="text-lg">CO</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mb-1">Daniel Alexis</h3>
          <Badge variant="secondary" className="mb-3">
            CEO & Co-Founder
          </Badge>
          <p className="text-muted-foreground text-sm">
            15 anos de experiência em tecnologia e liderança. Especialista em
            estratégia de produto e desenvolvimento de negócios.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
