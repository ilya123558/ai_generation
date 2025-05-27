'use client'

import { useEffect, useRef, useState } from 'react';
import { useLazyGetGenerationsQuery } from '@/entities/generations/api/generations.api';
import { imageCreating, useAppDispatch, useAppSelector } from '@/views/store';
import { ChatSliderResolution } from '@/features/chat-slider-resolution/ChatSliderResolution';


export const ChatSlider = () => {
  const dispatch = useAppDispatch()
  const { activeSubcategoryId } = useAppSelector(state => state.main.accountData)
  const { isCreatingImage, isCreatingImageSubcategoryId } = useAppSelector(state => state.main.meta)

  const [getGenerations, { data: generationsData }] = useLazyGetGenerationsQuery()

  const ref = useRef<number | null>(null)
  const showEmptyMessage = generationsData 
    && generationsData.generations.length === 0 
    && (!isCreatingImage || (isCreatingImageSubcategoryId !== activeSubcategoryId))

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
    <div className="w-full mt-[0vw] flex flex-col justify-between">
      {showEmptyMessage
        ? (
          <div className='flex items-center justify-center h-[43.6vh] w-full text-nowrap text-white font-normal fs-12 italic text-center'>
            <p>Вы еще не создали изображения в этой<br/> категории</p>
          </div>
        ) 
        : <ChatSliderResolution generations={generationsData?.generations} />
      }
    </div>
  );
};