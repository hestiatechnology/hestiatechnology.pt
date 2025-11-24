import { Briefcase, DollarSign, Users, type LucideIcon } from "lucide-react";

export interface ServiceType {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  disabled?: boolean;
}

export const ServicesList: ServiceType[] = [
  {
    title: "Industrial Infrastructure & IoT",
    description:
      "Setup and maintenance of factory-floor hardware, servers, and IoT sensors for seamless ERP integration.",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Custom Integrations",
    description:
      "Tailored connectors and modules to integrate Hestia with your existing machinery and legacy software.",
    icon: DollarSign,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Strategic Consulting",
    description:
      "Strategic guidance on Digital Product Passport (DPP) compliance and digital transformation.",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
