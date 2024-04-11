import * as z from 'zod'

const UserSchema = z.object({
  email: z.string().email(),
  active: z.boolean()
})

type User = z.infer<typeof UserSchema>

export { UserSchema, type User }
