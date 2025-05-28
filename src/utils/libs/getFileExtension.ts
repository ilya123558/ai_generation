export const getFileExtension = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Не удалось получить файл');
    }

    const contentType = response.headers.get('Content-Type');

    if (contentType) {
      if (contentType.includes('image/jpeg')) {
        return 'jpg';
      } else if (contentType.includes('image/png')) {
        return 'png';
      } else if (contentType.includes('image/gif')) {
        return 'gif';
      } else if (contentType.includes('image/webp')) {
        return 'webp';
      } else {
        return null;
      }
    }

    return null;
  } catch (error) {
    // @ts-ignore
    alert('Ошибка при получении расширения файла:', error);
    return null; // В случае ошибки возвращаем null
  }
};