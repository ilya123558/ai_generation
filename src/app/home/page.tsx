import { CategoryList } from "@/features/category-list/CategoryList";
import { Search } from "@/features/search/Search";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";

export default function Page() {
  return (
    <section>
      <Container>
        <div className="m-[4vw_0px]">
          <h2 className="text-center fs-20 font-semibold">AI.bot</h2>
        </div>
      </Container>
      <Search />
      <Container className="mt-[9.63vw]">
        <ListWrapper>
          <CategoryList />
        </ListWrapper>
      </Container>
    </section>
  );
};