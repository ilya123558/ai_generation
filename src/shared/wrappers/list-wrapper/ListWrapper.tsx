'use client'
import { useGetHeight } from "@/utils/hooks/useGetHeight";
import { memo, PropsWithChildren, useEffect, useRef } from "react";

interface IProps {
  className?: string
  scrollToBottomDeps?: any
}

export const ListWrapper = memo(({ children, className, scrollToBottomDeps }: PropsWithChildren<IProps>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height } = useGetHeight({ containerRef })

  if(typeof scrollToBottomDeps !== "undefined") {
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight + 300;
        }
      }, 1500)
  
      return () => {
        clearTimeout(timeout)
      }
    }, [scrollToBottomDeps]);
  }

  return (
    <div style={{ height, paddingBottom: height ? '15px': '0px' }} ref={containerRef} className={`overflow-y-auto ${className ? className: ''}`}>
      {children}
    </div>
  );
})