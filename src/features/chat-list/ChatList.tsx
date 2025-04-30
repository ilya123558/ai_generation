'use clinet'
import { useLazyGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { IChat } from '@/entities/generations/types/chat'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { Fragment, useEffect, useRef, useState } from 'react'

export const ChatList = () => {
  const chatList: IChat[] = []
  const [getGenerationsChat, { data }] = useLazyGetGenerationsChatQuery()

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getGenerationsChat({limit: 50})
  }, [])

  return (
    <ListWrapper depsForScroll={chatList} className='mb-[10px]'>
      <ul ref={ref} className='flex flex-col gap-[5.88vw]'>
        {data?.generations.map((chatItem, index) => {
          if(chatItem.sender === 'user') return (
            <ChatItemUser key={index} {...chatItem} />
          )

          return ( <ChatItem key={index} {...chatItem} />)
        })}
      </ul>
    </ListWrapper>
  )
}
