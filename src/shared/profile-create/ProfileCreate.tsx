'use client'
import { useState } from "react";
import { ShadowWrapper } from "../wrappers/shadow-wrapper/ShadowWrapper";
import { useAppSelector } from "@/views/store";
import { CreateProfileInfoModal } from "@/features/create-profile-info-modal/CreateProfileInfoModal";
import { CreateProfileModal } from "@/features/create-profile-modal/CreateProfileModal";

export const ProfileCreate = () => {
  const { profilePoints } = useAppSelector(state => state.main.accountData)
  const [createProfileInfoModalIsOpen, setCreateProfileInfoModalIsOpen] = useState(false)
  const [createProfileModalIsOpen, setCreateProfileModalIsOpen] = useState(false)

  const handleProfileCreate = () => {
    if(profilePoints === 0) {
      setCreateProfileInfoModalIsOpen(true)
    }else{
      setCreateProfileModalIsOpen(true)
    }
  }

  return (
    <div className="transition-all active:scale-95">
      <CreateProfileInfoModal isOpen={createProfileInfoModalIsOpen} setIsOpen={setCreateProfileInfoModalIsOpen} />
      <CreateProfileModal isOpen={createProfileModalIsOpen} setIsOpen={setCreateProfileModalIsOpen}/>
      <div onClick={handleProfileCreate}>
        <ShadowWrapper borderRadius={22} className="!h-[35vw] flex items-center justify-center">
          <svg className="w-[12.81vw] scale-[1.8] h-[12.81vw] translate-y-[2.5vw] translate-x-[2vw] " width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <g filter="url(#filter0_d_61_536)">
            <path d="M63 33C63 19.7452 52.2548 9 39 9C25.7452 9 15 19.7452 15 33C15 46.2548 25.7452 57 39 57C52.2548 57 63 46.2548 63 33Z" fill="#FAFAFB"/>
            </g>
            <path d="M62.7273 29.3703C62.459 27.6017 61.9977 25.8966 61.3655 24.2769C61.1116 24.3792 60.8221 24.2581 60.717 24.0046C59.9249 22.0944 58.8879 20.3111 57.6451 18.6938C57.4779 18.4763 57.5175 18.1649 57.7328 17.9959C56.6301 16.6209 55.3791 15.3699 54.0041 14.2672C53.8351 14.4825 53.5237 14.5221 53.3062 14.3549C51.6889 13.1121 49.9056 12.0751 47.9954 11.283C47.7419 11.1779 47.6208 10.8884 47.7231 10.6345C46.1034 10.0023 44.3983 9.54099 42.6297 9.27269C42.5915 9.54377 42.342 9.73415 42.0699 9.69865C41.0654 9.56762 40.0407 9.5 39 9.5C37.9593 9.5 36.9346 9.56762 35.93 9.69865C35.658 9.73415 35.4085 9.54377 35.3703 9.27269C33.6017 9.54099 31.8966 10.0023 30.2769 10.6345C30.3792 10.8884 30.2581 11.1779 30.0046 11.283C28.0944 12.0751 26.3111 13.1121 24.6938 14.3549C24.4763 14.5221 24.1649 14.4825 23.9959 14.2672C22.6209 15.3699 21.3699 16.6209 20.2672 17.9959C20.4825 18.1649 20.5221 18.4763 20.3549 18.6938C19.1121 20.3111 18.0751 22.0944 17.283 24.0046C17.1779 24.2581 16.8884 24.3792 16.6345 24.2769C16.0023 25.8966 15.541 27.6017 15.2727 29.3703C15.5438 29.4085 15.7341 29.658 15.6987 29.9301C15.5676 30.9346 15.5 31.9593 15.5 33C15.5 34.0407 15.5676 35.0654 15.6987 36.07C15.7341 36.342 15.5438 36.5915 15.2727 36.6297C15.541 38.3983 16.0023 40.1034 16.6345 41.7231C16.8884 41.6208 17.1779 41.7419 17.283 41.9954C18.0751 43.9056 19.1121 45.6889 20.3549 47.3062C20.5221 47.5237 20.4825 47.8351 20.2672 48.0041C21.3699 49.3791 22.6209 50.6301 23.9959 51.7328C24.1649 51.5175 24.4763 51.4779 24.6938 51.6451C26.3111 52.8879 28.0944 53.9249 30.0046 54.717C30.2581 54.8221 30.3792 55.1116 30.2769 55.3655C31.8966 55.9977 33.6017 56.459 35.3703 56.7273C35.4085 56.4562 35.658 56.2659 35.9301 56.3013C36.9346 56.4324 37.9593 56.5 39 56.5C40.0407 56.5 41.0654 56.4324 42.07 56.3013C42.342 56.2659 42.5915 56.4562 42.6297 56.7273C44.3983 56.459 46.1034 55.9977 47.7231 55.3655C47.6208 55.1116 47.7419 54.8221 47.9954 54.717C49.9056 53.9249 51.6889 52.8879 53.3062 51.6451C53.5237 51.4779 53.8351 51.5175 54.0041 51.7328C55.3791 50.6301 56.6301 49.3791 57.7328 48.0041C57.5175 47.8351 57.4779 47.5237 57.6451 47.3062C58.8879 45.6889 59.9249 43.9056 60.717 41.9954C60.8221 41.7419 61.1116 41.6208 61.3655 41.7231C61.9977 40.1034 62.459 38.3983 62.7273 36.6297C62.4562 36.5915 62.2659 36.342 62.3013 36.0699C62.4324 35.0654 62.5 34.0407 62.5 33C62.5 31.9593 62.4324 30.9346 62.3013 29.93C62.2659 29.658 62.4562 29.4085 62.7273 29.3703Z" stroke="#23262F" strokeLinecap="round" strokeDasharray="6 6"/>
            <path d="M39 25.25V41.25" stroke="#23262F" strokeWidth="2" strokeLinecap="round"/>
            <path d="M47 33.25L31 33.25" stroke="#23262F" strokeWidth="2" strokeLinecap="round"/>
            </g>
            <defs>
            <filter id="filter0_d_61_536" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3" dy="9"/>
            <feGaussianBlur stdDeviation="9"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.827451 0 0 0 0 0.819608 0 0 0 0 0.847059 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_61_536"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_61_536" result="shape"/>
            </filter>
            </defs>
          </svg>
        </ShadowWrapper>
      </div>

    </div>
  );
};