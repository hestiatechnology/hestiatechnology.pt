import type { ModuleType } from "@/data/features";
import { persistentAtom } from "@nanostores/persistent";
import {
  BookOpen,
  Briefcase,
  DollarSign,
  Shirt,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { atom } from "nanostores";

const iconMap: Record<string, LucideIcon> = {
  DollarSign,
  Shirt,
  Truck,
  Users,
  Briefcase,
  BookOpen,
};

const getInitialModules = (): ModuleType[] => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("selected-modules");
      if (stored) {
        const parsed = JSON.parse(stored);
        // Restore icon components
        return parsed.map((module: any) => ({
          ...module,
          icon: iconMap[module.icon as keyof typeof iconMap] || DollarSign,
        }));
      }
    } catch {
      return [];
    }
  }
  return [];
};

export const $selectedModules = atom<ModuleType[]>(getInitialModules());

if (typeof window !== "undefined") {
  $selectedModules.subscribe((modules) => {
    // Store icon names instead of components
    const serializableModules = modules.map((module) => ({
      ...module,
      icon: module.icon.name || "DollarSign",
    }));
    localStorage.setItem(
      "selected-modules",
      JSON.stringify(serializableModules)
    );
  });
}

export function addModule(module: ModuleType) {
  $selectedModules.set([...$selectedModules.get(), module]);
}

export function removeModule(module: ModuleType) {
  $selectedModules.set(
    $selectedModules.get().filter((m) => m.title !== module.title)
  );
}

export function updateModule(updatedModule: ModuleType) {
  $selectedModules.set(
    $selectedModules
      .get()
      .map((m) => (m.title === updatedModule.title ? updatedModule : m))
  );
}
