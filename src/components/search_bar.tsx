import React from "react";
import Image from "next/image";
export default function SearchBar() {
  return (
    <div className="bg-[#f6f5f6] rounded-3xl w-52 h-9 flex items-center justify-center pl-2">
      <Image
        src="/images/search_icon.png"
        alt="search icon"
        width={16}
        height={16}
      />
      <input
        type="text"
        className="w-full h-full bg-inherit border-0 rounded-3xl p-2 focus:outline-none placeholder:text-sm"
        placeholder="Search..."
      />
    </div>
  );
}
