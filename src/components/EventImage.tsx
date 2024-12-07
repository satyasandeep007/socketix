import Image from "next/image";

type EventImageProps = {
  title: string;
  type: "fitness" | "hackathon" | "conference" | "default";
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

const eventImages = {
  fitness: "/events/fitness.jpg",
  hackathon: "/events/hackathon.jpg",
  conference: "/events/conference.jpg",
  default: "/events/event.jpg",
};

export default function EventImage({
  title,
  type,
  className,
  fill,
  width,
  height,
}: EventImageProps) {
  const imageSrc = eventImages[type] || eventImages.default;

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={title}
        fill
        className={`object-cover ${className || ""}`}
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={title}
      width={width || 800}
      height={height || 400}
      className={`object-cover ${className || ""}`}
    />
  );
}
