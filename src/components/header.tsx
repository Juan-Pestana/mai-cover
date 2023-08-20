import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { SiTinyletter } from 'react-icons/si'
import { FaUserCircle } from 'react-icons/fa'
import Image from 'next/image'
import { montserrat } from '@/app/fonts/fonts'
import DropdownContent from './ui/dropdownContent'

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import NewDocServ from './Header/NewDocServ'

async function Header() {
  const session = await getServerSession(options)

  return (
    <header className="block bg-black w-full p-2 lg:p-3">
      <div className="flex justify-between items-center text-xl">
        <div>
          <Link href="/" className="text-white flex items-center">
            {/* <SiTinyletter className="h-7 w-7 mx-4 lg:h-10 lg:w-10" /> */}
            <h3 className={`hidden text-2xl md:block ${montserrat.className}`}>
              mAI-Cover
            </h3>
          </Link>
        </div>
        {session ? (
          <div className="flex gap-4 items-center justify-between mx-2">
            <Suspense>
              <NewDocServ userId={session.user.id} role={session.user.role} />
            </Suspense>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full overflow-hidden ml-2 mr-3 h-10 w-10 lg:h-12 lg:w-12">
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
              <DropdownContent
                userName={session?.user?.name ? session.user.name : 'Mi cuenta'}
              />
            </DropdownMenu>
          </div>
        ) : (
          <div className="mx-3">
            <Link
              href="/signin"
              className="inline-block hover:bg-[#24292F]/90 text-sm mx-4 px-4 py-2 border-2  border-slate-300 text-white rounded-md lg:text-lg lg:px-6"
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
