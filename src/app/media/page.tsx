"use client";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/card";
import Button from "@/components/button";
type viewTypes = "blog" | "press release" | "tel in news" | "tel on tv";
export default function Page() {
  const [publications] = useState<
    Array<{ image: string; title: string; description: string }>
  >([
    {
      image: "child-with-flower.jpg",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-staffs-with-reflectors.png",
      title: "A Day in the Life of [Beneficiary/Volunteer]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "turning-the-ground.png",
      title: "20 Ways to Support [Cause] Without Spending Money",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-children.png",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },

    {
      image: "child-with-flower.jpg",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-staffs-with-reflectors.png",
      title: "A Day in the Life of [Beneficiary/Volunteer]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "turning-the-ground.png",
      title: "20 Ways to Support [Cause] Without Spending Money",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-children.png",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },

    {
      image: "child-with-flower.jpg",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-staffs-with-reflectors.png",
      title: "A Day in the Life of [Beneficiary/Volunteer]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "turning-the-ground.png",
      title: "20 Ways to Support [Cause] Without Spending Money",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-children.png",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },

    {
      image: "child-with-flower.jpg",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-staffs-with-reflectors.png",
      title: "A Day in the Life of [Beneficiary/Volunteer]",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "turning-the-ground.png",
      title: "20 Ways to Support [Cause] Without Spending Money",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
    {
      image: "two-children.png",
      title:
        "From Challenges to Change:Stories of Lives Transformed by Our Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, corporis magni distinctio quibusdam obcaecati amet? Porro error ",
    },
  ]);
  const [currentView, setCurrentView] = useState<viewTypes>("blog");
  const handleCurrentViewToggle = (view: viewTypes) => {
    setCurrentView(view);
  };
  const buttons: Array<{ label: string; value: viewTypes }> = [
    {
      label: "Blog",
      value: "blog",
    },
    {
      label: "Press Release",
      value: "press release",
    },
    {
      label: "TEL in News",
      value: "tel in news",
    },
    {
      label: "TEL on Tv",
      value: "tel on tv",
    },
  ];
  return (
    <div>
      <Header />
      <div className="body ">
        <h2 className="font-extrabold text-3xl mb-5">Media</h2>
        <div className="mb-10 pb-10 flex flex-col md:flex-row  gap-x-4 items-center w-full border-b-2 border-dashed">
          <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 md:flex md:items-center  gap-x-4 w-full">
            {buttons.map(({ label, value }, index) => (
              <Button
                key={index}
                label={label}
                handleClick={() => {
                  handleCurrentViewToggle(value);
                }}
                className={`px-3 w-fit py-2 !h-auto  !text-center  ${
                  currentView === value
                    ? "bg-tel-blue"
                    : "!bg-transparent !border-tel-black !text-tel-black"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14 w-full">
          {publications.map(({ image, title, description }, index) => (
            <Card
              image={image}
              title={title}
              description={
                currentView == "tel in news" || currentView == "tel on tv"
                  ? ""
                  : description
              }
              key={index}
              date={currentView == "press release" ? "12th January,2024" : ""}
              isNewsItem={currentView == "tel in news"}
              isYoutubeVideo={currentView == "tel on tv"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
