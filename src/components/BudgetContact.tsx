import { useStore } from "@nanostores/react";
import { $selectedModules } from "@/states/modules";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { actions } from "astro:actions";
import type { FormEvent } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function BudgetContact() {
  const selectedModules = useStore($selectedModules);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const input = {
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      selectedModules: selectedModules.length >= 1 ? selectedModules : [],
    };

    const { data, error } = await actions.email(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="empresa">Empresa</Label>
          <Input id="empresa" type="text" name="company" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea id="message" name="message" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedModules?.map((module, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex justify-center items-center gap-x-3">
                  <module.icon className={`h-6 w-6 ${module.iconColor}`} />
                  <CardTitle>{module.title}</CardTitle>
                </div>
                <CardDescription>
                  Utilizadores:{" "}
                  {(module.includedUsers ?? 0) + (module.extraUsers ?? 0)}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
