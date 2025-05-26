'use client'
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useAppSelector } from "@/views/store";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  link?: string
  withGenerationPoints?: boolean
  className?: string
}

export const HeaderTitle = ({ link, children, withGenerationPoints, className }: IProps) => {
  const router = useRouter()
  const { generationPoints } = useAppSelector(state => state.main.accountData)

  if(withGenerationPoints) {
    return (
      <div className={className ? className : ''}>
        <div className="w-full grid grid-cols-3 mt-[4.54vw] items-center">
          <div className="flex items-center gap-[2.41vw]">
            <button 
              className="active:scale-95 flex items-center justify-center min-h-[8.82vw] min-w-[8.82vw] block-custom-shadow rounded-[10px] transition-all" 
              onClick={() => router.back()}
            >
              <svg className="min-w-[1.87vw] min-h-[2.94vw] transition-all" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0091 1.46658L1.66699 5.53421L6.0091 9.87631" stroke="black" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ShadowWrapper borderRadius={10} className={`p-[3.6vw_6.81vw] flex items-center justify-center w-full`}>
              <p 
                style={{color: generationPoints < 4 ? (generationPoints < 2 ? '#E93F21' : '#E79D25') : ''}} 
                className={`fs-15 font-semibold`}
              >
                {generationPoints}
              </p>
            </ShadowWrapper>
          </div>
          <h2 className="fs-20 font-semibold text-[#141718] text-center">{children}</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={className ? className : ''}>
      <div className="w-full grid grid-cols-5 mt-[20px] items-center">
        <div className="flex items-center gap-[2.41vw]">
          <button 
            className="flex items-center justify-center min-h-[8.82vw] min-w-[8.82vw] block-custom-shadow rounded-[10px] transition-all active:scale-95" 
            onClick={() => router.back()}
          >
            <svg className="min-w-[1.87vw] min-h-[2.94vw] transition-all" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0091 1.46658L1.66699 5.53421L6.0091 9.87631" stroke="black" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <h2 className="fs-20 font-semibold text-[#141718] col-span-3 text-center">{children}</h2>
        <div className=""></div>
      </div>
    </div>
  );
};