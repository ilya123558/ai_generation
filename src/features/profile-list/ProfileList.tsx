'use client'

import { ProfileCreate } from "@/shared/profile-create/ProfileCreate";
import { ProfileItem } from "@/shared/profile-item/ProfileItem";
import { ProfilePhotoItem } from "@/shared/profile-photo-Item/ProfilePhotoItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useState } from "react";

export const ProfileList = () => {
  const [profileList, setProfileList] = useState([
    {id: 1, title: 'Реализм', photoList: ['/images/profile/profile-1.png', '/images/profile/profile-2.png', '/images/profile/profile-3.png', '/images/profile/profile-4.png']},
    {id: 2, title: 'Модерн', photoList: ['/images/profile/profile-1.png', '/images/profile/profile-2.png', '/images/profile/profile-3.png', '/images/profile/profile-4.png']},
  ])

  return (
    <ListWrapper>
      <ul className="flex flex-col gap-[3.47vw]">
        {profileList.map((item) => (
          <ProfileItem key={item.id} {...item} />
        ))}
        <ProfileCreate />
      </ul>
    </ListWrapper>
  );
};