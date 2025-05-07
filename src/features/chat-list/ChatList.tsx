'use client'
import { useGetGenerationsChatQuery, useLazyGetGenerationsChatQuery } from '@/entities/generations/api/generations.api'
import { ChatItemUser } from '@/shared/chat-item-user/ChatItemUser'
import { ChatItem } from '@/shared/chat-item/ChatItem'
import { EmptyMessage } from '@/shared/empty-message/EmptyMessage'
import { LoadingGrenerateChatImage } from '@/shared/loading-grenerate-chat-image/LoadingGrenerateChatImage'
import { ListWrapper } from '@/shared/wrappers/list-wrapper/ListWrapper'
import { imageCreating, useAppDispatch, useAppSelector } from '@/views/store'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChatListLoading } from '../chat-list-loading/ChatListLoading'

export const ChatList = () => {
  const dispatch = useAppDispatch()
  const { isCreatingImage } = useAppSelector(state => state.main.meta)

  const [getGenerationsChat, { data, isLoading }] = useLazyGetGenerationsChatQuery()

  const ref = useRef<number | null>(null)

  useEffect(() => {
    getGenerationsChat({ limit: 10 })

    const interval = setInterval(() => {
      getGenerationsChat({ limit: 10 }).then(data => {
        if(!data.data) return 

        const value = data.data.generations[0]?.id
        if(value && value !== ref.current) {
          dispatch(imageCreating())
          ref.current = value
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <ListWrapper className='mb-[10px] rounded-[16px]' scrollToBottomDeps={isCreatingImage}>
      {isLoading
        ? <ChatListLoading />
        : (
          <ul className='flex flex-col gap-[5.88vw]'>
            {
              data?.generations.length !== 0
                ? (
                    <Fragment>
                      {data?.generations?.slice().reverse().map((chatItem) => {
                        if (chatItem.sender === 'user') {
                          return <ChatItemUser key={`${chatItem.id}-${chatItem.sender}-${Math.round(100)}`} {...chatItem} />
                        }
        
                        return <ChatItem key={`${chatItem.id}-${chatItem.sender}-${Math.round(100)}`} {...chatItem} />
                      })}
                    </Fragment>
                  )
                  : (!isCreatingImage && <EmptyMessage><p>Нет сгенерированных <br/> изображений</p></EmptyMessage>)
              }
            <LoadingGrenerateChatImage />
          </ul>
        )
      }
    </ListWrapper>
  )
}
