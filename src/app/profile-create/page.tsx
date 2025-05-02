'use client'
import { useUploadProfileMutation } from '@/entities/users/api/users.api'
import { EllipseButton } from '@/shared/buttons/ellipse-button/EllipseButton'
import { ReturnButton } from '@/shared/buttons/return-button/ReturnButton'
import { Container } from '@/shared/container/Container'
import { useImageUpload } from '@/utils/hooks/useImageUpload'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { base64StringToFile } from '@/utils/libs/base64StringToFile'
import { setGenerationPoints, useAppDispatch, useAppSelector } from '@/views/store'
import { GenerationBuyModal } from '@/shared/generation-buy-modal/GenerationBuyModal'

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user, accountData: {generationPoints} } = useAppSelector(state => state.main)

  const [inputValue, setInputValue] = useState('')
  const [generationBuyModalIsOpen, setGenerationBuyModalIsOpen] = useState(false)
  
  const { ImageUploadInput, ImageUploadComponent, error, images } = useImageUpload({
    maxImages: 10,
    size: { maxHeight: 105, maxWidth: 105 },
  })

  const [uploadProfile] = useUploadProfileMutation()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleClick = async () => {
    if(user && user.role === 'user') {
      if(generationPoints >= 10) {
        dispatch(setGenerationPoints(generationPoints - 10))
      }else{
        setGenerationBuyModalIsOpen(true)
        return
      }
    }

    const formData = new FormData();
  
    for (let index = 0; index < images.length; index++) {
      const imageString = images[index];
      const file = await base64StringToFile(imageString, `image-${index + 1}.jpg`, 'image/jpeg');
      formData.append('images', file);
    }

    formData.append('title', inputValue);
  
    uploadProfile(formData)
      .then((data) => {
        if(data.error) {
          alert(JSON.stringify(data.error))
          return
        }

        if(user?.role === 'new') {
          router.push('/profile-create-loading')
          return
        }
        router.push('/home')
      })
      .catch(data => alert(JSON.stringify(data)));
  };

  return (
    <section>
      <Container>
        <GenerationBuyModal isOpen={generationBuyModalIsOpen} setIsOpen={setGenerationBuyModalIsOpen} />
        <ReturnButton link={user?.role === 'new' ? '/gender-selection': '/home'} />
        <div className="mt-[10.7vw] mb-[8vw] text-center">
          <h2 className="fs-30 font-bold text-primary mb-[2.67vw] urbanist">Загрузка профиля</h2>
          <p className="fs-15 font-medium text-[#ACADB9]">
            Вы можете загрузить до 10-ти <br /> фотографий в профиль
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[2.67vw] h-[60vw] overflow-hidden overflow-y-scroll">
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
            {error ? error : 'Загрузите минимум 10 фотографий'}
          </p>
          <ImageUploadInput />
          <div className={`transition-all ${images.length < 10 ? 'pointer-events-none': ''}`}>
            <EllipseButton onClick={handleClick} className={images.length < 10 ? '!bg-[#E3E3E3]': ''}>
              <p className={`transition-all ${images.length < 10 ? 'text-[#B1B1B1]': ''}`}>Загрузить</p>
            </EllipseButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
