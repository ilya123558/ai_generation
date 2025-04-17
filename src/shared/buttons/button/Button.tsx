'use client'
import { HTMLAttributes } from "react";

export const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`w-full transition-all active:scale-95 urbanist rounded-[13px] p-[4.14vw] font-bold fs-16 flex items-center justify-center bg-secondary text-white ${props.className ? props.className: ''}`}>
      {props.children}
    </button>
  );
};