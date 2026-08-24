import { cn } from "@/src/lib/cn";

import type { BrandsStorySectionProps } from "./brands-story-section.types";

export function BrandsStorySection({
  className,
  eyebrow,
  text,
}: BrandsStorySectionProps) {
  return (
    <section className={cn("brands-story", className)}>
      {eyebrow ? <p className="brands-story__eyebrow">{eyebrow}</p> : null}

      {text ? <p className="brands-story__text">{text}</p> : null}
    </section>
  );
}
