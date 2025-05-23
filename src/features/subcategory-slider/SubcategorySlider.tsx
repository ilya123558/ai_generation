'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useRouter } from 'next/navigation';

const subcategoryList = ['All', 'Realistc', 'Sports', 'Music', 'All', 'Realistc', 'Sports', 'Music']
// const styleList = ['Realistc', 'Realistc', 'Realistc', 'Realistc']

export const SubcategorySlider = () => {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const swiperRef = useRef<SwiperType | null>(null);

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  return (
    <div className="pl-[4vw] w-full flex items-center">
      <button onClick={() => router.push('/home')} className="active:scale-[0.95] transition-all mr-[3.4vw]">
        <svg className="w-25px h-25px" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3123 0.615234H11.1545C5.39906 0.615234 0.733398 5.2809 0.733398 11.0363V23.1942C0.733398 28.9496 5.39906 33.6152 11.1545 33.6152H23.3123C29.0677 33.6152 33.7334 28.9496 33.7334 23.1942V11.0363C33.7334 5.2809 29.0677 0.615234 23.3123 0.615234Z" fill="white"/>
          <path d="M19.7425 13.082L15.4004 17.1497L19.7425 21.4918" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={7}
        onInit={handleInitSwiper}
        className="rounded-[16px_0px_0px_16px] !pr-[4vw]"
      >
        {subcategoryList.map((item, index) => (
          <SwiperSlide key={index} className='max-w-fit'>
            <div 
              onClick={() => setActiveIndex(index)} 
              className={`h-30px w-fit transition-all active:scale-95 flex items-center justify-center p-[0px_6vw] fs-13 rounded-[16px] font-medium ${activeIndex === index ? 'text-[#23262F] bg-[#F7F7F8]': 'text-[#AAAAAB] bg-[#F7F7F81A]'}`}
            >
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};