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

      <Accordion
        type="single"
        className="mx-auto xl:w-1/2 p-5 md:text-lg"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            ¿Es Seguro incorporar mi perfil en mAI-Cover?
          </AccordionTrigger>
          <AccordionContent className=" text-gray-600 md:text-lg">
            <p>
              En mAI-Cover hemos diseñado los Prompts y la generación de
              documentos, para que en ningún caso sea necesario incorporar
              información que permita identificar a los usuarios o
              colaboradores.
            </p>
            <br />
            <p>
              En cualquier caso, ninguna información incorporada por el usuario
              para la generación de los documentos es compartida con terceros,
              mas allá del proveedor de servicio de generación, actualmente
              OpenAI.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="w-full ">
            ¿mAI Cover seguira siendo un servicio gratuito en el futuro?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 md:text-lg">
            <p>
              Actualmente buscamos que los usuarios puedan aprobechar la
              generación de hasta 15 documentos de forma totalmente gratuita,
              con el objetivo de que puedan valorarlos. De este modo podremos
              seleccionar solo los mejores documentos generados, para alimentar,
              entrenar y especializar nuestra solución en la generación
              específica de esta clase de documentos, mejorando de este modo
              cada vez más su calidad.
            </p>
            <br />
            <p>
              A futuro, el uso de esa versión entrenada, tendrá para mAI-Cover
              un coste superior al actual, por lo que no podemos garantizar que
              esta pueda seguir siendo gratuita.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="w-full">
            ¿Qué tecnologías se utilizan para generar los documentos?
          </AccordionTrigger>
          <AccordionContent className=" text-gray-600 md:text-lg">
            Actualmente utilizamos la última versión de ChatGPT 4, pero existe
            la posibilidad real de que pivotemos entre diferentes modelos de
            generación, buscando los mejores resultados.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="w-full">
            ¿mAI-Cover es mejor que ChatGPT para generar esta clase de
            documentos?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 md:text-lg">
            <p>
              En esta fase inicial, el mayor valor que se obtiene del uso de
              mAI-Cover por encima de ChatGPT es la calidad de los Prompts
              diseñados por nuestros expertos en RRHH.
            </p>
            <br />
            <p>
              Sin embargo y a medida que podamos ir entrenando el modelo con los
              ejemplos generados, podremos desarrollar la IA con un uso
              específico. Sin duda en un futuro próximo, la calidad de los
              documentos generados estará muy por encima de chatGPT y otros
              modelos de uso general.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="w-full">
            ¿Puedo utilizar los documentos de mAI-Cover directamente en mis
            procesos?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 md:text-lg">
            <p>
              En mAI-Cover se entrega la propiedad intelectual del documento
              generado al usuario, por lo que no hay nada que impida que éste
              pueda utilizarlo integra o parcialmente del modo en el que desee.
            </p>
            <br />
            <p>
              En cualquier caso, no podemos dejar de recomendar a los usuarios,
              el revisar, ajustar, adaptar y personalizar el documento generado,
              esto es así, tanto por cuestiones éticas, como de calidad.
            </p>
            <br />
            <p>
              El principal objetivo de mAI-Cover es poder ayudar a aquellos
              profesionales a quienes les supone un esfuerzo desarrollar esta
              clase de contenidos, con lenguaje propio de RRHH que les aleja de
              su zona de confort.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Faqs
