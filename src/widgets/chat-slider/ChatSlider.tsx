'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ChatSliderItem } from '@/features/chat-slider-item/ChatSliderItem';
import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useLazyGetGenerationsQuery } from '@/entities/generations/api/generations.api';
import { imageCreating, useAppDispatch, useAppSelector } from '@/views/store';
import { useGetSubCategoriesQuery } from '@/entities/categories/api/categories.api';
import 'swiper/css/effect-coverflow';
import 'swiper/css';

export const ChatSlider = () => {
  const dispatch = useAppDispatch()
  const { activeSubcategoryId, activeCategoryId } = useAppSelector(state => state.main.accountData)
  const { isCreatingImage, isCreatingImageSubcategoryId } = useAppSelector(state => state.main.meta)
  const [isLoad, setIsLoad] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { data: subcategoriesData } = useGetSubCategoriesQuery(activeCategoryId || 0)
  const [getGenerations, { data: generationsData }] = useLazyGetGenerationsQuery()

  const ref = useRef<number | null>(null)
  const showEmptyMessage = generationsData 
    && generationsData.generations.length === 0 
    && (!isCreatingImage || (isCreatingImageSubcategoryId !== activeSubcategoryId))

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

  useEffect(() => {
    getGenerations(activeSubcategoryId ? {categoryId: activeSubcategoryId } : {})

    const interval = setInterval(() => {
      getGenerations(activeSubcategoryId ? {categoryId: activeSubcategoryId } : {}).then(data => {
        if(!data.data) return 

        const value = data.data.generations[0]?.id
        if(value && value !== ref.current) {
          dispatch(imageCreating())
          ref.current = value
        }
      })
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [activeSubcategoryId])

  return (
    <div className="w-full mt-[-7.5vw]">
      {showEmptyMessage
        ? (
          <div className='flex items-center justify-center h-236px w-full text-nowrap text-white font-normal fs-12 italic text-center'>
            <p>Вы еще не создали изображения в этой<br/> категории</p>
          </div>
        ) 
        : (
          <Swiper
            effect={'coverflow'}
            speed={500}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            onInit={handleInitSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            coverflowEffect={{
              rotate: -25,
              stretch: 90,
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
                    <SwiperSlide className='!w-[53vw]'>
                      <div className="w-200px h-280px bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
                    </SwiperSlide>
                  )}
                  {
                    generationsData?.generations.map((item, idx) => (
                      <SwiperSlide key={idx} className="!w-[53vw]">
                        <ChatSliderItem {...item} isActiveSlide={isCreatingImage ? idx === (activeIndex - 1) : idx === activeIndex} />
                      </SwiperSlide>
                    ))
                  }
                </>
              )
              : Array(5).fill(null).map((_, index) => (
                <SwiperSlide key={index} className='!w-[53vw]'>
                  <div className="w-200px h-280px bg-[#ABB0BC] animate-pulse z-[9] rounded-[16px]"></div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        )
      }
      <div className="mt-[-4vw] w-full flex items-center justify-center text-center fs-16 font-medium">
        {subcategoriesData?.subcategories?.find((item) => item.id === activeSubcategoryId)?.title || 'Все'}
      </div>
    </div>
  );
};