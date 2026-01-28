import { Zap, Brain, Globe, ShieldCheck } from "lucide-react";
import { ComplianceVisual } from "@/components/visuals/ComplianceVisual";
import { DPPVisual } from "@/components/visuals/DPPVisual";
import { RealTimeVisual } from "@/components/visuals/RealTimeVisual";
import { DashboardPreview } from "@/components/visuals/DashboardPreview";
import type { Feature } from "@/components/FeatureShowcase";

export const features: Feature[] = [
  {
    title: "Real-Time Production",
    description:
      "Monitor your entire production line in real-time. Identify bottlenecks instantly and optimize efficiency.",
    icon: Zap,
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    renderVisual: () => <RealTimeVisual />,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Leverage artificial intelligence to predict demand, optimize inventory, and reduce waste automatically.",
    icon: Brain,
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    renderVisual: () => <DashboardPreview />,
  },
  {
    title: "Global Compliance",
    description:
      "Stay ahead of regulations. Hestia automatically updates to ensure you're always compliant with EU and global standards.",
    icon: Globe,
    bgColor: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400",
    renderVisual: () => <ComplianceVisual />,
  },
  {
    title: "Digital Product Passport",
    description:
      "Generate and manage Digital Product Passports seamlessly, ensuring transparency and traceability for every item.",
    icon: ShieldCheck,
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    renderVisual: () => <DPPVisual />,
  },
];
