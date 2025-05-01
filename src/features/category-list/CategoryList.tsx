'use client'
import { useGetCategoriesQuery, useLazyGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryButton } from "@/shared/buttons/category-button/CategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { useAppSelector } from "@/views/store";
import { useEffect } from "react";

export const CategoryList = () => {
  const { searchValue } = useAppSelector(state => state.main.meta)
  const [getCategories, { data }] = useLazyGetCategoriesQuery()

  useEffect(() => {
    getCategories({ limit: 50, q: searchValue })
  }, [searchValue])

  return (
    <ul className="flex flex-col gap-[5.88vw]">
      {data?.categories.map(({id, preview, title}, index) => (
        <li key={index} className="flex flex-col gap-[2.94vw] w-full">
          <h5 className="fs-14 font-medium">{title}</h5>
          <div className="w-full h-122px rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={preview} 
              alt="category-img" 
              width={343} 
              height={122} 
              className="object-cover object-center w-full h-full"
            />
            <CategoryButton link={`/category/${id}`}/>
          </div>
        </li>
      ))}
    </ul>
  );
};