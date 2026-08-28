import { cn } from "@/src/lib/cn";

import type { ContactMapHeroProps } from "./contact-map-hero.types";

export function ContactMapHero({
  className,
  src,
  title,
}: ContactMapHeroProps) {
  if (!src) {
    return null;
  }

  return (
    <section className={cn("contact-map-hero", className)}>
      <iframe
        className="contact-map-hero__map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title={title}
      />
      <div aria-hidden="true" className="contact-map-hero__overlay" />
    </section>
  );
}
