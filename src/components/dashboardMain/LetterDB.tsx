import { ILettersList } from '@/app/dashboard/page'
import ReactMarkdown from 'react-markdown'
import { ScrollArea } from '../ui/scroll-area'

interface ILetterDBProps {
  letter: ILettersList
}

function LetterDB({ letter }: ILetterDBProps) {
  return (
    <main className="flex flex-col flex-1 min-h-full  border-1 border-black  bg-white lg:rounded-tl-3xl">
      <div className="flex-1 h-full flex flex-col items-center  justify-end overflow-hidden">
        <ScrollArea className="p-2 border-2 max-w-2xl h-[80vh] border-zinc-200 lg:h-[800px]">
          <ReactMarkdown
            className={`prose whitespace-pre-wrap lg:text-lg leading-7`}
          >
            {letter.content}
          </ReactMarkdown>
        </ScrollArea>
      </div>
      <footer className="h-16 flex items-center justify-around">
        <div>Perfil</div>
        <div>Oferta</div>
        <div>Carta</div>
      </footer>
    </main>
  )
}

export default LetterDB
