import Image from "@/components/image";
import Link from "next/link";
/**
 * Defines the props for a card component.
 * @property {string} image - The URL of the image to be displayed in the card.
 * @property {string} title - The title of the card.
 * @property {string} [description] - The description of the card (optional).
 * @property {string} [date] - The date associated with the card (optional).
 * @property {boolean} [isYoutubeVideo] - Indicates whether the card represents a YouTube video (optional).
 * @property {string} [clamp] - The CSS class to apply for text clamping (optional).
 * @property {boolean} [isNewsItem] - Indicates whether the card represents a news item (optional).
 * @property {string} [to] - The URL to navigate to when the card is clicked (optional).
 */
interface cardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  isYoutubeVideo?: boolean;
  clamp?: string;
  isNewsItem?: boolean;
  to?: string;
}
export default function Card({
  image,
  title,
  description,
  date,
  isYoutubeVideo = false,
  clamp = "line-clamp-2",
  isNewsItem = false,
  to = "#",
}: cardProps) {
  return (
    <Link href={to}>
      <div className="flex flex-col gap-y-2 w-full">
        <div className="relative w-full h-40">
          {isYoutubeVideo && (
            <section className="w-full h-full absolute top-0 left-0 grid place-items-center bg-tel-shade bg-opacity-70">
              <svg
                viewBox="0 -3 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="crimson"
                className="w-8 h-8">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd">
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-300.000000, -7442.000000)"
                      fill="crimson">
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)">
                        <path
                          d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                          id="youtube-[#168]"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </section>
          )}
          <Image
            src={`/images/${image}`}
            alt={title}
            className="w-full h-40 object-cover"
            width={320}
            height={160}
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            isNewsItem || isYoutubeVideo ? "underline" : "no-underline"
          } ${clamp}`}>
          {title}
        </h3>
        <p
          className={`text-tel-grey text-ellipsis overflow-hidden ${clamp} text-sm`}>
          {description}
        </p>
        <span className="font-semibold text-tel-grey ">{date || ""}</span>
      </div>
    </Link>
  );
}
