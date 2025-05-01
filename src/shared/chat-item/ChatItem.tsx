'use client'
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { useState } from "react";
import { PhotoModal } from "../photo-modal/PhotoModal";
import { IChat } from "@/entities/generations/types/chat";

export const ChatItem = (props: IChat) => {
  const { image, text, createdAt } = props

  const [isOpen, setIsOpen] = useState(false)

  const handleClickImage = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <PhotoModal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        photo={image}
      />
      <button 
        onClick={handleClickImage} 
        className="w-[53.89vw] h-fit overflow-hidden rounded-[16px]"
      >
        <ImageWithSkeleton
          src={image}
          alt="chat-item-img"
          width={1000}
          height={1000}
        />
      </button>

      <div className="flex gap-[3.47vw] items-center mt-[2.35vw]">
        <p className="fs-12 font-normal text-gray">{createdAt}</p>
        {text && <p className="fs-15 font-medium" dangerouslySetInnerHTML={{ __html: text }}>{text}</p>}
      </div>
    </div>
  );
};