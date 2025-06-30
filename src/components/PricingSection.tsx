import { useStore } from "@nanostores/react";

import { Modules, type ModuleType } from "@/data/features";
import FeatureCardSelect from "./FeatureCardPricing";
import {
  $selectedModules,
  addModule,
  removeModule,
  updateModule,
} from "@/states/modules";

export default function PricingSection() {
  const selectedModules = useStore($selectedModules);

  const handleSelection = (data: ModuleType) => {
    const isAlreadySelected = selectedModules.some(
      (item) => item.title === data.title
    );
    if (isAlreadySelected) {
      removeModule(data);
    } else {
      addModule(data);
    }
  };

  const handleUpdate = (updatedItem: ModuleType) => {
    updateModule(updatedItem);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Modules.map((resource, index) => {
        const selected = selectedModules.find(
          (item) => item.title === resource.title
        );
        return (
          <FeatureCardSelect
            key={index}
            data={selected || resource}
            onSelect={handleSelection}
            showInfo={!resource.disabled}
            onUpdate={handleUpdate}
            isSelected={!!selected}
          />
        );
      })}
    </div>
  );
}
