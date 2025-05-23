'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';

const styleList = ['Realistc', 'Realistc', 'Realistc', 'Realistc', 'Realistc', 'Realistc', 'Realistc', 'Realistc']

export const StyleSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const swiperRef = useRef<SwiperType | null>(null);

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  return (
    <div className="w-full flex items-center mt-[2vw]">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={7}
        onInit={handleInitSwiper}
        className="!p-[0px_4vw]"
      >
        {styleList.map((item, index) => (
          <SwiperSlide key={index} className='max-w-fit'>
            <div 
              onClick={() => setActiveIndex(index)} 
              className={`h-28px w-fit transition-all active:scale-95 flex items-center justify-center p-[0px_6vw] fs-13 rounded-[16px] font-semibold border-[1px] border-transparent ${activeIndex === index ? 'text-white border-white': 'text-[#AAAAAB]'}`}
            >
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};