'use client'
import { useGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'

export const ChatList = () => {
  const { data } = useGetGenerationsChatQuery({limit: 50})

  return (
    <ListWrapper className='mb-[10px]' >
      <ul className='flex flex-col gap-[5.88vw]'>
        {data?.generations?.slice().reverse().map((chatItem) => {
          if (chatItem.sender === 'user') {
            return <ChatItemUser key={chatItem.id} {...chatItem} />
          }

          return <ChatItem key={chatItem.id} {...chatItem} />
        })}
      </ul>
    </ListWrapper>
  )
}
