'use client'
import { useRouter } from "next/navigation";

interface IProps {
  link: string
  title: string
  active: boolean
  setActive: (active: boolean) => void
}

export const HeaderWithNavigation = ({link, title, active, setActive}: IProps) => {
  const router = useRouter()

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <div className="w-full mt-[5.34vw] grid grid-cols-3 items-center">
        <button 
          className="flex items-center justify-center h-[8.82vw] w-[8.82vw] block-custom-shadow rounded-[10px] transition-all active:scale-95" 
          onClick={() => router.push(link)}
        >
          <svg className="w-[1.87vw] h-[2.94vw] transition-all" width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.0091 1.46658L1.66699 5.53421L6.0091 9.87631" stroke="black" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="fs-20 font-semibold text-[#141718] text-center">{title}</h2>
        <div className="flex justify-end">
          <button onClick={handleClick} className={`block-custom-shadow transition-all active:scale-95 rounded-full ${active ? 'bg-secondary': 'bg-[#FAFAFB]'} p-[3.22vw] w-fit transition-all`}>
            <svg className="w-[5.34vw] h-[5.07vw]" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className={active ? 'stroke-white transition-all': ''} x="0.75" y="0.75" width="6.5" height="6.5" rx="1.25" stroke="#23262F" strokeWidth="1.5"/>
              <rect className={active ? 'stroke-white transition-all': ''} x="12.75" y="0.75" width="6.5" height="6.5" rx="1.25" stroke="#23262F" strokeWidth="1.5"/>
              <rect className={active ? 'stroke-white transition-all': ''} x="12.75" y="11.75" width="6.5" height="6.5" rx="1.25" stroke="#23262F" strokeWidth="1.5"/>
              <rect className={active ? 'stroke-white transition-all': ''} x="0.75" y="11.75" width="6.5" height="6.5" rx="1.25" stroke="#23262F" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};