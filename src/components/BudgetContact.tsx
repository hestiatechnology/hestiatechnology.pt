import { useStore } from "@nanostores/react";
import { $selectedModules } from "@/states/modules";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { actions } from "astro:actions";
import type { FormEvent } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { translations } from "@/lib/translations";
import { useId } from "react";

interface BudgetContactProps {
  locale: keyof typeof translations;
}

export default function BudgetContact({ locale }: BudgetContactProps) {
  const selectedModules = useStore($selectedModules);

  const companyId = useId();
  const emailId = useId();
  const messageId = useId();

  const t = (key: keyof (typeof translations)[typeof locale]) => {
    return translations[locale][key] || translations.en[key];
  };

      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
  
      await actions.email(formData);
    };
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor={companyId}>{t("contact.company")}</Label>
          <Input id={companyId} type="text" name="company" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor={emailId}>{t("contact.email")}</Label>
          <Input id={emailId} type="email" name="email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor={messageId}>{t("contact.message")}</Label>
          <Textarea id={messageId} name="message" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedModules?.map((module) => (
            <Card key={module.title}>
              <CardHeader>
                <div className="flex justify-center items-center gap-x-3">
                  <module.icon className={`h-6 w-6 ${module.iconColor}`} />
                  <CardTitle>{module.title}</CardTitle>
                </div>
                <CardDescription>
                  {t("contact.users")}:{" "}
                  {(module.includedUsers ?? 0) + (module.extraUsers ?? 0)}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Button>{t("contact.submit")}</Button>
      </form>
    </div>
  );
}
