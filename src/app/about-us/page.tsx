import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ImageWithText from "./components/image_with_text";
import OverTheYears from "./components/over_the_years";

export default function Page() {
  const overTheYear = [
    {
      year: "2010",
      title: "Organization Establishment",
      description: (
        <p>
          Official registration completed.
          <br />
          Focused on supporting SMEs and
          <br />
          community-based initiative
        </p>
      ),
    },
    {
      year: "2013",
      title: "First Funding Secured",
      description: (
        <p>
          Received $500,000 in grants.
          <br />
          Used to expand training program
          <br />
          and hire staff
        </p>
      ),
      iconBg: "bg-green-600",
    },
    {
      year: "2015",
      title: "First Major Project Launch",
      description: (
        <p>
          Official registration completed.
          <br />
          Focused on supporting SMEs and
          <br />
          community-based initiative
        </p>
      ),
      iconBg: "bg-blue-600",
    },
    {
      year: "2018",
      title: "Registration and Awards",
      description: (
        <p>
          Official registration completed.
          <br />
          Focused on supporting SMEs and
          <br />
          community-based initiative
        </p>
      ),
      iconBg: "bg-orange-400",
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: (
        <p>
          Official registration completed.
          <br />
          Focused on supporting SMEs and
          <br />
          community-based initiative
        </p>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <div className="body">
        <ImageWithText
          image="woman-smile.jpeg"
          textData={[
            {
              title: "About Us",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam sint minus magni fugiat, nobis, necessitatibus labore repellendus consequuntur adipisci eum doloribus ipsam maxime earum consectetur nostrum sunt architecto!",
            },
          ]}
        />
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
          reversed
        />

        {/* over the years section */}
        <h3 className="font-bold text-3xl text-tel-black mt-10 -mb-10  md:mb-0 md:mt-0 md:py-20 text-center">
          Registration Year
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 lg:grid-cols-5 w-full mb-20">
          {overTheYear.map(({ year, title, description, iconBg }, index) => (
            <OverTheYears
              key={index}
              year={year}
              title={title}
              description={description}
              iconBg={iconBg}
              index={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
