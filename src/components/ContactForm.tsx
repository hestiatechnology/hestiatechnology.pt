import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useState, useEffect } from "react";

const MODULE_NAMES: Record<string, Record<string, string>> = {
  en: {
    ai: "AI Document Validation",
    integrations: "Advanced Integrations",
    analytics: "Real-time Analytics",
    dpp: "Advanced DPP",
  },
  pt: {
    ai: "Validação de Documentos com IA",
    integrations: "Integrações Avançadas",
    analytics: "Análise em Tempo Real",
    dpp: "DPP Avançado",
  },
};

function buildPrefillMessage(params: URLSearchParams, locale: string): string {
  const managers = params.get("managers");
  const operators = params.get("operators");
  const monthly = params.get("monthly");
  const modulesRaw = params.get("modules");

  if (!managers && !operators && !monthly) return "";

  const names = MODULE_NAMES[locale] ?? MODULE_NAMES.en;
  const moduleList = modulesRaw
    ? modulesRaw.split(",").map((k) => names[k] ?? k)
    : [];

  if (locale === "pt") {
    const lines = [
      "Olá, usei o simulador de preços no vosso site e tenho interesse em saber mais.",
      "",
      "Plano estimado:",
      `- ${managers} Gestores, ${operators} Operadores`,
    ];
    if (moduleList.length > 0) lines.push(`- Módulos: ${moduleList.join(", ")}`);
    lines.push(`- Custo estimado: €${monthly}/mês`);
    lines.push("", "Por favor, entrem em contacto!");
    return lines.join("\n");
  }

  const lines = [
    "Hi, I used the pricing simulator on your website and I'm interested in learning more.",
    "",
    "My estimated plan:",
    `- ${managers} Managers, ${operators} Operators`,
  ];
  if (moduleList.length > 0) lines.push(`- Add-ons: ${moduleList.join(", ")}`);
  lines.push(`- Estimated cost: €${monthly}/month`);
  lines.push("", "Please get in touch!");
  return lines.join("\n");
}

interface ContactFormProps {
  labels: {
    company: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
    submit: string;
    selectPlaceholder: string;
    topics: {
      sales: string;
      support: string;
      partnership: string;
      other: string;
    };
  };
  siteKey: string;
}

export function ContactForm({ labels, siteKey }: ContactFormProps) {
  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("monthly")) {
      const locale = window.location.pathname.startsWith("/pt") ? "pt" : "en";
      setMessage(buildPrefillMessage(params, locale));
      setTopic("sales");
    }
  }, []);

  return (
    <form method="POST" className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="empresa">{labels.company}</Label>
        <Input id="empresa" type="text" name="company" required />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="email">{labels.email}</Label>
        <Input id="email" type="email" name="email" required />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="phone">{labels.phone}</Label>
        <Input id="phone" type="tel" name="phone" />
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="topic">{labels.topic}</Label>
        <Select name="topic" value={topic} onValueChange={setTopic}>
          <SelectTrigger>
            <SelectValue placeholder={labels.selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">{labels.topics.sales}</SelectItem>
            <SelectItem value="support">{labels.topics.support}</SelectItem>
            <SelectItem value="partnership">
              {labels.topics.partnership}
            </SelectItem>
            <SelectItem value="other">{labels.topics.other}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-1">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="min-h-[78px]">
        <HCaptcha
          sitekey={siteKey}
          onVerify={(token) => setCaptchaToken(token)}
        />
      </div>
      <input type="hidden" name="h-captcha-response" value={captchaToken} />
      <Button type="submit">{labels.submit}</Button>
    </form>
  );
}
