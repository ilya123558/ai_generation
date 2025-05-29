import { OnboardingSlider } from "@/widgets/onboarding-slider/OnboardingSlider";

export default function Page() {
  return (
    <section className="bg-[#F7F8FA] fixed overflow-hidden w-screen h-screen top-0 left-0">
      <OnboardingSlider />
      {/* <div className="absolute bottom-[-180vw] w-[200vw] left-[-51vw] aspect-square bg-[#1E7FFF] rounded-full blur-[100px]"></div> */}
    </section>
  );
};