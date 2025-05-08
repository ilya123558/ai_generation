import { useEffect } from "react";

export const useFixViewportHeight = () => {
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', updateViewportHeight);

    updateViewportHeight();

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);
};
