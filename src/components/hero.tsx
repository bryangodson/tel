import Button from "./button";
function Hero() {
  return (
    <div
      className="w-full p-10 bg-[url(/images/hero.jpg)] bg-cover bg-center flex items-center relative"
      style={{
        height: "calc(100svh - 120px)",
      }}>
      <section className="absolute top-0 left-0 w-full h-full bg-tel-shade opacity-45 z-10"></section>
      <div className=" w-full lg:w-2/5 z-20 text-tel-white flex flex-col gap-y-7">
        <h1 className=" text-3xl md:text-5xl ">Welcome Message From the CEO</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          exercitationem doloremque non, iste ex error nihil nesciunt.
          Reiciendis fuga cum provident amet maiores officia in ratione qui.
          Minima, omnis maiores!
        </p>
        <section className="flex flex-col lg:flex-row gap-4">
          <Button
            label="Sign up for Newsletter"
            to="#newsletter"
            className="!w-52"
          />
          <Button
            label="Learn More About Us"
            to="/about-us"
            className="!w-52 !bg-transparent !border-tel-white"
          />
        </section>
      </div>
    </div>
  );
}

export default Hero;
