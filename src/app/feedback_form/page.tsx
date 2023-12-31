import React from 'react'
import { montserrat } from '../fonts/fonts'
import FeedbackForm from '@/components/forms/FeedbackForm'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

async function Feedback_form_page() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/position_form')
  }

  return (
    <main className="flex-1 flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center ">
        <h2 className={`py-6 text-center text-4xl ${montserrat.className}`}>
          Un par de datos sobre el colaborador
        </h2>
        <FeedbackForm />
      </div>
    </main>
  )
}

export default Feedback_form_page
