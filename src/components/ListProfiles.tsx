import { IProfile } from '@/schema/letter.schema'
import ClientProfileList from './ClientProfileList'
import { prisma } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth/next'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { IProfiles } from '@/schema/letter.schema'
import { montserrat } from '@/app/fonts/fonts'
import { Divide } from 'lucide-react'

async function getProfiles() {
  const session = await getServerSession(options)

  if (session && session.user) {
    const res = await prisma.profile.findMany({
      where: {
        userId: session.user.id,
      },
    })

    // return await JSON.stringify(res)
    return res as IProfiles[]
  }
}

async function ListProfiles() {
  let profiles = await getProfiles()

  if (!profiles || !profiles?.length)
    return (
      <div>
        <h2
          className={`${montserrat.className} text-center text-4xl leading-relaxed lg:text-left`}
        >
          Crea tu primer Perfil pegando la información de tu CV
        </h2>
      </div>
    )

  return (
    <div>
      <h2
        className={`${montserrat.className} text-center text-4xl leading-relaxed lg:text-left`}
      >
        Crea un nuevo perfil o selecciona uno de los anteriores
      </h2>
      <ClientProfileList profiles={profiles} />
    </div>
  )
}

export default ListProfiles
