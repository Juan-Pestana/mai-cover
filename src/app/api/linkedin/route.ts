import { NextResponse } from 'next/server'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'

export async function GET(req: Request) {
  const loader = new CheerioWebBaseLoader(
    'https://www.linkedin.com/in/juan-pestana/'
  )

  const docs = await loader.load()
  console.log(docs)

  return NextResponse.json({ docs: docs })
}
