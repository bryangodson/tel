import React from "react";
import Image from "next/image";
import MenuNavigationItems from "./menu";
import SocialMediaIcons from "./social_media_icons";
import Button from "./button";
function Footer() {
  return (
    <div className="bg-tel-blue flex flex-col md:flex-row md:gap-x-3 justify-evenly items-center p-5">
      <Image
        src="/images/tel_logo.jpeg"
        alt="logo"
        width={80}
        height={80}
        className="mb-8 md:mb-0"
      />
      <section className="grid gap-y-3">
        <MenuNavigationItems menuClicked={false} forFooter />
        <SocialMediaIcons forFooter />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center bg-tel-white h-auto md:h-14 rounded-lg md:rounded-full overflow-hidden p-2 md:pr-3 pb-3 md:pb-2 w-full md:w-auto mt-8 md:mt-0">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="What's your Email"
          className="focus:outline-none p-4 h-full"
        />
        <Button
          label="Sign up for Newsletter"
          className="w-full md:w-52 !bg-blue-500"
        />
      </section>
    </div>
  );
}

export default Footer;
