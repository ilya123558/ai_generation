import { animationImg } from "@/utils/const/animation";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { ShadowWrapper } from "../wrappers/shadow-wrapper/ShadowWrapper";

export const EmptyMessage = ({children}: PropsWithChildren) => {
  return (
    <div className="mt-[5vw] w-full flex items-center justify-center">
      <motion.div {...animationImg} className="w-[70%]">
        <ShadowWrapper borderRadius={10} className="overflow-hidden bg-white urbanist fs-15 font-bold text-center text-primary p-[5vw_2vw]">
          {children ? children: 'Нет элементов'}
        </ShadowWrapper>
      </motion.div>
    </div>
  );
};