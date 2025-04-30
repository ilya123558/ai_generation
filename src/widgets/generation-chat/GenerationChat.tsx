'use client'
import { ChatList } from "@/features/chat-list/ChatList";
import { SelectStyleGeneration } from "@/features/select-style-generation/SelectStyleGeneration";
import { useGetHeight } from "@/utils/hooks/useGetHeight";
import { useRef } from "react";

export const GenerationChat = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useGetHeight({containerRef, withoutMenu: true})

  return (
    <div ref={containerRef} style={{height: height ? height: 1000}} className="flex flex-col justify-between mt-[4.54vw]">
      <ChatList />
      <SelectStyleGeneration />
    </div>
  );
};