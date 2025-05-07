import { animationImg } from "@/utils/const/animation";
import { motion } from "framer-motion";

export const SubcategoryLoading = () => {
  return (
    <ul className="grid grid-cols-3 gap-[4.28vw_5.34vw]">
      {Array(20).fill(null).map((_, index) => (
        <motion.li {...animationImg} key={index} className="flex flex-col gap-[2.94vw] items-center">
          <div className="w-full h-122px  bg-[#ABB0BC] animate-pulse rounded-[16px]"></div>
          <div className="bg-[#ABB0BC] animate-pulse w-full fs-11 font-medium text-center text-transparent rounded-[5px]">
            skeletion
          </div>
        </motion.li>
      ))}
    </ul>
  );
};