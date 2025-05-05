'use client'
import { store } from '@/views/store'
import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'

export const ProviderWrapper = ({ children }: PropsWithChildren) => {

  useEffect(() => {
    const preventPinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const preventGesture = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener("touchmove", preventPinchZoom, { passive: false })
    document.addEventListener("gesturestart", preventGesture, { passive: false })

    return () => {
      document.removeEventListener("touchmove", preventPinchZoom)
      document.removeEventListener("gesturestart", preventGesture)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Telegram) {
      const script = document.createElement('script');
      script.src = "https://telegram.org/js/telegram-web-app.js?57";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const checkTelegramWebApp = setInterval(() => {
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.requestFullscreen();
        clearInterval(checkTelegramWebApp);
      }
    }, 100);
  
    return () => clearInterval(checkTelegramWebApp);
  }, []);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
