import type { ModuleType } from "@/data/features";
import { atom } from "nanostores";

export const $selectedModules = atom<ModuleType[]>([]);

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
