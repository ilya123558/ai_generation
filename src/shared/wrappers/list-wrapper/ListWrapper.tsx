'use client'
import { useGetHeight } from "@/utils/hooks/useGetHeight";
import { PropsWithChildren, useEffect, useRef } from "react";

interface IProps {
  className?: string
  scrollToBottom?: boolean
}

export const ListWrapper = ({ children, className, scrollToBottom }: PropsWithChildren<IProps>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height } = useGetHeight({ containerRef })

  useEffect(() => {
    if (containerRef.current && scrollToBottom) {
      const scroll = () => {
        containerRef.current!.scrollTop = containerRef.current!.scrollHeight;
      };
      requestAnimationFrame(scroll);
    }
  }, [scrollToBottom, height]);

  return (
    <div style={{ height, paddingBottom: height ? '15px': '0px' }} ref={containerRef} className={`overflow-y-auto ${className ? className: ''}`}>
      {children}
    </div>
  );
};