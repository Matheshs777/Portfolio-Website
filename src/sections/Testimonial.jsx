import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, initials, avatarColor, name, username, body, href }) => {
  const card = (
    <figure
      className={twMerge(
        "relative h-full min-h-44 w-64 rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm",
        href && "cursor-pointer hover:bg-royal hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {img ? (
          <img
            className="w-8 h-8 object-contain rounded-full bg-white/10"
            alt={name}
            src={img}
          />
        ) : (
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${avatarColor}`}
            aria-label={name}
          >
            {initials}
          </div>
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full cursor-pointer"
    >
      {card}
    </a>
  ) : (
    card
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Hear From My Clients</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
