'use client'
import { useAppSelector } from '@/views/store'
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'

interface IProps {
  prompt: string
  setPrompt: (prompt: string) => void
  handleGenerateImage: () => void
  isFocusInput: boolean
  setIsFocusInput: (isFocusInput: boolean) => void
}

export const GenerationInput = ({prompt, setPrompt, handleGenerateImage, isFocusInput, setIsFocusInput}: IProps) => {
  const { creatorMode } = useAppSelector(state => state.main.accountData)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPrompt(value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    handleGenerateImage()
  }

  if(!creatorMode) return <></>

  return (
    <form onSubmit={handleSubmit} style={creatorMode ? {}: {pointerEvents: 'none', opacity: 0}} className='p-[0px_8.53vw_0vw] w-full transition-all relative'>
      <input 
        value={prompt} 
        onChange={handleChange} 
        className={`fs-15 font-normal urbanist border transition-all ${isFocusInput ? 'border-primary': 'border-[#E1E1E1]'} w-full rounded-[7px] p-[2.68vw_14.45vw_2.68vw_3.34vw]`}
        placeholder='Введите запрос'
        onFocus={() => setIsFocusInput(true)}
        onBlur={() => setIsFocusInput(false)}
      />
      <button type='submit' onClick={handleSubmit}>
        <svg className="w-[8.28vw] h-[7.98vw] absolute top-[2vw] right-[11vw]" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={`transition-all ${isFocusInput ? 'fill-primary' : 'fill-[#DDDDE4]'}`} fillRule="evenodd" clipRule="evenodd" d="M27.191 15.5242C27.2195 15.4408 27.2232 15.3515 27.2006 15.2663C26.6624 13.2493 16.6716 7.51577 13.5321 6.5518C12.7143 6.30058 12.1216 6.40174 11.7737 6.85158C10.7652 8.15357 12.8479 12.2022 14.0633 14.3192L20.3599 14.5403C20.7248 14.5531 21.0102 14.8601 20.9975 15.226C20.9847 15.5919 20.6786 15.8781 20.3138 15.8654L13.9568 15.6415C12.5887 17.6955 10.3159 21.4896 11.2171 22.8373C11.2509 22.8878 11.2879 22.9354 11.3281 22.9787C11.661 23.3367 12.2063 23.4308 12.9498 23.2587C16.1467 22.5185 26.5125 17.501 27.191 15.5242Z" fill="#DDDDE4"/>
        </svg>
      </button>
    </form>
  )
}
