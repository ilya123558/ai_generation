'use client'
import { useRouter } from "next/navigation";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpenQuestion: boolean) => void
}

export const CreatorModeBuyModal = ({isOpen, setIsOpen}: IProps) => {
  const router = useRouter()

  if(!isOpen) return <></>

  return (
    <ModalContentWrapper 
      title="Режим «Творца»"
      description={"Перейдите в магазин и приобретите возможность пользоваться “Режимом Бога”"}
      onClick={() => router.push('/store')} 
      closeModal={() => setIsOpen(false)} 
      textButton="Перейти"
      withCloseBtn
      className="mb-[4.02vw]"
    />
  )
};