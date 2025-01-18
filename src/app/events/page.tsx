"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/button";
import MasonryGrid from "./components/grid";
import CampusInitiatives from "./views/campus_initiatives";
import Events from "./views/events";

type viewTypes =
  | "gallery"
  | "up coming events"
  | "past events"
  | "tel campus initiatives";
export default function Page() {
  const buttons: Array<{ label: string; value: viewTypes }> = [
    {
      label: "Gallery",
      value: "gallery",
    },
    {
      label: "Up Coming Events ",
      value: "up coming events",
    },
    {
      label: "Past Events",
      value: "past events",
    },
    {
      label: "TEL Campus initiatives",
      value: "tel campus initiatives",
    },
  ];
  const [currentView, setCurrentView] = useState<viewTypes>("gallery");
  const handleCurrentViewToggle = (view: viewTypes) => {
    setCurrentView(view);
  };

  const [masonryList] = useState<Array<{ image: string; index: number }>>([
    { image: "/images/child-with-flower.jpg", index: 0 },
    { image: "/images/turning-the-ground.png", index: 1 },
    { image: "/images/two-children.png", index: 2 },
    { image: "/images/two-staffs-with-reflectors.png", index: 3 },
    { image: "/images/child-with-flower.jpg", index: 4 },
    { image: "/images/two-children.png", index: 5 },
    { image: "/images/two-staffs-with-reflectors.png", index: 6 },
    { image: "/images/child-with-flower.jpg", index: 7 },
    { image: "/images/woman-smile.jpeg", index: 8 },
    { image: "/images/two-staffs-with-reflectors.png", index: 9 },
    { image: "/images/two-children.png", index: 10 },
    { image: "/images/two-staffs-with-reflectors.png", index: 11 },
    { image: "/images/woman-smile.jpeg", index: 12 },
    { image: "/images/turning-the-ground.png", index: 13 },
  ]);
  const chunkSize = 7;
  const masonryChunks = [];
  for (let index = 0; index < masonryList.length; index += chunkSize) {
    masonryChunks.push(masonryList.slice(index, index + chunkSize));
  }
  return (
    <div>
      <Header />
      <div className="body">
        <h2 className="font-extrabold text-3xl mb-5">Events</h2>
        <div className="mb-10 pb-10 flex flex-col md:flex-row  gap-x-4 items-center w-full border-b-2 border-dashed">
          <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 md:flex md:items-center gap-x-4 w-full">
            {buttons.map(({ label, value }, index) => (
              <Button
                key={index}
                label={label}
                handleClick={() => {
                  handleCurrentViewToggle(value);
                }}
                className={`px-3 w-fit py-2 !h-auto  !text-center ${
                  currentView === value
                    ? "bg-tel-blue"
                    : "!bg-transparent !border-tel-black !text-tel-black"
                }`}
              />
            ))}
          </div>
        </div>
        {/* grid  here */}
        {currentView === "gallery" &&
          masonryChunks.map((masonryChunk, index) => (
            <MasonryGrid masonryChunk={masonryChunk} key={index} />
          ))}
        {currentView === "tel campus initiatives" && <CampusInitiatives />}
        {(currentView === "past events" ||
          currentView === "up coming events") && <Events view={currentView} />}
      </div>

      <Footer />
    </div>
  );
}
