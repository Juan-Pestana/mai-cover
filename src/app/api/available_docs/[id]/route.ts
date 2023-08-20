import { prisma } from '@/lib/prismaClient'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id

  const res = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      availableDocs: true,
    },
  })

  if (res) {
    const { availableDocs } = res
    if (availableDocs <= 0) {
      return NextResponse.json(
        {
          message: 'No tienes creditos disponibles',
          description: 'Adquiere nuevos créditos para generar documentos',
        },
        { status: 403 }
      )
    }
  } else {
    return NextResponse.json(
      { message: 'Usuario no encontrado' },
      { status: 404 }
    )
  }

  return NextResponse.json(
    {
      message: 'valid user',
    },
    { status: 200 }
  )
}
