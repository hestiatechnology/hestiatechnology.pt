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
    title: "Faturação",
    description:
      "Gestão de faturação, emissão de faturas, recibos e notas de crédito.",
    icon: DollarSign,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Têxtil",
    description:
      "Gestão de processos têxteis, produção, ordens de fabrico e stocks.",
    icon: Shirt,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Logística",
    description:
      "Gestão de armazéns, expedição, receção e inventário de mercadorias.",
    icon: Truck,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    disabled: true,
  },
  {
    title: "Recursos Humanos",
    description:
      "Gestão de funcionários, processamento salarial e assiduidade.",
    icon: Users,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    disabled: true,
  },
  {
    title: "Financeiro",
    description: "Controlo financeiro, tesouraria, contas a pagar e a receber.",
    icon: Briefcase,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    disabled: true,
  },
  {
    title: "Contabilidade",
    description:
      "Gestão contabilística, lançamentos, balancetes e relatórios fiscais.",
    icon: BookOpen,
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
    disabled: true,
  },
];
