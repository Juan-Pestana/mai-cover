import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'

const COVER_PROMPT = `Eres un trabajador que ocupa una posición de {position} en la industria de {industry}, redacta, en {language} y en formato de texto Markdown una descripción de tus funciones y responsabilidades desarrolladas en tu puesto, en un formato adecuado para incluirlo en tu Curriculum. Resúmelo en un listado de puntos que hagan referencia tanto a las funciones realizadas como las responsabilidades asumidas, los logros obtenidos así como relaciones con otros equipos, indica métricas allí donde pueda resulte más relevante e incorpora una mención a la siguiente tarea o proyecto destacado: {proyect}`

const prompt = new PromptTemplate({
  template: COVER_PROMPT,
  inputVariables: ['industry', 'position', 'proyect', 'language'],
})

export const makePosition = () => {
  return new LLMChain({
    llm: new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-4',
      streaming: true,
    }),

    prompt: prompt,
  })
}
