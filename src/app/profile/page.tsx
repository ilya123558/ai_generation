import { HeaderTitle } from "@/features/header-title/HeaderTitle";
import { ProfileInfo } from "@/features/profile-info/ProfileInfo";
import { Container } from "@/shared/container/Container";
import { ProfileContent } from "@/widgets/profile-content/ProfileContent";

export default function Page() {
  return (
    <section>
      <Container>
        <HeaderTitle link="/home">Профиль</HeaderTitle>
        <ProfileInfo />
        <ProfileContent />
      </Container>
    </section>
  ) 
};