import Image from "next/image";
import { eventTypeImages } from "@/lib/images";

type EventImageProps = {
  title: string;
  type: "fitness" | "hackathon" | "conference" | "default";
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function EventImage({
  title,
  type,
  className,
  fill,
  width,
  height,
}: EventImageProps) {
  const imageSrc = eventTypeImages[type] || eventTypeImages.default;

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
