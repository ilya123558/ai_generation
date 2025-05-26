'use client'

import { useEffect, useRef } from "react"

interface IProps {
  value: string
  setValue: (value: string) => void
  placeholder: string
  type: 'card' | 'email'
  handleError: (isError: boolean) => void
  onFocus?: () => void
  isFocus?: boolean
}

export const PaymentInput = ({ value, setValue, placeholder, type, handleError, onFocus, isFocus }: IProps) => {
  const ref = useRef<HTMLInputElement | null>(null)

  const formatCardNumber = (cardNumber: string) => {
    const v = cardNumber
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substring(0, 16);
  
    const parts = [];
  
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
  
    return parts.length > 1 ? parts.join(" ") : v;
  };
  
  const validateCardNumber = (cardNumber: string) => {
    const cardRegex = /^[0-9]{4}(\s?[0-9]{4}){3,4}$/;
    return cardRegex.test(cardNumber);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (type === 'card') {
      newValue = formatCardNumber(newValue);
      handleError(!validateCardNumber(newValue));
    }

    if (type === 'email') {
      handleError(!validateEmail(newValue));
    }

    setValue(newValue)
  };

  useEffect(() => {
    if(isFocus && ref.current) {
      ref.current.focus()
    }
  }, [isFocus])

  return (
    <input
      ref={ref}
      type={type === 'email' ? 'email': ''}
      value={value}
      onChange={handleChange}
      onFocus={onFocus}
      className="p-[3.88vw_6.42vw] rounded-[9px] w-full bg-[#F2F2F2] fs-12 font-medium montserrat"
      placeholder={placeholder}
    />
  );
};
