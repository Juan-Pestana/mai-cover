import { hash } from 'argon2'
import { ISignUp } from '../../../schema/user.schema'
import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SignUpEmailTemlate } from '@/components/emails/SignupEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, userName, password }: ISignUp = await req.json()

  if (!userName || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (exist) {
    return NextResponse.json(
      { message: 'El usuario ya existe' },
      { status: 400 }
    )
  }

  const hashedPassword = await hash(password)

  const user = await prisma.user.create({
    data: {
      name: userName,
      email,
      hashedPassword,
    },
  })
  if (user) {
    const data = await resend.emails.send({
      from: 'mAI-Cover <info@mai-cover.com>',
      to: [user.email!],
      subject:
        ' ¡Bienvenido a mAI-Cover! Tu asistente inteligente para Recursos Humanos',
      react: SignUpEmailTemlate({
        userName: user.name!,
      }),
    })
    return NextResponse.json(user)
  }
}
