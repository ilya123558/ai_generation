'use client'
import { formatChatText } from "@/utils/libs/formatChatText";
import { useAppSelector } from "@/views/store";

export const LoadingGrenerateChatImage = () => {
  const { displayPrompt } = useAppSelector(state => state.main.meta)

  const formatChatTextData = formatChatText(displayPrompt || '')

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  if(displayPrompt === null) return <></>

  return (
    <li>
      <div className={'flex flex-col items-end mb-[5.88vw]'}>
        <div style={{boxShadow: '0px 11.83px 49.3px 0px #251F300D'}} className="p-[2.67vw_5.34vw] rounded-[24px] mt-[2.3vw] bg-white">
          {formatChatTextData.text && <p className="fs-12 font-normal urbanist mb-[2.35vw] text-end w-163px">{formatChatTextData.text}</p>}
          <div className="flex gap-[3.47vw] items-center justify-end">
            <p className="fs-15 font-medium">{formatChatTextData.style}</p>
            <p className="fs-12 font-normal text-gray">{getCurrentTime()}</p>
          </div>
        </div>
      </div>

      <div className="w-[53.89vw] aspect-square overflow-hidden rounded-[16px] relative" >
        <div className="absolute w-full h-full bg-[#ABB0BC] animate-pulse z-[9]"></div>
      </div>
    </li>
  );
};