import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

export default async function LandingButton() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? (
        <>
          <Link
            className="px-4 py-2 border-2 border-black hover:shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all lg:text-lg lg:px-5 lg:py-2"
            href="#features"
          >
            Empieza ya
          </Link>
        </>
      ) : (
        <Link
          className="px-4 py-2 border-2 border-black text-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all lg:text-xl lg:px-5 lg:py-2"
          href="/signup"
        >
          Regístrate
        </Link>
      )}
    </>
  )
}
