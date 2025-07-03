import ConfirmationEmail from "@/components/email/client-email-template";
import InternalNotificationEmail from "@/components/email/company-email";
import { moduleTypeSchema } from "@/data/features";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  email: defineAction({
    accept: "form",
    input: z.object({
      company: z.string(),
      email: z.string().email(),
      message: z.string(),
      selectedItems: z.array(moduleTypeSchema).optional(),
    }),
    handler: async (formData) => {
      console.log(formData);

      const { company, email, message } = formData;

      const [internalResult, clientResult] = await Promise.all([
        resend.emails.send({
          from: "Hestia <hestia@mail.hestiatechnology.pt>",
          to: ["info@hestiatechnology.pt"],
          subject: `Novo Pedido de Contacto: ${company}`,
          react: InternalNotificationEmail({ company, email, message }),
        }),
        resend.emails.send({
          from: "Hestia <hestia@mail.hestiatechnology.pt>",
          to: [email],
          subject: "Confirmação de Submissão",
          react: ConfirmationEmail({ clientName: company }),
        }),
      ]);

      const [internalEmail, clientEmail] = [internalResult, clientResult];

      if (internalEmail.error || clientEmail.error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: internalEmail.error?.message || clientEmail.error?.message,
        });
      }

      return { internal: internalEmail.data, client: clientEmail.data };
    },
  }),
};
