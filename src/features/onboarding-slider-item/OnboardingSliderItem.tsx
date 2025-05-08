import Image from 'next/image'
import './OnboardingSliderItem.scss' 
import { ImageWithSkeleton } from '@/shared/image-with-skeleton/ImageWithSkeleton'
import { useGetDevice } from '@/utils/hooks/useGetDevice'

interface IProps {
  activeIndex: number
}

export const OnboardingSliderItem = ({ activeIndex }: IProps) => {
  const { isDesktop, getTelegramTopPaddingValue } = useGetDevice()

  if(activeIndex === 0) return (
    <div className={`w-screen h-full`}>
      <div style={{padding: isDesktop ? '0px': `${getTelegramTopPaddingValue() + 40}px`}} className="flex flex-col items-center w-full min-h-[90vw] aspect-square">
        <Image
          src={'/images/onboarding/image-1.png'}
          alt="onboarding-image"
          width={375}
          height={375}
          className="w-full h-full object-cover object-center"
        />
        <div style={{marginTop: isDesktop ? '-18vw': '0px'}} className="p-[0px_13px] text-white w-screen">
          <h2 className="fs-35 font-bold leading-[10vw]">Создайте шедевры за секунды</h2>
          <p className='mt-[4.54vw] fs-14'>Загружай свои фотографии и дай волю креативу! Наша нейросеть преобразует твои снимки, добавляя уникальные стили</p>
        </div>
      </div>
    </div>
  )

  if(activeIndex === 1) return (
    <div className={`w-full h-full relative overflow-hidden`}>
      <div className="absolute top-[-140px] right-[-140px]">
        <ImageWithSkeleton
          src={'/images/onboarding/image-1.png'}
          alt="onboarding-image"
          width={475}
          height={475}
          className="w-full object-cover object-center opacity-[0.1]"
        />
      </div>
      <div className="flex flex-col items-center w-full relative">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <div className="absolute w-full top-0 left-0 z-[5]">
            <ImageWithSkeleton
              src={`/images/onboarding/bg-top.png`}
              alt="onboarding-2-image"
              width={375}
              height={171}
              className="w-full object-cover object-center"
            />
          </div>
          <div className="absolute w-full bottom-[-22vw] left-0 z-[5]">
            <ImageWithSkeleton
              src={`/images/onboarding/bg-bottom.png`}
              alt="onboarding-2-image"
              width={375}
              height={206}
              className="w-full object-cover object-center"
            />
          </div>
          <div className="w-full flex justify-between p-[4vw_6.94vw_0px] relative">
            <div className="flex flex-col gap-[8vw] mt-[4vw]">
              {Array(3).fill(null).map((_, index) => (
                <ImageWithSkeleton
                  key={index}
                  src={`/images/onboarding/image-2-${index + 1}.png`}
                  alt="onboarding-2-image"
                  width={90}
                  height={114}
                  className="w-90px h-114px object-cover object-center"
                />
              ))}
            </div>
            <div className="flex flex-col gap-[8vw] mt-[8vw]">
              {Array(3).fill(null).map((_, index) => (
                <ImageWithSkeleton
                  key={index}
                  src={`/images/onboarding/image-2-${index + 4}.png`}
                  alt="onboarding-2-image"
                  width={90}
                  height={114}
                  className="w-90px h-114px object-cover object-center"
                />
              ))}
            </div>
            <div className="flex flex-col gap-[8vw]">
              {Array(3).fill(null).map((_, index) => (
                <ImageWithSkeleton
                  key={index}
                  src={`/images/onboarding/image-2-${index + 7}.png`}
                  alt="onboarding-2-image"
                  width={90}
                  height={114}
                  className="w-90px h-114px object-cover object-center"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-[0px_13px] text-white z-10">
          <h2 className="fs-28 font-bold leading-[10vw]">Удивляйте необычными эффектами</h2>
          <p className='mt-[4.54vw] fs-14'>Исследуйте мощь нейросети: от фильтров до стилей. Сделайте каждое фото неповторимым, радуйте себя и делитесь с друзьями!</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className={`w-full`}>
      <div className="m-[10.68vw_0px] flex flex-col items-center w-full overflow-hidden">
        <div className="absolute top-[-140px] right-[-140px]">
          <ImageWithSkeleton
            src={'/images/onboarding/image-1.png'}
            alt="onboarding-image"
            width={475}
            height={475}
            className="w-full object-cover object-center opacity-[0.1]"
          />
        </div>
        <div style={{marginTop: `${isDesktop ? 10 : 80}px`, marginBottom: `${isDesktop ? 8 : 20}vw`}} className="p-[0px_13px] text-white">
          <h2 className="fs-43 font-bold leading-[10vw]">Творите легко</h2>
          <p className='mt-[4.54vw] fs-14'>Просто загрузите фото и дайте нейросети сделать всё остальное. Получайте оригинальные изображения, полные жизни и новизны!</p>
        </div>
        <ImageWithSkeleton
          src={'/images/onboarding/image-3.png'}
          alt="onboarding-image"
          width={375}
          height={400}
          className="w-full object-cover object-center"
        />
      </div>
    </div>
  )
}
