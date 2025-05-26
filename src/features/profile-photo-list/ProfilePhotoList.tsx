'use client'

import {
  useDeleteGenerationMutation,
  useLazyGetGenerationsQuery,
} from '@/entities/users/api/users.api'
import { ProfilePhotoItem } from '@/shared/profile-photo-Item/ProfilePhotoItem'
import { useEffect, useRef, useState } from 'react'
import { ProfilePhotoListLoading } from '../profile-photo-list-loading/ProfilePhotoListLoading'
import { EmptyMessage } from '@/shared/empty-message/EmptyMessage'
import { getOrientation } from '@/utils/libs/getOrientation'
import { sortGenerationsForGrid } from '@/utils/libs/sortGenerationsForGrid'
import autoAnimate from '@formkit/auto-animate'

const LIMIT = 50

export const ProfilePhotoList = () => {
  const [getGenerations, { isFetching }] = useLazyGetGenerationsQuery()
  const [deleteGeneration] = useDeleteGenerationMutation()

  const [generations, setGenerations] = useState<any[]>([])

  const parentRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current, { duration: 1000 })
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getGenerations({ limit: LIMIT, page: 1 }).unwrap()
        setGenerations(result?.generations || [])
      } catch (err) {
        console.error('Ошибка загрузки генераций:', err)
      }
    }

    fetchData()
  }, [getGenerations])

  const sortedPhotos = sortGenerationsForGrid(
    generations.map(g => ({
      ...g,
      orientation: getOrientation(g.resolution),
    }))
  )

  return (
    <>
      {isFetching && generations.length === 0 ? (
        <ProfilePhotoListLoading />
      ) : sortedPhotos.length > 0 ? (
        <ul
          ref={parentRef}
          className="grid grid-cols-2 auto-rows-[45vw] gap-[1.60vw] grid-flow-dense"
        >
          {sortedPhotos.map(photo => (
            <ProfilePhotoItem
              key={photo.id}
              {...photo}
              handleDelete={() =>
                deleteGeneration(photo.id).then(() => {
                  setGenerations(prev => prev.filter(p => p.id !== photo.id))
                })
              }
            />
          ))}
        </ul>
      ) : (
        <EmptyMessage />
      )}
    </>
  )
}
