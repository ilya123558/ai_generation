'use client'
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const QuestionModalContent = ({isOpen, setIsOpen}: IProps) => {
  return (
    <ModalContentWrapper 
      title="Question"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam itaque ullam? Quo incidunt mollitia quaerat veniam placeat, animi, corrupti blanditiis ab iste tempore maxime. Reprehenderit veniam quaerat maxime dicta."
      onClick={() => setIsOpen(false)} 
      textButton="Закрыть"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  )
};