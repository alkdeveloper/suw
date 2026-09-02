import { resolveAssetUrl } from "@/src/lib/assets";
import Link from "next/link";

type HomeActivityItem = {
  id: string;
  imageSrc?: string;
  label: string;
  imageAlt: string;
  description?: string;
  href?: string;
};

type HomeActivitySliderSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  locale?: "tr" | "en";
  items?: HomeActivityItem[];
};

export function HomeActivitySliderSection({
  eyebrow,
  title,
  description,
  locale = "tr",
  items = [],
}: HomeActivitySliderSectionProps) {
  const sectionContent = {
    tr: {
      eyebrow: "ÜRÜN KATEGORİLERİ",
      title: "HER İŞ İÇİN TASARLANDI.",
      intro:
        "Performans, koruma ve günlük kullanım ihtiyaçları için geliştirilen profesyonel iş giyimi çözümlerini keşfedin.",
      mockItems: [
        {
          id: "mock-1",
          label: "İŞ GİYİMİ",
          imageAlt: "İş Giyimi",
          imageSrc: "/images/mock/workwear.jpg",
        },
        {
          id: "mock-2",
          label: "DIŞ GİYİM",
          imageAlt: "Dış Giyim",
          imageSrc: "/images/mock/outerwear.jpg",
        },
        {
          id: "mock-3",
          label: "ÜST GİYİM",
          imageAlt: "Üst Giyim",
          imageSrc: "/images/mock/topwear.jpg",
        },
        {
          id: "mock-4",
          label: "AKSESUAR",
          imageAlt: "Aksesuar",
          imageSrc: "/images/mock/accessories.jpg",
        },
      ] as HomeActivityItem[],
    },
    en: {
      eyebrow: "PRODUCT CATEGORIES",
      title: "BUILT FOR EVERY JOB.",
      intro:
        "Explore professional workwear developed around performance, protection and everyday usability.",
      mockItems: [
        {
          id: "mock-1",
          label: "WORKWEAR",
          imageAlt: "Workwear",
          imageSrc: "/images/mock/workwear.jpg",
        },
        {
          id: "mock-2",
          label: "OUTERWEAR",
          imageAlt: "Outerwear",
          imageSrc: "/images/mock/outerwear.jpg",
        },
        {
          id: "mock-3",
          label: "TOPWEAR",
          imageAlt: "Topwear",
          imageSrc: "/images/mock/topwear.jpg",
        },
        {
          id: "mock-4",
          label: "ACCESSORIES",
          imageAlt: "Accessories",
          imageSrc: "/images/mock/accessories.jpg",
        },
      ] as HomeActivityItem[],
    },
  };

  const content = sectionContent[locale];
  const sourceItems = items.length > 0 ? items : content.mockItems;

  const visibleItems = sourceItems
    .filter(
      (item): item is HomeActivityItem & { imageSrc: string } =>
        Boolean(item.imageSrc),
    )
    .slice(0, 4);

  return (
    <section className="home-activity-slider">
      <div className="home-activity-slider__inner">
        <header className="home-activity-slider__heading">
          <div>
            <p className="home-activity-slider__eyebrow">
              {eyebrow || content.eyebrow}
            </p>

            <h2 className="home-activity-slider__title">
              {title || content.title}
            </h2>
          </div>

          <p className="home-activity-slider__intro">
            {description || content.intro}
          </p>
        </header>

        <div className="home-activity-slider__grid">
          {visibleItems.map((item, index) => (
            <article
              className={`home-activity-slider__card home-activity-slider__card--${index + 1}`}
              key={item.id}
            >
              <img
                alt={item.imageAlt}
                className="home-activity-slider__image"
                src={resolveAssetUrl(item.imageSrc)}
              />

              <div
                aria-hidden="true"
                className="home-activity-slider__overlay"
              />

              <div className="home-activity-slider__card-content">
                <span className="home-activity-slider__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="home-activity-slider__card-bottom">
                  <div>
                    <h3 className="home-activity-slider__label">{item.label}</h3>
                    {item.description ? <p className="home-activity-slider__card-description">{item.description}</p> : null}
                  </div>

                  <span
                    aria-hidden="true"
                    className="home-activity-slider__arrow"
                  >
                    ↗
                  </span>
                </div>
              </div>
              {item.href ? <Link aria-label={item.label} className="home-activity-slider__card-link" href={item.href} /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
