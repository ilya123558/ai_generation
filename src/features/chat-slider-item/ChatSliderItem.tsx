import { ImageWithSkeleton } from "@/shared/image-with-skeleton/ImageWithSkeleton";

interface IProps {
  src: string
}

export const ChatSliderItem = ({ src }: IProps) => {
  return (
    <div className="rounded-[16px] overflow-hidden w-full">
      <ImageWithSkeleton 
        src={src}
        alt="chat-image"
        width={211}
        height={296}
        className="w-full object-cover object-center"
      />
    </div>
  );
};