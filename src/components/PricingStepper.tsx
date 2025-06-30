"use client";

import * as React from "react";
import { useStore } from "@nanostores/react";
import { $selectedModules } from "@/states/modules";

import { defineStepper } from "@/components/stepper";
import { Button } from "@/components/ui/button";
import PricingSection from "./PricingSection";
import PricingBudget from "./PricingBudget";

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

export function StepperWithDescription() {
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
            "step-2": (step) => <PricingBudget />,
            "step-3": () => (
              <div className="max-w-4xl mx-auto p-6 space-y-6">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-bold text-foreground">
                    Contacto
                  </h1>
                  <p className="text-muted-foreground">
                    Deseja continuar com o pedido de orçamento personalizado?
                  </p>
                </div>

                <Button type="submit" asChild>
                  <a href="/contact">Pedir orçamento</a>
                </Button>
              </div>
            ),
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
