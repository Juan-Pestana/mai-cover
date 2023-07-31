'use client'

import React, { Dispatch, SetStateAction } from 'react'

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
        <article className="relative w-full pb-10 flex flex-col space-y-6 h-full">
          <header className="p-4 font-bold text-lg flex justify-between bg-slate-800 text-white ">
            <p>Cartas</p>
            <button
              onClick={() => {
                setIsOpen(false)
              }}
            >
              X
            </button>
          </header>
          {/* <div className="px-5">{children}</div> */}
          {children}
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
