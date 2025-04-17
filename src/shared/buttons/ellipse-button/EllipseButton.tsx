'use client'
import { HTMLAttributes } from "react";

export const EllipseButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={`tracking-[0.05vw] transition-all active:scale-95 w-full urbanist rounded-[86px] p-[4.14vw] font-bold fs-16 flex items-center justify-center bg-secondary text-white ${props.className ? props.className: ''}`}>
      {props.children}
    </button>
  );
};