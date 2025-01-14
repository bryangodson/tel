import React from "react";
export default function SearchBar() {
  return (
    <div className="bg-[#f6f5f6] rounded-3xl w-52 h-9">
      <input
        type="search"
        className="w-full h-full bg-inherit border-0 rounded-3xl p-2 focus:outline-none "
        placeholder="Search..."
      />
    </div>
  );
}
