'use client'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { OnboardingSliderButtons } from '@/features/onboarding-slider-buttons/OnboardingSliderButtons'
import { useRouter, useSearchParams } from 'next/navigation'
import { OnboardingSliderItem } from '@/features/onboarding-slider-item/OnboardingSliderItem'
import 'swiper/css'

export const OnboardingSlider = () => {
  const isAndroid = typeof navigator !== 'undefined' && navigator.userAgent ? /Android/i.test(navigator.userAgent) : false;
  const isIos = typeof navigator !== 'undefined' && navigator.userAgent ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
  const isDesktop = isAndroid || isIos ? false : true

  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [storyWidth, setStoryWidth] = useState(0)
  const swiperRef = useRef<SwiperRef | null>(null)

  const handlePrevSlide = () => {
    
    if (swiperRef.current) {
      setStoryWidth(0)
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (activeIndex === 2) {
      router.push('/gender-selection')
      return
    }

    if (swiperRef.current) {
      setStoryWidth(0)
      swiperRef.current.swiper.slideNext()
    }
  }

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  useEffect(() => {
    if(activeIndex > 2) return;

    setStoryWidth(0)
    const duration = 3000;
    const interval = 50;
    
    let currentTime = 0;
    
    const intervalId = setInterval(() => {
      currentTime += interval;
      const progress = Math.min((currentTime / duration) * 100, 100);
      setStoryWidth(progress);

      if (currentTime >= duration) {
        setStoryWidth(0)
        handleNextSlide()
      }
    }, interval);

    return () => clearInterval(intervalId)
  }, [activeIndex])

  return (
    <div className={`w-screen h-screen`}>
      <div className={`transition-all h-full relative overflow-hidden`}>
        <div style={{top: `${ isDesktop ? 10 : 92 }px`}} className="absolute z-[50] p-[0px_13px] w-full h-[5px] flex gap-[4px] items-center justify-center ">
          <div className="w-full bg-[#ffffff33] h-full rounded-[10px]">
            {(activeIndex === 0 || activeIndex > 0) && <div style={{width: `${activeIndex > 0 ? 100 : storyWidth}%`}} className="h-full rounded-[10px] bg-[#ffffff33] transition-all"></div>}
          </div>
          <div className="w-full bg-[#ffffff33] h-full rounded-[10px]">
            {(activeIndex === 1 || activeIndex > 1) && <div style={{width: `${activeIndex > 1 ? 100 : storyWidth}%`}} className="h-full rounded-[10px] bg-[#ffffff33] transition-all"></div>}
            </div>
          <div className="w-full bg-[#ffffff33] h-full rounded-[10px]">
            {activeIndex === 2 && <div style={{width: `${storyWidth}%`}} className="h-full rounded-[10px] bg-[#ffffff33] transition-all"></div>}
          </div>
        </div>
        <button onClick={handlePrevSlide} className="left-0 top-0 bg-transparent h-full w-[30vw] absolute z-50"></button>
        <button onClick={handleNextSlide} className="right-0 top-0 bg-transparent h-full w-[30vw] absolute z-50"></button>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          ref={swiperRef}
        >
          {Array(3).fill(null).map((_, index) => (
            <SwiperSlide key={index}>
              <OnboardingSliderItem activeIndex={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <OnboardingSliderButtons
        activeIndex={activeIndex}
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
      />
    </div>
  )
}
