"use client";

import * as React from "react";
import { useStore } from "@nanostores/react";
import { $selectedModules } from "@/states/modules";

import { defineStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import PricingSection from "./PricingSection";
import PricingBudget from "./PricingBudget";
import BudgetContact from "./BudgetContact";

const { Stepper } = defineStepper(
  {
    id: "step-1",
    title: "Módulos",
    description: "Escolha os módulos",
  },
  {
    id: "step-2",
    title: "Orçamento",
    description: "Orçamento estimado",
  },
  {
    id: "step-3",
    title: "Concluir",
    description: "Concluir",
  }
);

export function PricingStepper() {
  const selectedModules = useStore($selectedModules);

  return (
    <Stepper.Provider className="space-y-4" variant="horizontal">
      {({ methods }) => (
        <React.Fragment>
          <Stepper.Navigation>
            {methods.all.map((step) => (
              <Stepper.Step
                key={step.id}
                of={step.id}
                onClick={() => {
                  if (selectedModules.length <= 0) {
                    return;
                  }
                  methods.goTo(step.id);
                }}
              >
                <Stepper.Title>{step.title}</Stepper.Title>
                <Stepper.Description>{step.description}</Stepper.Description>
              </Stepper.Step>
            ))}
          </Stepper.Navigation>
          {methods.switch({
            "step-1": () => <PricingSection />,
            "step-2": () => <PricingBudget />,
            "step-3": () => <BudgetContact />,
          })}
          <Stepper.Controls>
            {!methods.isLast && (
              <Button
                variant="secondary"
                onClick={methods.prev}
                disabled={methods.isFirst}
              >
                Previous
              </Button>
            )}
            <Button
              onClick={methods.isLast ? methods.reset : methods.next}
              disabled={selectedModules.length <= 0}
            >
              {methods.isLast ? "Reset" : "Next"}
            </Button>
          </Stepper.Controls>
        </React.Fragment>
      )}
    </Stepper.Provider>
  );
}
