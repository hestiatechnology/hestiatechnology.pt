import {
  BookOpen,
  Briefcase,
  DollarSign,
  Shirt,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { z } from "zod";

export const moduleTypeSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.any(),
  bgColor: z.string(),
  iconColor: z.string(),
  price: z.number().optional(),
  includedUsers: z.number().optional(),
  pricePerUser: z.number().optional(),
  extraUsers: z.number().optional(),
  extraPrice: z.number().optional(),
  disabled: z.boolean().optional(),
  information: z
    .object({
      title: z.string(),
      included: z.array(z.string()),
      comment: z.string().optional(),
    })
    .optional(),
});

export type ModuleType = z.infer<typeof moduleTypeSchema>;

export const Modules: ModuleType[] = [
  {
    title: "Faturação",
    description:
      "Gestão de faturação, emissão de faturas, recibos e notas de crédito.",
    icon: DollarSign,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    information: {
      title: "Incluído",
      included: ["Suporte Base", "Formação Incluida"],
    },
    price: 75,
    includedUsers: 5,
    pricePerUser: 5,
  },
  {
    title: "Têxtil",
    description:
      "Gestão de processos têxteis, produção, ordens de fabrico e stocks.",
    icon: Shirt,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    price: 1300,
    includedUsers: 5,
    pricePerUser: 5,
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
