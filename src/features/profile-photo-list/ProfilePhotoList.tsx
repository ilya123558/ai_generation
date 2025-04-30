'use client'
import { useDeleteGenerationMutation, useLazyGetGenerationsQuery } from "@/entities/users/api/users.api";
import { ProfilePhotoItem } from "@/shared/profile-photo-Item/ProfilePhotoItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useEffect } from "react";

export const ProfilePhotoList = () => {
  const [getGenerations, { data }] = useLazyGetGenerationsQuery()
  const [deleteGeneration] = useDeleteGenerationMutation()

  const handleDelete = (id: number) => {
    deleteGeneration(id)
  }

  useEffect(() => {
    getGenerations({limit: 50})
  }, [])

  return (
    <ListWrapper>
      <ul className="grid grid-cols-2 gap-[1.61vw]">
        {data?.generations.map(item => (
          <ProfilePhotoItem 
            key={item.id} 
            photo={item.photo} 
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </ListWrapper>
  );
};