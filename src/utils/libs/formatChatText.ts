export const formatChatText = (text: string) => {
  const parts = text.split('<b>Стиль:</b>');
  
  if (parts.length < 2) {
    return {
      style: '',
      text: text.trim(),
    };
  }

  const textArray = parts[1].split('\n');

  return {
    style: textArray[0] ? textArray[0].trim() : '',
    text: textArray[1] ? textArray[1].trim() : '',
  };
};