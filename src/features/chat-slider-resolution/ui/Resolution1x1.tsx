'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ChatSliderItem } from '@/features/chat-slider-item/ChatSliderItem';
import { Swiper as SwiperType } from 'swiper/types';
import { useRef, useState } from 'react';
import { IChat } from '@/entities/generations/types/chat';
import 'swiper/css/effect-coverflow';
import 'swiper/css';
import { useGetDevice } from '@/utils/hooks/useGetDevice';

interface IProps {
  generations?: IChat[]
  showSkeleton: boolean
}

export const Resolution1x1 = ({generations, showSkeleton}: IProps) => {
  const { isDesktop } = useGetDevice()

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
          stretch: isDesktop ? 60 : 125,
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
                <SwiperSlide className='!w-[28vh] !h-[38vh]'>
                  <div className="w-full h-full flex items-center">
                    <div className="w-[28vh] h-[28vh] bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
                  </div>
                </SwiperSlide>
              )}
              {
                generations?.map((item, idx) => (
                  <SwiperSlide key={item.id} className="!w-[28vh] !h-[38vh]">
                    <div className="w-full h-full flex items-center">
                      <div className="w-[28vh] h-[28vh]">
                        <ChatSliderItem {...item} isActiveSlide={showSkeleton ? idx === (activeIndex - 1) : idx === activeIndex} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </>
          )
          : Array(5).fill(null).map((_, index) => (
            <SwiperSlide key={index} className='!w-[28vh] !h-[38vh]'>
              <div className="w-full h-full flex items-center">
                <div className="w-[28vh] h-[28vh] bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};