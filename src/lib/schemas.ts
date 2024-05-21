import { z } from 'zod'

export const McqConfigSchema = z.object({
  count: z.string().min(1, {
    message: 'Please select question number'
  }),
  mode: z.string(),
  units: z.optional(
    z.array(z.string()).min(1, {
      message: 'Please select atleast 1 unit'
    })
  ),
  specificNeeds: z.optional(z.string())
})