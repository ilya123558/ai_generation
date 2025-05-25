'use client'
import { useState } from "react";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const QuestionsItem = ({title, description, text}: {title: string, description: string, text: string}) => {
  const [openDescription, setOpenDescription] = useState(true)

  return (
    <div className="">
      <div className="flex items-center gap-[8px]">
        <h5 className="fs-15 font-semibold">{title}</h5>
        <svg onClick={() => setOpenDescription(!openDescription)} className={`w-19px h-18px transition-all ${openDescription ? 'rotate-[180deg]': ''}`} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.37598 6.82879L9.4436 11.1709L13.7857 6.82879" stroke="#414142" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {openDescription && (
        <>
          <p className="mt-[3px] font-normal italic fs-12">{description}</p>
          {text && <p className="mt-[3px] font-medium fs-12 text-[#757171]">{text}</p>}
        </>
      )}
    </div>
  )
}

export const QuestionModalContent = ({ isOpen, setIsOpen }: IProps) => {
  const list = [
    {title: 'Как работать с категориями?', description: 'Каждая категория представляет собой группы тем, по которым мы можем создавать визуальные контент. Это набор стилей или сценариев, которые используются при генерации изображений.', text: ''},
    {title: 'Что такое стили?', description: 'Каждый стиль обладает уникальными характеристиками, такими как цветовая палитра, текстура, форма и композиция.', text: ''},
    {title: 'Режим «Творца»?', description: 'Напишите, что именно вы хотите создать, остальное сделаем мы сами. Чем конкретнее будет ваше описание, тем точнее получится результат.', text: 'Режим использует 2 ед. за одну генерацию*'},
    {title: 'Размеры изображения', description: 'Вы можете изменить этот параметр в настройках генерации.', text: ''},
  ]

  return (
    <ModalContentWrapper 
      onClick={() => setIsOpen(false)} 
      textButton="Спасибо"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseBtn
      className="mb-[15px]"
    >
      <div className="w-full text-start text-primary flex flex-col gap-[18px]">
        {list.map((item, index) => (
          <QuestionsItem key={index} {...item}/>
        ))}
      </div>
    </ModalContentWrapper>
  )
};