import Image from "next/image";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { BrandsGlobalOperationsSectionProps } from "./brands-global-operations-section.types";

export function BrandsGlobalOperationsSection({
  className,
  description,
  locations = [],
  mapAlt = "",
  mapImageSrc,
  subtitle,
  title,
}: BrandsGlobalOperationsSectionProps) {
  return (
    <section className={cn("brands-global-operations", className)}>
      <Container className="max-w-[1512px] px-5 md:px-[30px]">
        {title ? <h2 className="brands-global-operations__title">{title}</h2> : null}

        {subtitle ? <p className="brands-global-operations__subtitle">{subtitle}</p> : null}

        {mapImageSrc ? (
          <div className="brands-global-operations__map-wrap">
            <Image alt={mapAlt} className="brands-global-operations__map" height={542} src={mapImageSrc} unoptimized width={1083} />

            <div className="brands-global-operations__markers">
              {locations.map((location) => (
                <button
                  aria-label={location.label}
                  className="brands-global-operations__marker"
                  key={location.id}
                  style={{ left: location.left, top: location.top }}
                  type="button"
                >
                  <span className="brands-global-operations__marker-cover" />
                  <span className="brands-global-operations__marker-dot" />
                  <span className="brands-global-operations__marker-pulse" />
                  <span className="brands-global-operations__marker-label">{location.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {description ? <p className="brands-global-operations__description">{description}</p> : null}
      </Container>
    </section>
  );
}
