'use client'
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { useState } from "react";
import { PhotoModal } from "../photo-modal/PhotoModal";
import { IChat } from "@/entities/generations/types/chat";
import { formatChatText } from "@/utils/libs/formatChatText";

export const ChatItem = (props: IChat) => {
  const { image, text, createdAt } = props

  const formatChatTextData = formatChatText(text)

  const [isOpen, setIsOpen] = useState(false)

  const handleClickImage = () => {
    setIsOpen(true)
  }

  return (
    <li>
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

      <div style={{boxShadow: '0px 11.83px 49.3px 0px #251F300D'}} className="p-[2.67vw_5.34vw] rounded-[24px] mt-[2.3vw] bg-white w-[53.89vw]">
        {formatChatTextData.text && <p className="fs-12 font-normal urbanist mb-[2.35vw]">{formatChatTextData.text}</p>}
        <div className="flex gap-[3.47vw] items-center">
          <p className="fs-12 font-normal text-gray">{createdAt}</p>
          <p className="fs-15 font-medium">{formatChatTextData.style}</p>
        </div>
      </div>
    </li>
  );
};