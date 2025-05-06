export const useGetDevice = () => {
  const isAndroid = typeof navigator !== 'undefined' && navigator.userAgent ? /Android/i.test(navigator.userAgent) : false;
  const isIos = typeof navigator !== 'undefined' && navigator.userAgent ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
  const isDesktop = isAndroid || isIos ? false : true

  const getActiveDevice = () => {
    if(isAndroid) return 'android'
    if(isIos) return 'isIos'
    return 'desktop'
  }

  return { isAndroid, isIos, isDesktop, getActiveDevice }
};