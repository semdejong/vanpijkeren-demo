import Image from "next/image";

export default function ProjectImage({
  src,
  w,
  h,
  alt,
  eager = false,
  sizes,
  preload = false,
}: {
  src: string;
  w: number;
  h: number;
  alt: string;
  eager?: boolean;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes ?? `${w}px`}
      unoptimized
      preload={preload}
      loading={preload ? undefined : eager ? "eager" : "lazy"}
      className="mx-auto block h-auto w-full"
      style={{ maxWidth: w }}
    />
  );
}
