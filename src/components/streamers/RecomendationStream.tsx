'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useStore } from '../Store'
import { useCopyToClipboard } from '@/lib/hooks/useClipboard'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { useCompletion } from 'ai/react'
import { garamont } from '@/app/fonts/fonts'
import ReactMarkdown from 'react-markdown'
import { SiTinyletter } from 'react-icons/si'
import StarRating from '../ui/starRating'
import { FaCopy, FaSave } from 'react-icons/fa'
import { ToastAction } from '../ui/toast'
import Link from 'next/link'

function RecomendationStream() {
  const { recomendation } = useStore((state) => state)

  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(0)
  const [language, setLanguage] = useState<string>('Español')
  const [value, copy] = useCopyToClipboard()

  const router = useRouter()

  const { toast } = useToast()

  const {
    completion,
    stop,
    isLoading,

    handleSubmit,
  } = useCompletion({
    api: '/api/generate/recomendation_stream',
    body: {
      language,
      area: recomendation.area,
      competences: recomendation.competences,
      position: recomendation.position,
      proyects: recomendation.proyects,
    },
    initialInput: 'esto no vale para nada',
    onResponse: async (res) => {},
    onError(error) {
      stop()

      toast({
        title: error.message,
        variant: 'destructive',
      })
    },
    onFinish() {
      //refresh router para indicar el cambio en el número de docs disponibles
      router.refresh()
      setIsFinished(true)
    },
  })

  const copyToClipboard = () => {
    copy(completion)

    toast({ title: 'Se ha copiado tu Recomendación en el portapapeles' })
  }

  const saveFeedback = async () => {
    try {
      const res = await fetch('/api/recomendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: rating > 0 ? rating : undefined,
          content: completion,
          area: recomendation.area,
          competences: recomendation.competences,
          position: recomendation.position,
          proyects: recomendation.proyects,
        }),
      })

      if (res.ok) {
        //TO DO
        //meter algo en local storage
        const recomendationRes = await res.json()
        toast({
          title: 'Se ha guardado la carta de Recomendación',
          description: 'Puedes encontrarla en tus Documentos',
          variant: 'success',
          action: (
            <ToastAction altText="ir a Dashboard" asChild>
              <Link href="/dashboard">Documentos</Link>
            </ToastAction>
          ),
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error al guardar la Recomendación',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-2 bg-slate-100 rounded-lg shadow-lg md:px-4">
      <h2
        className={`text-center text-3xl py-3 ${garamont.className} font-semibold text-slate-800`}
      >
        Recomendación del colaborador
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
              className="flex items-center justify-around w-full"
              onSubmit={handleSubmit}
            >
              <div className="w-1/2 lg-w2/3">
                <label htmlFor="">Selecciona el idioma</label>
                <div className="relative inline-flex self-center w-full">
                  <svg
                    className="text-white bg-slate-600 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 38 22"
                    version="1.1"
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id="ZahnhelferDE—Design"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="ZahnhelferDE–Icon&amp;Asset-Download"
                        transform="translate(-539.000000, -199.000000)"
                        fill="#ffffff"
                        fillRule="nonzero"
                      >
                        <g
                          id="Icon-/-ArrowRight-Copy-2"
                          transform="translate(538.000000, 183.521208)"
                        >
                          <polygon
                            id="Path-Copy"
                            transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                            points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select
                    className="text-xl w-full rounded border-2 border-gray-600 text-gray-600 h-11 pl-5 pr-10 bg-white hover:border-gray-400 py-2 focus:outline-none appearance-none"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Alemán">Alemán</option>
                  </select>
                </div>
              </div>
              <button
                className="block mx-2 mt-6 px-4 py-2 bg-black text-white hover:bg-[#24292F]/90 hover:shadow-xl transition-all lg:text-xl"
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
            <p>Valora el Documento</p>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <div className="flex items-center justify-center pt-4">
            <button
              onClick={saveFeedback}
              className="mx-3 px-10 py-3 bg-black text-white hover:bg-slate-700 hover:shadow-xl transition-all"
              type="button"
            >
              <FaSave className="inline-block mr-2" /> Guardar
            </button>
            <button
              className=" mx-3 px-10 py-3  text-slate-800 border-2 border-black hover:bg-slate-400  hover:shadow-xl hover:text-white hover:border-slate-400 transition-all"
              type="button"
              onClick={copyToClipboard}
            >
              <FaCopy className="inline-block mr-2" /> Copiar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecomendationStream
