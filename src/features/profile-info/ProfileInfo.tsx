'use client'
import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";
import { useAppSelector } from "@/views/store";

export const ProfileInfo = () => {
  const { user } = useAppSelector(state => state.main)

  return (
    <div className="mt-[7vw] mb-[11.77vw] flex items-center flex-col text-center">
      <ShadowWrapper borderRadius={"full"} className="overflow-hidden border-[3px] border-white h-110px w-110px">
        {user?.photo
          ? (
            <ImageWithSkeleton 
              src={user ? user.photo : "/images/profile/user.png"}
              alt="user.png"
              width={110}
              height={110}
              className="w-full h-full object-cover object-center"
            />
          )
          : <div className="w-full h-full bg-[#ABB0BC] animate-pulse z-[9] rounded-full"></div>
        }
      </ShadowWrapper>
      <div className="fs-18 font-medium mt-[3.74vw] urbanist">
        {user 
          ? user.mention 
          : (
            <div className="w-full h-fit bg-[#ABB0BC] animate-pulse z-[9] rounded-full">
              <p className="opacity-0">Lorem Ipsum</p>
            </div> 
          )
        }
      </div>
    </div>
  );
};