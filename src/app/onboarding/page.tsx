import { OnboardingSlider } from "@/widgets/onboarding-slider/OnboardingSlider";

export default function Page() {
  return (
    <section className="bg-[#23262F] overflow-hidden relative">
      <OnboardingSlider />
      <div className="absolute bottom-[-180vw] w-[200vw] left-[-51vw] aspect-square bg-[#1E7FFF] rounded-full blur-[100px]"></div>
    </section>
  );
};