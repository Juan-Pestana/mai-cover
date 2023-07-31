'use client'

import React, { useState } from 'react'
import DrawerClientWrap from '@/components/dashboardNav/DrawerClientWrap'

function Dashboard() {
  return (
    <>
      <div className="relative flex-1 h-full flex bg-black">
        <DrawerClientWrap />
        <aside className="hidden w-96 lg:block   bg-white ">
          <article className="relative w-full pb-10 flex flex-col h-full border-r-2 border-black bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <header className="p-4 font-bold text-lg flex justify-between  text-white ">
              <p>Cartas</p>
            </header>
            {/* <div className="px-5">{children}</div> */}

            <nav className="px-5 space-y-6 mt-6 text-white">
              <div>caca</div>
              <div>caca</div>
              <div>caca</div>
            </nav>
          </article>
          {/* <GetLetters /> */}
        </aside>
        <main className="flex flex-col flex-1 rounded-tl-3xl border-1 border-black  bg-white">
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <article className="p-10 border-2 border-red-500">
              aqui va una parte
            </article>
          </div>
          <footer className="h-16 flex items-center justify-around">
            <div>Perfil</div>
            <div>Oferta</div>
            <div>Carta</div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default Dashboard
