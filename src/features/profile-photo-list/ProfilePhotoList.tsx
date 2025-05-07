'use client'
import { useDeleteGenerationMutation, useLazyGetGenerationsQuery } from "@/entities/users/api/users.api";
import { ProfilePhotoItem } from "@/shared/profile-photo-Item/ProfilePhotoItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useEffect } from "react";
import { ProfilePhotoListLoading } from "../profile-photo-list-loading/ProfilePhotoListLoading";
import { motion } from "framer-motion";
import { animationImg } from "@/utils/const/animation";
import { EmptyMessage } from "@/shared/empty-message/EmptyMessage";

export const ProfilePhotoList = () => {
  const [getGenerations, { data, isLoading }] = useLazyGetGenerationsQuery()
  const [deleteGeneration] = useDeleteGenerationMutation()

  const handleDelete = (id: number) => {
    deleteGeneration(id)
  }

  useEffect(() => {
    getGenerations({limit: 50})
  }, [])

  return (
    <ListWrapper>
      {isLoading
        ? <ProfilePhotoListLoading />
        : data && data.generations.length !== 0
            ? (
              <ul className="grid grid-cols-2 gap-[1.61vw]">
                {data.generations.map(item => (
                  <ProfilePhotoItem 
                    key={item.id} 
                    photo={item.photo} 
                    handleDelete={() => handleDelete(item.id)}
                  />
                ))}
              </ul>
            )
            : <EmptyMessage />
      }
      
    </ListWrapper>
  );
};