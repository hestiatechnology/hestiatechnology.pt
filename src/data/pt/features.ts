import { Eye, ShieldCheck, Sparkles } from "lucide-react";

export const features = [
  {
    title: "Conformidade Automatizada com o DPP",
    description:
      "O Hestia automatiza a recolha e o relato de dados para o Passaporte Digital de Produto da UE.",
    icon: ShieldCheck,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Validação de Dados com IA",
    description:
      "A nossa IA valida todos os dados que introduz, prevenindo erros dispendiosos.",
    icon: Sparkles,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Visibilidade da Produção em Tempo Real",
    description:
      "Saiba o estado de cada encomenda, sem ter de percorrer a fábrica ou verificar uma folha de cálculo.",
    icon: Eye,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];
