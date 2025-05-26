'use client';
import { useState } from "react";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { PhotoModal } from "../photo-modal/PhotoModal";
import { motion } from "framer-motion";
import { animationImg } from "@/utils/const/animation";
import { IChat } from "@/entities/generations/types/chat";
import { getOrientation } from "@/utils/libs/getOrientation";

interface IProps extends IChat {
  handleDelete: () => void;
}

export const ProfilePhotoItem = ({ photo, resolution, handleDelete }: IProps) => {
  const orientation = getOrientation(resolution);
  const [isOpen, setIsOpen] = useState(false);

  const style =
    orientation === 'horizontal'
      ? { gridColumn: 'span 2', gridRow: 'span 1' }
      : orientation === 'vertical'
      ? { gridColumn: 'span 1', gridRow: 'span 2' }
      : { gridColumn: 'span 1', gridRow: 'span 1' };

  return (
    <motion.li
      {...animationImg}
      style={style}
      className="relative w-full h-full"
    >
      <PhotoModal
        handleDelete={handleDelete}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        photo={photo}
      />
      <div
        onClick={() => setIsOpen(true)}
        className="w-full h-full overflow-hidden rounded-[16px] cursor-pointer"
      >
        <ImageWithSkeleton
          src={photo}
          alt="profile-photo"
          width={168}
          height={168}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.li>
  );
};