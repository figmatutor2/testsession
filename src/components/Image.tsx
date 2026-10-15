import NextImage from "next/image";

// Figma Image: type=character(펭귄 캐릭터 201x201) / flag(파란 깃발 48x48)
type ImageProps = {
  type?: "character" | "flag";
  alt?: string;
  className?: string;
};

const images = {
  character: {
    src: "/images/penguin-character.png",
    alt: "숫자 2 풍선을 든 펭귄 두 마리",
    size: 201,
    classes: "size-201 object-cover",
  },
  flag: {
    src: "/images/blue-flag.png",
    alt: "파란 깃발",
    size: 48,
    classes: "size-48 object-cover rounded-scaled-media",
  },
};

export default function Image({ type = "character", alt, className = "" }: ImageProps) {
  const image = images[type];

  return (
    <NextImage
      src={image.src}
      alt={alt ?? image.alt}
      width={image.size}
      height={image.size}
      className={`${image.classes} ${className}`}
    />
  );
}
