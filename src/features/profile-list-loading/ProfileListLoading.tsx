import { animationWithDynamicDalay } from "@/utils/const/animation";
import { motion } from "framer-motion";

export const ProfileListLoading = () => {
  return (
    <ul className="flex flex-col gap-[3.47vw] ">
      {Array(5).fill(null).map((_, index) => (
        <motion.li {...animationWithDynamicDalay(index)} key={index} className="w-full h-[35vw] rounded-[22px] bg-[#ABB0BC] animate-pulse"></motion.li>
      ))}
    </ul>
  );
};