'use client'
import { useGetHeight } from "@/utils/hooks/useGetHeight";
import { DependencyList, PropsWithChildren, useEffect, useRef, useState } from "react";

interface IProps {
  className?: string
}

export const ListWrapper = ({ children, className }: PropsWithChildren<IProps>) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { height } = useGetHeight({ containerRef })

  return (
    <div style={{ height, paddingBottom: height ? '15px': '0px' }} ref={containerRef} className={`overflow-y-auto ${className ? className: ''}`}>
      {children}
    </div>
  );
};