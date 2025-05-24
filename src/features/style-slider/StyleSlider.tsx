'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useGetStylesQuery } from '@/entities/styles/api/styles.api';
import { setActiveStyleId, useAppDispatch, useAppSelector } from '@/views/store';

export const StyleSlider = () => {
  const dispatch = useAppDispatch()
  const activeStyleId = useAppSelector(state => state.main.accountData.activeStyleId)
  const {data: stylesData} = useGetStylesQuery()

  const swiperRef = useRef<SwiperType | null>(null);

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  return (
    <div className="w-full flex items-center mt-[2.67vw]">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={7}
        onInit={handleInitSwiper}
        className="!p-[0px_4vw]"
      >
        {stylesData?.styles.map((item, index) => (
          <SwiperSlide key={index} className='max-w-fit'>
            <div 
              onClick={() => dispatch(setActiveStyleId(item.id))} 
              className={`h-38px w-fit transition-all active:scale-95 flex items-center justify-center p-[0px_6vw] fs-13 rounded-[16px] font-semibold border-[1px] border-transparent ${activeStyleId === item.id ? 'text-white border-white': 'text-[#AAAAAB]'}`}
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};