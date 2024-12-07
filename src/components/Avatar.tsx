import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Avatar({
  src,
  alt,
  size = 32,
  className = "",
}: AvatarProps) {
  // Check if the image is an SVG from DiceBear
  const isDiceBearSvg = src?.includes("dicebear.com");

  if (isDiceBearSvg) {
    // For SVGs, use a regular img tag
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={`rounded-full ${className}`}
      />
    );
  }

  // For regular images, use Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    />
  );
}
