'use client'
import { useLazyGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { LoadingGrenerateChatImage } from '@/shared/loading-grenerate-chat-image/LoadingGrenerateChatImage'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { useAppSelector } from '@/views/store'
import { useEffect } from 'react'

export const ChatList = () => {
  const { displayPrompt } = useAppSelector(state => state.main.meta)
  const [getGenerationsChat, { data }] = useLazyGetGenerationsChatQuery()

  useEffect(() => {
    if(displayPrompt === null) {
      getGenerationsChat({limit: 50})
    }
  }, [displayPrompt])

  return (
    <ListWrapper className='mb-[10px]' scrollToBottomDeps={[data, displayPrompt]}>
      <ul className='flex flex-col gap-[5.88vw]'>
        {data?.generations?.slice().reverse().map((chatItem) => {
          if (chatItem.sender === 'user') {
            return <ChatItemUser key={chatItem.id} {...chatItem} />
          }

          return <ChatItem key={chatItem.id} {...chatItem} />
        })}
        <LoadingGrenerateChatImage />
      </ul>
    </ListWrapper>
  )
}
