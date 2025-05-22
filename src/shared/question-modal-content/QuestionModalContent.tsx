'use client'
import { useState } from "react";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const QuestionsItem = ({title, description}: {title: string, description: string}) => {
  const [openDescription, setOpenDescription] = useState(true)

  return (
    <div className="">
      <div className="flex items-center gap-[8px]">
        <h5 className="fs-15 font-semibold">{title}</h5>
        <svg onClick={() => setOpenDescription(!openDescription)} className={`w-19px h-18px transition-all ${openDescription ? 'rotate-[180deg]': ''}`} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.37598 6.82879L9.4436 11.1709L13.7857 6.82879" stroke="#414142" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {openDescription && <p className="mt-[3px] font-normal italic fs-12">{description}</p>}
    </div>
  )
}

export const QuestionModalContent = ({ isOpen, setIsOpen }: IProps) => {
  const list = [
    {title: 'Как работать с категориями?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'},
    {title: 'Что такое стили?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'},
    {title: 'Режим «Творца»?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'},
  ]

  return (
    <ModalContentWrapper 
      onClick={() => setIsOpen(false)} 
      textButton="Спасибо"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseBtn
    >
      <div className="w-full text-start text-primary flex flex-col gap-[18px]">
        {list.map((item, index) => (
          <QuestionsItem key={index} {...item}/>
        ))}
      </div>
    </ModalContentWrapper>
  )
};