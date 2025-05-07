'use client'
import { useGetCategoriesQuery, useLazyGetCategoriesQuery } from "@/entities/categories/api/categories.api";
import { CategoryButton } from "@/shared/buttons/category-button/CategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { useAppSelector } from "@/views/store";
import { useEffect } from "react";
import { CategoryLoading } from "../category-loading/CategoryLoading";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/utils/const/animation";
import { EmptyMessage } from "@/shared/empty-message/EmptyMessage";
import { useRouter } from "next/navigation";

export const CategoryList = () => {
  const router = useRouter()
  const { searchValue } = useAppSelector(state => state.main.meta)
  const [getCategories, { data, isLoading }] = useLazyGetCategoriesQuery()

  useEffect(() => {
    getCategories({ limit: 50, q: searchValue })
  }, [searchValue])


  return (
    <>
      {isLoading
        ? <CategoryLoading />
        : data?.categories.length !== 0
            ? (
              <ul className="flex flex-col gap-[5.88vw]">
                {
                  data?.categories.map(({id, preview, title}, index) => (
                    <motion.li {...animationWithDynamicDalay(index)} key={index} className="flex flex-col gap-[2.94vw] w-full">
                      <h5 className="fs-14 font-medium">{title}</h5>
                      <div onClick={() => router.push(`/category/${id}`)} className="w-full h-122px rounded-[16px] overflow-hidden relative transition-all active:scale-95">
                        <ImageWithSkeleton 
                          src={preview} 
                          alt="category-img" 
                          width={343} 
                          height={122} 
                          className="object-cover object-center w-full h-full"
                        />
                        <CategoryButton/>
                      </div>
                    </motion.li>
                  ))
                }
              </ul>
            )
            : <EmptyMessage />
      }
    </>
  );
};