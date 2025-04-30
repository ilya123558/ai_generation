'use client'
import { useLazyGetGenerationsQuery } from "@/entities/users/api/users.api";
import { ProfilePhotoItem } from "@/shared/profile-photo-Item/ProfilePhotoItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useEffect, useState } from "react";

export const ProfilePhotoList = () => {
  // const [photoList, setPhotoList] = useState([
  //   {id: 1, photo: '/images/genetation/chat-item.png'},
  //   {id: 2, photo: '/images/genetation/chat-item.png'},
  //   {id: 3, photo: '/images/genetation/chat-item.png'},
  //   {id: 4, photo: '/images/genetation/chat-item.png'},
  //   {id: 5, photo: '/images/genetation/chat-item.png'},
  //   {id: 6, photo: '/images/genetation/chat-item.png'},
  //   {id: 7, photo: '/images/genetation/chat-item.png'},
  //   {id: 8, photo: '/images/genetation/chat-item.png'},
  //   {id: 9, photo: '/images/genetation/chat-item.png'},
  //   {id: 10, photo: '/images/genetation/chat-item.png'},
  //   {id: 11, photo: '/images/genetation/chat-item.png'},
  // ])

  const [getGenerations, { data }] = useLazyGetGenerationsQuery()

  const handleDelete = (id: number | string) => {
    // DELETE image
    // setPhotoList(photoList.filter(item => item.id !== id))
  }

  useEffect(() => {
    getGenerations({limit: 50})
  }, [])

  return (
    <ListWrapper>
      <ul className="grid grid-cols-2 gap-[1.61vw]">
        {data?.generations.map((item, index) => (
          <ProfilePhotoItem 
            key={index} 
            photo={item} 
            handleDelete={() => handleDelete(item)}
          />
        ))}
      </ul>
    </ListWrapper>
  );
};