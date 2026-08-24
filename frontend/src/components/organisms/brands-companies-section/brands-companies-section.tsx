import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandsCompaniesSectionProps } from "./brands-companies-section.types";

export function BrandsCompaniesSection({
  className,
  items = [],
}: BrandsCompaniesSectionProps) {
  return (
    <section className={cn("brands-companies", className)}>
      <div className="brands-companies__list">
        {items.map((item) => (
          <article className="brands-companies__row" key={item.id}>
            <Container className="max-w-[1260px] px-5 md:px-[30px]">
              {item.href ? (
                <Link className="brands-companies__row-inner brands-companies__row-link" href={item.href}>
                  <div className="brands-companies__logo-wrap">
                    {item.logoSrc ? (
                      <Image
                        alt={item.logoAlt}
                        className="brands-companies__logo"
                        height={240}
                        src={item.logoSrc}
                        unoptimized
                        width={240}
                      />
                    ) : (
                      <h3 className="brands-companies__title">{item.title || item.logoAlt}</h3>
                    )}
                  </div>

                  <p className="brands-companies__description">{item.description}</p>
                </Link>
              ) : (
                <div className="brands-companies__row-inner">
                  <div className="brands-companies__logo-wrap">
                    {item.logoSrc ? (
                      <Image
                        alt={item.logoAlt}
                        className="brands-companies__logo"
                        height={240}
                        src={item.logoSrc}
                        unoptimized
                        width={240}
                      />
                    ) : (
                      <h3 className="brands-companies__title">{item.title || item.logoAlt}</h3>
                    )}
                  </div>

                  <p className="brands-companies__description">{item.description}</p>
                </div>
              )}
            </Container>
          </article>
        ))}
      </div>
    </section>
  );
}
