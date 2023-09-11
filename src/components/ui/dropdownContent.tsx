'use client'

import { signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from './dropdown-menu'

import React from 'react'
import Link from 'next/link'
import { garamont } from '@/app/fonts/fonts'

interface dDownContent {
  userName: string
}

function DropdownContent({ userName }: dDownContent) {
  return (
    <DropdownMenuPortal className="-left-5">
      <DropdownMenuContent className="  bg-white">
        <DropdownMenuLabel
          className={`text-lg text-center ${garamont.className}`}
        >
          {userName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={'/dashboard'}>Mis Documentos</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="text-black" />
        <DropdownMenuItem>
          <button onClick={() => signOut({ callbackUrl: '/' })}>Log Out</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  )
}

export default DropdownContent
