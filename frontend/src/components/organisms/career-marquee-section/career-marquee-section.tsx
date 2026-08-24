import { cn } from "@/src/lib/cn";

import type { CareerMarqueeSectionProps } from "./career-marquee-section.types";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="career-marquee__arrow" fill="none" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 0.5H49C49.8284 0.5 50.5 1.17157 50.5 2V49C50.5 49.8284 49.8284 50.5 49 50.5H43.7275C42.8991 50.5 42.2275 49.8284 42.2275 49V20.6562C42.2272 18.4295 39.5349 17.3144 37.96 18.8887L7.61719 49.2197C7.03136 49.8052 6.08176 49.8054 5.49609 49.2197L1.76758 45.4912C1.18197 44.9053 1.18269 43.9558 1.76855 43.3701L32.1084 13.041C33.6838 11.4662 32.5683 8.77248 30.3408 8.77246H2C1.17157 8.77246 0.5 8.10089 0.5 7.27246V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
        stroke="#001111"
        strokeOpacity="0.32"
      />
    </svg>
  );
}

function MarqueeRow({
  items,
  variant,
}: {
  items: string[];
  variant: "top" | "bottom";
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="career-marquee__viewport">
      <div className={cn("career-marquee__track", variant === "top" ? "career-marquee__track--top" : "career-marquee__track--bottom")}>
        {duplicatedItems.map((item, index) => (
          <div key={`${variant}-${item}-${index}`} className="career-marquee__item">
            <span className={cn("career-marquee__text", variant === "top" ? "career-marquee__text--outline" : "career-marquee__text--filled")}>
              {item}
            </span>
            <ArrowIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CareerMarqueeSection({
  className,
  topRowItems = [],
  bottomRowItems = [],
}: CareerMarqueeSectionProps) {
  if (topRowItems.length === 0 && bottomRowItems.length === 0) {
    return null;
  }

  return (
    <section className={cn("career-marquee", className)}>
      {topRowItems.length > 0 ? <MarqueeRow items={topRowItems} variant="top" /> : null}
      {bottomRowItems.length > 0 ? <MarqueeRow items={bottomRowItems} variant="bottom" /> : null}
    </section>
  );
}
