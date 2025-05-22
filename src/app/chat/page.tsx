'use client'
import { StyleSlider } from "@/features/style-slider/StyleSlider"
import { SubcategorySlider } from "@/features/subcategory-slider/SubcategorySlider"
import { useGetDevice } from "@/utils/hooks/useGetDevice"
import { ChatHeader } from "@/widgets/chat-header/ChatHeader"
import { ChatPrompt } from "@/widgets/chat-prompt/ChatPrompt"
import { ChatSlider } from "@/widgets/chat-slider/ChatSlider"

export default function Page() {
  const { getTelegramTopPaddingValue } = useGetDevice()

  return (
    <section style={{paddingTop: getTelegramTopPaddingValue()}} className="flex flex-col justify-between bg-[#141416] w-full h-full text-white fixed left-0 top-0">
      <div className="w-full p-[0px_4vw] mt-[4vw] mb-[6.67vw]">
        <ChatHeader />
        <ChatSlider />
      </div>
      <div className="w-full h-full">
        <SubcategorySlider />
        <StyleSlider />
        <ChatPrompt />
      </div>
    </section>
  )
}