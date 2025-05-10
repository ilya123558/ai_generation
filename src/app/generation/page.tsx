'use client'
import { HeaderWithIcons } from '@/features/header-with-icons/HeaderWithIcons'
import { useFixViewportHeight } from '@/utils/hooks/useFixViewportHeight'
import { GenerationChat } from '@/widgets/generation-chat/GenerationChat'

export default function Page() {
  useFixViewportHeight()

  return (
    <section className="fixed left-0 right-0 h-screen w-screen overflow-hidden bg-red">
      <div className="absolute w-full h-full flex items-center justify-center z-[-1] fs-40 font-semibold opacity-5 select-none pointer-events-none">
        Photiqe
      </div>
      <div className="z-[1]">
        <HeaderWithIcons />
        <GenerationChat />
      </div>
    </section>
  )
}
