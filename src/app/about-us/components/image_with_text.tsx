import Image from "@/components/image";
import React from "react";
interface imageWithTextProps {
  image: string;
  textData: Array<{ title: string; description: string }>;
  reversed?: boolean;
  className?: string;
}
export default function ImageWithText({
  image,
  textData,
  reversed = false,
  className = "",
}: imageWithTextProps) {
  return (
    <div
      className={`flex w-full justify-center items-center gap-x-5 space-y-10  lg:px-20
         ${
           reversed
             ? "flex-col-reverse md:flex-row-reverse"
             : "flex-col md:flex-row"
         } ${className}`}>
      <Image
        src={`/images/${image}`}
        alt={textData[0].title}
        width={300}
        height={160}
        className={`w-full md:w-1/2 lg:h-80 ${
          reversed ? "md:mt-28 mt-5" : "mt-0"
        } object-cover`}
      />
      <div className="flex flex-col w-full md:w-1/2 gap-y-3">
        {textData.map(({ title, description }, index) => (
          <div key={index}>
            <h3 className="font-bold text-tel-black">{title}</h3>
            <p className="text-tel-black">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
