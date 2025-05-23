'use client'
import { useCreateGenerationsMutation } from "@/entities/generations/api/generations.api"
import { StyleSlider } from "@/features/style-slider/StyleSlider"
import { SubcategorySlider } from "@/features/subcategory-slider/SubcategorySlider"
import { useGetDevice } from "@/utils/hooks/useGetDevice"
import { useAppSelector } from "@/views/store"
import { ChatHeader } from "@/widgets/chat-header/ChatHeader"
import { ChatPrompt } from "@/widgets/chat-prompt/ChatPrompt"
import { ChatSlider } from "@/widgets/chat-slider/ChatSlider"

export default function Page() {
  const { resolution, activeProfileId } = useAppSelector(state => state.main.accountData)
  const displayPrompt = useAppSelector(state => state.main.meta.displayPrompt)
  const { getTelegramTopPaddingValue } = useGetDevice()

  const [createGenerations] = useCreateGenerationsMutation()

  const handleGenerate = () => {
    const prompt = displayPrompt || ''
    createGenerations({
      prompt,
      resolution,
      profileId: activeProfileId,
      styleId: 0, // update
      subcategoryId: 0 // update
    })
  }

  return (
    <section style={{paddingTop: getTelegramTopPaddingValue()}} className="flex flex-col justify-between bg-[#141416] w-full h-full text-white fixed left-0 top-0">
      <div className="w-full p-[0px_4vw] mt-[2vw] mb-[3vw]">
        <ChatHeader />
        <ChatSlider />
      </div>
      <div className="w-full h-full">
        <SubcategorySlider />
        <StyleSlider />
        <ChatPrompt handleGenerate={handleGenerate} />
      </div>
    </section>
  )
}