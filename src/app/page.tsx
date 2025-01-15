import React from "react";
import Hero from "@/components/hero";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/card";
export default function Page() {
  const publications = [
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
  ];
  return (
    <div>
      <Header />
      <Hero />
      <div className="body py-16 flex flex-col gap-y-16">
        {/* publications */}

        <div>
          <h2 className="font-extrabold text-3xl mb-5">Publications</h2>
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

        {/* key projects */}

        <div>
          <h2 className="font-extrabold text-3xl mb-5">Key Projects</h2>
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
        {/* events */}

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
      </div>
      <Footer />
    </div>
  );
}
