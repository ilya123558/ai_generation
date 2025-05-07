'use client'
import { HeaderTitle } from "@/features/header-title/HeaderTitle";
import { EllipseButton } from "@/shared/buttons/ellipse-button/EllipseButton";
import { Container } from "@/shared/container/Container";
import { PaymentErrorModal } from "@/shared/payment-error-modal/PaymentErrorModal";
import { PaymentInput } from "@/shared/payment-input/PaymentInput";
import { PaymentSuccessModal } from "@/shared/payment-success-modal/PaymentSuccessModal";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useState } from "react";

export default function Page() {
  const [emailValue, setEmailValue] = useState('') 
  const [cardValue, setCardValue] = useState('') 
  const [emailError, setEmailError] = useState(true) 
  const [cardError, setCardError] = useState(true) 

  const [isOpenPaymentErrorModal, setIsOpenPaymentErrorModal] = useState(false)
  const [isOpenPaymentSuccessModal, setIsOpenPaymentSuccessModal] = useState(false)
  
  const handleSubmit = () => {
    // post /payment

    // useEffect
    if(false) {
      setIsOpenPaymentSuccessModal(true)
    }else{
      setIsOpenPaymentErrorModal(true)
    }
  }

  return (
    <section>
      <PaymentErrorModal isOpen={isOpenPaymentErrorModal} setIsOpen={setIsOpenPaymentErrorModal} />
      <PaymentSuccessModal value={'100 попыток генерации'} isOpen={isOpenPaymentSuccessModal} setIsOpen={setIsOpenPaymentSuccessModal} />
      <Container>
        <HeaderTitle>Оплата</HeaderTitle>
        <div className="p-[0px_1.87vw] mt-[6.42vw] flex flex-col gap-[4.27vw]">
        <ShadowWrapper borderRadius={22} className="w-full p-[4.27vw_5.88vw]">
            <div className="mb-[3.47vw]">
              <p className="text-gray fs-12 font-normal">{'100 попыток генерации'}</p>
              <p className="fs-20 font-semibold">{200}₽</p>
            </div>
            <PaymentInput type="email" value={emailValue} setValue={setEmailValue} placeholder="Email" handleError={setEmailError} />
          </ShadowWrapper>
          <ShadowWrapper borderRadius={22} className="w-full p-[4.27vw_5.88vw]">
            <div className="mb-[3.47vw]">
              <p className="fs-20 font-semibold">Способ оплаты</p>
              <p className="text-gray text-[16px] font-normal">Банковская карта</p>
            </div>
            <PaymentInput type="card" value={cardValue} setValue={setCardValue} placeholder="Номер карты" handleError={setCardError} />
          </ShadowWrapper>
        </div>
      </Container>
      <div className="fixed bottom-0">
        <Container>
          <div className={`p-[0px_1.87vw] mb-[23.26vw] ${emailError || cardError ? 'pointer-events-none': ''}`}>
            <EllipseButton onClick={handleSubmit} className={`transition-all ${emailError || cardError ? '!bg-[#E3E3E3]': ''}`}>
              <p className={`transition-all ${emailError || cardError ? 'text-[#B1B1B1]': ''}`}>Оплатить</p>
            </EllipseButton>
          </div>
        </Container>
      </div>
    </section>
  ) 
};