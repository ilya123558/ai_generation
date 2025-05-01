'use client'

import { useAppSelector } from "@/views/store";

export const LoadingGrenerateChatImage = () => {
  const { displayPrompt } = useAppSelector(state => state.main.meta)

  if(!displayPrompt) return

  return (
    <div className="w-full h-[100px] bg-red">
      
    </div>
  );
};