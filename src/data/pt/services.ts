import {
  BookOpen,
  Briefcase,
  DollarSign,
  Shirt,
  Truck,
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
    title: "Venda e manutenção de equipamentos informáticos",
    description:
      "Comercialização, instalação e manutenção de computadores, servidores e outros equipamentos informáticos.",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Software à medida",
    description:
      "Desenvolvimento de soluções de software personalizadas para as necessidades do seu negócio.",
    icon: DollarSign,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Consultoria",
    description:
      "Aconselhamento especializado em tecnologia, processos e transformação digital.",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
