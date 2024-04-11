import * as z from 'zod'

const EmailSchema = z.object({
  to: z.string().email(),
  from: z.string().email(),
  subject: z.string(),
  body: z.string(),
  copy: z.boolean().optional()
})

type Email = z.infer<typeof EmailSchema>

export { EmailSchema, type Email }
