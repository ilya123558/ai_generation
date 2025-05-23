'use client'
import { EllipseButton } from "@/shared/buttons/ellipse-button/EllipseButton";
import { QuestionModalContent } from "@/shared/question-modal-content/QuestionModalContent";
import { setDisplayPrompt, useAppDispatch, useAppSelector } from "@/views/store";
import { useState } from "react";

interface IProps {
  handleGenerate: () => void
}

export const ChatPrompt = ({ handleGenerate }: IProps) => {
  const dispatch = useAppDispatch()
  const { displayPrompt } = useAppSelector(state => state.main.meta)
  const [isOpenQuestionModalContent, setIsOpenQuestionModalContent] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [toggle, setToggle] = useState(false)

  const handleSetPrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setDisplayPrompt(e.target.value))
  }

  return (
    <div className={`w-full h-full bg-white mt-[2vw] rounded-[30px_30px_0px_0px] p-[3.8vw_4.5vw]`}>
      <QuestionModalContent isOpen={isOpenQuestionModalContent}  setIsOpen={setIsOpenQuestionModalContent} />
      <div className="flex items-center gap-[10px] mb-[1.5vw]">
        <button onClick={() => setToggle(!toggle)} className={`relative`}>
          <div className={`w-45px h-27px transition-all rounded-[15px] overflow-hidden border-[2px] ${toggle ? 'bg-[#23262F] border-transparent': 'bg-["#BEBEBE"] border-[#BEBEBE]'}`}></div>
          <svg className={`absolute transition-all top-[1.212vw] w-19px h-18px ${toggle ? 'right-[1.3vw]': 'left-[1.3vw]'}`} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="transition-all" cx="9.29173" cy="8.88938" r="8.72727" fill={toggle ? '#ffffff': "#BEBEBE"}/>
          </svg>
        </button>
        <div className="relative w-fit">
          <p className="font-semibold fs-13 text-primary">Режим Творца</p>
          <button onClick={() => setIsOpenQuestionModalContent(true)} className="active:scale-95 transition-all absolute right-[-4.5vw] top-[-1vw]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="6.70996" cy="6.69434" r="5.39402" stroke="black" strokeWidth="0.821335"/>
              <path d="M6.89492 4.5293C7.36153 4.5293 7.73616 4.65717 8.01882 4.91291C8.30597 5.16416 8.44954 5.51187 8.44954 5.95605C8.44954 6.39574 8.30821 6.73224 8.02555 6.96554C7.74289 7.19436 7.36826 7.30877 6.90165 7.30877L6.87473 7.82698H6.04694L6.01329 6.68289H6.31614C6.70648 6.68289 7.00708 6.63129 7.21796 6.5281C7.42883 6.4249 7.53426 6.23646 7.53426 5.96278C7.53426 5.76537 7.47594 5.60833 7.35929 5.49168C7.24712 5.37503 7.09233 5.3167 6.89492 5.3167C6.68853 5.3167 6.52701 5.37279 6.41036 5.48495C6.29819 5.59712 6.24211 5.75191 6.24211 5.94932H5.35376C5.34927 5.67563 5.4076 5.43111 5.52874 5.21575C5.64987 5.00039 5.8271 4.83215 6.0604 4.71101C6.29819 4.58987 6.57637 4.5293 6.89492 4.5293ZM6.45747 9.43544C6.28698 9.43544 6.14565 9.38385 6.03348 9.28065C5.9258 9.17297 5.87196 9.04062 5.87196 8.88358C5.87196 8.72655 5.9258 8.59644 6.03348 8.49325C6.14565 8.38557 6.28698 8.33173 6.45747 8.33173C6.62348 8.33173 6.76032 8.38557 6.868 8.49325C6.97568 8.59644 7.02952 8.72655 7.02952 8.88358C7.02952 9.04062 6.97568 9.17297 6.868 9.28065C6.76032 9.38385 6.62348 9.43544 6.45747 9.43544Z" fill="#CCCCCC"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isFocus ? 'fixed w-full h-full left-0 top-0 z-[20] flex items-end backdrop-blur-[20px] bg-black/20': ''} transition-all`}>
        <div className={`${isFocus ? 'mb-[50vh] w-full p-[0px_4vw]': ''} transition-all relative`}>
          <textarea 
            value={displayPrompt || ''} 
            onChange={handleSetPrompt} 
            className={`${isFocus ? 'p-[1vw_2.6vw] rounded-[4px] shadow-black': ''} w-full min-h-[14.4vw] resize-none font-normal italic text-primary fs-12 outline-none`}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          {(!displayPrompt || displayPrompt.length === 0) && (
            <div className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-[70%] text-center text-primary text-opacity-75 font-normal italic fs-12 text-nowrap">
              Введите сообщение для генерации
            </div>
          )}
        </div>
      </div>
      <EllipseButton onClick={handleGenerate} className="mt-[1.5vw] !p-[3vw_4.14vw]">
        <p className="fs-12 font-semibold">Generate</p>
      </EllipseButton>
    </div>
  );
};