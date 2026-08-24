import Image from "next/image";

import { cn } from "@/src/lib/cn";

import type { GalleryBrandStripProps } from "./gallery-brand-strip.types";

export function GalleryBrandStrip({
  className,
  logos = [],
}: GalleryBrandStripProps) {
  const visibleLogos = logos.filter((logo): logo is typeof logo & { src: string } => Boolean(logo.src));
  const repeatedLogos = [...visibleLogos, ...visibleLogos];

  return (
    <section className={cn("gallery-brand-strip", className)}>
      <div className="gallery-brand-strip__viewport">
        <div className="gallery-brand-strip__track">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="gallery-brand-strip__item">
              <Image
                alt={logo.alt ?? ""}
                className="gallery-brand-strip__image"
                height={logo.height ?? 96}
                src={logo.src}
                style={{ maxHeight: "90px", width: "auto", height: "auto" }}
                unoptimized
                width={logo.width ?? 160}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
