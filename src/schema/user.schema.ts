import * as z from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'El campo email es obligatorio' })
    .email({ message: 'Revisa el formato del email' }),
  password: z
    .string()
    .min(4, { message: 'La contraseña debe contener entre 4 y 12 caracteres' })
    .max(12, {
      message: 'La contraseña debe contener entre 4 y 12 caracteres',
    }),
  notRegisteredInput: z.string().optional(),
})

export const signUpSchema = loginSchema.extend({
  userName: z
    .string()
    .min(1, { message: 'El nombre de usuario es obligatorio' }),
})

export type ILogin = z.TypeOf<typeof loginSchema>
export type ISignUp = z.TypeOf<typeof signUpSchema>
