'use client'
import { CategoryButton } from "@/shared/buttons/category-button/CategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";

const categoryList = [
  {link: '/category/realistic-1', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-2', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-3', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-4', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-5', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-6', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-7', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-8', photo: '/images/category/python.png', title: 'Realistic'},
  {link: '/category/realistic-9', photo: '/images/category/python.png', title: 'Realistic'},
]

export const CategoryList = () => {
  return (
    <ul className="flex flex-col gap-[5.88vw]">
      {categoryList.map(({link, photo, title}, index) => (
        <li key={index} className="flex flex-col gap-[2.94vw] w-full">
          <h5 className="fs-14 font-medium">{title}</h5>
          <div className="w-full rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={photo} 
              alt="category-img" 
              width={343} 
              height={122} 
              className="object-fill w-full"
            />
            <CategoryButton link={link}/>
          </div>
        </li>
      ))}
    </ul>
  );
};