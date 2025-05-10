'use client'
import { HeaderWithIcons } from '@/features/header-with-icons/HeaderWithIcons'
import { useFixViewportHeight } from '@/utils/hooks/useFixViewportHeight'
import { useGetDevice } from '@/utils/hooks/useGetDevice'
import { GenerationChat } from '@/widgets/generation-chat/GenerationChat'
import { useEffect, useState } from 'react'

export default function Page() {
  useFixViewportHeight()
  const { getTelegramTopPaddingValue } = useGetDevice()

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    // @ts-ignore
    const vk = navigator.virtualKeyboard as any;

    if (!vk || typeof vk.addEventListener !== 'function') return;

    const handleGeometryChange = () => {
      alert('handleGeometryChange')
      // const height = vk.boundingRect?.height || 0;
      // setKeyboardHeight(height);
    };

    vk.addEventListener('geometrychange', handleGeometryChange);

    handleGeometryChange();

    return () => {
      vk.removeEventListener('geometrychange', handleGeometryChange);
    };
  }, []);

  return (
    <section style={{paddingTop: getTelegramTopPaddingValue()}} className="fixed left-0 top-0 h-screen w-screen overflow-hidden">
      <div className="fixed left-0 top-0 h-screen w-screen flex items-center justify-center z-[-1] fs-40 font-semibold opacity-5 select-none pointer-events-none">
        {/* Photiqe */}
        {keyboardHeight}
      </div>
      <div className="z-[1]">
        <HeaderWithIcons />
        <GenerationChat />
      </div>
    </section>
  )
}
