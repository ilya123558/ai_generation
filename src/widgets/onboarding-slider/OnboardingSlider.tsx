'use client'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react'
import { OnboardingSliderButtons } from '@/features/onboarding-slider-buttons/OnboardingSliderButtons'
import { useRouter, useSearchParams } from 'next/navigation'
import { OnboardingSliderItem } from '@/features/onboarding-slider-item/OnboardingSliderItem'
import 'swiper/css'
import { useGetDevice } from '@/utils/hooks/useGetDevice'

export const OnboardingSlider = () => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(0)
  const [storyWidthSlider, setStoryWidthSlider] = useState([
    {sliderIndex: 0, storyWidth: 0},
    {sliderIndex: 1, storyWidth: 0},
    {sliderIndex: 2, storyWidth: 0},
  ])

  const swiperRef = useRef<SwiperRef | null>(null)

  const { isDesktop, getTelegramTopPaddingValue } = useGetDevice()

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (activeIndex === 2) {
      router.push('/gender-selection')
      return
    }

    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  useEffect(() => {
    if(activeIndex > 2) return;

    setStoryWidthSlider(prev => prev.map(item => {
      if(item.sliderIndex > activeIndex) {
        return {...item, storyWidth: 0}
      }

      return item
    }))

    const duration = 3000;
    const interval = 50;
    
    let currentTime = 0;
    
    const intervalId = setInterval(() => {
      currentTime += interval;
      const progress = Math.min((currentTime / duration) * 100, 100);
      setStoryWidthSlider(prev => prev.map(item => {
        if(item.sliderIndex === activeIndex) {
          return {...item, storyWidth: progress}
        }
  
        return item
      }))

      if (currentTime >= duration) {
        setStoryWidthSlider(prev => prev.map(item => {
          if(item.sliderIndex === activeIndex) {
            return {...item, storyWidth: progress}
          }
    
          return item
        }))
        handleNextSlide()
      }
    }, interval);

    return () => clearInterval(intervalId)
  }, [activeIndex])

  return (
    <div className={`w-screen h-screen`}>
      <div className={`transition-all h-full relative overflow-hidden`}>
        <div style={{top: `${ getTelegramTopPaddingValue() + 24 }px`}} className="absolute z-[50] p-[0px_13px] w-full h-[5px] flex gap-[4px] items-center justify-center ">
          <div className="w-full bg-[#23262f33] h-full rounded-[10px]">
            <div 
              style={{width: `${activeIndex > 0 ? 100 : (storyWidthSlider.find(item => item.sliderIndex === 0)?.storyWidth || 0)}%`}} 
              className="h-full rounded-[10px] bg-[#23262f33] transition-all duration-75"
            ></div>
          </div>
          <div className="w-full bg-[#23262f33] h-full rounded-[10px]">
            <div 
              style={{width: `${activeIndex > 1 ? 100 : (storyWidthSlider.find(item => item.sliderIndex === 1)?.storyWidth || 0)}%`}} 
              className="h-full rounded-[10px] bg-[#23262f33] transition-all duration-75"
            ></div>
          </div>
          <div className="w-full bg-[#23262f33] h-full rounded-[10px]">
            <div 
              style={{width: `${storyWidthSlider.find(item => item.sliderIndex === 2)?.storyWidth || 0}%`}} 
              className="h-full rounded-[10px] bg-[#23262f33] transition-all duration-75"
            ></div>
          </div>
        </div>
        <button onClick={handlePrevSlide} className="left-0 top-0 bg-transparent h-full w-[15%] absolute z-50"></button>
        <button onClick={handleNextSlide} className="right-0 top-0 bg-transparent h-full w-[15%] absolute z-50"></button>
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
