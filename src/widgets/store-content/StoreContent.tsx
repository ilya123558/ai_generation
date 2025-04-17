'use client'
import { Button } from "@/shared/buttons/button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps {
  list: {
    title: string;
    value: string;
    price: number;
  }[]
  title: string
  withoutValue?: boolean
}

export const StoreContent = ({ list, title, withoutValue }: IProps) => {
  const router = useRouter()

  const [selectValue, setSelectValue] = useState(list[0])

  const handleSubmit = () => {
    router.push(`/payment`)
  }

  return (
    <div className="p-[0px_10vw] flex flex-col items-center">
      <div className="rounded-[25px] translate-y-[40%] p-[2.14vw_12.99vw_2.01vw_13.23vw] bg-primary text-white fs12 font-medium relative z-[1]">
        {title}
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-[10px] h-162px w-full flex items-center justify-center">
          <div className="text-center">
            <p className="fs-20 font-normal">Стоимость</p>
            <p className="fs-45 font-normal mt-[-2vw]">{selectValue.price}₽</p>
          </div>
        </div>
      </div>
      <svg className="w-[54vw] h-[0.53vw]" width="238" height="2" viewBox="0 0 238 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line opacity="0.1" x1="0.348516" y1="1.16375" x2="236.93" y2="1.16375" stroke="#001133" strokeWidth="0.493906" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.95 3.95"/>
      </svg>
      <div className="w-full p-[4.76vw_5.28vw_5.34vw] bg-white rounded-[10px]">
        <ul className="flex flex-col items-start gap-[2.41vw] mb-[4.68vw]">
          {list.map((item, index) => (
            <li key={index} onClick={() => setSelectValue(item)} className="flex items-center justify-center">
              <div className="flex items-center gap-[2.51vw] p-[3.43vw_0vw_2.85vw_3.7vw] w-[57vw] bg-[#F8FAFF] rounded-[10px]">
                <svg className="w-[4vw] h-[4vw]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.67492 12.8746C9.94824 12.8746 12.6018 10.2211 12.6018 6.94775C12.6018 3.67443 9.94824 1.02087 6.67492 1.02087C3.4016 1.02087 0.748047 3.67443 0.748047 6.94775C0.748047 10.2211 3.4016 12.8746 6.67492 12.8746Z" stroke="#0AB161" strokeWidth="0.987813" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.67578 9.31856L9.04653 6.94781L6.67578 4.57706" stroke="#0AB161" strokeWidth="0.987813" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.30469 6.94772H9.04619" stroke="#0AB161" strokeWidth="0.987813" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className={` font-semibold ${withoutValue ? "fs-13": "fs-12"}`}>
                  {item.title}{!withoutValue && <span className="fs-9 font-semibold text-gray ml-[0.6vw]">{item.value}</span>}
                </p>
              </div>
              <div className={`${selectValue.value === item.value ? 'bg-green': 'bg-black opacity-30'} translate-x-[-55%] flex items-center justify-center rounded-full transition-all w-[5.89vw] h-[5.89vw]`}>
                <svg className="w-[2.41vw] h-[1.87vw]" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`transition-all ${selectValue.value === item.value ? 'stroke-white': 'stroke-black'}`} d="M8.49234 0.972107L3.05938 5.91117L0.589844 3.66614" stroke="white" strokeWidth="0.987813" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </li>
          ))}
        </ul>
        <Button 
          onClick={handleSubmit} 
          className="!p-[2.94vw] !rounded-[10px]"
        >
          <p className="fs-15 font-medium">Перейти к оплате</p>
        </Button>
      </div>
    </div>
  );
};