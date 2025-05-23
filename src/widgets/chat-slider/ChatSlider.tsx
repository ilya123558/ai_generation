'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ChatSliderItem } from '@/features/chat-slider-item/ChatSliderItem';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

const slides = [
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
  '/images/chat/image.png',
];

export const ChatSlider = () => {
  const [isLoad, setIsLoad] = useState(false)

  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
    goToSlide(2)

    setTimeout(() => {
      setIsLoad(true)
      goToSlide(0)
    }, 2000)
  }

  return (
    <div className="w-full mt-[-6px]">
      <Swiper
        effect={'coverflow'}
        speed={500}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        onInit={handleInitSwiper}
        coverflowEffect={{
          rotate: 0,
          stretch: 75,
          depth: 300,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className=""
      >
        {isLoad
          ? (
            slides.map((src, idx) => (
              <SwiperSlide key={idx} className="!w-[45vw]">
                <ChatSliderItem src={src} />
              </SwiperSlide>
            ))
          )
          : Array(5).fill(null).map((_, index) => (
            <SwiperSlide key={index} className='!w-[45vw]'>
              <div className="w-168px h-236px bg-[#ABB0BC] z-[9] rounded-[16px]"></div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="mt-[8px] w-full flex items-center justify-center text-center fs-16 font-medium">
        Sport
      </div>
    </div>
  );
};