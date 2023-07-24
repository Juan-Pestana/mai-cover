import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { SiTinyletter } from 'react-icons/si'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { montserrat } from '@/app/fonts/fonts'
import DropdownContent from './ui/dropdownContent'

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'

async function Header() {
  const session = await getServerSession(options)

  return (
    <header className="fixed bg-black w-full p-3">
      <div className="flex justify-between items-center text-xl">
        <div>
          <Link href="/" className="text-white flex items-center">
            <SiTinyletter className="h-10 w-10 mx-4" />
            <h3 className={`hidden text-2xl md:block ${montserrat.className}`}>
              mAI-Cover
            </h3>
          </Link>
        </div>
        {session ? (
          <div className="flex items-center justify-center mx-2">
            <Link
              href="/profile_form"
              className="inline-block text-sm mx-4 px-4 py-2 border-2 border-slate-300 text-slate-300 rounded-md lg:text-lg lg:px-6"
            >
              Nueva carta
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full overflow-hidden ml-2 mr-3 h-12 w-12">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="profile picture"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                ) : (
                  <FaUserCircle className="text-white h-full w-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownContent userName={session?.user?.name ? session.user.name : 'Mi cuenta'} />
            </DropdownMenu>
          </div>
        ) : (
          <div className="mx-3">
            <Link
              href="/signin"
              className="inline-block text-sm mx-4 px-4 py-2 border-2 border-slate-300 text-slate-300 rounded-md lg:text-lg lg:px-6"
            >
              Inicia Sesión
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header