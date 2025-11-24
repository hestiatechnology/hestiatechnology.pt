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
import { useState } from "react";

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
        <Select name="topic">
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
        <Textarea id="message" name="message" required />
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
