import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'

const COVER_PROMPT = `Teniendo en cuenta la experiencia, formación y el abstract que conforman el perfil del humano, recomienda al humano que posibles aspectos de su perfil debería destacar para que este se ajuste mejor a los requerimientos del puesto de {offer_name} descritos en la siguiente oferta de empleo: {offer}.

PERFIL DEL HUMANO:
experiencia:
{experience}
formación:
{training}
abstract:
{abstract}`

const prompt = new PromptTemplate({
  template: COVER_PROMPT,
  inputVariables: ['offer_name', 'offer', 'abstract', 'experience', 'training'],
})

export const makeAdapt = () => {
  return new LLMChain({
    llm: new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-3.5-turbo',
      streaming: true,
    }),

    prompt: prompt,
  })
}
