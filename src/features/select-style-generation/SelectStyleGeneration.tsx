'use client'
import { GenerationInput } from '@/shared/generation-input/GenerationInput'
import { ShadowWrapper } from '@/shared/wrappers/shadow-wrapper/ShadowWrapper'
import { CreatorMode } from '../creator-mode/CreatorMode'
import { useEffect, useState } from 'react'
import { useCreateGenerationsMutation, useLazyGetGenerationsByIdQuery } from '@/entities/generations/api/generations.api'
import { setDisplayPrompt, useAppDispatch, useAppSelector } from '@/views/store'
import { useGetStylesQuery } from '@/entities/styles/api/styles.api'


export const SelectStyleGeneration = () => {
  const dispatch = useAppDispatch()
  const { resolution, creatorMode, activeProfileId, activeSubcategoryId } = useAppSelector(state => state.main.accountData)
  const { displayPrompt } = useAppSelector(state => state.main.meta)

  const { data: style, isSuccess } = useGetStylesQuery()
  const [activeStyleId, setActiveStyleId] = useState<number>(1)
  const [prompt, setPrompt] = useState('')
  const [isFocusInput, setIsFocusInput] = useState(false)
  
  const [createGenerations, { data: createGenerationsData }] = useCreateGenerationsMutation()
  const [getGenerationsById, { data: getGenerationsData, reset: getGenerationsReset }] = useLazyGetGenerationsByIdQuery()

  const handleGenerateImage = (styleId?: number) => {
    createGenerations({
      prompt: creatorMode ? prompt: '',
      resolution,
      styleId: styleId ? styleId : activeStyleId,
      subcategoryId: activeSubcategoryId,
      profileId: activeProfileId,
    })

    setPrompt('')
  }

  const handleStyleSelect = (styleId: number) => {
    if(creatorMode) {
      setActiveStyleId(styleId)
      setIsFocusInput(true)
    }else{
      handleGenerateImage(styleId)
    }
  }

  useEffect(() => {
    if (isSuccess && style?.styles?.[0]?.id) {
      setActiveStyleId(style.styles[0].id);
    }
  }, [style, isSuccess])

  useEffect(() => {
    if(createGenerationsData) {
      getGenerationsById({jobId: createGenerationsData.jobId})
      dispatch(setDisplayPrompt(createGenerationsData.displayPrompt))
    }
  }, [createGenerationsData])

  useEffect(() => {
    if (getGenerationsData && createGenerationsData) {
      if (getGenerationsData.status === 'pending') {
        const timeout = setTimeout(() => {
          getGenerationsReset();
          getGenerationsById({ jobId: createGenerationsData.jobId });
        }, 2000);
  
        return () => clearTimeout(timeout);
      } else {
        dispatch(setDisplayPrompt(null))
      }
    }
  }, [getGenerationsData, createGenerationsData]);
  
  return (
    <div className={`${displayPrompt === null ? 'pointer-events-auto': 'pointer-events-none'} flex flex-col gap-[2.43vw] mb-[15.78vw] items-end w-full bg-transparent relative z-[2]`}>
      <CreatorMode />
      <div className="grid grid-cols-2 gap-[2.14vw] w-full overflow-hidden h-[30vw] overflow-y-scroll pb-[5vw]">
        {style?.styles?.map((styleItem, index) => (
          <button onClick={() => handleStyleSelect(styleItem.id)} key={index} className='transition-all active:scale-95'>
            <ShadowWrapper
              borderRadius={9}
              className={`!bg-white fs-16 font-normal flex items-center transition-all justify-center h-[14.17vw] border ${(activeStyleId === styleItem.id && creatorMode) ? 'border-primary': 'border-transparent'}`}
            >
              {styleItem.title}
            </ShadowWrapper>
          </button>
        ))}
      </div>
      <GenerationInput 
        prompt={prompt} 
        setPrompt={setPrompt} 
        handleGenerateImage={handleGenerateImage}
        isFocusInput={isFocusInput}
        setIsFocusInput={setIsFocusInput}
      />
    </div>
  )
}
