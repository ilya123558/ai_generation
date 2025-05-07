import { animationImg } from "@/utils/const/animation";
import { motion } from "framer-motion";

export const CategoryLoading = () => {
  return (
    <ul className="flex flex-col gap-[5.88vw]">
      {Array(5).fill(null).map((_, index) => (
        <motion.li {...animationImg} key={index} className="w-full h-150px flex flex-col gap-[2.94vw]">
          <div className="w-[40%] bg-[#ABB0BC] text-transparent animate-pulse rounded-[5px] fs-14 font-medium">
            skeletion
          </div>
          <div className="w-full h-full bg-[#ABB0BC] animate-pulse rounded-[16px]"></div>
        </motion.li>
      ))}
    </ul>
  );
};