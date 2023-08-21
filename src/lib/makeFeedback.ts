import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'

const COVER_PROMPT = `Teniendo en cuenta el puesto que ha ocupado el empleado, el area o departamento, los proyectos en los que ha participado, las competencias que ha mostrado en su desempeño y el aspecto que debería desarrollar o mejorar. Escribe un texto de feedback en tono amable y constructivo que pueda servir como evaluación de desempeño al empleado.

puesto que ha ocupado:
{position}
area o departamento:
{area}
proyectos en los que ha participado:
{proyects}
competencias que ha mostrado
{competences}
aspecto a desarrollar o mejorar
{develop}`

const prompt = new PromptTemplate({
  template: COVER_PROMPT,
  inputVariables: [
    'language',
    'position',
    'area',
    'proyects',
    'competences',
    'develop',
  ],
})

export const makeFeedback = () => {
  return new LLMChain({
    llm: new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-3.5-turbo',
      streaming: true,
    }),

    prompt: prompt,
  })
}
