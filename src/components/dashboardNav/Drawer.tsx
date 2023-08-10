'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '../ui/scroll-area'

interface Idrawer {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

export default function Drawer({ children, isOpen, setIsOpen }: Idrawer) {
  return (
    <main
      className={
        ' absolute overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-100 -translate-x-0  '
          : ' transition-all delay-500 opacity-0 -translate-x-full ')
      }
    >
      <section
        className={
          ' w-screen max-w-md left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' -translate-x-0 ' : ' -translate-x-full ')
        }
      >
        <article className="relative w-full pb-10 flex flex-col  h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black">
          <header className="p-4 font-bold text-lg flex justify-between text-white ">
            <h2 className="text-2xl">Documentos</h2>
            <button
              onClick={() => {
                setIsOpen(false)
              }}
            >
              X
            </button>
          </header>
          <ScrollArea className="px-5  mt-6 text-white h-[75vh]">
            {children}
          </ScrollArea>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false)
        }}
      ></section>
    </main>
  )
}
