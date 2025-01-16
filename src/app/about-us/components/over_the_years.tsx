import { ReactElement } from "react";
interface OverTheYearsProps {
  year: string;
  iconBg?: string;
  title: string;
  description: ReactElement;
  index: number;
}
export default function OverTheYears({
  year,
  iconBg = "bg-violet-600",
  title,
  description,
  index,
}: OverTheYearsProps) {
  return (
    <div
      className={`flex flex-col items-center ${
        index % 2 > 0 ? "mt-20" : " mt-20 md:mt-0"
      }`}>
      <span className="mb-3 text-tel-black font-extrabold text-3xl">
        {year}
      </span>
      {/* org. office */}
      <span
        className={`w-20 h-20 rounded-full ${iconBg} grid place-items-center `}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M3 21.0001H21M4 18.0001H20M6 18.0001V13.0001M10 18.0001V13.0001M14 18.0001V13.0001M18 18.0001V13.0001M12 7.00695L12.0074 7.00022M21 10.0001L14.126 3.88986C13.3737 3.2212 12.9976 2.88688 12.5732 2.75991C12.1992 2.64806 11.8008 2.64806 11.4268 2.75991C11.0024 2.88688 10.6263 3.2212 9.87404 3.88986L3 10.0001H21Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </g>
        </svg>
      </span>
      {/* vertical line */}
      <span
        className={`w-1  ${
          index % 2 > 0 ? "h-20" : "h-20 md:h-40"
        } bg-tel-grey`}></span>
      {/* small dot */}
      <span className={`w-4 h-4 rounded-full ${iconBg} z-[2]`}></span>
      {/* horizontal line */}
      <span className="w-full h-1 bg-tel-grey -mt-2 z-[1]"></span>
      <h3 className="mt-5 mb-5 text-tel-black font-bold">{title}</h3>
      <div className="text-tel-grey font-semibold text-center">
        {description}
      </div>
    </div>
  );
}
