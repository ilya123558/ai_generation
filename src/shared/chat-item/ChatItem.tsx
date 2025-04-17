'use client'

import { IChat } from "@/entities/chat/types/chat";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { useState } from "react";
import { PhotoModal } from "../photo-modal/PhotoModal";

interface IProps extends IChat {
  handleDelete: () => void
}

export const ChatItem = (props: IProps) => {
  const {photo, category, time, type} = props

  const [isOpen, setIsOpen] = useState(false)

  const handleClickImage = () => {
    if(type !== "response") return

    setIsOpen(true)
  }

  return (
    <div className={type === "request" ? 'flex flex-col items-end': ''}>
      {isOpen && <PhotoModal isOpen={isOpen} setIsOpen={setIsOpen} {...props}/>}
      <button onClick={handleClickImage} className="w-[53.89vw]">
        <ImageWithSkeleton
          src={photo}
          alt="chat-item-img"
          width={203}
          height={256}
          className="rounded-[16px]"
        />
      </button>

      {type === "request"
        ? (
          <div className="flex gap-[3.47vw] items-center justify-end mt-[2.35vw]">
            <p className="fs-15 font-medium">{category}</p>
            <p className="fs-12 font-normal text-gray">{time}</p>
          </div>
        )
        : (
          <div className="flex gap-[3.47vw] items-center mt-[2.35vw]">
            <p className="fs-12 font-normal text-gray">{time}</p>
            <p className="fs-15 font-medium">{category}</p>
          </div>
        )
      }
    </div>
  );
};