import { useEffect, useState } from "react";
import { useTelegram } from "./useTelegram";

export const useGetDevice = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.userAgent) {
      const userAgent = navigator.userAgent;

      const isAndroidDevice = /Android/i.test(userAgent);
      const isIosDevice = /iPhone|iPad|iPod/i.test(userAgent);
      const isDesktopDevice = !isAndroidDevice && !isIosDevice;

      setIsAndroid(isAndroidDevice);
      setIsIos(isIosDevice);
      setIsDesktop(isDesktopDevice);
    }
  }, []);

  const getDevices = () => {
    return { isAndroid, isIos, isDesktop };
  };

  const getActiveDevice = () => {
    if (isAndroid) return "android";
    if (isIos) return "ios";
    return "desktop";
  };

  const getTelegramTopPaddingValue = () => {
    const activeDevice = getActiveDevice();
    if (activeDevice === "android") return 80;
    if (activeDevice === "ios") return 94;
    return 0;
  };

  return {
    isAndroid,
    isIos,
    isDesktop,
    getActiveDevice,
    getDevices,
    getTelegramTopPaddingValue,
  };
};
