'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ChatSliderItem } from '@/features/chat-slider-item/ChatSliderItem';
import { Swiper as SwiperType } from 'swiper/types';
import { useRef, useState } from 'react';
import { useAppSelector } from '@/views/store';
import { IChat } from '@/entities/generations/types/chat';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import { useGetDevice } from '@/utils/hooks/useGetDevice';

interface IProps {
  generations?: IChat[]
  showSkeleton: boolean
}

export const Resolution9x16 = ({generations, showSkeleton}: IProps) => {
  const { isDesktop, isIos, isAndroid } = useGetDevice()

  const [isLoad, setIsLoad] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      setActiveIndex(index)
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

  if(!(isAndroid || isIos || isDesktop)) return <></>

  return (
    <div className="w-full mt-[-2vw]">
      <Swiper
        effect={'coverflow'}
        speed={300}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        onInit={handleInitSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        coverflowEffect={{
          rotate: -25,
          stretch: isDesktop ? 80 : 120,
          depth: 300,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="!p-[6vw_0px]"
      >
        {isLoad
          ? (
            <>
              {showSkeleton && (
                <SwiperSlide className='!w-[27.5vh] !h-[38vh] flex items-center'>
                  <div className="w-full h-full bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
                </SwiperSlide>
              )}
              {
                generations?.map((item, idx) => (
                  <SwiperSlide key={item.id} className="!w-[27.5vh] !h-[38vh]">
                    <ChatSliderItem {...item} isActiveSlide={showSkeleton ? idx === (activeIndex - 1) : idx === activeIndex} />
                  </SwiperSlide>
                ))
              }
            </>
          )
          : Array(5).fill(null).map((_, index) => (
            <SwiperSlide key={index} className='!w-[27.5vh] !h-[38vh]'>
              <div className="w-full h-full bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};