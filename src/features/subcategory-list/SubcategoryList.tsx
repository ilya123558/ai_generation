'use client'
import { useGetSubCategoriesQuery } from "@/entities/categories/api/categories.api";
import { SubcategoryButton } from "@/shared/buttons/subcategory-button/SubcategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { setActiveSubcategoryId, useAppDispatch } from "@/views/store";
import { usePathname, useRouter } from "next/navigation";

export const SubcategoryList = () => {
  const router = useRouter() 
  const id = usePathname().split('/').at(-1)

  const dispatch = useAppDispatch()
  const { data } = useGetSubCategoriesQuery(Number(id))

  const handleClick = (id: number) => {
    dispatch(setActiveSubcategoryId(id))
    router.push('/generation')
  }

  return (
    <ul className="grid grid-cols-3 gap-[4.28vw_5.34vw]">
      {data?.subcategories.map(({title, preview, id}, index) => (
        <li key={index} className="flex flex-col gap-[2.14vw] w-full">
          <div className="w-full h-122px rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={preview} 
              alt="subcategory-img" 
              width={103} 
              height={131} 
              className="object-cover object-center w-full h-full"
            />
            <SubcategoryButton onClick={() => handleClick(id)}/>
          </div>
          <h5 className="fs-11 font-medium text-center">{title}</h5>
        </li>
      ))}
    </ul>
  );
};