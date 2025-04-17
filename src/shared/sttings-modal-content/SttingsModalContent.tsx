'use client'
import { useState } from "react";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

const rowTop = [
  {width: '17.65vw', height: '12.53vw', title: '4:3'},
  {width: '16.56vw', height: '9.07vw', title: '16:9'},
  {width: '16.56vw', height: '6.93vw', title: '2:35:1'},
]

const rowBottom = [
  {width: '9.63vw', height: '16.83vw', title: '9:16'},
  {width: '11.48vw', height: '16.83vw', title: '2:3'},
  {width: '17.65vw', height: '17.65vw', title: '1:1'},
]

interface IProps {
  isOpenSettings: boolean
  setIsOpenSettings: (isOpenSettings: boolean) => void
}

export const SttingsModalContent = ({isOpenSettings, setIsOpenSettings}: IProps) => {
  const [activeSize, setActiveSize] = useState('1:1')

  if(!isOpenSettings) return <></>

  return (
    <ModalContentWrapper 
      title="Настройки изображения"
      description="Укажите соотношения сторон изображения"
      onClick={() => setIsOpenSettings(false)} 
      closeModal={() => setIsOpenSettings(false)} 
      textButton="Подтвердить"
    >
      <div className="mt-[6.14vw] mb-[6vw] p-[0px_6.68vw]">
        <div className="flex justify-between items-center">
          {rowTop.map(({width, height, title}) => (
            <div 
              onClick={() => setActiveSize(title)}
              style={{width, height, opacity: activeSize === title ? '': '0.5'}} 
              className="rounded-[11px] border-[2px] border-[#23262F] flex items-center justify-center transition-all"
            >
              <p className="text-[#23262F] fs-12 font-medium">{title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[5.07vw]">
          {rowBottom.map(({width, height, title}) => (
            <div 
              onClick={() => setActiveSize(title)}
              style={{width, height, opacity: activeSize === title ? '': '0.5'}} 
              className="rounded-[11px] border-[2px] border-[#23262F] flex items-center justify-center transition-all"
            >
              <p className="text-[#23262F] fs-12 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </ModalContentWrapper>
  )
};