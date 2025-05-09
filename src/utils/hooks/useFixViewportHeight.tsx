import { useEffect } from "react";
import { useTelegram } from "./useTelegram";

export const useFixViewportHeight = () => {
  const { webApp } = useTelegram()

  useEffect(() => {
    if (!webApp) return
    
    const updateStableViewportHeight = () => {
      const stableHeight = webApp.viewportStableHeight;
      document.documentElement.style.setProperty('--tg-viewport-stable-height', `${stableHeight}px`);
    };
    webApp.onEvent('viewportChanged', (event) => {
      if (event.isStateStable) {
        setTimeout(() => {
          updateStableViewportHeight();
        }, 200)
      }
    });

    updateStableViewportHeight();

    return () => {
      webApp.offEvent('viewportChanged', updateStableViewportHeight);
    };
  }, [webApp]);
};
