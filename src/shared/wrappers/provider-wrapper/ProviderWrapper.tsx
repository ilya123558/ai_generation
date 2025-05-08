'use client'
import { useGetDevice } from '@/utils/hooks/useGetDevice'
import { usePreventZoom } from '@/utils/hooks/usePreventZoom'
import { useTelegram } from '@/utils/hooks/useTelegram'
import { store } from '@/views/store'
import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  usePreventZoom()
  const { webApp } = useTelegram()
  const { getDevices } = useGetDevice()

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Telegram) {
      const script = document.createElement('script');
      script.src = "https://telegram.org/js/telegram-web-app.js?57";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (webApp) {
      const {isAndroid, isDesktop, isIos} = getDevices()

      let topSafeArea = 0

      if(isAndroid) {
        topSafeArea = 80
      }else if(isIos) {
        topSafeArea = 90
      }else {
        topSafeArea = 0
      }

      if(!isDesktop) {
        webApp.requestFullscreen();
      }

      document.body.style.paddingTop = `${topSafeArea}px`;
    }
  }, [webApp]);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
