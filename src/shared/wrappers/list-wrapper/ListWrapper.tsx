'use client'
import { useGetHeight } from "@/utils/hooks/useGetHeight";
import { DependencyList, PropsWithChildren, useEffect, useRef, useState } from "react";

interface IProps {
  className?: string
  depsForScroll?: DependencyList
}

export const ListWrapper = ({ children, className, depsForScroll }: PropsWithChildren<IProps>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height } = useGetHeight({ containerRef })

  // scroll to bottom
  if(depsForScroll) {
    useEffect(() => {
      const timeout = setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 500)
  
      return () => {
        clearTimeout(timeout)
      }
    }, [depsForScroll]);
  }

  return (
    <div style={{ height, paddingBottom: height ? '15px': '0px' }} ref={containerRef} className={`overflow-y-auto ${className ? className: ''}`}>
      {children}
    </div>
  );
};