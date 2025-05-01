'use client'
import { useGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { useEffect, useRef } from 'react'

export const ChatList = () => {
  const { data } = useGetGenerationsChatQuery({limit: 50})

  useEffect(() => {
    if(data) {
      alert(JSON.stringify(data))
    }
  }, [data])

  return (
    <ListWrapper className='mb-[10px]' >
      <ul className='flex flex-col gap-[5.88vw]'>
        {data?.generations && data.generations.reverse().map((chatItem, index) => {
          if(chatItem.sender === 'user') return (
            <ChatItemUser key={index} {...chatItem} />
          )

          return <ChatItem key={index} {...chatItem} />
        })}
      </ul>
    </ListWrapper>
  )
}
