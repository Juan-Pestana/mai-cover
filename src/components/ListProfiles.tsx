import { IProfile } from '@/schema/letter.schema'
import ClientProfileList from './ClientProfileList'
import { prisma } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth/next'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { IProfiles } from './ClientProfileList'

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

  
if(!profiles) return null
 

  return (
    <div>
      <ClientProfileList profiles={profiles} />
    </div>
  )
}

export default ListProfiles
