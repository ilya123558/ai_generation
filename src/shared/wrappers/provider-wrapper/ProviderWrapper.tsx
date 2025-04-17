'use client'
import { store } from '@/views/store'
import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import { viewport } from '@telegram-apps/sdk'

export const ProviderWrapper = ({ children }: PropsWithChildren) => {
  // если нужно заблокировать zoom на телефоне
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
    if (viewport?.expand?.isAvailable()) {
      viewport.expand();
    }
  }, []);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
