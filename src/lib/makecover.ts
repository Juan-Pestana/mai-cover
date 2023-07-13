import { ChatOpenAI } from 'langchain/chat_models/openai'
import { LLMChain } from 'langchain/chains'
import { PromptTemplate } from 'langchain/prompts'
import { CallbackManager } from 'langchain/callbacks'

const COVER_PROMPT = `Teniendo en cuenta la experiencia, formación y el abstract del humano, escribe una carta de presentación que describa porque el humano es un buen candidato para el puesto en la empresa {company} para la labor de {offer_name} que incluye la siguiente descripción: {offer}.

abstract:
{abstract}
experiencia:
{experience}
formación:
{training}`

const prompt = new PromptTemplate({
  template: COVER_PROMPT,
  inputVariables: [
    'company',
    'offer_name',
    'offer',
    'abstract',
    'experience',
    'training',
  ],
})

export const makecover = () => {
  return new LLMChain({
    llm: new ChatOpenAI({
      temperature: 0.5,
      modelName: 'gpt-3.5-turbo',
      streaming: true,
    }),

    prompt: prompt,
  })
}
