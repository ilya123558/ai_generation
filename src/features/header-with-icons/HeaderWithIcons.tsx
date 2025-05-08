'use client'
import { QuestionModalContent } from "@/shared/question-modal-content/QuestionModalContent";
import { SttingsModalContent } from "@/shared/sttings-modal-content/SttingsModalContent";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useAppSelector } from "@/views/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HeaderWithIcons = () => {
  const { generationPoints, creatorMode } = useAppSelector(state => state.main.accountData)

  const router = useRouter()
  const [isOpenQuestion, setIsOpenQuestion] = useState(false)
  const [isOpenSettings, setIsOpenSettings] = useState(false)

  const handleQuestionClick = () => {
    setIsOpenQuestion(true)
  }

  const handleSettingsClick = () => {
    setIsOpenSettings(true)
  }
  
  return (
    <div className="w-screen p-[0px_4.27vw]">
      <SttingsModalContent isOpen={isOpenSettings} setIsOpen={setIsOpenSettings} />
      <QuestionModalContent isOpen={isOpenQuestion} setIsOpen={setIsOpenQuestion} />
      <div className="w-full mt-[20px] grid grid-cols-7 items-center">
        <div className="flex items-center gap-[2.6vw] col-span-3">
          <button 
            className="flex items-center justify-center h-[8.82vw] w-[8.82vw] block-custom-shadow rounded-[10px] transition-all active:scale-95" 
            onClick={() => router.back()}
          >
            <svg className="w-[1.87vw] h-[2.94vw] transition-all" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0091 1.46658L1.66699 5.53421L6.0091 9.87631" stroke="black" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <ShadowWrapper borderRadius={10} className={`p-[3.6vw_6.81vw] flex items-center justify-center ${creatorMode ? '!bg-primary': ''}`}>
            <p 
              style={{color: generationPoints < 4 ? (generationPoints < 2 ? '#E93F21' : '#E79D25') : ''}} 
              className={`fs-15 font-semibold text-nowrap ${creatorMode ? 'text-white': ''}`}
            >
              {generationPoints}
            </p>
            {creatorMode && <p className="ml-[1vw] text-nowrap text-red fs-13 font-medium">-x2</p>}
          </ShadowWrapper>
        </div>
        <h2 className="fs-20 font-semibold text-[#141718] text-center col-span-1">AI.bot</h2>
        <div className="flex justify-end gap-[2.6vw] col-span-3">
          <button onClick={handleQuestionClick}>
            <ShadowWrapper borderRadius={"full"} className="w-[12.81vw] h-[12.81vw] flex items-center justify-center transition-all active:scale-95">
              <svg className="w-[10.41vw] h-[10.14vw]" width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.625 14.0521C16.625 12.4125 17.9542 11.0833 19.5937 11.0833C21.2333 11.0833 22.5625 12.4125 22.5625 14.0521C22.5625 15.1405 21.9767 16.0922 21.1033 16.609C20.3506 17.0542 19.5937 17.7297 19.5937 18.6042V20.5833" stroke="#23262F" strokeWidth="2.375" strokeLinecap="round"/>
                <path d="M19.5941 26.9167C20.4685 26.9167 21.1774 26.2078 21.1774 25.3333C21.1774 24.4589 20.4685 23.75 19.5941 23.75C18.7196 23.75 18.0107 24.4589 18.0107 25.3333C18.0107 26.2078 18.7196 26.9167 19.5941 26.9167Z" fill="#23262F"/>
              </svg>
            </ShadowWrapper>
          </button>
          <button onClick={handleSettingsClick}>
            <ShadowWrapper borderRadius={"full"} className="w-[12.81vw] h-[12.81vw] flex items-center justify-center transition-all active:scale-95">
              <svg className="w-[6.81vw] h-[6.56vw]" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5938 15C14.2506 15 15.5938 13.6569 15.5938 12C15.5938 10.3431 14.2506 9 12.5938 9C10.9369 9 9.59375 10.3431 9.59375 12C9.59375 13.6569 10.9369 15 12.5938 15Z" stroke="#23262F" strokeWidth="1.5"/>
                <path d="M4.25546 10.6392C4.72801 10.9361 5.03206 11.4419 5.03206 11.9999C5.03205 12.558 4.728 13.0638 4.25546 13.3607C3.9339 13.5627 3.72672 13.7242 3.57932 13.9163C3.25641 14.3372 3.1139 14.869 3.18314 15.3949C3.23506 15.7893 3.46803 16.1928 3.93397 16.9999C4.39992 17.8069 4.63289 18.2104 4.9485 18.4526C5.36932 18.7755 5.90118 18.918 6.42708 18.8488C6.66711 18.8172 6.91051 18.7185 7.24619 18.5411C7.73967 18.2803 8.32982 18.2699 8.81319 18.549C9.2965 18.8281 9.5825 19.3443 9.60335 19.902C9.61755 20.2815 9.65381 20.5417 9.74647 20.7654C9.94946 21.2554 10.3388 21.6448 10.8288 21.8478C11.1964 22 11.6623 22 12.5942 22C13.5261 22 13.992 22 14.3596 21.8478C14.8496 21.6448 15.239 21.2554 15.442 20.7654C15.5346 20.5417 15.5709 20.2815 15.5851 19.9021C15.6059 19.3443 15.8919 18.8281 16.3753 18.549C16.8586 18.27 17.4487 18.2804 17.9421 18.5412C18.2779 18.7186 18.5213 18.8173 18.7613 18.8489C19.2872 18.9182 19.8191 18.7756 20.2399 18.4527C20.5555 18.2106 20.7885 17.807 21.2545 17C21.4619 16.6407 21.6232 16.3614 21.7428 16.1272M20.9329 13.3608C20.4604 13.0639 20.1564 12.5581 20.1563 12.0001C20.1563 11.442 20.4604 10.9361 20.9329 10.6392C21.2545 10.4372 21.4616 10.2757 21.609 10.0836C21.9319 9.66278 22.0744 9.13092 22.0052 8.60502C21.9533 8.2106 21.7203 7.80708 21.2543 7.00005C20.7884 6.19301 20.5554 5.7895 20.2398 5.54732C19.819 5.22441 19.2871 5.0819 18.7612 5.15113C18.5212 5.18274 18.2778 5.2814 17.9421 5.45883C17.4486 5.71964 16.8585 5.73004 16.3752 5.45096C15.8919 5.1719 15.6059 4.6557 15.5851 4.09803C15.5709 3.71852 15.5346 3.45835 15.442 3.23463C15.239 2.74458 14.8496 2.35523 14.3596 2.15224C13.992 2 13.5261 2 12.5942 2C11.6623 2 11.1964 2 10.8288 2.15224C10.3388 2.35523 9.94946 2.74458 9.74647 3.23463C9.65381 3.45833 9.61755 3.71848 9.60335 4.09794C9.58249 4.65566 9.29648 5.17191 8.81314 5.45096C8.32981 5.73002 7.73971 5.71959 7.24628 5.4588C6.91056 5.28136 6.66714 5.18269 6.42709 5.15108C5.90119 5.08185 5.36933 5.22436 4.94851 5.54727C4.6329 5.78945 4.39993 6.19297 3.93398 7C3.72655 7.35929 3.56529 7.63859 3.44562 7.87273" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </ShadowWrapper>
          </button>
        </div>
      </div>
    </div>
  );
};