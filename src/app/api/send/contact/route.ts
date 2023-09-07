import { ContactEmailTemlate } from '@/components/emails/Contact'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, lastName, email, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'mAI-cover <info@mai-cover.com>',
      to: ['juan.pestana82@gmail.com'],
      subject: 'Nuevo Mensaje de mAI-Cover',
      react: ContactEmailTemlate({
        name: name,
        email: email,
        lastName: lastName,
        message: message,
      }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
