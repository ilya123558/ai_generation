import { HeaderTitle } from "@/features/header-title/HeaderTitle";
import { ProfileInfo } from "@/features/profile-info/ProfileInfo";
import { Container } from "@/shared/container/Container";
import { ProfileContent } from "@/widgets/profile-content/ProfileContent";

export default function Page() {
  return (
    <section>
      <Container>
        <HeaderTitle className="pb-[3vw]" link="/home">Профиль</HeaderTitle>
        <div className="h-screen overflow-auto pb-[40vh]">
          <ProfileInfo />
          <ProfileContent />
        </div>
      </Container>
    </section>
  ) 
};