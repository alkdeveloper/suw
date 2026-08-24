import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandDetailFeatureContactItem, BrandDetailFeatureSectionProps } from "./brand-detail-feature-section.types";

function PersonIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 19C22.3137 19 25 16.3137 25 13C25 9.68629 22.3137 7 19 7C15.6863 7 13 9.68629 13 13C13 16.3137 15.6863 19 19 19Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M8.5 30.5C10.4763 25.7862 14.382 23.5 19 23.5C23.618 23.5 27.5237 25.7862 29.5 30.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 13.5H37C38.1046 13.5 39 14.3954 39 15.5V30.5C39 31.6046 38.1046 32.5 37 32.5H9C7.89543 32.5 7 31.6046 7 30.5V15.5C7 14.3954 7.89543 13.5 9 13.5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 15L23 25L37.5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
      <circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 19H30.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M19 7C21.756 10.2005 23.3225 14.2484 23.3225 19C23.3225 23.7516 21.756 27.7995 19 31C16.244 27.7995 14.6775 23.7516 14.6775 19C14.6775 14.2484 16.244 10.2005 19 7Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ContactIcon({ icon }: Pick<BrandDetailFeatureContactItem, "icon">) {
  if (icon === "email") return <EmailIcon />;
  if (icon === "website") return <WebsiteIcon />;

  return <PersonIcon />;
}

export function BrandDetailFeatureSection({
  bottomDescription,
  buttonHref,
  buttonLabel,
  className,
  contacts,
  imageAlt,
  imageHeight,
  imageSrc,
  imageWidth,
  topDescription,
}: BrandDetailFeatureSectionProps) {
  return (
    <section className={cn("brand-detail-feature", className)}>
      <Container className="brand-detail-feature__container">
        {topDescription ? <p className="brand-detail-feature__description">{topDescription}</p> : null}

        {imageSrc ? (
          <div className="brand-detail-feature__image-wrap">
            <Image
              alt={imageAlt}
              className="brand-detail-feature__image"
              height={imageHeight}
              src={imageSrc}
              unoptimized
              width={imageWidth}
            />
          </div>
        ) : null}

        {buttonHref && buttonLabel ? (
          <div className="brand-detail-feature__button-wrap">
            <Link className="brand-detail-feature__button" href={buttonHref}>
              <span>{buttonLabel}</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 2L9.5 12L1.5 22" stroke="#223035" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
            </Link>
          </div>
        ) : null}

        {bottomDescription ? <p className="brand-detail-feature__description brand-detail-feature__description--bottom">{bottomDescription}</p> : null}

        <div className="brand-detail-feature__contacts">
          {contacts.map((item) => {
            const content = (
              <>
                <span className="brand-detail-feature__contact-icon">
                  <ContactIcon icon={item.icon} />
                </span>
                <span className="brand-detail-feature__contact-label">{item.label}</span>
              </>
            );

            return item.href ? (
              <Link className="brand-detail-feature__contact" href={item.href} key={item.id}>
                {content}
              </Link>
            ) : (
              <div className="brand-detail-feature__contact" key={item.id}>
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
