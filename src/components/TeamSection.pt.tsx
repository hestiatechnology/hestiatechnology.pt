import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import CEO from "@/assets/CEO.jpg";
import { useId } from "react";

const teamMembers = [
  {
    name: "Daniel Pereira",
    role: "CEO & Co-Fundador",
    description:
      "Especialista em ERP Empresarial (Ex-Deloitte, SAP & ServiceNow). Fundador comprovado de uma startup de tecnologia climática apoiada pela GM. Especialista em arquitetura de backend e integração de dados complexos.",
    image: CEO.src,
    fallback: "DP",
  },
  {
    name: "Álvaro Fernandes",
    role: "CTO & Co-Fundador",
    description:
      "Conhecimento interno de um concorrente legado no sector do ERP têxtil. Experiência moderna em SaaS como engenheiro full-stack na 8x8 (uma empresa pública de SaaS). Profundo conhecimento das necessidades da indústria têxtil.",
    image: null,
    fallback: "AF",
  },
];

export default function TeamSection() {
  const teamId = useId();
  return (
    <section id={teamId} className="py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-tighter sm:text-4xl text-foreground">
            A Nossa Equipa
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
            Conheça as mentes por trás da Hestia.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="text-center border"
            >
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 rounded-none">
                  {member.image && (
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="object-cover rounded-none"
                    />
                  )}
                  <AvatarFallback className="text-2xl rounded-none">
                    {member.fallback}
                  </AvatarFallback>
                </Avatar>
                <h3 className=" text-xl mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3 border">
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
