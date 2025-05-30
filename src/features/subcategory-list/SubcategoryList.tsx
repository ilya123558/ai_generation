'use client'
import { useGetSubCategoriesQuery, useLazyGetSubCategoriesQuery } from "@/entities/categories/api/categories.api";
import { SubcategoryButton } from "@/shared/buttons/subcategory-button/SubcategoryButton";
import { EmptyMessage } from "@/shared/empty-message/EmptyMessage";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { setActiveCategoryId, setActiveSubcategoryId, useAppDispatch, useAppSelector } from "@/views/store";
import { usePathname, useRouter } from "next/navigation";
import { SubcategoryLoading } from "../subcategory-loading/SubcategoryLoading";
import { motion } from "framer-motion";
import { animationImg } from "@/utils/const/animation";
import { useEffect } from "react";

export const SubcategoryList = () => {
  const router = useRouter() 
  const category_id = usePathname().split('/').at(-1)

  const dispatch = useAppDispatch()
  const { searchValue } = useAppSelector(state => state.main.meta)
  const [getSubcategories, { data, isLoading }] = useLazyGetSubCategoriesQuery()

  const handleClick = (subcategory_id: number) => {
    dispatch(setActiveCategoryId(Number(category_id)))
    dispatch(setActiveSubcategoryId(subcategory_id))
    router.push(`/chat`)
  }

  useEffect(() => {
    if(category_id) {
      getSubcategories({category_id: Number(category_id), query: searchValue || ""})
    }
  }, [searchValue, category_id])
  
  return (
    <>
      {isLoading
        ? <SubcategoryLoading />
        : data?.subcategories.length !== 0
            ? (
              <motion.ul {...animationImg} className="grid grid-cols-3 gap-[4.28vw_5.34vw]">
                {data?.subcategories.map(({title, preview, id}, index) => (
                  <li key={index} className="flex flex-col gap-[2.14vw] w-full">
                    <div onClick={() => handleClick(id)} className="w-full h-122px rounded-[16px] overflow-hidden relative">
                      <ImageWithSkeleton 
                        src={preview} 
                        alt="subcategory-img" 
                        width={103} 
                        height={131} 
                        className="object-cover object-center w-full h-full"
                      />
                      <SubcategoryButton />
                    </div>
                    <h5 className="fs-11 font-medium text-center">{title}</h5>
                  </li>
                ))}
              </motion.ul>
            )
            : <EmptyMessage />
      }
    </>
  );
};