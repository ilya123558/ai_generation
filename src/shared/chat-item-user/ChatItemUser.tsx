'use client'

import { IChat } from "@/entities/generations/types/chat";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";

export const ChatItemUser = (props: IChat) => {
  const { image, text, createdAt } = props

  return (
    <div className={'flex flex-col items-end'}>
      <button 
        className="w-[53.89vw] overflow-hidden rounded-[16px]"
      >
        <ImageWithSkeleton
          src={image}
          alt="chat-item-img"
          width={203}
          height={256}
          className="object-cover object-center w-full"
        />
      </button>
      <div style={{boxShadow: '0px 11.83px 49.3px 0px #251F300D'}} className="p-[2.67vw_5.34vw] rounded-[24px] mt-[2.3vw] w-[53.89vw]">
        <p className="fs-12 font-normal urbanist mb-[2.35vw] text-end">{text}</p>
        <div className="flex gap-[3.47vw] items-center justify-end">
          {/* <p className="fs-15 font-medium">{style}</p> */}
          <p className="fs-12 font-normal text-gray">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};