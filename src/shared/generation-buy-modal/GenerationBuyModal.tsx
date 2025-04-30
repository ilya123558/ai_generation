'use client'
import { useRouter } from "next/navigation";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const GenerationBuyModal = ({isOpen, setIsOpen}: IProps) => {
  const router = useRouter()

  return (
    <ModalContentWrapper 
      title="Упс..."
      description={"Похоже количество генераций закончилось. Вы можете приобрести дополнительное количество"}
      onClick={() => router.push('/store/generation')} 
      closeModal={() => setIsOpen(false)} 
      textButton="Перейти"
      withCloseBtn
      className="mb-[4.02vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
};