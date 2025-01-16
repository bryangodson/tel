"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Card from "@/components/card";
import SearchBar from "@/components/search_bar";
import DropDown from "@/components/drop_down";
import Button from "@/components/button";
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
  ];
  return (
    <div>
      <Header />
      <div className="body ">
        <h2 className="font-extrabold text-3xl mb-5">Publications</h2>
        <div className="mb-10 pb-10 flex flex-col md:flex-row  gap-x-4 items-center w-full border-b-2 border-dashed">
          <SearchBar
            placeholder="Search Publications..."
            className=" w-full  lg:w-[40%] mb-5 md:mb-0"
          />
          <div className="flex items-center gap-x-4 w-full">
            <DropDown
              label="Year"
              data={[
                {
                  item: "2024",
                  value: "2024",
                },
                {
                  item: "2023",
                  value: "2023",
                },
                {
                  item: "2023",
                  value: "2023",
                },
              ]}
              onItemSelected={(value) => {
                console.log(value);
              }}
            />
            <DropDown
              label="Type of Publications"
              data={[
                {
                  item: "Article",
                  value: "article",
                },
                {
                  item: "News",
                  value: "news",
                },
                {
                  item: "Humanitarian",
                  value: "humanitarian",
                },
                {
                  item: "Lifestyle",
                  value: "lifestyle",
                },
              ]}
              onItemSelected={(value) => {
                console.log(value);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-14 w-full">
          {publications.map(({ image, title, description }, index) => (
            <div key={index}>
              <Card image={image} title={title} description={description} />
              <div className="flex w-full justify-between gap-x-2 items-center">
                <Button
                  label="Read Online"
                  className="!rounded-lg !w-2/4 "
                  to="/publications/view/id_here"
                />
                <a
                  href="/tel/images/hero.jpg"
                  className="bg-transparent border-tel-blue text-tel-blue rounded-lg w-2/4 border-[1px] h-10 flex items-center justify-center gap-x-1"
                  download>
                  <span>Download</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                        stroke="#054e96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path
                        d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                        stroke="#054e96"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
