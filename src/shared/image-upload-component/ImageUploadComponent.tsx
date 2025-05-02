'use client'

import { requestPhoneAccess } from '@telegram-apps/sdk'
import Image from 'next/image'

interface IProps {
  images: string[]
  size?: {
    maxWidth: number
    maxHeight: number
  }
  maxImages: number
  handleDelete: (index: number) => void
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const ImageUploadComponent = ({ images, size, maxImages = 0, handleDelete, handleImageChange }: IProps) => {
  const requestFileAccess = async () => {
    try {
      if(requestPhoneAccess.isAvailable()) {
        await requestPhoneAccess();
      }else{
        alert(`requestPhoneAccess не существует`);
      }
    } catch (error) {
      alert(`Ошибка при запросе разрешения: ${JSON.stringify(error)}`);
    }
  }
  

  return (
    <>
      {
        images.map((item, index) => (
            <div
              key={index}
              style={{
                width: size ? `${size.maxWidth * 0.267}vw` : `${100 * 0.267}vw`,
                height: size ? `${size.maxHeight * 0.267}vw` : `${100 * 0.267}vw`,
              }}
              className="bg-[#ECECEC] rounded-[20px] overflow-hidden relative flex items-center justify-center"
            >
              <Image
                src={item}
                alt="uploaded"
                width={size ? size.maxWidth : 100}
                height={size ? size.maxHeight : 100}
                className="w-full h-full object-cover object-center"
              />
              <button onClick={() => handleDelete(index)} className='h-28px w-28px bg-primary rounded-full flex items-center justify-center absolute top-[6px] right-[6px] z-[10]'>
                <svg className='w-15px h-15px' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.86305 14.059H5.32692C4.75782 14.0497 4.21508 13.8176 3.8153 13.4124C3.41552 13.0073 3.19059 12.4615 3.18885 11.8924L2.47559 3.6001H12.7785L12.0661 11.888C12.0618 12.468 11.8272 13.0226 11.4141 13.4297C11.001 13.8368 10.4431 14.0632 9.86305 14.059V14.059Z" stroke="white" strokeWidth="0.866667" strokeMiterlimit="10"/>
                  <path d="M5.81934 6.23132V11.4279" stroke="white" strokeWidth="0.866667" strokeMiterlimit="10" strokeLinecap="round"/>
                  <path d="M9.37109 6.23132V11.4279" stroke="white" strokeWidth="0.866667" strokeMiterlimit="10" strokeLinecap="round"/>
                  <path d="M3.33088 3.6C3.30415 3.28504 3.33977 2.9679 3.43571 2.66672C3.53164 2.36554 3.68601 2.08623 3.88997 1.84475C4.09394 1.60327 4.34351 1.40437 4.62441 1.25942C4.9053 1.11447 5.21202 1.02632 5.52701 1H9.72601C10.351 1.06809 10.9243 1.37852 11.3229 1.86464C11.7216 2.35076 11.9137 2.97381 11.858 3.6H3.33088Z" stroke="white" strokeWidth="0.866667" strokeMiterlimit="10"/>
                  <path d="M1.09375 3.59998H14.0938" stroke="white" strokeWidth="0.866667" strokeMiterlimit="10" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          ))
        }
        {
          Array(images.length >= 10 ? 0: (images.length >= 5 ? 1 : 5 - images.length)).fill(null).map((_, index) => (
            <div
              key={index}
              style={{
                width: size ? `${size.maxWidth * 0.267}vw` : `${100 * 0.267}vw`,
                height: size ? `${size.maxHeight * 0.267}vw` : `${100 * 0.267}vw`,
              }}
              className="bg-[#ECECEC] rounded-[20px] overflow-hidden relative"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                className="opacity-0 w-full h-full absolute z-10"
                onClick={requestFileAccess}
              />
            </div>
          ))
        }
    </>
  )
}
