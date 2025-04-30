'use client'
import { ProfileCreate } from "@/shared/profile-create/ProfileCreate";
import { ProfileItem } from "@/shared/profile-item/ProfileItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useState } from "react";

const profileList = [
  {id: 1, title: 'Реализм', photoList: ['/images/profile/profile-1.png', '/images/profile/profile-2.png', '/images/profile/profile-3.png', '/images/profile/profile-4.png']},
  {id: 2, title: 'Модерн', photoList: ['/images/profile/profile-1.png', '/images/profile/profile-2.png', '/images/profile/profile-3.png', '/images/profile/profile-4.png']},
]

export const ProfileList = () => {
  const [activeProfileId, setActiveProfileId] = useState(profileList[0].id)

  return (
    <ListWrapper>
      <ul className="flex flex-col gap-[3.47vw]">
        {profileList.map((item) => (
          <ProfileItem 
            key={item.id} 
            isActive={activeProfileId === item.id} 
            handleSetActive={() => setActiveProfileId(item.id)} 
            {...item} 
          />
        ))}
        <ProfileCreate />
      </ul>
    </ListWrapper>
  );
};