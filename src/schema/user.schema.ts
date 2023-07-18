import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(12),
})

export const signUpSchema = loginSchema.extend({
  userName: z.string(),
})

export type ILogin = z.TypeOf<typeof loginSchema>
export type ISignUp = z.TypeOf<typeof signUpSchema>
