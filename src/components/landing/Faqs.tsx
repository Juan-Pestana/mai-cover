import { garamont } from '@/app/fonts/fonts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function Faqs() {
  return (
    <div id="faqs" className="px-2 w-full pb-20 sm:pb-24">
      <div className="text-center py-12">
        <h2 className={`text-4xl font-semibold ${garamont.className}`}>
          Preguntas Frecuentes
        </h2>
      </div>

      <Accordion type="single" className="mx-auto xl:w-1/2 p-5" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            ¿Es Seguro incorporar mi perfil en mAI-Cover?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full ">
            ¿mAI Cover seguira siendo un servicio gratuito en el futuro?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full">
            ¿Qué tecnologías se utilizan para generar los documentos?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="w-full">
            ¿mAI-Cover es mejor que ChatGPT para generar esta clase de
            documentos?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="w-full">
            ¿Puedo utilizar los documentos de mAI-Cover directamente en mis
            procesos?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faqs
