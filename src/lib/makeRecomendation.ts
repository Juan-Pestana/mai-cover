import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'

const COVER_PROMPT = `Teniendo en cuenta el puesto que ha ocupado, el area o departamento, los proyectos en los que ha participado y las competencias que ha mostrado en su desempeño escribe una carta de recomendación en {language} que muestre porque el humano es un buen candidato para un futuro puesto de trabajo y sería una buena decisión contratarle.

puesto:
{position}
area o departamento:
{area}
proyectos en los que ha participado:
{proyects}
competencias que ha mostrado
{competences}`

const prompt = new PromptTemplate({
  template: COVER_PROMPT,
  inputVariables: ['language', 'position', 'area', 'proyects', 'competences'],
})

export const makeRecomendation = () => {
  return new LLMChain({
    llm: new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-3.5-turbo',
      streaming: true,
    }),

    prompt: prompt,
  })
}
