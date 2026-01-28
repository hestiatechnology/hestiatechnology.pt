import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <Accordion type="single" collapsible className="w-full bg-background border rounded-xl p-2 shadow-sm">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="px-4">
          <AccordionTrigger className="text-left text-lg font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
