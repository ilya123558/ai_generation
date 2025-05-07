'use client'
import { useGetProfilesQuery, useLazyGetProfilesQuery } from "@/entities/users/api/users.api";
import { EmptyMessage } from "@/shared/empty-message/EmptyMessage";
import { ProfileCreate } from "@/shared/profile-create/ProfileCreate";
import { ProfileItem } from "@/shared/profile-item/ProfileItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { setActiveProfileId, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect, useState } from "react";
import { ProfileListLoading } from "../profile-list-loading/ProfileListLoading";

export const ProfileList = () => {
  const dispatch = useAppDispatch()
  const {activeProfileId} = useAppSelector(state => state.main.accountData)
  const [getProfiles, { data, isLoading }] = useLazyGetProfilesQuery()

  useEffect(() => {
    getProfiles().then((data) => {
      dispatch(setActiveProfileId((data?.data?.profiles?.[0].id || 1)))
    })
  }, [])

  return (
    <ListWrapper>
      {isLoading
        ? <ProfileListLoading />
        : data?.profiles.length !== 0
          ? (
            <ul className="flex flex-col gap-[3.47vw]">
              {data?.profiles.map(({id, photos, title}) => (
                <ProfileItem 
                  key={id} 
                  isActive={activeProfileId === id} 
                  handleSetActive={() => dispatch(setActiveProfileId(id))} 
                  photos={photos}
                  title={title}
                />
              ))}
              <ProfileCreate />
            </ul>
          )
          : <ProfileCreate />
      }
    </ListWrapper>
  );
};