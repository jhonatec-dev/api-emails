import * as z from 'zod'

const EmailSchema = z.object({
  to: z.array(z.string().email({ message: 'Invalid email' })),
  from: z
    .string()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'From is required' }),
  subject: z
    .string()
    .min(5, { message: 'Subject is required and has to have 5 chars min.' }),
  body: z
    .string()
    .min(8, { message: 'Body is required and has to have 8 chars min.' }),
  copy: z.boolean().optional()
})

type Email = z.infer<typeof EmailSchema>

export { EmailSchema, type Email }
