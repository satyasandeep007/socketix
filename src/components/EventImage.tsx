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

  // For development, use high-quality Picsum images
  const imageSrc =
    process.env.NODE_ENV === "development"
      ? `https://picsum.photos/seed/${type}/${width * 2}/${height * 2}` // Double size for better quality
      : imageConfig.src;

  const imageProps = {
    src: imageSrc,
    alt: title,
    className: `transition-all duration-300 ${className}`,
    style: {
      backgroundColor: imageConfig.color,
    },
    quality: 100, // Maximum quality
    unoptimized: process.env.NODE_ENV === "development", // Prevent development optimization
  };

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          {...imageProps}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover rounded-lg ${className}`}
      />
    </div>
  );
}
