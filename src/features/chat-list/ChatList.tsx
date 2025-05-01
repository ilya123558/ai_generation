'use client'
import { useLazyGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { useEffect, useRef } from 'react'

export const ChatList = () => {
  const [getGenerationsChat, { data }] = useLazyGetGenerationsChatQuery()

  useEffect(() => {
    (async() => {
      await getGenerationsChat({limit: 50})
    })()
  }, [])

  if(!(data && data.generations)) return <></>

  return (
    <div className='mb-[10px]' >
      <ul className='flex flex-col gap-[5.88vw]'>
        {data.generations.reverse().map((chatItem, index) => {
          if(chatItem.sender === 'user') return (
            <ChatItemUser key={index} {...chatItem} />
          )

          return <ChatItem key={index} {...chatItem} />
        })}
      </ul>
    </div>
  )
}
