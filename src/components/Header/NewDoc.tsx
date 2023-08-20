'use client'

import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MdWorkspacePremium } from 'react-icons/md'

const components: {
  title: string
  href: string
  description: string
  premium: boolean
}[] = [
  {
    title: 'Carta de presentación',
    href: '/profile_form',
    description:
      'Tu experiencia, tu formación y el texto de la oferta son suficientes para generar la carta de presentación perfecta',
    premium: false,
  },
  {
    title: 'Feedback a empleados',
    href: '#',
    description:
      'Un par de detalles básicos sobre tu colaborador y tendrás un feedback personalizado para incorporar en cualquier evaluación de desempeño',
    premium: true,
  },
  {
    title: 'Carta de recomendación',
    href: '#',
    description:
      'No siempre es fácil encontrar las palabras y la fórmula adecuada. Inspirate con nuestra propuesta personalizada ',
    premium: true,
  },
  {
    title: 'Adapta tu CV',
    href: '#',
    description:
      'Adaptar tu perfil a cada oferta, es muy fácil de decir, pero como? sigue las sugerencias de nuestra IA',
    premium: true,
  },
]

interface InewDocProps {
  docsLeft: number
  role: string
}

function NewDoc({ docsLeft, role }: InewDocProps) {
  //console.log(role)
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <div className="absolute  left-3 -top-1 flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-xs p-1 text-white lg:-top-2 ">
          {docsLeft}
        </div>
        <NavigationMenuTrigger className="bg-black text-white border-2 border-white px-2 hover:text-white focus:bg-black focus:text-white">
          Nuevo Documento
        </NavigationMenuTrigger>
        <NavigationMenuContent className="">
          <ul className="grid w-[350px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <li key={component.title}>
                <Link
                  href={
                    component.premium && role === 'user'
                      ? '/getDocs'
                      : component.href
                  }
                >
                  <NavigationMenuLink asChild>
                    <div
                      className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                      )}
                    >
                      <div className="text-base font-medium leading-none">
                        {component.title}{' '}
                        {component.premium && role === 'user' ? (
                          <span>
                            <MdWorkspacePremium className="inline-block text-lg text-yellow-500" />
                          </span>
                        ) : null}
                      </div>
                      <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">
                        {component.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}

export default NewDoc
