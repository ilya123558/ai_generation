'use client'
import { CreatorModeBuyModal } from "@/shared/creator-mode-buy-modal/CreatorModeBuyModal";
import { CreatorModeInfoModal } from "@/shared/creator-mode-info-modal/CreatorModeInfoModal";
import { setCreatorMode, useAppDispatch, useAppSelector } from "@/views/store";
import { useState } from "react";

export const CreatorMode = () => {
  const dispatch = useAppDispatch()
  const { creatorMode, creatorModeIsBuy } = useAppSelector(state => state.main.accountData)

  const [isOpenCreatorModeInfo, setIsOpenCreatorModeInfo] = useState(false)
  const [isOpenCreatorModeBuy, setIsOpenCreatorModeBuy] = useState(false)

  const handleCreatorModeClick = () => {
    if(creatorMode) {
      dispatch(setCreatorMode(false))
    }else{
      if (creatorModeIsBuy) { // режим творца доступен 
        setIsOpenCreatorModeInfo(true)
        dispatch(setCreatorMode(true))
      }else{
        setIsOpenCreatorModeBuy(true)
      }
    }
  }

  return (
    <>
      <CreatorModeInfoModal isOpen={isOpenCreatorModeInfo} setIsOpen={setIsOpenCreatorModeInfo} />
      <CreatorModeBuyModal isOpen={isOpenCreatorModeBuy} setIsOpen={setIsOpenCreatorModeBuy} />
      <button onClick={handleCreatorModeClick} className="absolute top-[-14.3vw] border-[2px] gap-[2.14vw] rounded-[8px] w-fit border-[#CCCCCC] bg-[#F7F8FA] p-[2.6vw_2.81vw] flex items-center justify-center">
        <svg className="w-[5.07vw] h-[5.07vw]" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className={`transition-all ${creatorMode ? 'fill-green': 'fill-[#D9D9D9]'}`} cx="9.44824" cy="9.94855" r="9" fill="#D9D9D9"/>
        </svg>
        <p style={{color: creatorMode ? '#23262F' : '#D9D9D9'}} className="fs-12 transition-all font-medium urbanist">Режим Творца</p>
      </button>
    </>
  );
};