import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import IPCA from "@/assets/ipca_cor.png";

export default function TeamSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src={IPCA.src} alt="CEO" />
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mb-1">João Silva</h3>
          <Badge variant="secondary" className="mb-3">
            CEO & Co-Founder
          </Badge>
          <p className="text-muted-foreground text-sm">
            15 anos de experiência em tecnologia e liderança. Especialista em
            estratégia de produto e desenvolvimento de negócios.
          </p>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src={IPCA.src} alt="CTO" />
            <AvatarFallback className="text-lg">MS</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mb-1">Maria Santos</h3>
          <Badge variant="secondary" className="mb-3">
            CTO & Co-Founder
          </Badge>
          <p className="text-muted-foreground text-sm">
            Engenheira de software com paixão por arquiteturas escaláveis. PhD
            em Ciências da Computação e 12 anos de experiência.
          </p>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <Avatar className="w-24 h-24 mx-auto mb-4">
            <AvatarImage src={IPCA.src} alt="CPO" />
            <AvatarFallback className="text-lg">PC</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg mb-1">Pedro Costa</h3>
          <Badge variant="secondary" className="mb-3">
            Head of Product
          </Badge>
          <p className="text-muted-foreground text-sm">
            Designer de produto com foco em UX/UI. 10 anos criando experiências
            digitais memoráveis para startups e grandes empresas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
