'use client'
import { useEffect } from 'react';
import { useLazyGetGenerationsQuery, useLazyGetGenerationsStatusByIdQuery } from '@/entities/generations/api/generations.api';
import { createImage, imageCreating, useAppDispatch, useAppSelector } from '@/views/store';
import { ChatSliderResolution } from '@/features/chat-slider-resolution/ChatSliderResolution';


export const ChatSlider = () => {
  const dispatch = useAppDispatch()
  const { activeSubcategoryId } = useAppSelector(state => state.main.accountData)
  const { isCreatingImage } = useAppSelector(state => state.main.meta)

  const [getGenerations, { data: generationsData }] = useLazyGetGenerationsQuery()
  const [getGenerationsStatusById] = useLazyGetGenerationsStatusByIdQuery()

  const showEmptyMessage = generationsData 
    && generationsData.generations.length === 0 
    && !isCreatingImage

  useEffect(() => {
    const fetchData = async () => {
      await getGenerations(activeSubcategoryId ? {categoryId: activeSubcategoryId } : {}).then(() => {
        const job_id = localStorage.getItem('job_id')
        if(job_id) {
          getGenerationsStatusById({jobId: Number(job_id)}).then(data => {
            if(data.data?.status === 'pending') {
              dispatch(createImage())
            }else{
              dispatch(imageCreating())
            }
          })
        }
      })
    }

    fetchData()

    let interval: NodeJS.Timeout
    interval = setInterval(() => {
      getGenerations(activeSubcategoryId ? {categoryId: activeSubcategoryId } : {}).then(() => {
        const job_id = localStorage.getItem('job_id')
        if(job_id) {
          getGenerationsStatusById({jobId: Number(job_id)}).then(data => {
            if(data.data?.status === 'pending') {
              dispatch(createImage())
            }else{
              dispatch(imageCreating())
            }
          })
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