import { SignUpEmailTemlate } from '@/components/emails/SignupEmail'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'mAI-cover <info@mai-cover.com>',
      to: [email],
      subject:
        '¡Bienvenido a mAI-Cover! Tu asistente inteligente para Recursos Humanos',
      react: SignUpEmailTemlate({
        userName: name,
      }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 })
  }
}
