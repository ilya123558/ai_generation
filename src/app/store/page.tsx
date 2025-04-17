import { HeaderTitle } from "@/features/header-title/HeaderTitle";
import { Container } from "@/shared/container/Container";
import { StoreContent } from "@/widgets/store-content/StoreContent";

const list = [
  {title: 'Режим «Творца»', value: '7 дней', price: 799},
  {title: 'Режим «Творца»', value: '30 дней', price: 3000},
  {title: 'Создание профиля', value: '1 шт.', price: 100},
  {title: 'Создание профиля', value: '5 шт.', price: 450},
  {title: 'Подписка «Premium»', value: '1 мес.', price: 5000},
]

export default function Page() {
  return (
    <section>
      <Container>
        <HeaderTitle link="/home">Магазин</HeaderTitle>
        <StoreContent list={list} title={'Другое'} />
      </Container>
    </section>
  );
};