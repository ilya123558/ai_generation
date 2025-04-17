'use client'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { OnboardingSliderButtons } from '@/features/onboarding-slider-buttons/OnboardingSliderButtons'
import { useRouter, useSearchParams } from 'next/navigation'
import { OnboardingSliderItem } from '@/features/onboarding-slider-item/OnboardingSliderItem'
import 'swiper/css'

const onboardingList = [
  {
    image: '/images/onboarding/image-1.png',
    title: 'Unlock the Power Of Future AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    image: '/images/onboarding/image-2.png',
    title: 'Unlock the Power Of Future AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    image: '/images/onboarding/image-3.png',
    title: 'Unlock the Power Of Future AI',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
]

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
      <div className={`transition-all `}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          touchMoveStopPropagation={false}
          allowTouchMove={false}
          ref={swiperRef}
        >
          {onboardingList.map((item, index) => (
            <SwiperSlide key={index}>
              <OnboardingSliderItem activeIndex={activeIndex} {...item} />
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
