"use client";
import Link from "next/link";
import SocialMediaIcons from "./social_media_icons";
import Button from "./button";
import SearchBar from "./search_bar";
import { usePathname } from "next/navigation";
interface menuProps {
  menuClicked: boolean;
  forFooter?: boolean;
}
function MenuNavigationItems({ menuClicked, forFooter }: menuProps) {
  const pathname = usePathname();

  const Links = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Publications",
      href: "/publications",
    },
    {
      label: "Media",
      href: "/media",
    },
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "About us",
      href: "/about-us",
    },
  ];
  return (
    <nav
      className={`${
        menuClicked ? "right-0" : "right-[-100%]"
      } flex flex-col lg:flex-row items-center justify-center gap-x-8 md:bg-opacity-0 md:backdrop-blur-0 ${
        !forFooter
          ? " absolute lg:static top-20  w-full  lg:w-auto gap-y-7 py-5 lg:py-0  bg-tel-white bg-opacity-60 backdrop-blur-md"
          : "space-y-2"
      } `}
      style={{
        height: !forFooter ? "calc(100svh - 120px)" : "auto",
      }}>
      {Links.map(({ href, label }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={`${
              pathname == href && !forFooter
                ? "text-tel-blue"
                : forFooter
                ? "text-tel-white"
                : "text-tel-black"
            } text-2xl lg:text-base`}>
            {label}
          </Link>
        );
      })}
      {!forFooter ? (
        <>
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center justify-center gap-x-4 ">
            <SocialMediaIcons />
            <Button label="Donate" />
          </div>
        </>
      ) : (
        ""
      )}
    </nav>
  );
}

export default MenuNavigationItems;
