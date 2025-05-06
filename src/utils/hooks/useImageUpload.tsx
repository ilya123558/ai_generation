'use client'
import { ImageUploadComponent } from '@/shared/image-upload-component/ImageUploadComponent'
import { setCreateProfileImages, useAppDispatch } from '@/views/store'
import React, { useEffect, useState } from 'react'

interface IProps {
  size?: {
    maxWidth: number
    maxHeight: number
  }
  isSquare?: boolean
  maxImages?: number
}

export const useImageUpload = ({ size, isSquare, maxImages = 5 }: IProps) => {
  const dispatch = useAppDispatch()
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files) {
      const newImages: string[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        // if (file.size > 1048576) {
        //   setError('Изображение не должно превышать 1024 KB');
        //   continue;
        // }

        const reader = new FileReader()
        reader.onloadend = () => {
          const img = new Image()
          img.onload = () => {
            setError(null)
            newImages.push(reader.result as string)

            if (newImages.length === files.length) {
              dispatch(setCreateProfileImages([...images, ...newImages]))
              setImages((prevImages) => [...prevImages, ...newImages])
            }
          }
          img.src = reader.result as string
        }
        reader.readAsDataURL(file)
      }
    }

  }

  const ImageUploadInput = () => (
    <div className="overflow-hidden relative">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="opacity-0 w-full h-full absolute z-10"
      />
    </div>
  )

  const handleDelete = (value: number) => {
    const result = images.filter((_, index) => index !== value)
    dispatch(setCreateProfileImages(result))
    setImages(result)
  }

  useEffect(() => {
    if(images.length > maxImages) {
      dispatch(setCreateProfileImages(images.slice(0, maxImages)))
      setImages(images.slice(0, maxImages))
    }
  }, [images])

  return {
    ImageUploadInput,
    ImageUploadComponent: () => (
      <ImageUploadComponent 
        images={images} 
        size={size} 
        maxImages={maxImages} 
        handleDelete={handleDelete} 
        handleImageChange={handleImageChange} 
      />
    ),
    images,
    error,
  }
}
