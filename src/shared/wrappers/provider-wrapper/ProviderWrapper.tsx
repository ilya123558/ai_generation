'use client'
import { usePreventZoom } from '@/utils/hooks/usePreventZoom'
import { useTelegram } from '@/utils/hooks/useTelegram'
import { store } from '@/views/store'
import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  usePreventZoom()
  const { webApp } = useTelegram()

  // useEffect(() => {
  //   if (typeof window !== "undefined" && !window.Telegram) {
  //     const script = document.createElement('script');
  //     script.src = "https://telegram.org/js/telegram-web-app.js?57";
  //     script.async = true;
  //     document.head.appendChild(script);
  //   }
  // }, []);

  useEffect(() => {
    if (webApp) {
      const isAndroid = typeof navigator !== 'undefined' && navigator.userAgent ? /Android/i.test(navigator.userAgent) : false;
      const isIos = typeof navigator !== 'undefined' && navigator.userAgent ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
      const isDesktop = isAndroid || isIos ? false : true

      if(!isDesktop) {
        webApp.requestFullscreen();
      }

      const topSafeArea = isAndroid ? 80 : 90;
      document.body.style.paddingTop = `${isDesktop ? 0 : topSafeArea}px`;
    }
  }, [webApp]);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
