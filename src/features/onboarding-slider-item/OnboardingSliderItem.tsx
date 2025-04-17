import Image from 'next/image'
import './OnboardingSliderItem.scss' 
import { ImageWithSkeleton } from '@/shared/image-with-skeleton/ImageWithSkeleton'

interface IProps {
  activeIndex: number
  image: string
  title: string
  description: string
}

export const OnboardingSliderItem = ({activeIndex, description, title, image}: IProps) => {
  return (
    <div className={`w-full`}>
      <div className="m-[15px_6.1vw_30px] flex flex-col items-center">
        <ImageWithSkeleton
          src={image}
          alt="onboarding-image"
          width={304}
          height={397}
          className="min-w-full bg-transparent relative flex items-center justify-center rounded-[35px] onboarding__item-shadow bg-slate-300"
        />
        <div className="flex items-center justify-center mt-[8vw]">
          <div className="flex items-center justify-center gap-[12px]">
            {Array(3).fill(null).map((_, index) => (
              <div key={index} className="">
                {activeIndex === index
                  ? (
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.01112 14.5769C11.1713 14.5769 13.7332 12.015 13.7332 8.85481C13.7332 5.6946 11.1713 3.13275 8.01112 3.13275C4.85091 3.13275 2.28906 5.6946 2.28906 8.85481C2.28906 12.015 4.85091 14.5769 8.01112 14.5769Z" fill="#141718"/>
                      <path d="M8.01091 16.5796C12.2772 16.5796 15.7357 13.1211 15.7357 8.85484C15.7357 4.58857 12.2772 1.13007 8.01091 1.13007C3.74463 1.13007 0.286133 4.58857 0.286133 8.85484C0.286133 13.1211 3.74463 16.5796 8.01091 16.5796Z" stroke="#141718" strokeWidth="0.453125"/>
                    </svg>
                  )
                  : <div className="h-[8px] w-[8px] rounded-full bg-[#23262F80]"></div>
                }
              </div>
              
            ))}
          </div>
        </div>
        <div className="m-[0px_6.1vw_0px]">
          <h2 className="mt-[14px] fs-30 font-bold text-center">{title}</h2>
          <p className='text-gray text-center mt-[4px]'>{description}</p>
        </div>
      </div>
    </div>
  )
}
