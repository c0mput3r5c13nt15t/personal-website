import useTheme from "@/lib/hooks/useTheme";
import Image from "next/image";

export default function BackgroundImage() {
  const { theme } = useTheme();
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Image
        alt="Mountains"
        loading="eager"
        src={"/bg-" + theme + ".jpg"}
        fill={true}
        unoptimized={true}
        priority={true}
        placeholder="blur"
        blurDataURL={"/bg-" + theme + "-blur.webp"}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
