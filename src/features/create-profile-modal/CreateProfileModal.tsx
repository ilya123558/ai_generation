'use client'

import { ModalContentWrapper } from "@/shared/wrappers/modal-content-wrapper/ModalContentWrapper";
import { useRouter } from "next/navigation";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CreateProfileModal = ({isOpen, setIsOpen}: IProps) => {
  const router = useRouter()

  if(!isOpen) return <></>

  return (
    <ModalContentWrapper 
      title="Создайте профиль!"
      description={(
        <>Обратите внимание! Стоимость создания профиля - <span className="fs-13 font-bold text-primary">10</span> генераций</>
      )}
      onClick={() => router.push('/store')} 
      closeModal={() => setIsOpen(false)} 
      textButton={<>Создать <span className="ml-[2.67vw]">-10</span></>}
    />
  )
};