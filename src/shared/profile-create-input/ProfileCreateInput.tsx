'use client'
import { setCreateProfileTitle, useAppDispatch, useAppSelector } from "@/views/store";
import { useState, useCallback, useRef } from "react";
import { Button } from "../buttons/button/Button";

export const ProfileCreateInput = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.main.meta.createProfile.title);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const removeFocus = () => {
    inputRef.current?.blur();
    setIsFocus(false);
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch(setCreateProfileTitle(value));
    },
    [dispatch]
  );

  return (
    <div className={isFocus ? "fixed z-[10] w-full h-full left-0 top-0 flex flex-col transition-all bg-[#0000001a] p-[200px_4.27vw_0px] backdrop-blur-[10px]" : ""}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        placeholder="Введите название профиля"
        className="montserrat h-[44px] w-full bg-[#F2F2F2] rounded-[9px] mt-[4vw] placeholder:text-opacity-50 placeholder:text-primary text-[16px] font-normal p-[0px_0px_0px_6.1vw]"
        style={{ zIndex: 10 }}
      />
      {isFocus && (
        <div className="w-full flex flex-row-reverse mt-[2vw]">
          <Button onClick={removeFocus} className={`!p-[2vw_5vw] !w-fit border-[1px] border-[#ffffff0d]`}>
            <p className="fs-14 font-medium">Готово</p>
          </Button>
        </div>
      )}
    </div>
  );
};
