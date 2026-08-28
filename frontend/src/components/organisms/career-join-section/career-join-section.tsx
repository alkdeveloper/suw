import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { CareerJoinSectionProps } from "./career-join-section.types";

export function CareerJoinSection({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  className,
  imageSrc,
}: CareerJoinSectionProps) {
  return (
    <section className={cn("career-join", className)}>
      <Container>
        <div className="career-join__layout">
          {imageSrc ? (
            <div className="career-join__media">
              <Image
                alt="ALK Group career"
                className="career-join__image"
                height={374}
                priority
                src={imageSrc}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 1200px, 538px"
                width={538}
              />
              <div className="career-join__image-overlay" />
            </div>
          ) : null}

          <div className="career-join__content">
            {eyebrow ? <p className="career-join__eyebrow">{eyebrow}</p> : null}

            {title ? <h2 className="career-join__title">{title}</h2> : null}

            {ctaHref && ctaLabel ? (
              <Link className="career-join__cta" href={ctaHref}>
                <span>{ctaLabel}</span>
                <Image alt="" className="career-join__cta-icon" height={24} src={resolvePublicAssetPath("/images/career-join/arrow-right.svg")} width={12} />
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
import { resolvePublicAssetPath } from "@/src/lib/assets";
