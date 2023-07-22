'use client'

import { signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'

import React from 'react'

interface dDownContent {
  userName: string
}

function DropdownContent({ userName }: dDownContent) {
  return (
    <DropdownMenuContent className="mt-2 ml-2">
      <DropdownMenuLabel className="text-lg text-center">
        {userName}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Perfil</DropdownMenuItem>
      <DropdownMenuItem>Mis cartas</DropdownMenuItem>
      <DropdownMenuItem>Mis sugerencias</DropdownMenuItem>
      <DropdownMenuItem>Facturación</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <button onClick={() => signOut()}>Log Out</button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default DropdownContent
