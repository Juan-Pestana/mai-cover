import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth/next'

async function getProfiles() {
  //   // const session = await getServerSession(options)

  const res = await prisma.letter.findMany()
  //     //   where: {
  //     //     userId: session.user.id,
  //     //   },
  //     ()

  return await JSON.stringify(res)
}

async function GetLetters() {
  //const session = await getServerSession(options)
  const res = await getProfiles()
  const letters = await JSON.parse(res)

  return (
    <>
      {/* <div className="px-5">{session?.user.name}</div> */}
      <div className="px-5">{letters[0].id}</div>
      <div className="px-5">GetLetters</div>
      <div className="px-5">GetLetters</div>
    </>
  )
}

export default GetLetters
