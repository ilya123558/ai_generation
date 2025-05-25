'use client'
import { useState } from "react";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";
import { TResolution } from "@/utils/types/resolution";
import { setResolution, useAppDispatch, useAppSelector } from "@/views/store";
import { useUpdateResolutionMutation } from "@/entities/users/api/users.api";
import { useLazyGetGenerationsQuery } from "@/entities/generations/api/generations.api";

interface IRowData {
  width: string;
  height: string;
  title: TResolution;
}

const rowTop: IRowData[] = [
  {width: '17.65vw', height: '12.53vw', title: '4:3'},
  {width: '16.56vw', height: '9.07vw', title: '16:9'},
  {width: '16.56vw', height: '6.93vw', title: '2:35:1'},
]

const rowBottom: IRowData[] = [
  {width: '9.63vw', height: '16.83vw', title: '9:16'},
  {width: '11.48vw', height: '16.83vw', title: '2:3'},
  {width: '17.65vw', height: '17.65vw', title: '1:1'},
]

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpenSettings: boolean) => void
}

export const SttingsModalContent = ({isOpen, setIsOpen}: IProps) => {
  const dispatch = useAppDispatch()
  const { resolution, activeSubcategoryId } = useAppSelector(state => state.main.accountData)
  const [activeResolution, setActiveResolution] = useState<TResolution>(resolution)

  const [updateResolution] = useUpdateResolutionMutation()
  const [useGetGenerationsQuery] = useLazyGetGenerationsQuery()

  const handleAccess = async() => {
    setIsOpen(false)
    await updateResolution({ resolution }).then(async() => {
      dispatch(setResolution(activeResolution))
      await useGetGenerationsQuery(activeSubcategoryId ? {categoryId: activeSubcategoryId } : {})
    })
  }

  return (
    <ModalContentWrapper 
      title="Настройки изображения"
      description={<div className="mt-[-2vw]">Укажите соотношения сторон изображения для генерации</div>}
      onClick={handleAccess} 
      textButton="Сохранить"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="mt-[6.14vw] mb-[6vw] p-[0px_6.68vw]">
        <div className="flex justify-between items-center">
          {rowTop.map(({width, height, title}) => (
            <div 
              key={title}
              onClick={() => setActiveResolution(title)}
              style={{width, height, opacity: activeResolution === title ? '': '0.5'}} 
              className="rounded-[11px] border-[2px] border-[#23262F] flex items-center justify-center transition-all"
            >
              <p className="text-[#23262F] fs-12 font-medium">{title}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-[5.07vw]">
          {rowBottom.map(({width, height, title}) => (
            <div 
              key={title}
              onClick={() => setActiveResolution(title)}
              style={{width, height, opacity: activeResolution === title ? '': '0.5'}} 
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