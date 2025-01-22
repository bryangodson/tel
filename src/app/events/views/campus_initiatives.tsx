import { useState } from "react";
import Hero from "@/components/hero";
import ImageWithText from "@/app/about-us/components/image_with_text";
import Button from "@/components/button";
import Card from "@/components/card";
export default function CampusInitiatives() {
  const features = [
    {
      textData: [
        {
          title: "Mission",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
        },
      ],
      reversed: true,
      color: "bg-green-600",
    },
    {
      textData: [
        {
          title: "Mission",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
        },
      ],
      reversed: false,
      color: "bg-purple-600",
    },
    {
      textData: [
        {
          title: "Mission",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
        },
      ],
      reversed: true,
      color: "bg-blue-600",
    },
  ];
  const [publications] = useState([
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
  return (
    <div>
      <Hero isCampInitiative />
      <ImageWithText
        image="woman-smile.jpeg"
        textData={[
          {
            title: "Mission",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
          },
          {
            title: "Vision",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
          },
        ]}
        className="mt-20"
      />
      <div className="grid gap-y-4 place-items-center ">
        <h2 className="font-extrabold text-3xl m-10">
          Key Features of the Initiatve
        </h2>
        {features.map(({ textData, reversed, color }, index) => (
          <ImageWithText
            key={index}
            image="woman-smile.jpeg"
            textData={textData}
            className={`${color} !justify-between !pr-0 !pl-0`}
            textClass="p-5 !text-tel-white"
            reversed={reversed}
            imageClassName="!mt-0 !md:w-full"
          />
        ))}

        <Button label={"Join the Initiative Now"} to="#" className="!w-52" />
      </div>
      <div>
        <h2 className="font-extrabold text-3xl mb-5">Upcoming Events</h2>
        <div className="grid grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {publications.map(({ image, title, description }, index) => (
            <Card
              key={index}
              image={image}
              title={title}
              description={description}
              date="12th January,2025"
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-extrabold text-3xl mb-5">Past Events</h2>
        <div className="grid grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {publications.map(({ image, title, description }, index) => (
            <Card
              key={index}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
