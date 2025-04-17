import { HeaderTitle } from "@/features/header-title/HeaderTitle";
import { Container } from "@/shared/container/Container";
import { StoreContent } from "@/widgets/store-content/StoreContent";

const list = [
  {title: '10 генераций', value: '10', price: 100},
  {title: '20 генераций', value: '20', price: 200},
  {title: '50 генераций', value: '50', price: 500},
  {title: '70 генераций', value: '70', price: 700},
  {title: '150 генераций', value: '150', price: 1500},
]

export default function Page() {
  return (
    <section>
      <Container>
        <HeaderTitle link="/home">Магазин Генераций</HeaderTitle>
        <StoreContent list={list} title={'Генерации'} withoutValue />
      </Container>
    </section>
  );
};