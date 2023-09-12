'use client'

import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '../ui/scroll-area'
import { useState } from 'react'
import { montserrat } from '@/app/fonts/fonts'
import { RiFileUserLine, RiChatQuoteLine } from 'react-icons/ri'
import { IPosition } from '@/schema/position.schema'
import CopyButton from '../ui/CopyButton'
import { DocType } from '@/schema/doctype.schema'

interface IPositionDBProps {
  position: IPosition | undefined
}

function PositionDB({ position }: IPositionDBProps) {
  const [show, setShow] = useState<string>('description')

  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        {position ? (
          <ScrollArea className="p-2 border-2 max-w-2xl h-[80vh] border-zinc-200 lg:h-[800px]">
            {show === 'description' && (
              <>
                <div className="leading-relaxed p-5">
                  <h2
                    className={`${montserrat.className} text-2xl text-center`}
                  >
                    Descripción de la Posición
                  </h2>
                </div>
                <hr className="mb-5" />
                <ReactMarkdown
                  className={`prose whitespace-pre-wrap lg:text-lg leading-7 mb-3`}
                >
                  {position.content}
                </ReactMarkdown>
                <hr />

                <CopyButton
                  type={DocType.Position}
                  content={position.content}
                />
              </>
            )}
            {show === 'position' && (
              <>
                <div className="leading-normal py-2">
                  <div>
                    <p className="font-normal text-2xl">Puesto:</p>
                    <h3 className="text-2xl font-semibold">
                      {position.position}
                    </h3>
                  </div>

                  <p className="text-xl font-semibold py-2">
                    <span className="font-normal">Industria:</span>{' '}
                    {position.industry}
                  </p>
                </div>

                <hr className="mb-5" />
                <ul>
                  <li className="mt-3">
                    <h3 className="font-semibold"> Proyectos:</h3>
                    <p>{position.proyects}</p>
                  </li>
                </ul>
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
            show === 'position' && 'bg-black text-white'
          }`}
          onClick={() => setShow('position')}
        >
          <RiFileUserLine className="text-center h-5 w-5" />
          <p className="block">Posición</p>
        </button>
        <button
          className={`flex flex-col items-center px-2 py-2 rounded-lg ${
            show === 'description' && 'bg-black text-white'
          }`}
          onClick={() => setShow('description')}
        >
          <RiChatQuoteLine className="text-center h-5 w-5" />
          <p className="block">Descripción</p>
        </button>
      </footer>
    </main>
  )
}

export default PositionDB
