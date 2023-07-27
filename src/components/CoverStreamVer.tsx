'use client'

import { useStore } from './Store'
import { useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useCompletion } from 'ai/react'
import { FaCopy, FaSave } from 'react-icons/fa'
import { SiTinyletter } from 'react-icons/si'
import { garamont } from '@/app/fonts/fonts'
import { useToast } from './ui/use-toast'
import Image from 'next/image'
import StarRating from './ui/starRating'
import { useCopyToClipboard } from '@/lib/hooks/useClipboard'

function CoverStreamVer() {
  const {
    offer_name,
    offer,
    company_name,
    training,
    experience,
    abstract,
    profile_used,
    offer_used,
  } = useStore((state) => state)

  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(0)
  const [value, copy] = useCopyToClipboard()

  const { toast } = useToast()

  const {
    completion,
    complete,

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
      const res = await fetch('api/letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: rating > 0 ? rating : undefined,
          offer_used,
          completion,
          profile_used,
        }),
      })

      if (res.ok) {
        //TO DO
        //meter algo en local storage
        const letter = await res.json()
        toast({
          title: 'Se ha guardado la carta en tu perfil',
          description: 'Puedes encontrarla en tu Dashboard',
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error al guardar la carta',
        variant: 'destructive',
      })
    }
  }

  const copyLetter = () => {
    copy(completion)

    toast({ title: 'Se ha copiado tu carta en el portapapeles' })
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-2 bg-slate-100 rounded-lg shadow-lg md:px-4">
      <h2
        className={`text-center text-3xl py-3 ${garamont.className} font-semibold text-slate-800`}
      >
        Carta de Presentación
      </h2>
      <ReactMarkdown
        className={`prose whitespace-pre-wrap lg:text-lg py-6 leading-7`}
      >
        {completion}
      </ReactMarkdown>
      <hr />
      {!isFinished ? (
        <div className={`pt-4`}>
          {!isLoading ? (
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
          ) : (
            <div className="flex items-center justify-center">
              <Image
                src="/typewritter.gif"
                alt="typewriter logo"
                width={190}
                height={151}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="">
          <div className="text-center py-3">
            <p>Valora tu carta</p>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <div className="flex items-center justify-center pt-4">
            <button
              onClick={saveLetter}
              className="mx-3 px-10 py-3 bg-black text-white hover:bg-slate-700 hover:shadow-xl transition-all"
              type="button"
            >
              <FaSave className="inline-block mr-2" /> Guardar
            </button>
            <button
              className=" mx-3 px-10 py-3  text-slate-800 border-2 border-black hover:bg-slate-400  hover:shadow-xl hover:text-white hover:border-slate-400 transition-all"
              type="button"
              onClick={copyLetter}
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
