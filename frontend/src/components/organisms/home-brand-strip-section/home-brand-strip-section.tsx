import Image from "next/image";

type HomeBrandStripLogo = {
  id: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};

type HomeBrandStripSectionProps = {
  eyebrow?: string;
  title?: string;
  logos?: HomeBrandStripLogo[];
};

export function HomeBrandStripSection({
  eyebrow,
  title,
  logos = [],
}: HomeBrandStripSectionProps) {
  const visibleLogos = logos.filter((logo): logo is HomeBrandStripLogo & { src: string } => Boolean(logo.src));
  const repeatedLogos = [...visibleLogos, ...visibleLogos];

  return (
    <section className="home-brand-strip">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-[30px]">
        <div className="home-brand-strip__heading">
          {eyebrow ? <p className="home-brand-strip__eyebrow">{eyebrow}</p> : null}
          {title ? <h2 className="home-brand-strip__title">{title}</h2> : null}
        </div>
      </div>

      <div className="home-brand-strip__viewport">
        <div className="home-brand-strip__track">
          {repeatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="home-brand-strip__item">
              <div className="home-brand-strip__logo-box">
                <Image
                  alt={logo.alt ?? ""}
                  className="home-brand-strip__image"
                  fill
                  sizes="(max-width: 767px) 112px, (max-width: 1023px) 136px, 152px"
                  src={logo.src}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
