import React from "react";
import Image from "@/components/image";
interface gridRowsType {
  GridRowSubChunk: Array<{ image: string; index: number }>;
  isFifthItem?: boolean;
}
export default function GridRow({
  GridRowSubChunk,
  isFifthItem,
}: gridRowsType) {
  return (
    <div
      className={`${
        isFifthItem ? "col-span-2 md:col-span-1 lg:col-span-2" : "col-span-2"
      } h-[400px]`}>
      {GridRowSubChunk.map(({ image, index }, idx) => (
        <div className={`${idx == 0 ? "h-2/6 pt-0" : "h-4/6 pt-4"} `} key={idx}>
          <Image
            src={image}
            alt={`gallery image ${index + 1}`}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
