import { type Dispatch } from "react";

import { Modules, type ModuleType } from "@/data/features";
import FeatureCardSelect from "./FeatureCardPricing";

export default function PricingSection({
  selectedItems,
  setSelectedItems,
}: {
  selectedItems: ModuleType[];
  setSelectedItems: Dispatch<React.SetStateAction<ModuleType[]>>;
}) {
  const handleSelection = (data: ModuleType) => {
    setSelectedItems((prevArray: ModuleType[]) => {
      // Check if item is already selected
      const isAlreadySelected = prevArray.some(
        (item: ModuleType) => item.title === data.title
      );

      if (isAlreadySelected) {
        // Remove if already selected (toggle behavior)
        return prevArray.filter(
          (item: ModuleType) => item.title !== data.title
        );
      } else {
        // Add if not selected
        return [...prevArray, data];
      }
    });
  };

  const handleUpdate = (updatedItem: ModuleType) => {
    setSelectedItems((prevArray) => {
      const index = prevArray.findIndex(
        (item) => item.title === updatedItem.title
      );
      if (index === -1) return prevArray;

      const newArray = [...prevArray];
      newArray[index] = updatedItem;
      return newArray;
    });
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Modules.map((resource, index) => {
        const selected = selectedItems.find(
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
