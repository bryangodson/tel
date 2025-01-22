import React from "react";
import Hero from "@/components/hero";
import ImageWithText from "@/app/about-us/components/image_with_text";
export default function CampusInitiatives() {
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
    </div>
  );
}
