import { hash } from 'argon2'
import { ISignUp } from '../../../schema/user.schema'
import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, userName, password }: ISignUp = await req.json()

  console.log(userName)

  if (!userName || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 })
  }

  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (exist) {
    throw new Error('Email already exists')
  }

  const hashedPassword = await hash(password)

  const user = await prisma.user.create({
    data: {
      name: userName,
      email,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
