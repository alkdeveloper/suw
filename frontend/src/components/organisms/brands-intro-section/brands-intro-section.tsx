import { cn } from "@/src/lib/cn";

import type { BrandsIntroSectionProps } from "./brands-intro-section.types";

export function BrandsIntroSection({
  className,
  text,
}: BrandsIntroSectionProps) {
  return (
    <section className={cn("brands-intro", className)}>
      {text ? <p className="brands-intro__text">{text}</p> : null}
    </section>
  );
}
