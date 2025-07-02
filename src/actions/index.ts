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
      const { data, error } = await resend.emails.send({
        from: "Hestia <hestia@mail.hestiatechnology.pt>",
        to: ["info@hestiatechnology.pt"],
        subject: company,
        html: "<strong>dfsfdsfds</strong>",
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
