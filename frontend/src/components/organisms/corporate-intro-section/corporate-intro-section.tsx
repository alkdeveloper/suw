import Image from "next/image";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

type CorporateIntroSectionProps = {
  className?: string;
  eyebrow?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function CorporateIntroSection({
  className,
  eyebrow,
  text,
  imageSrc,
  imageAlt = "ALK Group production",
}: CorporateIntroSectionProps) {
  return (
    <section className={cn("corporate-intro", className)}>
      <Container className="corporate-intro__container !max-w-[1424px] md:!px-10 lg:!px-[52px]">
        {imageSrc ? (
          <div className="corporate-intro__image-wrap">
            <Image
              alt={imageAlt}
              className="corporate-intro__image"
              height={534}
              src={imageSrc}
              unoptimized
              width={411}
            />
            <div aria-hidden="true" className="corporate-intro__image-overlay" />
          </div>
        ) : null}

        <div className="corporate-intro__content">
          {eyebrow ? <p className="corporate-intro__eyebrow">{eyebrow}</p> : null}
          {text ? <p className="corporate-intro__text">{text}</p> : null}
        </div>
      </Container>
    </section>
  );
}
