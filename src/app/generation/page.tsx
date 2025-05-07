import { HeaderWithIcons } from '@/features/header-with-icons/HeaderWithIcons'
import { Container } from '@/shared/container/Container'
import { GenerationChat } from '@/widgets/generation-chat/GenerationChat'

export default function Page() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center z-[-1] fs-40 font-semibold opacity-5 select-none pointer-events-none">
        AI.bot
      </div>
      <div className="z-[1]">
        <HeaderWithIcons />
        <GenerationChat />
      </div>
    </section>
  )
}
