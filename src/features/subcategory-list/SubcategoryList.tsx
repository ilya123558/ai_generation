'use client'
import { SubcategoryButton } from "@/shared/buttons/subcategory-button/SubcategoryButton";
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";

const subcategoryList = [
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
  {link: '/generation?category=realistic&subcategory=realistic', photo: '/images/subcategory/subcategory.png', title: 'Realistic'},
]

export const SubcategoryList = () => {
  return (
    <ul className="grid grid-cols-3 gap-[4.28vw_5.34vw]">
      {subcategoryList.map(({link, photo, title}, index) => (
        <li key={index} className="flex flex-col gap-[2.14vw] w-full">
          <div className="w-full rounded-[16px] overflow-hidden relative">
            <ImageWithSkeleton 
              src={photo} 
              alt="subcategory-img" 
              width={103} 
              height={131} 
              className="object-fill w-full"
            />
            <SubcategoryButton link={link} />
          </div>
          <h5 className="fs-11 font-medium text-center">{title}</h5>
        </li>
      ))}
    </ul>
  );
};