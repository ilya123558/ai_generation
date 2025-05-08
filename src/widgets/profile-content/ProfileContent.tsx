'use client'
import { ProfileList } from "@/features/profile-list/ProfileList";
import { ProfilePhotoList } from "@/features/profile-photo-list/ProfilePhotoList";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useAppSelector } from "@/views/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ProfileContent = () => {
  const router = useRouter()
  const [activeValue, setActiveValue] = useState<'photos' | 'profiles'>('photos')
  const { generationPoints } = useAppSelector(state => state.main.accountData)

  const handleAddGenetation = () => {
    router.push('/store/generation')
  }
   
  return (
    <div>
      <ShadowWrapper borderRadius={9} className={`w-full p-[4.93vw_5.61vw_4.93vw_8.01vw] mb-[2.67vw]`}>
        <div className="w-full flex justify-between items-center urbanist">
          <div className="flex flex-col gap-[1.4vw]">
            <h5 className="font-normal fs-14">Баланс генераций</h5>
            <p className="font-bold fs-20">{generationPoints}</p>
          </div>
          <button onClick={handleAddGenetation} className="transition-all active:scale-95">
            <svg className="w-36px" width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18.5" r="17.25" stroke="#23262F" strokeWidth="1.5" strokeDasharray="3.53 3.53"/>
              <path d="M17.999 11.2234V26.5426" stroke="#23262F" strokeWidth="1.14894" strokeLinecap="round"/>
              <path d="M25.6592 18.883L10.34 18.883" stroke="#23262F" strokeWidth="1.14894" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </ShadowWrapper>
      <div className="flex items-center justify-center gap-[1.61vw] mb-[5.62vw] urbanist">
        <ShadowWrapper borderRadius={9} onClick={() => setActiveValue("photos")} className={`${activeValue === 'photos' ? '': 'opacity-50'} w-full text-center p-[2.81vw_0px]`}>
          <p className="fs-16 font-semibold">Мои фото</p>
        </ShadowWrapper>
        <ShadowWrapper onClick={() => setActiveValue("profiles")} borderRadius={9} className={`${activeValue === 'profiles' ? '': 'opacity-50'} w-full text-center p-[2.81vw_0px]`}>
          <p className="fs-16 font-semibold">Профили</p>
        </ShadowWrapper>
      </div>
      {activeValue === 'photos' 
        ? <ProfilePhotoList />
        : <ProfileList />
      }
    </div>
  );
};