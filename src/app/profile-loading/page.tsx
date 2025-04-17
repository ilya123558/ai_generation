'use client'

import { EllipseButton } from '@/shared/buttons/ellipse-button/EllipseButton'
import { ReturnButton } from '@/shared/buttons/return-button/ReturnButton'
import { Container } from '@/shared/container/Container'
import { useImageUpload } from '@/utils/hooks/useImageUpload'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const { ImageUploadInput, ImageUploadComponent, error } = useImageUpload({
    maxImages: 5,
    size: { maxHeight: 105, maxWidth: 105 },
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }

  return (
    <section>
      <Container>
        <ReturnButton link="/gender-selection" />
        <div className="mt-[10.7vw] mb-[8vw] text-center">
          <h2 className="fs-30 font-bold text-primary mb-[2.67vw] urbanist">Загрузка профиля</h2>
          <p className="fs-15 font-medium text-[#ACADB9]">
            Вы можете загрузить до 5-ти <br /> фотографий в профиль
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[2.67vw]">
          <ImageUploadComponent />
        </div>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Введите название профиля"
          className="montserrat h-[44px] w-full bg-[#F2F2F2] rounded-[9px] mt-[4vw] mb-[18vw] placeholder:text-opacity-50 placeholder:text-primary fs-12 font-normal p-[0px_0px_0px_6.1vw]"
        />
        <div className="">
          <p className="fs-15 font-medium text-[#ACADB9] text-center mb-[4vw]">
            {error ? error : 'Загрузите минимум 5 фотографий'}
          </p>
          <ImageUploadInput />
          <EllipseButton onClick={() => router.push('home')}>Загрузить</EllipseButton>
        </div>
      </Container>
    </section>
  )
}
