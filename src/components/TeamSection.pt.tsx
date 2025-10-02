import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import CEO from "@/assets/CEO.jpg";

const teamMembers = [
  {
    name: "Daniel Pereira",
    role: "CEO & Co-Fundador",
    description:
      "Ex-Deloitte (SAP e ServiceNow), fundador reincidente com uma bolsa da General Motors. Focado em negócios com profundas conexões na indústria.",
    image: CEO.src,
    fallback: "DP",
  },
  {
    name: "Álvaro Fernandes",
    role: "CTO & Co-Fundador",
    description:
      "Ex-Inforcavado (concorrente), engenheiro full-stack com experiência em tecnologia moderna da 8x8 (empresa pública de SaaS).",
    image: null,
    fallback: "AF",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            A Nossa Equipa
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
            Conheça as mentes por trás do Hestia ERP.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  {member.image && (
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover"
                    />
                  )}
                  <AvatarFallback className="text-2xl">
                    {member.fallback}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
