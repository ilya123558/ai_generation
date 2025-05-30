'use client'
import { useGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryList } from "@/features/category-list/CategoryList";
import { HeaderWithNavigation } from "@/features/header-with-navigation/HeaderWithNavigation";
import { Search } from "@/features/search/Search";
import { SubcategoryList } from "@/features/subcategory-list/SubcategoryList";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { setVisibleCategory, useAppDispatch, useAppSelector } from "@/views/store";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const dispatch = useAppDispatch()
  const { visibleCategory } = useAppSelector(state => state.main.meta)
  const categoryId = usePathname().split('/').at(-1)
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
          active={visibleCategory}
          setActive={(value: boolean) => dispatch(setVisibleCategory(value))}
        />
        <Search />
        <div className="">
          <div 
            style={{ height: 1000, maxHeight: visibleCategory ? 290 : 0, marginTop: visibleCategory ? '5vw' : 0}} 
            className={`overflow-hidden overflow-y-auto transition-all rounded-[16px] pt-[2vw] ${visibleCategory ? '' : 'opacity-0 pointer-events-none'}`}
          >
            <CategoryList />
          </div>
          {visibleCategory 
            ? (
            <div style={{marginBottom: 290}}>
              <ListWrapper className={`mt-[5vw]`}>
                <SubcategoryList />
              </ListWrapper>
            </div>
            )
            : (
              <ListWrapper className={`mt-[5vw]`}>
                <SubcategoryList />
              </ListWrapper>
            )
          }
        </div>
      </Container>
    </section>
  );
};