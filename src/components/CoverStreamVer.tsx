'use client'

import { fetchEventSource } from '@microsoft/fetch-event-source'
import { useStore } from './Store'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useCompletion } from 'ai/react'

function CoverStreamVer() {
  const { offer_name, offer, company_name, training, experience, abstract } =
    useStore((state) => state)

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
    onResponse(response) {
      console.log(response)
    },
  })

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <ReactMarkdown className="prose lg:prose-xl">{completion}</ReactMarkdown>
      <div>
        <form
          className="flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <button
            className="px-10 py-3 bg-blue-800 text-slate-200 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:text-white transition-all"
            disabled={isLoading}
            type="submit"
          >
            Generar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CoverStreamVer
