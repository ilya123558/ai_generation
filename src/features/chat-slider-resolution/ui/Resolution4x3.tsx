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

interface IProps {
  generations?: IChat[]
}

export const Resolution4x3 = ({generations}: IProps) => {
  const { isCreatingImage } = useAppSelector(state => state.main.meta)
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

  return (
    <div className="w-full">
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
          stretch: 170,
          depth: 300,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="!p-[6vw_0px]"
      >
        {isLoad
          ? (
            <>
              {isCreatingImage && (
                <SwiperSlide className='!w-[30vh] !h-[38vh]'>
                  <div className="w-[30vh] h-[22.5vh] bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
                </SwiperSlide>
              )}
              {
                generations?.map((item, idx) => (
                  <SwiperSlide key={idx} className="!w-[30vh] !h-[38vh]">
                    <div className="w-full h-full flex items-center">
                      <div className="w-[30vh] h-[22.5vh]">
                        <ChatSliderItem {...item} isActiveSlide={isCreatingImage ? idx === (activeIndex - 1) : idx === activeIndex} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </>
          )
          : Array(5).fill(null).map((_, index) => (
            <SwiperSlide key={index} className='!w-[30vh] !h-[38vh]'>
              <div className="w-[30vh] h-[22.5vh] bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};