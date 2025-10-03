import { useStore } from "@nanostores/react";

import type { ModuleType } from "@/data/schemas";
import FeatureCardSelect from "./FeatureCardPricing";
import {
  $selectedModules,
  addModule,
  removeModule,
  updateModule,
} from "@/states/modules";
import type { translations } from "@/lib/translations";

interface PricingSectionProps {
  features: ModuleType[];
  locale: keyof typeof translations;
}

export default function PricingSection({
  features,
  locale,
}: PricingSectionProps) {
  const selectedModules = useStore($selectedModules);

  console.log(selectedModules);

  const handleSelection = (data: ModuleType) => {
    const isAlreadySelected = selectedModules.some(
      (item) => item.title === data.title,
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
      {features.map((resource) => {
        const selected = selectedModules.find(
          (item) => item.title === resource.title,
        );
        return (
          <FeatureCardSelect
            key={resource.title}
            data={selected || resource}
            onSelect={handleSelection}
            showInfo={!resource.disabled}
            onUpdate={handleUpdate}
            isSelected={!!selected}
            locale={locale}
          />
        );
      })}
    </div>
  );
}
