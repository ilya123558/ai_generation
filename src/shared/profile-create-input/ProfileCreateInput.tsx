'use client'
import { setCreateProfileTitle, useAppDispatch, useAppSelector } from "@/views/store";
import { useState, useEffect, useCallback } from "react";

export const ProfileCreateInput = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.main.meta.createProfile.title);
  
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardVisible = window.innerHeight < 500;
      setIsKeyboardVisible(isKeyboardVisible);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      dispatch(setCreateProfileTitle(value));
    },
    [dispatch]
  );

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      placeholder="Введите название профиля"
      className="montserrat h-[44px] w-full bg-[#F2F2F2] rounded-[9px] mt-[4vw] placeholder:text-opacity-50 placeholder:text-primary fs-12 font-normal p-[0px_0px_0px_6.1vw]"
      style={{
        position: isKeyboardVisible ? "fixed" : "relative",
        bottom: isKeyboardVisible ? "4vw" : "auto",
        zIndex: 10,
      }}
    />
  );
};
