import { cn } from "@/src/lib/cn";

type CorporateBrandGalleryItem = {
  id: string;
  imageSrc?: string;
  label: string;
  imageAlt: string;
};

type CorporateBrandGallerySectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  items?: CorporateBrandGalleryItem[];
};

export function CorporateBrandGallerySection({
  className,
  eyebrow,
  title,
  items = [],
}: CorporateBrandGallerySectionProps) {
  const filteredItems = items.filter((item): item is CorporateBrandGalleryItem & { imageSrc: string } => Boolean(item.imageSrc));

  return (
    <section className={cn("corporate-brand-gallery", className)}>
      <div className="corporate-brand-gallery__inner">
        {(eyebrow || title) ? (
          <div className="corporate-brand-gallery__heading">
            {eyebrow ? <p className="corporate-brand-gallery__eyebrow whitespace-pre-line">{eyebrow}</p> : null}
            {title ? <h2 className="corporate-brand-gallery__title whitespace-pre-line">{title}</h2> : null}
          </div>
        ) : null}

        <div className="corporate-brand-gallery__grid">
          {filteredItems.map((item) => (
            <article className="corporate-brand-gallery__card" key={item.id}>
              <img
                alt={item.imageAlt}
                className="corporate-brand-gallery__image"
                height={454}
                src={item.imageSrc}
                width={411}
              />
              <div aria-hidden="true" className="corporate-brand-gallery__overlay" />
              <span className="corporate-brand-gallery__label whitespace-pre-line">{item.label.replace(/\\n/g, '\n')}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
