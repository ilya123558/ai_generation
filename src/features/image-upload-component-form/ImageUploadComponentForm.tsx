'use client'
import { useImageUpload } from "@/utils/hooks/useImageUpload";
import { memo } from "react";

export const ImageUploadComponentForm = memo(() => {
  const { ImageUploadComponent } = useImageUpload({
    maxImages: 30,
    size: { maxHeight: 105, maxWidth: 105 },
  })

  return (
    <form id='create-profile-form' onSubmit={e => e.preventDefault()} className="grid grid-cols-3 gap-[2.67vw] h-[60vw] overflow-hidden overflow-y-scroll">
      <ImageUploadComponent />
    </form>
  );
})