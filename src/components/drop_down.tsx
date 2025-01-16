import { useState } from "react";

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
        className="cursor-pointer w-full h-full grid place-items-center">
        <span>{itemSelected || label}</span>
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
