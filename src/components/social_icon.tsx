import React from "react";
import Image from "next/image";
const isGituhProd = true;
const imagePaths = isGituhProd ? "/tel" : "";
interface iconProps {
  icon: string;
  alt: string;
  link: string;
  forFooter?: boolean;
}
export default function SocialIcon({ icon, alt, link, forFooter }: iconProps) {
  return (
    <div
      className={`rounded-full p-1 w-5 h-5  ${
        forFooter ? "bg-[rgba(255,255,255,0.2)]" : "bg-tel-black "
      }`}>
      <a href={link} target="blank">
        <Image
          src={`$${imagePaths}/images/${icon}`}
          alt={alt}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
}
