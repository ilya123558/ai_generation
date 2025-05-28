'use client'
import { Modal } from "../wrappers/modal/Modal";
import { ImageWithSkeleton } from "../image-with-skeleton/ImageWithSkeleton";
import { ShadowWrapper } from "../wrappers/shadow-wrapper/ShadowWrapper";
import { useState } from "react";
import { DeleteImage } from "../delete-image/DeleteImage";
import { useTelegram } from "@/utils/hooks/useTelegram";

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleDelete?: () => void
  photo: string
}

export const PhotoModal = ({isOpen, setIsOpen, handleDelete, photo}: IProps) => {
  const [isDelete, setIsDelete] = useState(false)
  const { webApp } = useTelegram()

  const handleDownload = async () => {
    // Проверка на наличие фото
    if (!photo) {
      alert('Ошибка: URL фотографии не указан');
      return;
    }

    // Попытка получения имени файла из URL (если photo — это строка с URL)
    const fileName = photo.split('/').pop(); // Извлекаем имя файла из URL

    // Если не удается извлечь имя файла, можно указать дефолтное
    if (!fileName) {
      alert('Ошибка: невозможно извлечь имя файла');
      return;
    }

    try {
      // Вызов функции скачивания с правильными параметрами
      await webApp?.downloadFile({
        file_name: fileName,  // Динамическое имя файла
        url: photo            // URL картинки
      });

      console.log('Файл успешно скачан');
    } catch (error) {
      // Обработка ошибок
      alert('Ошибка при скачивании файла:');
    }
  };
 
const handleRepost = async () => {
  // if (webApp) {
  //   try {
  //     // Создаем сообщение с медиа (например, фото)
  //     // @ts-ignore
  //     const messageId = await webApp.preparedInlineMessage({
  //       type: 'photo', // Тип медиа
  //       media: {
  //         url: photo, // URL изображения
  //         caption: 'Check out this image!', // Текст к изображению
  //       },
  //     });

  //     // Теперь отправляем это сообщение через shareMessage, передавая ID
  //     webApp.shareMessage(messageId, (isSent) => {
  //       if (isSent) {
  //         console.log('Message shared successfully!');
  //       } else {
  //         console.error('Failed to share message.');
  //       }
  //     });
  //   } catch (error) {
  //     console.error('Reposting failed:', error);
  //   }
  // } else {
  //   alert('Telegram Web App is not available.');
  // }
};

  return (
    <Modal open={isOpen} setOpen={setIsOpen}>
      <div className="m-[0px_32px_0px_35px] flex items-center justify-center flex-col gap-[2.67vw]">
        <div style={{boxShadow: '0px 0px 70px 0px #000000B2'}} className="rounded-[28px] overflow-hidden">
          <ImageWithSkeleton
            src={photo}
            alt="chat-item-img"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[2.8vw]">
            <button onClick={handleDownload}>
              <ShadowWrapper borderRadius={"full"} className="bg-[#FAFAFB] w-[12.81vw] h-[12.81vw] flex items-center justify-center">
                <svg className="w-[6.42vw] h-[6.42vw]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V14" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M8 10L12 14.5" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M16 10L12 14.5" stroke="#23262F" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6.75 16C5.78477 16 5 16.7175 5 17.6V18.4C5 19.2825 5.78477 20 6.75 20H17.25C18.2152 20 19 19.2825 19 18.4V17.6C19 16.7175 18.2152 16 17.25 16H14.4746L13.2359 17.1325C12.5523 17.7575 11.4449 17.7575 10.7613 17.1325L9.52539 16H6.75Z" fill="#23262F"/>
                </svg>
              </ShadowWrapper>
            </button>
            <button onClick={handleRepost}>
              <ShadowWrapper borderRadius={"full"} className="bg-[#FAFAFB] w-[12.81vw] h-[12.81vw] flex items-center justify-center">
                <svg className="w-[6.42vw] h-[6.42vw]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8L8.5 11" stroke="#23262F" strokeWidth="1.5"/>
                  <path d="M15 16L8.5 13" stroke="#23262F" strokeWidth="1.5"/>
                  <circle cx="17" cy="7" r="2.25" stroke="#23262F" strokeWidth="1.5"/>
                  <circle cx="6" cy="12" r="2.25" stroke="#23262F" strokeWidth="1.5"/>
                  <circle cx="17" cy="17" r="2.25" stroke="#23262F" strokeWidth="1.5"/>
                </svg>
              </ShadowWrapper>
            </button>
          </div>
          {handleDelete && (
            <button onClick={() => setIsDelete(true)}>
              <ShadowWrapper borderRadius={"full"} className={` ${isDelete ? 'bg-primary': 'bg-[#FAFAFB]'} transition-all w-[12.81vw] h-[12.81vw] flex items-center justify-center`}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={`${isDelete ? 'fill-white': 'fill-[#E93F21]'} transition-all`} d="M4.225 0.553125L4 1H1C0.446875 1 0 1.44687 0 2C0 2.55312 0.446875 3 1 3H13C13.5531 3 14 2.55312 14 2C14 1.44687 13.5531 1 13 1H10L9.775 0.553125C9.60625 0.2125 9.25938 0 8.88125 0H5.11875C4.74062 0 4.39375 0.2125 4.225 0.553125ZM13 4H1L1.6625 14.5938C1.7125 15.3844 2.36875 16 3.15937 16H10.8406C11.6312 16 12.2875 15.3844 12.3375 14.5938L13 4Z" fill="#E93F21"/>
                </svg>
              </ShadowWrapper>
            </button>
          )}
        </div>
        {handleDelete && (
          <DeleteImage 
            isDelete={isDelete} 
            setIsDelete={setIsDelete} 
            handleDelete={() => {
              setIsOpen(false);
              handleDelete()
            }} 
          />
        )}
      </div>
    </Modal>
  )
};