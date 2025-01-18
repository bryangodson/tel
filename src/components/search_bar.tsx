"use client";
import React from "react";
import Image from "@/components/image";

/**
 * Defines the props for the SearchBar component.
 * @interface searchBarProps
 * @property {string} [placeholder] - The placeholder text for the search input.
 * @property {string} [className] - Additional CSS classes to apply to the search bar.
 */
interface searchBarProps {
  placeholder?: string;
  className?: string;
}
export default function SearchBar({
  placeholder = "Search...",
  className,
}: searchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("search bar submitted");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-[#f6f5f6] rounded-3xl w-52 h-9 flex items-center justify-center pl-2 ${
        className || ""
      }`}>
      <Image
        src={`/images/search_icon.png`}
        alt="search icon"
        width={16}
        height={16}
      />
      <input
        type="text"
        className="w-full h-full bg-inherit border-0 rounded-3xl p-2 focus:outline-none placeholder:text-sm"
        placeholder={placeholder}
      />
    </form>
  );
}
