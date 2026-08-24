import { cn } from "@/src/lib/cn";

import type { BrandsQuoteSectionProps } from "./brands-quote-section.types";

export function BrandsQuoteSection({
  className,
  text,
}: BrandsQuoteSectionProps) {
  return (
    <section className={cn("brands-quote", className)}>
      {text ? <p className="brands-quote__text">{text}</p> : null}
    </section>
  );
}
