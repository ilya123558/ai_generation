'use client'
import { useGetSubCategoriesQuery } from "@/entities/categories/api/categories.api";
import { SubcategoryButton } from "@/shared/buttons/subcategory-button/SubcategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const SubcategoryList = () => {
  const id = usePathname().split('/').at(-1)
  const { data } = useGetSubCategoriesQuery(Number(id))

  return (
    <ul className="grid grid-cols-3 gap-[4.28vw_5.34vw]">
      {data?.subcategories.map(({title, preview}, index) => (
        <li key={index} className="flex flex-col gap-[2.14vw] w-full">
          <div className="w-full rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={preview} 
              alt="subcategory-img" 
              width={103} 
              height={131} 
              className="object-fill w-full"
            />
            <SubcategoryButton link={'/generation'} />
          </div>
          <h5 className="fs-11 font-medium text-center">{title}</h5>
        </li>
      ))}
    </ul>
  );
};