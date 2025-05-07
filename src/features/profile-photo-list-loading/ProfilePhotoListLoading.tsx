import { animationImg } from "@/utils/const/animation";
import { motion } from "framer-motion";

export const ProfilePhotoListLoading = () => {
  return (
    <ul className="grid grid-cols-2 gap-[1.61vw]">
      {Array(10).fill(null).map((_, index) => (
        <motion.li key={index} {...animationImg} className="bg-[#ABB0BC] animate-pulse w-full aspect-square rounded-[16px]"></motion.li>
      ))}
    </ul>
  );
};