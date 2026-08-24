const arrowIcon = "/images/figma-assets/home-operations-arrow.svg";

type HomeOperationsItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href?: string;
};

type HomeOperationsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  mapImageSrc?: string;
  mapAlt?: string;
  items?: HomeOperationsItem[];
};

export function HomeOperationsSection({
  eyebrow,
  title,
  description,
  mapImageSrc,
  mapAlt = "Global operations network map",
  items = [],
}: HomeOperationsSectionProps) {
  return (
    <section className="home-operations">
      <div className="mx-auto w-full max-w-[1512px] px-5 md:px-[30px] lg:px-[120px]">
        <div className="home-operations__layout">
          <div className="home-operations__content">
            {eyebrow ? <p className="home-operations__eyebrow">{eyebrow}</p> : null}
            {title ? <h2 className="home-operations__title">{title}</h2> : null}
            {description ? <p className="home-operations__description">{description}</p> : null}

            <div className="home-operations__panel">
              <div className="home-operations__list">
                {items.filter((item): item is HomeOperationsItem & { icon: string } => Boolean(item.icon)).map((item) => {
                  const content = (
                    <>
                    <div className="home-operations__item-icon">
                      <img alt="" className="home-operations__item-icon-image" src={item.icon} />
                    </div>

                    <div className="home-operations__item-copy">
                      <h3 className="home-operations__item-title">{item.title}</h3>
                      <p className="home-operations__item-description">{item.description}</p>
                    </div>

                    {item.href ? (
                      <span aria-hidden="true" className="home-operations__item-arrow">
                        <img alt="" src={arrowIcon} />
                      </span>
                    ) : null}
                    </>
                  );

                  return item.href ? (
                    <a className="home-operations__item" href={item.href} key={item.id} rel="noreferrer" target="_blank">
                      {content}
                    </a>
                  ) : (
                    <article className="home-operations__item" key={item.id}>
                      {content}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="home-operations__map-wrap">
            {mapImageSrc ? <img alt={mapAlt} className="home-operations__map" src={mapImageSrc} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
