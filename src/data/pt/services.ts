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
    title: "Infraestrutura Industrial e IoT",
    description:
      "Instalação e manutenção de hardware de chão de fábrica, servidores e sensores IoT para integração perfeita com o ERP.",
    icon: Briefcase,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Integrações Personalizadas",
    description:
      "Conectores e módulos à medida para integrar o Hestia com a sua maquinaria existente e software legado.",
    icon: DollarSign,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Consultoria Estratégica",
    description:
      "Orientação estratégica sobre conformidade com o Passaporte Digital de Produto (DPP) e transformação digital.",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
