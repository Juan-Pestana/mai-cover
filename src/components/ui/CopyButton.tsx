'use client'

import { useCopyToClipboard } from '@/lib/hooks/useClipboard'
import { toast } from './use-toast'
import { RiFileCopy2Line } from 'react-icons/ri'
import { DocType } from '@/schema/doctype.schema'

interface ICopyButtonProps {
  type: DocType
  content: string
}

function CopyButton({ type, content }: ICopyButtonProps) {
  const [value, copy] = useCopyToClipboard()

  const copyToClipboard = () => {
    copy(content)

    switch (type) {
      case 'CvAdapt':
        toast({
          title:
            'La propuesta de adaptación del CV se ha copiado en el portapapeles',
        })
        break
      case 'Feedback':
        toast({
          title: 'La propuesta de Feedback se ha copiado en el portapapeles',
        })
        break
      case 'Letter':
        toast({
          title: 'La carta de presentación se ha copiado en el portapapeles',
        })
        break
      case 'Position':
        toast({
          title:
            'La descripción de la posición se ha copiado en el portapapeles',
        })
        break
      case 'Recomendation':
        toast({
          title: 'La carta de recomendación se ha copiado en el portapapeles',
        })
        break
      default:
        toast({ title: 'El contenido se ha copiado en el portapapeles' })
    }
  }

  return (
    <div className="pt-2 w-full flex items-center justify-center ">
      <button
        className={`flex  items-center px-5 py-2 gap-4  border-2 border-black
      bg-white text-black hover:text-white hover:bg-black
    `}
        onClick={copyToClipboard}
      >
        <RiFileCopy2Line className="text-center h-5 w-5 md:h-7 md:w-7" />
        <p className=" text-base md:text-lg ">Copiar</p>
      </button>
    </div>
  )
}

export default CopyButton
