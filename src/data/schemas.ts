import { z } from "zod";

export const moduleTypeSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.any(),
  bgColor: z.string(),
  iconColor: z.string(),
  price: z.number().optional(),
  includedUsers: z.number().optional(),
  pricePerUser: z.number().optional(),
  extraUsers: z.number().optional(),
  extraPrice: z.number().optional(),
  disabled: z.boolean().optional(),
  information: z
    .object({
      title: z.string(),
      included: z.array(z.string()),
      comment: z.string().optional(),
    })
    .optional(),
});

export type ModuleType = z.infer<typeof moduleTypeSchema>;