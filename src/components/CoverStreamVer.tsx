'use client'

import { fetchEventSource } from '@microsoft/fetch-event-source'
import { useStore } from './Store'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useCompletion } from 'ai/react'
import { FaCopy, FaSave } from 'react-icons/fa'
import { SiTinyletter } from 'react-icons/si'
import { montserrat } from '@/app/fonts/fonts'
import { log } from 'console'

function CoverStreamVer() {
  const { offer_name, offer, company_name, training, experience, abstract } =
    useStore((state) => state)

  const [isFinished, setIsFinished] = useState<boolean>(false)

  const {
    completion,
    complete,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/cover_ver',
    body: {
      offer_name,
      offer,
      company_name,
      training,
      experience,
      abstract,
    },
    initialInput: 'esto no vale para nada',
    onFinish() {
      setIsFinished(true)
    },
  })

  const saveLetter = async () => {
    try {
      const letter = await fetch('api/letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          offer_name,
          offer,
          company_name,
          training,
          experience,
          abstract,
          completion,
        }),
      })

      if (letter) {
        //TO DO
        //meter algo en local storage
        console.log(letter)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <h2 className={`text-center text-2xl py-3 ${montserrat.className} `}>
        Carta de Presentación
      </h2>
      <ReactMarkdown className="prose lg:prose-xl py-6">
        {completion}
      </ReactMarkdown>
      <hr />
      {!isFinished ? (
        <div className={`pt-4 ${isLoading && 'hidden'}`}>
          <form
            className="flex items-center justify-center"
            onSubmit={handleSubmit}
          >
            <button
              className="mx-2 px-10 py-3 bg-blue-800 text-slate-200 rounded-xl hover:bg-blue-600 hover:shadow-xl hover:text-white transition-all"
              type="submit"
            >
              <SiTinyletter className="inline-block mr-2 font-bold text-xl" />{' '}
              Generar
            </button>
          </form>
        </div>
      ) : (
        <div className="pt-4">
          <div className="flex items-center justify-center">
            <button
              onClick={saveLetter}
              className="mx-2 px-10 py-3 bg-blue-800 text-slate-200 rounded-xl hover:bg-blue-600 hover:shadow-xl hover:text-white transition-all"
              type="button"
            >
              <FaSave className="inline-block mr-2" /> Guardar
            </button>
            <button
              className=" mx-2 px-10 py-3 bg-blue-800 text-slate-200 rounded-xl hover:bg-blue-600  hover:shadow-xl hover:text-white transition-all"
              type="button"
            >
              <FaCopy className="inline-block mr-2" /> Copiar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CoverStreamVer
