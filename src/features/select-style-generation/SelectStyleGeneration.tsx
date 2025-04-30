'use client'
import { GenerationInput } from '@/shared/generation-input/GenerationInput'
import { ShadowWrapper } from '@/shared/wrappers/shadow-wrapper/ShadowWrapper'
import { CreatorMode } from '../creator-mode/CreatorMode'
import { useEffect, useState } from 'react'
import { useCreateGenerationsMutation } from '@/entities/generations/api/generations.api'
import { useAppSelector } from '@/views/store'
import { useGetStylesQuery } from '@/entities/styles/api/styles.api'


export const SelectStyleGeneration = () => {
  const { resolution, creatorMode, activeProfileId, activeSubcategoryId } = useAppSelector(state => state.main.accountData)
  const { data: style } = useGetStylesQuery()
  const [activeStyleId, setActiveStyleId] = useState<number>(1)
  const [prompt, setPrompt] = useState('')
  const [isFocusInput, setIsFocusInput] = useState(false)

  const [createGenerations] = useCreateGenerationsMutation()

  const handleGenerateImage = () => {
    createGenerations({
      prompt: creatorMode ? prompt: '',
      resolution,
      styleId: activeStyleId,
      subcategoryId: activeSubcategoryId,
      profileId: activeProfileId,
    })
      .then(data => {
        if(data.error) {
          alert(`Error: ${JSON.stringify(data.error)}`)
        }else{
          alert(`Data: ${JSON.stringify(data.data)}`)
        }
      })
      .catch((error) => `Catch: ${JSON.stringify(error)}`)
  }

  const handleStyleSelect = (styleId: number) => {
    setActiveStyleId(styleId)
    if(creatorMode) {
      setIsFocusInput(true)
    }else{
      handleGenerateImage()
    }
  }

  useEffect(() => {
    if(style?.categories?.[0].id) {
      setActiveStyleId(style.categories[0].id)
    }
  }, [style])

  return (
    <div className="flex flex-col gap-[2.43vw] mb-[15.78vw] items-end w-full bg-transparent relative z-[2]">
      <CreatorMode />
      <div className="grid grid-cols-2 gap-[2.14vw] w-full overflow-hidden h-[30vw] overflow-y-scroll pb-[5vw]">
        {style?.categories.map((styleItem, index) => (
          <button onClick={() => handleStyleSelect(styleItem.id)} key={index} className='transition-all active:scale-95'>
            <ShadowWrapper
              borderRadius={9}
              className="!bg-white fs-16 font-normal flex items-center justify-center h-[14.17vw]"
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
