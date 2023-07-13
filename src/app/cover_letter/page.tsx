import Cover from '@/components/Cover'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">Cuéntanos sobre la oferta</h2>
        <Cover />
      </div>
    </main>
  )
}
