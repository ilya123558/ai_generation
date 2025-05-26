'use client'
import { useGetCategoriesQuery, useLazyGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryList } from "@/features/category-list/CategoryList";
import { HeaderWithNavigation } from "@/features/header-with-navigation/HeaderWithNavigation";
import { SubcategoryList } from "@/features/subcategory-list/SubcategoryList";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const categoryId = usePathname().split('/').at(-1)
  const [active, setActive] = useState(false)
  const { data } = useGetCategoriesQuery({})

  const headerTitle = data?.categories.find(item => item.id === Number(categoryId))
    ? (data.categories.find(item => item.id === Number(categoryId))?.title || " ")
    : " "


  return (
    <section>
      <Container>
        <HeaderWithNavigation 
          link="/home"
          title={headerTitle}
          active={active}
          setActive={setActive}
        />
        <div className="">
          <div 
            style={{ height: 1000, maxHeight: active ? 290 : 0, marginTop: active ? '10.14vw' : 0}} 
            className={`overflow-hidden overflow-y-auto transition-all rounded-[16px] pt-[2vw] ${active ? '' : 'opacity-0 pointer-events-none'}`}
          >
            <CategoryList />
          </div>
          {active 
            ? (
            <div style={{marginBottom: 290}}>
              <ListWrapper className={`mt-[8.01vw]`}>
                <SubcategoryList />
              </ListWrapper>
            </div>
            )
            : (
              <ListWrapper className={`mt-[8.01vw]`}>
                <SubcategoryList />
              </ListWrapper>
            )
          }
        </div>
      </Container>
    </section>
  );
};