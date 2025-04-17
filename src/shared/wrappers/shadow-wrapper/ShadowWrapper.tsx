import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  borderRadius?: number | 'full'
}

export const ShadowWrapper = ({children, className, borderRadius}: PropsWithChildren<IProps>) => {
  return (
    <div 
      style={{borderRadius: borderRadius ? (borderRadius === 'full' ? '100%': borderRadius): 0}} 
      className={`block-custom-shadow transition-all bg-[#FAFAFB] ${className ? className: ''}`}
    >
      {children}
    </div>
  );
};