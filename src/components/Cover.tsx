'use client'
import { useStore } from './Store'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function Cover() {
  const [resp, setResp] = useState<string>('')

  const { offer_name, offer, company_name, training, experience, abstract } =
    useStore((state) => state)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/cover', {
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
      })
      const data = await response.json()
      setResp(data.text)
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

export default Cover
