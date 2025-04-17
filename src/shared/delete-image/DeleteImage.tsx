interface IProps {
  isDelete: boolean
  setIsDelete: (isDelete: boolean) => void
  handleDelete: () => void
}

export const DeleteImage = ({isDelete, handleDelete, setIsDelete}: IProps) => {
  const handleClick = () => {
    setIsDelete(false)
    handleDelete()
  }

  return (
    <div className={`fixed rounded-[24px_24px_0px_0px] transition-all bottom-0 z-20 w-full bg-[#F7F8FA] p-[4.55vw_7.09vw_6.03vw] ${isDelete ? '': 'translate-y-[100%]'}`}>
      <button onClick={() => setIsDelete(false)} className="absolute top-[4.54vw] right-[7.22vw]">
        <svg className="w-[4.27vw] h-[4.27vw]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.3421 4L8 8.06762L12.3421 12.4097" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.99969 4L8.3418 8.06762L3.99969 12.4097" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="flex flex-col gap-[5.36vw] items-center text-center">
        <p className="fs-13 font-normal m-[0px_10vw]">Вы действительно хотите удалить изображение?</p>
        <button onClick={handleClick} className="rounded-[13px] urbanist fs-16 font-bold h-[16.3vw] bg-light-red text-white w-full flex items-center justify-center">
          Удалить
        </button>
      </div>
    </div>
  );
};