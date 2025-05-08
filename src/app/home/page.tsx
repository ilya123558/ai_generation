'use client'
import { useLazyGetCategoriesQuery, useLazyGetSubCategoriesQuery } from "@/entities/categories/api/categories.api";
import { useGetProfilesQuery } from "@/entities/users/api/users.api";
import { CategoryList } from "@/features/category-list/CategoryList";
import { Search } from "@/features/search/Search";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { setActiveProfileId, setActiveSubcategoryId, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect } from "react";

export default function Page() {
  const { user } = useAppSelector(state => state.main)
  const [useGetCategories, { data: categories }] = useLazyGetCategoriesQuery();
  const [useGetSubCategories, { data: subCategories }] = useLazyGetSubCategoriesQuery();
  const {data: profile} = useGetProfilesQuery()

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (categories?.categories?.[0]?.id) {
      useGetSubCategories(categories.categories[0].id);
    }
  }, [categories]);
  
  useEffect(() => {
    if (subCategories?.subcategories?.[0]?.id) {
      dispatch(setActiveSubcategoryId(subCategories.subcategories[0].id));
    }
  }, [subCategories]);
  
  useEffect(() => {
    if (!categories) useGetCategories({ limit: 50 });
  }, [categories]);

  useEffect(() => {
    if(profile?.profiles?.[0]) {
      dispatch(setActiveProfileId(profile.profiles[0].id || 1))
    }
  }, [dispatch, profile])


  return (
    <section>
      <Container>
        <div className="m-[5.34vw_0px_4vw_]">
          <h2 onClick={() => navigator.clipboard.writeText(`Bearer ${user?.token.accessToken || ''}`)} className="text-center fs-20 font-semibold">Photiqe</h2>
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