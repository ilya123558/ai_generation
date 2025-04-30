'use client'
import { useRouter } from "next/navigation";
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  value: string
}

export const PaymentSuccessModal = ({isOpen, setIsOpen, value}: IProps) => {
  const router = useRouter()

  const handleClose = () => {
    router.push('/home')
    setIsOpen(false)
  }

  return (
    <ModalContentWrapper 
      title="Поздравляем!"
      description={<>Ваша оплата прошла успешно.<br/>Ваш начислено {value}.</>}
      onClick={handleClose} 
      closeModal={handleClose} 
      textButton="Закрыть"
      className="mt-[3.88vw] mb-[4.35vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className="flex items-center justify-center gap-[2.94vw]">
        <div className="flex items-center justify-center bg-green rounded-full w-[5.81vw] h-[5.81vw]">
          <p className="text-white font-semibold fs-12">+</p>
        </div>
        <p className="font-semibold fs-12">{value}</p>
      </div>
    </ModalContentWrapper>
  )
};