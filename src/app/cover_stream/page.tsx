import CoverStream from '@/components/CoverStream'
import CoverStreamVer from '@/components/CoverStreamVer'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-3 md:p-12 ">
      <div className="flex flex-col w-full items-center ">
        <h2 className="text-center text-xl">Stream de la carta</h2>
        <CoverStreamVer />
      </div>
    </main>
  )
}
