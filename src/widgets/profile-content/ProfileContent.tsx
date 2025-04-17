'use client'
import { ProfileList } from "@/features/profile-list/ProfileList";
import { ProfilePhotoList } from "@/features/profile-photo-list/ProfilePhotoList";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useState } from "react";

export const ProfileContent = () => {
  const [activeValue, setActiveValue] = useState<'photos' | 'profiles'>('photos')
  return (
    <div>
      <div className="flex items-center justify-center gap-[1.61vw] mb-[5.62vw] urbanist">
        <button onClick={() => setActiveValue("photos")} className="w-full">
          <ShadowWrapper borderRadius={9} className={`${activeValue === 'photos' ? '': 'opacity-50'} w-full text-center p-[2.81vw_0px]`}>
            <p className="fs-16 font-semibold">Мои фото</p>
          </ShadowWrapper>
        </button>
        <button onClick={() => setActiveValue("profiles")} className="w-full">
          <ShadowWrapper borderRadius={9} className={`${activeValue === 'profiles' ? '': 'opacity-50'} w-full text-center p-[2.81vw_0px]`}>
            <p className="fs-16 font-semibold">Профили</p>
          </ShadowWrapper>
        </button>
      </div>
      {activeValue === 'photos' 
        ? <ProfilePhotoList />
        : <ProfileList />
      }
    </div>
  );
};