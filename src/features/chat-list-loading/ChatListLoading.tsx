import { animationImg } from "@/utils/const/animation";
import { motion } from "framer-motion";
import { Fragment } from "react"

export const ChatListLoading = () => {
  return (
    <ul className='flex flex-col gap-[5.88vw]'>
      {Array(5).fill(null).map((_, index) => (
        <Fragment key={index}>
          <motion.li {...animationImg} className={'flex flex-col items-end'}>
            <div style={{boxShadow: '0px 11.83px 49.3px 0px #251F300D', borderRadius: 16}} className="mt-[2.3vw] h-90px bg-[#ABB0BC] animate-pulse rounded-[24px] w-200px"></div>
          </motion.li>
          <motion.li {...animationImg} className={'flex flex-col'}>
            <div style={{boxShadow: '0px 11.83px 49.3px 0px #251F300D', borderRadius: 16}} className="mt-[2.3vw] aspect-square bg-[#ABB0BC] animate-pulse rounded-[24px] w-200px"></div>
          </motion.li>
        </Fragment>
      ))}
    </ul>
  );
};