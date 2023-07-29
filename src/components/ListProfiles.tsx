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
      <div className="w-full px-3">
        <h2
          className={`${montserrat.className} text-center text-4xl leading-relaxed lg:text-left`}
        >
          Crea tu primer Perfil pegando la información de tu CV
        </h2>
        <div className="mt-3 leading-7 text-lg text-slate-700 md:text-xl text-center md:text-left">
          <p className="">
            Podras reutilizarlo o editarlo las veces que quieras en tus próximas
            cartas.
          </p>
        </div>
      </div>
    )

  return (
    <div className="w-full px-3">
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
