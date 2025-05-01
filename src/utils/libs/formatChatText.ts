export const formatChatText = (text: string) => {
  const textArray = text.split('<b>Стиль:</b>')[1].split('\n')

  return {
    style: textArray[0] ? textArray[0].trim() : '',
    text: textArray[1] ? textArray[1].trim() : '',
  }
}