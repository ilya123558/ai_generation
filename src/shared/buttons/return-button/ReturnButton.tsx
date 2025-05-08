'use client'
import { useRouter } from "next/navigation";

interface IProps {
  link: string
}

export const ReturnButton = ({link}: IProps) => {
  const router = useRouter()

  return (
    <div className="w-full mt-[5.34vw]">
      <button 
        className="transition-all active:scale-95 flex items-center justify-center h-[33px] w-[33px] block-custom-shadow rounded-[10px]" 
        onClick={() => router.push(link)}
      >
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.0091 1.46658L1.66699 5.53421L6.0091 9.87631" stroke="black" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};