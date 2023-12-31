import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React, { Suspense } from 'react'
import Image from 'next/image'
import { garamont, montserrat } from '@/app/fonts/fonts'
import DropdownContent from '../ui/dropdownContent'

import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import NewDocServ from './NewDocServ'

async function Header() {
  const session = await getServerSession(options)

  return (
    <>
      {/* <div className="bg-yellow-200 text-center text-sm md:text-base">
        <p>
          Estás probando mAI-Cover? Regístrate, prueba a generar alguno de
          nuestros documentos y{' '}
        </p>
        <a
          className="text-indigo-600 hover:underline"
          href="https://forms.gle/8pB3zpbTPHsPxqSdA"
          target="_blank"
          rel="noreferrer noopener"
        >
          Déjanos tu opinión
        </a>
      </div> */}

      <header className="block bg-black w-full p-2 lg:p-3">
        <div className="flex justify-between items-center text-xl">
          <div>
            <Link href="/" className="text-white flex items-center">
              {/* <SiTinyletter className="h-7 w-7 mx-4 lg:h-10 lg:w-10" /> */}
              <svg
                className="h-10 w-10 mx-4 lg:h-12 lg:w-12"
                width="512"
                height="512"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 205.5V134.875C464 113.405 446.134 96 424.096 96H88.9038C66.8656 96 49 113.405 49 134.875V368.125C49 389.595 66.8656 407 88.9038 407H247.5M464 316.5V407M304 407L355.5 275L405 407M464 258V268.5"
                  stroke="white"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M464 316.5V407"
                  stroke="white"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M75 122L255.5 279L436 122"
                  stroke="#FFFEFE"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3
                className={`hidden text-2xl md:block ${montserrat.className}`}
              >
                mAI-Cover
              </h3>
            </Link>
          </div>
          {session?.user ? (
            <div className="flex gap-4 items-center justify-between mx-2">
              <Suspense>
                <NewDocServ
                  userId={session.user.id}
                  role={session.user.role!}
                />
              </Suspense>
              <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full overflow-hidden ml-2 mr-3 h-10 w-10 lg:h-12 lg:w-12 border-2 border-white">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt="profile picture"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  ) : (
                    <div className={`${garamont.className}`}>
                      <span className="text-white text-3xl font-semibold">
                        {session.user.name[0]}
                      </span>
                      <span className="text-white font-semibold text-xl">
                        {session.user.name[1]}
                      </span>
                    </div>
                  )}
                </DropdownMenuTrigger>
                <DropdownContent userName={session.user.name} />
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
    </>
  )
}

export default Header
