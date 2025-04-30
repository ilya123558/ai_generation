'use client'
import { useLazyGetCategoriesQuery, useLazyGetSubCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryList } from "@/features/category-list/CategoryList";
import { Search } from "@/features/search/Search";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { setActiveSubcategoryId, useAppDispatch } from "@/views/store";
import { useEffect } from "react";

export default function Page() {
  const [useGetCategories, { data }] = useLazyGetCategoriesQuery()
  const [useGetSubCategories, {data: subCategories}] = useLazyGetSubCategoriesQuery()

  const dispatch = useAppDispatch()

  useEffect(() => {
    useGetCategories({ limit: 50 })
  }, [])

  useEffect(() => {
    if(data?.categories?.[0].id) {
      useGetSubCategories(data.categories[0].id)
    }
  }, [data])

  useEffect(() => {
    if(subCategories?.subcategories?.[0].id) {
      dispatch(setActiveSubcategoryId(subCategories.subcategories[0].id))
    }
  }, [subCategories])

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