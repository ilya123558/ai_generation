import { PropsWithChildren } from "react";

interface IProps {
  className?: string
  borderRadius?: number | 'full'
}

export const ShadowWrapper = ({children, className, borderRadius}: PropsWithChildren<IProps>) => {
  return (
    <div 
      style={{
        borderRadius: borderRadius ? (borderRadius === 'full' ? '100%': borderRadius): 0, 
        boxShadow: '3px 9px 18px 0px #D3D1D84D'
      }} 
      className={`transition-all bg-[#FAFAFB] ${className ? className: ''}`}
    >
      {children}
    </div>
  );
};