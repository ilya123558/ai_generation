'use client'
import { useState } from "react";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { PhotoModal } from "../photo-modal/PhotoModal";

interface IProps {
  photo: string
  handleDelete: () => void
}

export const ProfilePhotoItem = ({ photo, handleDelete }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className="w-full">
      {isOpen && (
        <PhotoModal 
          handleDelete={handleDelete}
          setIsOpen={setIsOpen} 
          isOpen={isOpen}
          photo={photo}
        />
      )}
      <div onClick={() => setIsOpen(true)} className="w-full aspect-square overflow-hidden rounded-[16px]">
        <ImageWithSkeleton 
          src={photo} 
          alt="profile-photo"
          width={168}
          height={168}
          className="w-full"
        />
      </div>
    </li>
  );
};