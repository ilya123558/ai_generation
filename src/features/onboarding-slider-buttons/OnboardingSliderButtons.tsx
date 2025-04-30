'use client'
import './OnboardingSliderButtons.scss'

interface IProps {
  activeIndex: number
  handlePrevSlide: () => void
  handleNextSlide: () => void
}

export const OnboardingSliderButtons = ({ activeIndex, handlePrevSlide, handleNextSlide }: IProps) => {
  return (
    <div className="fixed w-full flex justify-center bottom-[5vw] z-10">
      <div className="flex items-center justify-center rounded-[14px] slider__buttons-container bg-white">
        <button onClick={handlePrevSlide} className="h-full w-full p-[18px_29px_18px_18px]">
          <svg className={`rotate-[180deg] transition-all ${activeIndex === 0 ? 'opacity-0': ''}`} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3637 6.70909C13.7314 6.36961 14.3048 6.39254 14.6443 6.76031L17.5722 9.93215C17.8926 10.2793 17.8926 10.8144 17.5722 11.1615L14.6443 14.3334C14.3048 14.7012 13.7315 14.7242 13.3637 14.3847C12.9959 14.0452 12.973 13.4718 13.3124 13.1041L14.8364 11.4531L6.03125 11.4531C5.53074 11.4531 5.125 11.0474 5.125 10.5468C5.125 10.0463 5.53074 9.6406 6.03125 9.6406L14.8364 9.6406L13.3125 7.9897C12.973 7.62193 12.9959 7.04858 13.3637 6.70909Z" fill="#757171"/>
          </svg>
        </button>
        <div className="bg-[#E6E8EC] w-[2px] h-[21px] rounded-[50%]"></div>
        <button onClick={handleNextSlide} className="h-full w-full p-[18px_18px_18px_29px]">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3637 6.70909C13.7314 6.36961 14.3048 6.39254 14.6443 6.76031L17.5722 9.93215C17.8926 10.2793 17.8926 10.8144 17.5722 11.1615L14.6443 14.3334C14.3048 14.7012 13.7315 14.7242 13.3637 14.3847C12.9959 14.0452 12.973 13.4718 13.3124 13.1041L14.8364 11.4531L6.03125 11.4531C5.53074 11.4531 5.125 11.0474 5.125 10.5468C5.125 10.0463 5.53074 9.6406 6.03125 9.6406L14.8364 9.6406L13.3125 7.9897C12.973 7.62193 12.9959 7.04858 13.3637 6.70909Z" fill="#23262F"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
