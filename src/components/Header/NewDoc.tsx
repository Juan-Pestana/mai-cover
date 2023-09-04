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
import { RiFile3Line } from 'react-icons/ri'

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
      'Tu experiencia, tu formación y el texto de la oferta son suficientes para generar la carta de presentación perfecta.',
    premium: false,
  },
  {
    title: 'Feedback a empleados',
    href: '/feedback_form',
    description:
      'Un par de detalles sobre tu colaborador y primera propuesta personalizada de feedback para adaptar e incorporar en su evaluación.',
    premium: true,
  },
  {
    title: 'Carta de recomendación',
    href: '/recomendation_form',
    description:
      'No siempre es fácil encontrar las palabras y la fórmula adecuada. Inspirate con nuestra propuesta personalizada.',
    premium: true,
  },
  {
    title: 'Sugerencias CV',
    href: '/profile_form/?cvAdvisor=true',
    description:
      'Adaptar tu perfil a cada oferta, es muy fácil de decir, pero como? sigue los consejos de nuestra IA.',
    premium: true,
  },
  {
    title: 'Describe tu posición',
    href: '/position_form',
    description:
      'Detallar tu posición para un CV puede parecer sencillo, hasta que tienes que hacerlo. Te proponemos un ejemplo adaptado a tí',
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
        <NavigationMenuTrigger className="bg-black text-white border-2 border-white px-2 hover:text-white hover:bg-black focus:bg-black focus:text-white">
          Nuevo Doc
          {/* <span>
            <RiFile3Line className="h-5 w-5 ml-2" />
          </span> */}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="">
          <ul className="grid w-[350px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <li key={component.title}>
                <Link
                  href={
                    component.premium && role === 'user'
                      ? '#getDocs'
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
            <li className="bg-slate-200 flex items-center justify-center rounded-md">
              <svg
                className="w-full h-24"
                width="474"
                height="474"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 205.5V134.875C464 113.405 446.134 96 424.096 96H88.9038C66.8656 96 49 113.405 49 134.875V368.125C49 389.595 66.8656 407 88.9038 407H247.5M464 316.5V407M304 407L355.5 275L405 407M464 258V268.5"
                  stroke="black"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M464 316.5V407"
                  stroke="black"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M75 122L255.5 279L436 122"
                  stroke="black"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  )
}

export default NewDoc
