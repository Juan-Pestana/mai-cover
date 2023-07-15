'use client'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import { useStore } from './Store'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function CoverStream() {
  const [resp, setResp] = useState<string>('')

  const { offer_name, offer, company_name, training, experience, abstract } =
    useStore((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      let message = ''
      await fetchEventSource(`/api/cover_ver`, {
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
        }),
        onmessage(event) {
          if (event.data !== '' && event.data !== 'CLOSE') {
            message += event.data
            console.log(message)
            setResp(message)
          }
        },
      })
    }

    fetchData()
  }, [])

  return (
    <div className="w-full max-w-3xl my-10 py-10 px-5 bg-slate-100 rounded-lg shadow-lg">
      <ReactMarkdown className="prose lg:prose-xl">{resp}</ReactMarkdown>
      {/* <form onSubmit={handleSubmit}>
        <input value={'   '} onChange={handleInputChange} />
        {completion}
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </form> */}
    </div>
  )
}

export default CoverStream
