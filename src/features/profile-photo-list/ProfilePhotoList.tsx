'use client'

import { ProfilePhotoItem } from "@/shared/profile-photo-Item/ProfilePhotoItem";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { useState } from "react";

export const ProfilePhotoList = () => {
  const [photoList, setPhotoList] = useState([
    {id: 1, photo: '/images/genetation/chat-item.png'},
    {id: 2, photo: '/images/genetation/chat-item.png'},
    {id: 3, photo: '/images/genetation/chat-item.png'},
    {id: 4, photo: '/images/genetation/chat-item.png'},
    {id: 5, photo: '/images/genetation/chat-item.png'},
    {id: 6, photo: '/images/genetation/chat-item.png'},
    {id: 7, photo: '/images/genetation/chat-item.png'},
    {id: 8, photo: '/images/genetation/chat-item.png'},
    {id: 9, photo: '/images/genetation/chat-item.png'},
    {id: 10, photo: '/images/genetation/chat-item.png'},
    {id: 11, photo: '/images/genetation/chat-item.png'},
  ])

  const handleDelete = (id: string | number) => {
    setPhotoList(photoList.filter(item => item.id !== id))
  }

  return (
    <ListWrapper>
      <ul className="grid grid-cols-2 gap-[1.61vw]">
        {photoList.map((item) => (
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