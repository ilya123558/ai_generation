'use client'
import { HeaderWithIcons } from '@/features/header-with-icons/HeaderWithIcons'
import { useFixViewportHeight } from '@/utils/hooks/useFixViewportHeight'
import { useGetDevice } from '@/utils/hooks/useGetDevice'
import { GenerationChat } from '@/widgets/generation-chat/GenerationChat'

export default function Page() {
  useFixViewportHeight()
  const { getTelegramTopPaddingValue } = useGetDevice()

  return (
    <section style={{paddingTop: getTelegramTopPaddingValue()}} className="fixed left-0 top-0 h-screen w-screen overflow-hidden">
      <div className="fixed left-0 top-0 h-screen w-screen flex items-center justify-center z-[-1] fs-40 font-semibold opacity-5 select-none pointer-events-none">
        Photiqe
      </div>
      <div className="z-[1]">
        <HeaderWithIcons />
        <GenerationChat />
      </div>
    </section>
  )
}
