'use client'

import { HeaderWithIcons } from '@/features/header-with-icons/HeaderWithIcons'
import { Container } from '@/shared/container/Container'
import { useGetDevice } from '@/utils/hooks/useGetDevice'
import { useTelegram } from '@/utils/hooks/useTelegram'
import { GenerationChat } from '@/widgets/generation-chat/GenerationChat'
import { useEffect, useState } from 'react'

export default function Page() {
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)
  const { getDevices } = useGetDevice()
  const { webApp } = useTelegram()

  useEffect(() => {
    // Функция для обновления состояния высоты
    const updateViewportHeight = () => {
      const stableHeight = window.Telegram.WebApp.viewportStableHeight
      setViewportHeight(stableHeight)
      alert('событие работает')
    }

    // Проверка, доступен ли Telegram Web App
    if (window.Telegram) {
      // Слушаем событие viewportChanged
      window.Telegram.WebApp.onEvent('viewportChanged', (event: any) => {
        if (event.isStateStable) {
          updateViewportHeight()
        }
      })

      // Начальная установка для стабильной высоты
      updateViewportHeight()
      
      // Очистка при размонтировании компонента
      return () => {
        window.Telegram.WebApp.offEvent('viewportChanged', updateViewportHeight)
      }
    }
  }, [])

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div className="absolute w-full h-full flex items-center justify-center z-[-1] fs-25 font-semibold opacity-5 select-none pointer-events-none">
        {/* Photiqe */}
        {/* {viewportHeight} */}
        {/* <pre>{JSON.stringify(getDevices(), null, 2)}</pre> */}
        {webApp?.platform || 'null'}
      </div>
      <div className="z-[1]">
        <HeaderWithIcons />
        <GenerationChat />
      </div>
    </section>
  )
}
