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
import { ProfileCreateInput } from '@/shared/profile-create-input/ProfileCreateInput'
import { ImageUploadComponentForm } from '@/features/image-upload-component-form/ImageUploadComponentForm'

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user, accountData: {generationPoints} } = useAppSelector(state => state.main)
  const { createProfile: {error, images, title} } = useAppSelector(state => state.main.meta)

  const [generationBuyModalIsOpen, setGenerationBuyModalIsOpen] = useState(false)

  const [uploadProfile] = useUploadProfileMutation()

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

    formData.append('title', title);
  
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
        <div className="mt-[2vw]">
          <ReturnButton link={user?.role === 'new' ? '/gender-selection': '/home'} />
        </div>
        <div className="mt-[1vw] mb-[3vw] text-center">
          <h2 className="fs-30 font-bold text-primary mb-[1vw] urbanist">Загрузка профиля</h2>
          <p className="fs-15 font-medium text-[#ACADB9]">
            Вы можете загрузить до 30-ти <br /> фотографий в профиль
          </p>
        </div>
        <ImageUploadComponentForm />
        <ProfileCreateInput />
        <div className="mt-[4vw]">
          <p className="fs-15 font-medium text-[#ACADB9] text-center mb-[4vw]">
            {error ? error : 'Загрузите минимум 10 фотографий'}
          </p>
          {/* <ImageUploadInput /> */}
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
