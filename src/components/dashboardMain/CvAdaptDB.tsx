'use client'
import { ILettersList } from '@/app/dashboard/page'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '../ui/scroll-area'
import { useState } from 'react'
import { montserrat } from '@/app/fonts/fonts'
import { RiUser3Line, RiPagesLine, RiChatSmileLine } from 'react-icons/ri'

interface IcvAdaptDBProps {
  cvAdapt: ILettersList | undefined
}

function LetterDB({ cvAdapt }: IcvAdaptDBProps) {
  const [show, setShow] = useState<string>('Sugestion')

  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        {cvAdapt ? (
          <ScrollArea className="p-2 border-2 max-w-2xl h-[80vh] border-zinc-200 lg:h-[800px]">
            {show === 'Sugestion' && (
              <>
                <div className="leading-relaxed p-5">
                  <h2
                    className={`${montserrat.className} text-2xl text-center`}
                  >
                    Sugerencia Adaptación CV
                  </h2>
                </div>
                <hr className="mb-5" />
                <ReactMarkdown
                  className={`prose whitespace-pre-wrap lg:text-lg leading-7`}
                >
                  {cvAdapt.content}
                </ReactMarkdown>
              </>
            )}
            {show === 'offer' && (
              <>
                <div className="leading-relaxed pb-5">
                  <h3 className="text-2xl font-semibold py-5">
                    Empresa: {cvAdapt.offer.company_name}
                  </h3>
                  <p className="text-xl">Puesto: {cvAdapt.offer.offer_name}</p>
                </div>
                <hr className="mb-5" />
                <ReactMarkdown
                  className={`prose whitespace-pre-wrap lg:text-lg leading-7`}
                >
                  {cvAdapt.offer.offer}
                </ReactMarkdown>
              </>
            )}
            {show === 'profile' && (
              <>
                <div className="leading-relaxed p-5">
                  <h2 className={`${montserrat.className} text-2xl`}>
                    Perfil:{'   '}
                    <span className="font-semibold">
                      {cvAdapt.profile.profile_name}
                    </span>
                  </h2>
                </div>
                <hr className="mb-5" />
                <p className="text-xl font-semibold">Abstract:</p>
                <p className="mb-3 text-lg">{cvAdapt.profile.abstract}</p>
                <p className="text-xl font-semibold">Experiencia:</p>
                <ReactMarkdown
                  className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
                >
                  {cvAdapt.profile.experience}
                </ReactMarkdown>
                <p className="text-xl font-semibold">Formación:</p>
                <ReactMarkdown
                  className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
                >
                  {cvAdapt.profile.training}
                </ReactMarkdown>
              </>
            )}
          </ScrollArea>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-2xl font-semibold text-center px-2">
              No tienes documentos de momento
            </div>
          </div>
        )}
      </div>
      <footer className="h-16 w-full mx-auto flex items-center justify-around max-w-2xl lg:w-2/3">
        <button
          className={`flex flex-col items-center px-2 py-2 rounded-lg ${
            show === 'profile' && 'bg-black text-white'
          }`}
          onClick={() => setShow('profile')}
        >
          <RiUser3Line className="text-center h-5 w-5" />
          <p className="block">Perfil</p>
        </button>
        <button
          className={`flex flex-col items-center px-2 py-2 rounded-lg ${
            show === 'offer' && 'bg-black text-white'
          }`}
          onClick={() => setShow('offer')}
        >
          <RiPagesLine className="text-center h-5 w-5" />
          <p className="block">Oferta</p>
        </button>
        <button
          className={`flex flex-col items-center px-2 py-2 rounded-lg ${
            show === 'Sugestion' && 'bg-black text-white'
          }`}
          onClick={() => setShow('Sugestion')}
        >
          <RiChatSmileLine className="text-center h-5 w-5 " />
          <p className="block">Recomendación</p>
        </button>
      </footer>
    </main>
  )
}

export default LetterDB
