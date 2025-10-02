import {
  Briefcase,
  DollarSign,
  Users,
  type LucideIcon,
} from "lucide-react";

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
    title: "Sale and maintenance of computer equipment",
    description:
      "Sale, installation, and maintenance of computers, servers, and other computer equipment.",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Custom Software",
    description:
      "Development of custom software solutions for your business needs.",
    icon: DollarSign,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Consulting",
    description:
      "Specialized advice on technology, processes, and digital transformation.",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
