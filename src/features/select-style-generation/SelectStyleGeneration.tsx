'use client'
import { GenerationInput } from '@/shared/generation-input/GenerationInput'
import { ShadowWrapper } from '@/shared/wrappers/shadow-wrapper/ShadowWrapper'
import { CreatorMode } from '../creator-mode/CreatorMode'
import { useEffect, useState } from 'react'
import { useCreateGenerationsMutation, useLazyGetGenerationsByIdQuery } from '@/entities/generations/api/generations.api'
import { createImage, imageCreating, setDisplayPrompt, setGenerationPoints, useAppDispatch, useAppSelector } from '@/views/store'
import { useGetStylesQuery } from '@/entities/styles/api/styles.api'
import { GenerationBuyModal } from '@/shared/generation-buy-modal/GenerationBuyModal'
import { SelectStyleLoading } from '../select-style-loading/SelectStyleLoading'


export const SelectStyleGeneration = () => {
  const dispatch = useAppDispatch()
  const { resolution, creatorMode, activeProfileId, activeSubcategoryId, generationPoints } = useAppSelector(state => state.main.accountData)
  const { displayPrompt, isCreatingImage } = useAppSelector(state => state.main.meta)

  const [generationBuyModalIsOpen, setGenerationBuyModalIsOpen] = useState(false)
  const { data: style, isSuccess, isLoading } = useGetStylesQuery()
  const [activeStyleId, setActiveStyleId] = useState<number | null>(null)
  const [prompt, setPrompt] = useState('')
  const [isFocusInput, setIsFocusInput] = useState(false)
  
  const [createGenerations] = useCreateGenerationsMutation()

  const handleGenerateImage = (styleId?: number) => {
    if(isCreatingImage) return

    const styleIdValue = styleId ? styleId : (activeStyleId || 1)
    const activeStyleValue = style?.styles?.find(item => item.id === styleIdValue)?.title || null

    if(creatorMode && (generationPoints > 2)) {
      createGenerations({
        prompt: prompt,
        resolution,
        styleId: styleIdValue,
        subcategoryId: activeSubcategoryId,
        profileId: activeProfileId,
      })

      dispatch(createImage({prompt, activeStyle: activeStyleValue}))
      
      setPrompt('')
      return
    }

    if(generationPoints > 1) {
      createGenerations({
        prompt: '',
        resolution,
        styleId: styleIdValue,
        subcategoryId: activeSubcategoryId,
        profileId: activeProfileId,
      })

      dispatch(createImage({prompt: '', activeStyle: activeStyleValue}))

      setPrompt('')
      return
    }

    setGenerationBuyModalIsOpen(true)
  }

  const handleStyleSelect = (styleId: number) => {
    if(creatorMode) {
      setActiveStyleId(styleId)
      setIsFocusInput(true)
    }else{
      setActiveStyleId(styleId)
      handleGenerateImage(styleId)
    }
  }
 
  useEffect(() => {
    if (isSuccess && style?.styles?.[0]?.id) {
      setActiveStyleId(style.styles[0].id);
    }
  }, [style, isSuccess])

  useEffect(() => {
    return () => {
      dispatch(imageCreating())
    }
  }, [])

  // useEffect(() => {
  //   if(createGenerationsData) {
  //     getGenerationsById({jobId: createGenerationsData.jobId})
  //     dispatch(setDisplayPrompt(createGenerationsData.displayPrompt))
  //   }
    
  //   return () => {
  //     dispatch(setDisplayPrompt(null))
  //   }
  // }, [createGenerationsData])

  // useEffect(() => {
  //   if (getGenerationsData && createGenerationsData) {
  //     if (getGenerationsData.status === 'pending') {
  //       const timeout = setTimeout(() => {
  //         getGenerationsReset();
  //         getGenerationsById({ jobId: createGenerationsData.jobId });
  //       }, 2000);
  
  //       return () => clearTimeout(timeout);
  //     } else {
  //       dispatch(setDisplayPrompt(null))
  //     }
  //   }
  // }, [getGenerationsData, createGenerationsData]);
  
  return (
    <div className={`${displayPrompt === null ? 'pointer-events-auto': 'pointer-events-none'} flex flex-col gap-[2.43vw] mb-[9vw] items-end w-full bg-transparent relative z-[2]`}>
      <GenerationBuyModal isOpen={generationBuyModalIsOpen} setIsOpen={setGenerationBuyModalIsOpen} />
      <CreatorMode />
      {isLoading
        ? <SelectStyleLoading />
        : (
          <div className="relative w-full">
            <div style={{
                boxShadow: '0px -2px 5px 6px rgba(247, 248, 250, 1)',
                backgroundImage: 'linear-gradient(rgba(247, 248, 250, 1), rgba(247, 248, 250, 1))'
              }} className="absolute w-full h-[1px] top-0 left-0"
            ></div>
            <div style={{
                boxShadow: '0px 2px 5px 6px rgba(247, 248, 250, 1)',
                backgroundImage: 'linear-gradient(rgba(247, 248, 250, 1), rgba(247, 248, 250, 1))'
              }} className="absolute w-full left-0 h-[1px] bottom-0"
            ></div>
            <div className="w-full overflow-hidden h-140px overflow-y-scroll pt-[3vw] pb-[3vw]">
              <div className="grid grid-cols-2 gap-[2.14vw] p-[0px_4.27vw]">
                {
                  style && style.styles.length !== 0 
                    ? (
                      style.styles.map((styleItem, index) => (
                        <button onClick={() => handleStyleSelect(styleItem.id)} key={index} className='transition-all active:scale-95'>
                          <ShadowWrapper
                            borderRadius={9}
                            className={`fs-16 font-normal flex items-center transition-all justify-center h-[14.17vw] ${(activeStyleId === styleItem.id) ? '!bg-primary text-white': '!bg-white'}`}
                          >
                            {styleItem.title}
                          </ShadowWrapper>
                        </button>
                      ))
                    )
                    : <></>
                }
                {
                  style && style.styles.length !== 0 
                    ? (
                      style.styles.map((styleItem, index) => (
                        <button onClick={() => handleStyleSelect(styleItem.id)} key={index} className='transition-all active:scale-95'>
                          <ShadowWrapper
                            borderRadius={9}
                            className={`fs-16 font-normal flex items-center transition-all justify-center h-[14.17vw] ${(activeStyleId === styleItem.id) ? '!bg-primary text-white': '!bg-white'}`}
                          >
                            {styleItem.title}
                          </ShadowWrapper>
                        </button>
                      ))
                    )
                    : <></>
                }
              </div>
          </div>
          </div>
        )
      }
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
