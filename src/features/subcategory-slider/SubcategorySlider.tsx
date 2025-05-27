'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper/types';
import { useRouter } from 'next/navigation';
import { useGetSubCategoriesQuery, useLazyGetSubCategoriesQuery } from '@/entities/categories/api/categories.api';
import { setActiveSubcategoryId, useAppDispatch, useAppSelector } from '@/views/store';
import 'swiper/css/effect-coverflow';
import 'swiper/css';


export const SubcategorySlider = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { activeCategoryId, activeSubcategoryId, creatorMode } = useAppSelector(state => state.main.accountData)
  const [getSubCategories, { data: subcategoriesData }] = useLazyGetSubCategoriesQuery()

  const swiperRef = useRef<SwiperType | null>(null);

  const handleInitSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper
  }

  const handleSetActiveSubcategory = (id: number | null) => {
    dispatch(setActiveSubcategoryId(id))
  }

  useEffect(() => {
    if(activeCategoryId) {
      getSubCategories(activeCategoryId)
    }
  }, [activeCategoryId])

  return (
    <div className="pl-[4vw] w-full flex items-center">
      <button onClick={() => router.push('/home')} className="active:scale-[0.95] transition-all mr-[3.4vw]">
        <svg className="w-[3.5vh]" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3123 0.615234H11.1545C5.39906 0.615234 0.733398 5.2809 0.733398 11.0363V23.1942C0.733398 28.9496 5.39906 33.6152 11.1545 33.6152H23.3123C29.0677 33.6152 33.7334 28.9496 33.7334 23.1942V11.0363C33.7334 5.2809 29.0677 0.615234 23.3123 0.615234Z" fill="white"/>
          <path d="M19.7425 13.082L15.4004 17.1497L19.7425 21.4918" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={7}
        onInit={handleInitSwiper}
        className={`rounded-[16px_0px_0px_16px] !pr-[4vw] ${creatorMode ? 'pointer-events-none opacity-60': ''}`}
      >
        <SwiperSlide className='max-w-fit'>
          <div 
            onClick={() => handleSetActiveSubcategory(null)} 
            className={`h-[4.5vh] w-fit transition-all active:scale-95 flex items-center justify-center p-[0px_6vw] text-[1.6vh] rounded-[16px] font-medium ${activeSubcategoryId === null ? 'text-[#23262F] bg-[#F7F7F8]': 'text-[#AAAAAB] bg-[#F7F7F81A]'}`}
          >
            Все
          </div>
        </SwiperSlide>
        {subcategoriesData?.subcategories.map(({ title, id }, index) => (
          <SwiperSlide key={index} className='max-w-fit'>
            <div 
              onClick={() => handleSetActiveSubcategory(id)} 
              className={`h-[4.5vh] w-fit transition-all active:scale-95 flex items-center justify-center p-[0px_6vw] text-[1.6vh] rounded-[16px] font-medium ${activeSubcategoryId === id ? 'text-[#23262F] bg-[#F7F7F8]': 'text-[#AAAAAB] bg-[#F7F7F81A]'}`}
            >
              {title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};