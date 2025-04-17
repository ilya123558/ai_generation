import { IChat } from '@/entities/chat/types/chat'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { useState } from 'react'

export const ChatList = () => {
  const [chatList, setChatList] = useState<IChat[]>([
    { id: 1, photo: '/images/genetation/chat-item.png', category: 'Realistic', time: '12:02', type: 'request' },
    { id: 2, photo: '/images/genetation/chat-item.png', category: 'Realistic', time: '12:02', type: 'response' },
  ])

  const handleDelete = (id: string | number) => {
    setTimeout(() => {
      setChatList(prev => prev.filter(item => item.id !== id))
    }, 400)
  }

  return (
    <ListWrapper className='mb-[10px]'>
      <ul className='flex flex-col gap-[5.88vw]'>
        {chatList.map((chatItem, index) => (
          <ChatItem 
            key={index}
            handleDelete={() => handleDelete(chatItem.id)}
            {...chatItem}
          />
        ))}
      </ul>
    </ListWrapper>
  )
}
