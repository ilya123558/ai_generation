'use client'
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CreatorModeInfoModal = ({isOpen, setIsOpen}: IProps) => {
  return (
    <ModalContentWrapper 
      title="Режим «Творца»"
      description={(
        <>
          Обратите внимание, что режим «Творца» требует <span className="text-primary fs-14 font-bold">2</span> генерации для одной попытки.
        </>
      )}
      onClick={() => setIsOpen(false)} 
      textButton="Понятно"
      withCloseBtn
      className="mb-[4.02vw]"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
};