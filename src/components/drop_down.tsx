import { useState } from "react";

/**
+  * Interface for dropdown component props
+  * @interface dropDownProps
+  * @property {string} label - The default text shown when no item is selected
+  * @property {Array<{item: string, value: string}>} data - Array of dropdown items with display text and values
+  * @property {(value: string) => void} onItemSelected - Callback function triggered when an item is selected
+  */

interface dropDownProps {
  label: string;
  data: Array<{ item: string; value: string }>;
  onItemSelected: (value: string) => void;
}
export default function DropDown({
  label,
  data,
  onItemSelected,
}: dropDownProps) {
  const [itemSelected, setItemSelected] = useState("");
  const [opened, setOpened] = useState(false);
  const handleDropDown = () => {
    setOpened(!opened);
  };
  return (
    <div className=" rounded-full border-2 flex items-center justify-center w-max h-14 min-w-28 relative px-4">
      <div
        onClick={handleDropDown}
        className="cursor-pointer w-full h-full flex items-center gap-x-1 justify-center">
        <span>{itemSelected || label}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transform ${opened ? "rotate-180" : "rotate-0"}`}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z"
              fill="#333"></path>
          </g>
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center absolute top-12 right-0 z-10 bg-tel-blue  w-full">
        {opened &&
          data.map(({ item, value }, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  setItemSelected(value);
                  onItemSelected(itemSelected);
                  handleDropDown();
                }}
                className={`${
                  index !== data.length - 1 ? "border-b-2" : ""
                } w-full grid place-items-center cursor-pointer text-tel-white h-12`}>
                {item}
              </span>
            );
          })}
      </div>
    </div>
  );
}
