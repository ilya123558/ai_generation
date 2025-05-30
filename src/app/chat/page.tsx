'use client'
import { useCreateGenerationsMutation, useLazyGetGenerationsStatusByIdQuery } from "@/entities/generations/api/generations.api"
import { StyleSlider } from "@/features/style-slider/StyleSlider"
import { SubcategorySlider } from "@/features/subcategory-slider/SubcategorySlider"
import { GenerationBuyModal } from "@/shared/generation-buy-modal/GenerationBuyModal"
import { useGetDevice } from "@/utils/hooks/useGetDevice"
import { createImage, setResetGenerationInfo, useAppDispatch, useAppSelector } from "@/views/store"
import { ChatHeader } from "@/widgets/chat-header/ChatHeader"
import { ChatPrompt } from "@/widgets/chat-prompt/ChatPrompt"
import { ChatSlider } from "@/widgets/chat-slider/ChatSlider"
import { useEffect, useState } from "react"

export default function Page() {
  const dispatch = useAppDispatch()
  const { resolution, activeProfileId, activeSubcategoryId, activeStyleId, creatorMode, generationPoints } = useAppSelector(state => state.main.accountData)
  const { displayPrompt, isCreatingImage } = useAppSelector(state => state.main.meta)
  const [generationBuyModalIsOpen, setGenerationBuyModalIsOpen] = useState(false)
  const { getTelegramTopPaddingValue } = useGetDevice()
  
  const [createGenerations] = useCreateGenerationsMutation()

  const handleGenerate = () => {
    const prompt = displayPrompt || ''

    if(creatorMode && (generationPoints > 2)) {
      if(activeProfileId !== null) {
        createGenerations({
          prompt,
          resolution,
          profileId: activeProfileId,
        }).then(data => {
          if(data.data && data.data.success) {
            localStorage.setItem('job_id', String(data.data.jobId))
            dispatch(createImage())
          }else{
            setGenerationBuyModalIsOpen(true)
          }
        })

        return
      }
    }

    if(generationPoints > 1) {
      if(activeProfileId !== null && activeSubcategoryId !== null) {
        createGenerations({
          prompt,
          resolution,
          profileId: activeProfileId,
          subcategoryId: activeSubcategoryId,
          ...(activeStyleId ? { styleId: activeStyleId } : {})
        }).then(data => {
          if(data.data && data.data.success) {
            localStorage.setItem('job_id', String(data.data.jobId))
            dispatch(createImage())
          }else{
            setGenerationBuyModalIsOpen(true)
          }
        })
        
        return
      }
    }

    setGenerationBuyModalIsOpen(true)
  }

  useEffect(() => {
    return () => {
      dispatch(setResetGenerationInfo())
    }
  }, [])

  return (
    <section style={{paddingTop: getTelegramTopPaddingValue()}} className="flex flex-col justify-between bg-[#141416] w-full h-full text-white fixed left-0 top-0">
      <GenerationBuyModal isOpen={generationBuyModalIsOpen} setIsOpen={setGenerationBuyModalIsOpen} />
      <div className="w-full p-[0px_4vw] mt-[2vw] min-h-[46.5vh]">
        <ChatHeader />
        <ChatSlider />
      </div>
      <div className="w-full h-full">
        <SubcategorySlider />
        <StyleSlider />
        <ChatPrompt 
          handleGenerate={handleGenerate} 
          generateDisabled={isCreatingImage || (creatorMode
            ? !(activeProfileId !== null && Boolean(displayPrompt))
            : !(activeProfileId !== null && activeSubcategoryId !== null))
          } 
        />
      </div>
    </section>
  )
}