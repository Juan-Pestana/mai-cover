import { montserrat } from '../fonts/fonts'
import PositionForm from '@/components/forms/PositionForm'

function Position_form_page() {
  return (
    <main className="flex-1 flex items-center justify-center p-3  ">
      <div className="flex flex-col w-full justify-center items-center ">
        <h2 className={`py-6 text-center text-4xl ${montserrat.className}`}>
          Un par de datos sobre tu posición
        </h2>
        <PositionForm />
      </div>
    </main>
  )
}

export default Position_form_page
