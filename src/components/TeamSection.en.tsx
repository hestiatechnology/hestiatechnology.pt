import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import CEO from "@/assets/CEO.jpg";
import { useId } from "react";

const teamMembers = [
  {
    name: "Daniel Pereira",
    role: "CEO & Co-Founder",
    description:
      "Enterprise ERP Expert (Ex-Deloitte, SAP & ServiceNow). Proven Founder of a GM-backed climate tech startup. Expert in backend architecture and complex data integration.",
    image: CEO.src,
    fallback: "DP",
  },
  {
    name: "Álvaro Fernandes",
    role: "CTO & Co-Founder",
    description:
      "Insider knowledge from Protextil (legacy competitor). Modern SaaS experience as a full-stack engineer at 8x8 (a public SaaS company). Deep understanding of the textile industry's needs.",
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            Our Team
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
            Meet the minds behind Hestia ERP.
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
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
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
