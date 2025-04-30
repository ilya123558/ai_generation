'use client'
import { useGetCategoriesQuery, useLazyGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryButton } from "@/shared/buttons/category-button/CategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { useEffect } from "react";

export const CategoryList = () => {
  const [useGetCategories, { data }] = useLazyGetCategoriesQuery()

  useEffect(() => {
    useGetCategories({ limit: 50 })
  }, [])

  return (
    <ul className="flex flex-col gap-[5.88vw]">
      {data?.categories.map(({id, preview, title}, index) => (
        <li key={index} className="flex flex-col gap-[2.94vw] w-full">
          <h5 className="fs-14 font-medium">{title}</h5>
          <div className="w-full rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={preview} 
              alt="category-img" 
              width={343} 
              height={122} 
              className="object-cover object-center w-full"
            />
            <CategoryButton link={`/category/${id}`}/>
          </div>
        </li>
      ))}
    </ul>
  );
};