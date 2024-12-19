import Header from "./components/header";
import Hero from "./components/hero";
import VisionAndStory from "./components/our_story";
import person from "./images/woman-smile.jpeg";
import vision from "./images/vision2.jpeg";
import OurPrograms from "./components/our_programs";
// import VerticalLine from "./components/vertical_line";
import FadeIn from "./components/fadeIn";
import education from "./images/education.png";
import community from "./images/community.png";
import compassion from "./images/compassion.png";
import entrepreneurship from "./images/entrepreneurship.png";
import mentorship from "./images/mentorship.png";
import empowerment from "./images/empowerment.png";
export default function Home() {
  const OUR_PROGRAMS = [
    {
      title: "Education.",
      description: "Quality learning for all.",
      icon: education,
      slideFrom: false,
    },
    {
      title: "Mentorship",
      description: "Expert guidance for personal and professional growth.",
      icon: mentorship,
      slideFrom: false,
    },
    {
      title: "Entrepreneurship.",
      description: "Innovative ventures and economic empowerment.",
      icon: entrepreneurship,
      slideFrom: false,
    },
    {
      title: "Compassion.",
      description: "Emotional Support, resources , and advocacy.",
      icon: compassion,
      slideFrom: false,
    },
  ];
  const OUR_VALUES = [
    {
      title: "Empowerment.",
      description:
        "Unleashing human potential through education and mentorship.",
      icon: empowerment,
      slideFrom: false,
    },
    {
      title: "Community",
      description: "Building inclusive network for collective growth.",
      icon: community,
      slideFrom: false,
    },
    {
      title: "Entrepreneurship.",
      description: "Encouraging innovation and self-sustaining initiatives.",
      icon: entrepreneurship,
      slideFrom: false,
    },
    {
      title: "Compassion",
      description: "Providing care, support, and understanding.",
      icon: compassion,
      slideFrom: false,
    },
  ];
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />

        <VisionAndStory
          title="Our Vision"
          description=" A world where everyone has access to resources, support, and opportunities to reach their full potential"
          image={vision}
          priority
        />
        <div className="our_programs_div">
          <FadeIn>
            <h3 className="title">Our Values</h3>
          </FadeIn>
          {OUR_VALUES.map(({ title, description, icon, slideFrom }, index) => {
            return (
              <FadeIn key={index} slideFrom={slideFrom}>
                <OurPrograms
                  icon={icon}
                  title={title}
                  description={description}
                />
              </FadeIn>
            );
          })}
        </div>
        <VisionAndStory
          title="Our Story"
          description=" Founded on empathy, resilience, and determination. The Essence League
          addresses interconnected challenges facing individuals and
          communities. Our team of passionate professionals, mentors, and
          entrepreneurs create lasting impacts."
          image={person}
          priority
        />
        <div className="our_programs_div">
          <FadeIn>
            <h3 className="title">Our Programs</h3>
          </FadeIn>
          {OUR_PROGRAMS.map(
            ({ title, description, icon, slideFrom }, index) => {
              return (
                <FadeIn key={index} slideFrom={slideFrom}>
                  <OurPrograms
                    icon={icon}
                    title={title}
                    description={description}
                  />
                </FadeIn>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
