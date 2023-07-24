import { getServerSession } from 'next-auth/next'
import { options } from '../auth/[...nextauth]/options'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prismaClient'
import { IProfiles } from '@/schema/letter.schema'

export async function GET() {
  const session = await getServerSession(options)

  if (!session?.user)
    return new NextResponse('No se ha encontrado el usuario', { status: 401 })

  try {
    const profiles = await prisma.profile.findMany({
      where: {
        userId: session.user.id,
      },
    })

    //console.log(profiles)

    if (profiles && profiles.length) return NextResponse.json(profiles)

    if (!profiles || !profiles.length)
      return new NextResponse('No se han encontrado Perfiles', { status: 404 })
  } catch (error) {
    console.log(error)
    return new NextResponse('algo ha ido mal', { status: 400 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(options)

  const body: IProfiles = await req.json()

  console.log(body)

  const newProfile = await prisma.profile.upsert({
    where: {
      id: body.id || '',
    },
    update: {
      profile_name: body.profile_name,
      abstract: body.abstract,
      experience: body.experience,
      training: body.training,
    },
    create: {
      profile_name: body.profile_name,
      abstract: body.abstract,
      experience: body.experience,
      training: body.training,
      userId: session?.user.id!,
    },
  })

  return NextResponse.json(newProfile)
}
