import { Zap, Brain, Globe, ShieldCheck } from "lucide-react";
import { ComplianceVisual } from "@/components/visuals/ComplianceVisual";
import { DPPVisual } from "@/components/visuals/DPPVisual";
import { RealTimeVisual } from "@/components/visuals/RealTimeVisual";
import { DashboardPreview } from "@/components/visuals/DashboardPreview";
import type { Feature } from "@/components/FeatureShowcase";

export const features: Feature[] = [
  {
    title: "Produção em Tempo Real",
    description:
      "Monitorize toda a sua linha de produção em tempo real. Identifique estrangulamentos instantaneamente e otimize a eficiência.",
    icon: Zap,
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: () => <RealTimeVisual />,
  },
  {
    title: "Insights por IA",
    description:
      "Aproveite a inteligência artificial para prever a procura, otimizar o inventário e reduzir o desperdício automaticamente.",
    icon: Brain,
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    renderVisual: () => <DashboardPreview />,
  },
  {
    title: "Conformidade Global",
    description:
      "Mantenha-se à frente das regulamentações. O Hestia atualiza-se automaticamente para garantir que está sempre em conformidade com as normas da UE e globais.",
    icon: Globe,
    bgColor: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    renderVisual: () => <ComplianceVisual />,
  },
  {
    title: "Passaporte Digital de Produto",
    description:
      "Gere e gerencie Passaportes Digitais de Produto de forma integrada, garantindo transparência e rastreabilidade para cada item.",
    icon: ShieldCheck,
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    renderVisual: () => <DPPVisual />,
  },
];
