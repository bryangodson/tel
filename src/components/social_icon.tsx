import React from "react";
import Image from "@/components/image";
/**
 * Renders a social icon with a link.
 *
 * @param icon - The name of the icon image file.
 * @param alt - The alt text for the icon image.
 * @param link - The URL to link the icon to.
 * @param forFooter - Optional boolean indicating if the icon is for the footer.
 * @returns A React component that renders the social icon.
 */

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
        <Image src={`/images/${icon}`} alt={alt} width={20} height={20} />
      </a>
    </div>
  );
}
