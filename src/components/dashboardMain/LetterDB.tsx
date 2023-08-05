'use client'
import { ILettersList } from '@/app/dashboard/page'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '../ui/scroll-area'
import { useState } from 'react'
import { montserrat } from '@/app/fonts/fonts'

interface ILetterDBProps {
  letter: ILettersList
}

function LetterDB({ letter }: ILetterDBProps) {
  const [show, setShow] = useState<string>('letter')

  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        <ScrollArea className="p-2 border-2 max-w-2xl h-[80vh] border-zinc-200 lg:h-[800px]">
          {show === 'letter' && (
            <>
              <div className="leading-relaxed p-5">
                <h2 className={`${montserrat.className} text-2xl text-center`}>
                  Carta de Presentación
                </h2>
              </div>
              <hr className="mb-5" />
              <ReactMarkdown
                className={`prose whitespace-pre-wrap lg:text-lg leading-7`}
              >
                {letter.content}
              </ReactMarkdown>
            </>
          )}
          {show === 'offer' && (
            <>
              <div className="leading-relaxed pb-5">
                <h3 className="text-2xl font-semibold py-5">
                  Empresa: {letter.offer.company_name}
                </h3>
                <p className="text-xl">Puesto: {letter.offer.offer_name}</p>
              </div>
              <hr className="mb-5" />
              <ReactMarkdown
                className={`prose whitespace-pre-wrap lg:text-lg leading-7`}
              >
                {letter.offer.offer}
              </ReactMarkdown>
            </>
          )}
          {show === 'profile' && (
            <>
              <div className="leading-relaxed p-5">
                <h2 className={`${montserrat.className} text-2xl`}>
                  Mi perfil de:{'   '}
                  <span className="font-semibold">
                    {letter.profile.profile_name}
                  </span>
                </h2>
              </div>
              <hr className="mb-5" />
              <p className="text-xl font-semibold">Abstract:</p>
              <p className="mb-3 text-xl">{letter.profile.abstract}</p>
              <p className="text-xl font-semibold">Experiencia:</p>
              <ReactMarkdown
                className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
              >
                {letter.profile.experience}
              </ReactMarkdown>
              <p className="text-xl font-semibold">Formación:</p>
              <ReactMarkdown
                className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
              >
                {letter.profile.training}
              </ReactMarkdown>
            </>
          )}
        </ScrollArea>
      </div>
      <footer className="h-16 w-2/3 mx-auto flex items-center justify-around max-w-2xl">
        <button
          className={`${show === 'profile' && 'bg-black text-white'}`}
          onClick={() => setShow('profile')}
        >
          Perfil
        </button>
        <button
          className={`${show === 'offer' && 'bg-black text-white'}`}
          onClick={() => setShow('offer')}
        >
          Oferta
        </button>
        <button
          className={`${show === 'letter' && 'bg-black text-white'}`}
          onClick={() => setShow('letter')}
        >
          Carta
        </button>
      </footer>
    </main>
  )
}

export default LetterDB
