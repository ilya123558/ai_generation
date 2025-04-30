'use clinet'
import { IChat } from '@/entities/generations/types/chat'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { Fragment, useEffect, useRef, useState } from 'react'

export const ChatList = () => {
  const chatList: IChat[] = []
  // const [chatList, setChatList] = useState<IChat[]>([
  //   {
  //     from: {style: 'Realistic', prompt: 'Realistic lorem ipsumm ipsum dolor sit amet, consectetur m ipsum dolor sit amet',  time: '12:02'},
  //     to: {photo: {id: 1, src: '/images/genetation/chat-item.png'}, style: 'Realistic', time: '12:02'}
  //   },
  //   {
  //     from: {style: 'Realistic', prompt: 'Realistic lorem ipsumm ipsum dolor sit amet, consectetur m ipsum dolor sit amet',  time: '12:02'},
  //     to: {photo: {id: 2, src: '/images/genetation/chat-item.png'}, style: 'Realistic', time: '12:02'}
  //   },
  //   {
  //     from: {style: 'Realistic', prompt: 'Realistic lorem ipsumm ipsum dolor sit amet, consectetur m ipsum dolor sit amet',  time: '12:02'},
  //     to: {photo: {id: 3, src: '/images/genetation/chat-item.png'}, style: 'Realistic', time: '12:02'}
  //   },
  //   {
  //     from: {style: 'Realistic', prompt: 'Realistic lorem ipsumm ipsum dolor sit amet, consectetur m ipsum dolor sit amet',  time: '12:02'},
  //     to: {photo: {id: 4, src: '/images/genetation/chat-item.png'}, style: 'Realistic', time: '12:02'}
  //   },
  // ])

  const ref = useRef<HTMLUListElement>(null);

  // const handleDelete = (id: string | number) => {
  //   setTimeout(() => {
  //     setChatList(prev => prev.filter(item => item.id !== id))
  //   }, 400)
  // }

  return (
    <ListWrapper depsForScroll={chatList} className='mb-[10px]'>
      <ul ref={ref} className='flex flex-col gap-[5.88vw]'>
        {chatList?.map((chatItem, index) => {
          if(chatItem.sender === 'user') return (
            <ChatItemUser key={index} {...chatItem} />
          )

          return ( <ChatItem key={index} {...chatItem} />)
        })}
      </ul>
    </ListWrapper>
  )
}
