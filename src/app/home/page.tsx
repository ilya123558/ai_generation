'use client'
import { useLazyGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { useGetProfilesQuery } from "@/entities/users/api/users.api";
import { CategoryList } from "@/features/category-list/CategoryList";
import { Search } from "@/features/search/Search";
import { Container } from "@/shared/container/Container";
import { ListWrapper } from "@/shared/wrappers/list-wrapper/ListWrapper";
import { setActiveCategoryId, setActiveProfileId, useAppDispatch, useAppSelector } from "@/views/store";
import { useEffect } from "react";

export default function Page() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.main)
  const { activeCategoryId, activeProfileId } = useAppSelector(state => state.main.accountData)
  
  const [useGetCategories, { data: categories }] = useLazyGetCategoriesQuery();
  const {data: profile} = useGetProfilesQuery()
  
  useEffect(() => {
    if (!categories) useGetCategories({ limit: 50 });
  }, [categories]);

  useEffect(() => {
    if (categories?.categories?.[0]?.id && !activeCategoryId) {
      const firstCategoryId = categories.categories.reverse()[0].id
      dispatch(setActiveCategoryId(firstCategoryId))
    }
  }, [categories, activeCategoryId]);

  useEffect(() => {
    if(profile?.profiles?.[0] && !activeProfileId) {
      const firstProfileId = profile.profiles[0].id || 1
      dispatch(setActiveProfileId(firstProfileId))
    }
  }, [dispatch, profile, activeProfileId])

  return (
    <section>
      <Container>
        <div className="m-[4.54vw_0px_4vw_]">
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