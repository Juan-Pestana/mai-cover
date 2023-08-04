import React from 'react'

function ProfileDB() {
  return (
    <main className="flex flex-col flex-1  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <article className="p-10 border-2 border-blue-500">un Perfil</article>
      </div>
      <footer className="h-16 flex items-center justify-around">
        <div>Perfil</div>
        <div>Oferta</div>
        <div>Carta</div>
      </footer>
    </main>
  )
}

export default ProfileDB
