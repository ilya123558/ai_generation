'use client'
import { useGetProfilesQuery, useLazyGetProfilesQuery } from "@/entities/users/api/users.api";
import { ProfileCreate } from "@/shared/profile-create/ProfileCreate";
import { ProfileItem } from "@/shared/profile-item/ProfileItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useEffect, useState } from "react";

export const ProfileList = () => {
  const [getProfiles, { data }] = useLazyGetProfilesQuery()
  const [activeProfileId, setActiveProfileId] = useState<number | null>(null)

  useEffect(() => {
    getProfiles()
      .then((data) => setActiveProfileId(data?.data?.profiles?.[0].id || 1))
  }, [])

  return (
    <ListWrapper>
      <ul className="flex flex-col gap-[3.47vw]">
        {data?.profiles.map(({id, photos, title}) => (
          <ProfileItem 
            key={id} 
            isActive={activeProfileId === id} 
            handleSetActive={() => setActiveProfileId(id)} 
            photos={photos}
            title={title}
          />
        ))}
        <ProfileCreate />
      </ul>
    </ListWrapper>
  );
};