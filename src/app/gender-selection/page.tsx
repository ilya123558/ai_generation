'use client'
import { useUpdateGenderMutation } from "@/entities/users/api/users.api";
import { EllipseButton } from "@/shared/buttons/ellipse-button/EllipseButton";
import { ReturnButton } from "@/shared/buttons/return-button/ReturnButton";
import { Container } from "@/shared/container/Container";
import { TGender } from "@/utils/types/gender";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const [updateGender] = useUpdateGenderMutation()

  const handleClick = (gender: TGender) => {
    updateGender({ gender })
      .then(() => router.push('/profile-create'))
      .catch(data => alert(JSON.stringify(data)))
  }

  return (
    <section className="">
      <Container className="flex items-center flex-col text-center">
        <ReturnButton link="/onboarding"/>
        <svg width="141" height="168" viewBox="0 0 141 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M76.2384 99.7038C79.3133 98.5324 81.8988 96.3505 83.5703 93.5161L89.1082 84.1257C96.6123 71.4014 116.113 76.7233 116.113 91.4956V113.929C116.113 121.942 109.617 128.437 101.605 128.437H79.6494C63.5404 128.437 59.4309 106.107 74.4846 100.372L76.2384 99.7038Z" fill="#23262F"/>
          <path d="M50.3617 80.7078C50.1533 83.9917 51.0674 87.249 52.954 89.9449L59.2046 98.8768C67.6744 110.98 54.7487 126.521 41.305 120.398L20.8887 111.1C13.5968 107.779 10.3777 99.1757 13.6986 91.8838L22.7985 71.9029C29.4751 57.2426 51.5008 62.7581 50.4806 78.8348L50.3617 80.7078Z" fill="#23262F"/>
          <path d="M77.7189 71.205C75.1645 69.1306 71.9808 67.9862 68.6904 67.9596L57.789 67.8715C43.0173 67.7521 37.8532 48.2091 50.6378 40.8081L70.053 29.5686C76.9875 25.5543 85.8632 27.9215 89.8775 34.8559L100.877 53.8572C108.948 67.7987 91.6808 82.543 79.1757 72.388L77.7189 71.205Z" fill="#23262F"/>
        </svg>
        <h1 className="fs-35 font-bold m-[7.4vw_0px] urbanist">Welcome to <br/> AI.bot</h1>
        <div className="w-full">
          <p className="text-[#ACADB9]">Укажите Ваш пол</p>
          <EllipseButton onClick={() => handleClick("female")} className="mt-[12px] mb-[20px]">Женщина</EllipseButton>
          <EllipseButton onClick={() => handleClick("male")}>Мужчина</EllipseButton>
        </div>
      </Container>
    </section>
  );
};