'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useGetStylesQuery } from '@/entities/styles/api/styles.api';
import { setActiveStyleId, useAppDispatch, useAppSelector } from '@/views/store';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export const StyleSlider = () => {
  const dispatch = useAppDispatch()
  const { activeStyleId, creatorMode } = useAppSelector(state => state.main.accountData)
  const { isCreatingImage } = useAppSelector(state => state.main.meta)
  const {data: stylesData} = useGetStylesQuery()

  const swiperRef = useRef<SwiperType | null>(null);

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  return (
    <div className="w-full flex items-center mt-[1vh]">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={7}
        onInit={handleInitSwiper}
        className={`!p-[0px_4vw_0.5vh] ${(creatorMode || isCreatingImage) ? 'pointer-events-none opacity-60': ''}`}
      >
        {stylesData?.styles.map((item, index) => (
          <SwiperSlide key={index} className='max-w-fit transition-all'>
            <div 
              onClick={() => dispatch(setActiveStyleId(activeStyleId === item.id ? null : item.id))} 
              className={`w-fit transition-all active:scale-[0.95] flex items-center justify-center p-[0.9vh_1.5vh] text-[1.6vh] rounded-[16px] ${activeStyleId === item.id ? 'text-white font-semibold': 'text-[#AAAAAB] font-medium'}`}
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};