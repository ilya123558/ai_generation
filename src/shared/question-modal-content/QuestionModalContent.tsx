'use client'
import { ModalContentWrapper } from "../wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  isOpenQuestion: boolean
  setIsOpenQuestion: (isOpenQuestion: boolean) => void
}

export const QuestionModalContent = ({isOpenQuestion, setIsOpenQuestion}: IProps) => {
  if(!isOpenQuestion) return <></>

  return (
    <ModalContentWrapper 
      title="Question"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam itaque ullam? Quo incidunt mollitia quaerat veniam placeat, animi, corrupti blanditiis ab iste tempore maxime. Reprehenderit veniam quaerat maxime dicta."
      onClick={() => setIsOpenQuestion(false)} 
      closeModal={() => setIsOpenQuestion(false)} 
      textButton="Закрыть"
    />
  )
};