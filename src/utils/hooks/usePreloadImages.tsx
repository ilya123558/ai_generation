import { useEffect } from "react";

const imageUrls = [
  '/images/onboarding/bg-bottom.png',
  '/images/onboarding/bg-top.png',
  '/images/onboarding/image-1.png',
  '/images/onboarding/image-2-1.png',
  '/images/onboarding/image-2-2.png',
  '/images/onboarding/image-2-3.png',
  '/images/onboarding/image-2-4.png',
  '/images/onboarding/image-2-5.png',
  '/images/onboarding/image-2-6.png',
  '/images/onboarding/image-2-7.png',
  '/images/onboarding/image-2-8.png',
  '/images/onboarding/image-2-9.png',
  '/images/onboarding/image-3.png'
];

export const usePreloadImages = () => {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);
};