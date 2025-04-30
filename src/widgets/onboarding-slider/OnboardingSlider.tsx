'use client'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { OnboardingSliderButtons } from '@/features/onboarding-slider-buttons/OnboardingSliderButtons'
import { useRouter, useSearchParams } from 'next/navigation'
import { OnboardingSliderItem } from '@/features/onboarding-slider-item/OnboardingSliderItem'
import 'swiper/css'

export const OnboardingSlider = () => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef | null>(null)

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (activeIndex === 2) {
      router.push('/gender-selection')
    }

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className={`w-screen h-screen`}>
      <div className={`transition-all h-full relative overflow-hidden`}>
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
