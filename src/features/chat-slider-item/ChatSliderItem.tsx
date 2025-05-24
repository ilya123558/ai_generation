'use client'
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { PhotoModal } from "@/shared/photo-modal/PhotoModal";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  src: string
  isActiveSlide: boolean
}

export const ChatSliderItem = ({ src, isActiveSlide }: IProps) => {
  const [isLike, setIsLike] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    setIsLike(!isLike)
  }

  return (
    <>
      <PhotoModal
        setIsOpen={setOpenModal} 
        isOpen={openModal}
        photo={src}
      />
      <div style={{boxShadow: '0px 0px 28px 0px #000000'}} onClick={() => setOpenModal(true)} className="rounded-[16px] overflow-hidden w-full relative">
        <ImageWithSkeleton 
          src={src}
          alt="chat-image"
          width={211}
          height={296}
          className="w-full object-cover object-center"
        />
        <button onClick={handleLike} className={`${isActiveSlide ? 'opacity-100': 'opacity-0 pointer-events-none'} transition-all border-[#ffffff80] ${isLike ? 'border-light-red': 'border-[#ffffff80]'} transition-all backdrop-blur-[10px] absolute will-change-transform top-[11px] right-[12px] rounded-full w-[26px] h-[26px] border-[1px] flex items-center justify-center active:scale-95`}>
          {isLike
            ? <Image src={'/images/chat/like.png'} alt="like" width={96} height={96} className="w-[16px] h-[15px]"/>
            : (
              <svg className="w-[13px] h-[13px]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="transition-all" d="M6.50035 2.70544L6.17952 3.01422C6.26346 3.10143 6.37929 3.15071 6.50035 3.15071C6.6214 3.15071 6.73723 3.10143 6.82118 3.01422L6.50035 2.70544ZM4.97221 10.3173C4.07238 9.60797 3.08844 8.91526 2.30787 8.0363C1.54256 7.17449 1.0087 6.16896 1.0087 4.86438H0.118164C0.118164 6.44687 0.777458 7.65414 1.642 8.62761C2.49128 9.58393 3.5739 10.349 4.42089 11.0167L4.97221 10.3173ZM1.0087 4.86438C1.0087 3.58743 1.73026 2.51658 2.71518 2.06637C3.67204 1.62899 4.95773 1.74482 6.17952 3.01422L6.82118 2.39666C5.37144 0.890459 3.68868 0.642219 2.34496 1.25643C1.02931 1.85782 0.118164 3.25425 0.118164 4.86438H1.0087ZM4.42089 11.0167C4.725 11.2564 5.05147 11.5121 5.38231 11.7054C5.71305 11.8986 6.09046 12.0557 6.50035 12.0557V11.1652C6.31654 11.1652 6.10026 11.0935 5.83161 10.9365C5.56309 10.7796 5.28451 10.5635 4.97221 10.3173L4.42089 11.0167ZM8.57981 11.0167C9.42677 10.349 10.5094 9.58393 11.3587 8.62761C12.2232 7.65414 12.8825 6.44687 12.8825 4.86438H11.992C11.992 6.16896 11.4581 7.17449 10.6928 8.0363C9.91223 8.91526 8.92831 9.60797 8.02851 10.3173L8.57981 11.0167ZM12.8825 4.86438C12.8825 3.25425 11.9714 1.85782 10.6557 1.25643C9.31201 0.642219 7.62925 0.890459 6.17952 2.39666L6.82118 3.01422C8.04293 1.74482 9.32863 1.62899 10.2855 2.06637C11.2704 2.51658 11.992 3.58743 11.992 4.86438H12.8825ZM8.02851 10.3173C7.71617 10.5635 7.43761 10.7796 7.16908 10.9365C6.90043 11.0935 6.68415 11.1652 6.50035 11.1652V12.0557C6.91023 12.0557 7.28764 11.8986 7.61839 11.7054C7.94925 11.5121 8.27566 11.2564 8.57981 11.0167L8.02851 10.3173Z" fill={"white"}/>
              </svg>
            )
          }
        </button>
      </div>
    </>
  );
};