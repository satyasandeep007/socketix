/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

type EventImageProps = {
  title: string;
  type: "fitness" | "hackathon" | "conference" | "default";
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

const eventTypeImages = {
  fitness: {
    src: "/events/fitness.jpg",
    color: "#4CAF50", // Green theme for fitness
  },
  hackathon: {
    src: "/events/hackathon.jpg",
    color: "#2196F3", // Blue theme for tech
  },
  conference: {
    src: "/events/conference.jpg",
    color: "#9C27B0", // Purple theme for conference
  },
  default: {
    src: "/events/default.jpg",
    color: "#607D8B", // Blue grey for default
  },
};

export default function EventImage({
  title,
  type,
  className = "",
  fill = false,
  width = 800,
  height = 400,
}: EventImageProps) {
  const imageConfig = eventTypeImages[type] || eventTypeImages.default;

  // For development, we can use placeholder images until we have real ones
  const imageSrc =
    process.env.NODE_ENV === "development"
      ? `https://picsum.photos/seed/${type}/${width}/${height}`
      : imageConfig.src;

  const imageProps = {
    src: imageSrc,
    alt: title,
    className: `transition-all duration-300 ${className}`,
    style: {
      backgroundColor: imageConfig.color,
    },
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          {...imageProps}
          fill
          className={`object-cover ${className}`}
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        {...imageProps}
        width={width}
        height={height}
        className={`object-cover rounded-lg ${className}`}
      />
    </div>
  );
}
