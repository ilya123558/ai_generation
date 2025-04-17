"use client";
import React, { PropsWithChildren, useState } from 'react';
import { Modal } from '../modal/Modal';
import { Button } from '@/shared/buttons/button/Button';

interface IProps extends PropsWithChildren {
  onClick: () => void
  textButton: string | React.JSX.Element
  closeModal: () => void
  title: string
  description: string | React.JSX.Element
  className?: string
  withCloseBtn?: boolean
}

export const ModalContentWrapper = ({ withCloseBtn, children, className, onClick, textButton, closeModal, title, description}: IProps) => {
  const handleClose = () => {
    closeModal()
  }

  return (
    <Modal open={true} setOpen={handleClose}>
      <div 
        style={{ boxShadow: '0px 11.83px 49.3px 0px #251F300D' }} 
        className="flex flex-col w-311px p-[9.36vw_5.89vw_5.89vw_5.89vw] text-center rounded-[24px] bg-[#F7F8FA] relative"
      >
        {withCloseBtn && (
          <button onClick={() => closeModal()} className="absolute top-[4.02vw] right-[4.02vw]">
            <svg className="w-[4.27vw] h-[4.27vw]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3421 4L8 8.06762L12.3421 12.4097" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.99969 4L8.3418 8.06762L3.99969 12.4097" stroke="#23262F" strokeWidth="1.73684" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        <h3 className='mb-[2.7vw] font-semibold fs-20 text-[#323142]'>{title}</h3>
        <p className='w-245px text-[#ACADB9] fs-13 font-normal'>{description}</p>
        <div className={className ? className : 'mb-[8.82vw]'}>
          {children}
        </div>
        <Button onClick={onClick}>{textButton}</Button>
      </div>
    </Modal>
  );
};