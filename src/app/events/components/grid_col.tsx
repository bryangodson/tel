import React from "react";
import Image from "@/components/image";
interface colProps {
  image: string;
  index: number;
  isFifthItem: boolean;
}
export default function GridCol({ image, index, isFifthItem }: colProps) {
  return (
    <div
      className={` ${
        isFifthItem ? "col-span-2 md:col-span-1 " : "col-span-1"
      }   h-[400px] py-4 md:py-0`}>
      <Image
        src={image}
        alt={`gallery image ${index + 1}`}
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
