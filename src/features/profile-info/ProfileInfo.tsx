import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";
import { ShadowWrapper } from "@/shared/wrappers/shadow-wrapper/ShadowWrapper";

export const ProfileInfo = () => {
  return (
    <div className="mt-[9.91vw] mb-[11.77vw] flex items-center flex-col text-center">
      <ShadowWrapper borderRadius={"full"} className="overflow-hidden border-[3px] border-white h-110px w-110px">
        <ImageWithSkeleton 
          src={"/images/profile/user.png"}
          alt="user.png"
          width={110}
          height={110}
        />
      </ShadowWrapper>
      <div className="fs-18 font-medium mt-[3.74vw] urbanist">Lorem Ipsum</div>
    </div>
  );
};