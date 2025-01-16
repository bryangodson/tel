import Image from "next/image";
interface cardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  isYoutubeVideo?: boolean;
  clamp?: string;
}
export default function Card({
  image,
  title,
  description,
  date,
  isYoutubeVideo = false,
  clamp = "line-clamp-2",
}: cardProps) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="relative w-full h-40">
        {isYoutubeVideo && (
          <section className="w-full h-full absolute top-0 left-0 grid place-items-center bg-tel-shade bg-opacity-70">
            <Image
              src="/tel/images/instagram.png"
              alt="youtube logo"
              width={30}
              height={30}
            />
          </section>
        )}
        <Image
          src={`/tel/images/${image}`}
          alt={title}
          className="w-full h-40 object-cover"
          width={320}
          height={160}
        />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p
        className={`text-tel-grey text-ellipsis overflow-hidden ${clamp} text-sm`}>
        {description}
      </p>
      <span className="font-semibold text-tel-grey ">{date || ""}</span>
    </div>
  );
}
