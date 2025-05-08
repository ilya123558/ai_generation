import { useEffect, useState } from "react";

export const useGetDevice = () => {
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIos, setIsIos] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if(navigator) {
      const isAndroidDevice = typeof navigator !== 'undefined' && navigator.userAgent ? /Android/i.test(navigator.userAgent) : false;
      const isIosDevice = typeof navigator !== 'undefined' && navigator.userAgent ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
      const isDesktopDevice = isAndroid || isIos ? false : true

      setIsAndroid(isAndroidDevice)
      setIsIos(isIosDevice)
      setIsDesktop(isDesktopDevice)
    } 
  }, [navigator])

  const getDevices = () => {
    return { isAndroid, isIos, isDesktop }
  }

  const getActiveDevice = () => {
    if(isAndroid) return 'android'
    if(isIos) return 'isIos'
    return 'desktop'
  }

  return { isAndroid, isIos, isDesktop, getActiveDevice, getDevices }
};