'use client'
import { EllipseButton } from '@/shared/buttons/ellipse-button/EllipseButton'
import { ImageUploadComponent } from '@/shared/image-upload-component/ImageUploadComponent'
import React, { useState } from 'react'

interface IProps {
  size?: {
    maxWidth: number
    maxHeight: number
  }
  isSquare?: boolean
  maxImages?: number
}

export const useImageUpload = ({ size, isSquare, maxImages = 5 }: IProps) => {
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (images.length >= maxImages) {
        setError(`Максимальное количество изображений: ${maxImages}`)
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const img = new Image()
        img.onload = () => {
          if (isSquare && img.width !== img.height) {
            setError('Изображение должно быть квадратным')
          // } else if (size && (img.width > size.maxWidth || img.height > size.maxHeight)) {
          //   setError(`Максимальный размер ${size.maxWidth}x${size.maxHeight} px`)
          } else {
            setError(null)
            // Добавляем изображение в массив
            setImages((prevImages) => [...prevImages, reader.result as string])
          }
        }
        img.src = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  const ImageUploadInput = () => (
    <div className="overflow-hidden relative">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="opacity-0 w-full h-full absolute z-10"
      />
    </div>
  )

  const handleDelete = (value: string) => {
    const result = images.filter(item => item !== value)
    setImages(result)
  }

  return {
    ImageUploadInput,
    ImageUploadComponent: () => (
      <ImageUploadComponent images={images} size={size} maxImages={maxImages} handleDelete={handleDelete} handleImageChange={handleImageChange} />
    ),
    images,
    error,
  }
}
