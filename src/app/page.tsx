import Header from "./components/header";
import Hero from "./components/hero";
import VisionAndStory from "./components/our_story";
import person from "./images/woman-smile.jpeg";
import vision from "./images/vision2.jpeg";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />

        <VisionAndStory
          title="Our Story"
          description=" Founded on empathy, resilience, and determination. The Essence League
          addresses interconnected challenges facing individuals and
          communities. Our team of passionate professionals, mentors, and
          entrepreneurs create lasting impacts."
          image={person}
          priority
        />
        <VisionAndStory
          title="Our Vision"
          description=" A world where everyone has access to resources, support, and opportunities to reach their full potential"
          image={vision}
        />
      </div>
    </div>
  );
}
