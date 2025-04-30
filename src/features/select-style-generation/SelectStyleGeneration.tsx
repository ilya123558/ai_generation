'use client'
import { GenerationInput } from '@/shared/generation-input/GenerationInput'
import { ShadowWrapper } from '@/shared/wrappers/shadow-wrapper/ShadowWrapper'
import { CreatorMode } from '../creator-mode/CreatorMode'
import { useState } from 'react'
import { useCreateGenerationsMutation } from '@/entities/generations/api/generations.api'
import { useAppSelector } from '@/views/store'

const styleList = [
  {id: 1, title: 'Classic'},
  {id: 2, title: 'Realistic'},
  {id: 3, title: 'Classic'},
  {id: 4, title: 'Realistic'},
  {id: 5, title: 'Classic'},
  {id: 6, title: 'Realistic'},
  {id: 7, title: 'Classic'},
  {id: 8, title: 'Realistic'},
  {id: 9, title: 'Classic'},
  {id: 10, title: 'Realistic'},
  {id: 11, title: 'Classic'},
  {id: 12, title: 'Realistic'},
]

export const SelectStyleGeneration = () => {
  const { resolution, creatorMode } = useAppSelector(state => state.main.accountData)
  const [activeStyleId, setActiveStyleId] = useState(styleList[0].id)
  const [prompt, setPrompt] = useState('')
  const [isFocusInput, setIsFocusInput] = useState(false)

  const [createGenerations] = useCreateGenerationsMutation()

  const handleGenerateImage = () => {
    createGenerations({
      prompt: creatorMode ? prompt: '',
      resolution,
      styleId: activeStyleId,
      categoryId: 1, // заменить
      profileId: 1, // заменить
    })
  }

  const handleStyleSelect = (styleId: number) => {
    setActiveStyleId(styleId)
    if(creatorMode) {
      setIsFocusInput(true)
    }else{
      handleGenerateImage()
    }
  }

  return (
    <div className="flex flex-col gap-[2.43vw] mb-[15.78vw] items-end w-full bg-transparent relative z-[2]">
      <CreatorMode />
      <div className="grid grid-cols-2 gap-[2.14vw] w-full overflow-hidden h-[30vw] overflow-y-scroll pb-[5vw]">
        {styleList.map((styleItem, index) => (
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
