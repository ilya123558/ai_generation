// export const base64StringToFile = (base64String: string, fileName: string, mimeType: string) => {
//   const byteCharacters = atob(base64String.split(',')[1]);
//   const byteArrays = [];

//   for (let offset = 0; offset < byteCharacters.length; offset++) {
//     byteArrays.push(byteCharacters.charCodeAt(offset));
//   }

//   const byteArray = new Uint8Array(byteArrays);
//   return new File([byteArray], fileName, { type: mimeType });
// };

export const base64StringToFile = (base64String: string, fileName: string, mimeType: string, maxSizeKB: number = 1024): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const file = dataURLtoFile(base64String, fileName, mimeType);

      if (file.size / 1024 <= maxSizeKB) {
        resolve(file);
        return;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject('Ошибка создания контекста canvas');
        return;
      }

      const width = img.width;
      const height = img.height;

      canvas.width = width / 2;
      canvas.height = height / 2;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (blob) {
          const compressedFile = new File([blob], fileName, {
            type: mimeType,
            lastModified: Date.now(),
          });

          if (compressedFile.size / 1024 <= maxSizeKB) {
            resolve(compressedFile);
          } else {
            resolve(base64StringToFile(base64String, fileName, mimeType, maxSizeKB));
          }
        } else {
          reject('Ошибка преобразования изображения в Blob');
        }
      }, mimeType, 0.8);
    };
    
    img.onerror = () => {
      reject('Ошибка загрузки изображения из Base64');
    };
    
    img.src = base64String;
  });
};

const dataURLtoFile = (dataURL: string, fileName: string, mimeType: string) => {
  const byteCharacters = atob(dataURL.split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset++) {
    byteArrays.push(byteCharacters.charCodeAt(offset));
  }

  const byteArray = new Uint8Array(byteArrays);
  return new File([byteArray], fileName, { type: mimeType });
};
