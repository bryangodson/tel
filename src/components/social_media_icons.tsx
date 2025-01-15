import React from "react";
import SocialIcon from "./social_icon";
interface props {
  forFooter?: boolean;
}
export default function SocialMediaIcons({ forFooter }: props) {
  const socialIcons = [
    {
      icon: "linkedin.png",
      alt: "linkedin",
      link: "",
    },
    {
      icon: "instagram.png",
      alt: "instagram",
      link: "",
    },
    {
      icon: "facebook.png",
      alt: "facebook",
      link: "",
    },
    {
      icon: "x.png",
      alt: "x,formerly twitter",
      link: "",
    },
  ];
  return (
    <div className="w-28 gap-x-2 flex items-center justify-center ">
      {socialIcons.map(({ icon, alt, link }, index) => (
        <SocialIcon
          icon={icon}
          alt={alt}
          link={link}
          key={index}
          forFooter={forFooter}
        />
      ))}
    </div>
  );
}
