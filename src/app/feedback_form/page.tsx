import React from 'react'
import { montserrat } from '../fonts/fonts'
import FeedbackForm from '@/components/forms/FeedbackForm'

function Feedback_form_page() {
  console.log('caca')
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
