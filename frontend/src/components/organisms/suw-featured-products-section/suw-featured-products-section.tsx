"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { resolveAssetUrl } from "@/src/lib/assets";
import { withLocalePath, type SupportedLocale } from "@/src/lib/locale";

type WorkEssentialItem = { id: number | string; image: string | null; alt: string; link: string; sort_order?: number };
type Props = { eyebrow?: string; title?: string; description?: string; ctaLabel?: string; ctaHref?: string; items?: WorkEssentialItem[]; locale?: SupportedLocale };

const fallbackItems: WorkEssentialItem[] = [
  { id: "fallback-1", image: "/images/mock/product-1.jpg", alt: "SUW workwear", link: "" },
  { id: "fallback-2", image: "/images/mock/product-2.jpg", alt: "SUW work jacket", link: "" },
  { id: "fallback-3", image: "/images/mock/product-3.jpg", alt: "SUW workwear essential", link: "" },
  { id: "fallback-4", image: "/images/mock/product-4.jpg", alt: "SUW softshell workwear", link: "" },
];
const fallbackContent = {
  tr: { eyebrow: "İŞİN TEMEL PARÇALARI", title: "PERFORMANS İÇİN GELİŞTİRİLDİ.", description: "Günlük çalışma temposunda hareket, dayanıklılık ve işlevsellik için geliştirilen temel iş giyim ürünleri.", cta: "ÜRÜNLERİ KEŞFET" },
  en: { eyebrow: "WORK ESSENTIALS", title: "BUILT TO PERFORM.", description: "Essential workwear developed for daily performance, movement and durability.", cta: "EXPLORE PRODUCTS" },
};

function isExternalLink(href: string) {
  return /^(?:https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function SuwFeaturedProductsSection({ eyebrow, title, description, ctaLabel, ctaHref = "/products", items = [], locale = "tr" }: Props) {
  const content = fallbackContent[locale];
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, moved: false, startX: 0, startScrollLeft: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const sourceItems = items.filter((item) => Boolean(item.image));
  const visibleItems = sourceItems.length > 0 ? sourceItems : fallbackItems;
  const carouselItems = useMemo(() => visibleItems.length > 1 ? [...visibleItems, ...visibleItems] : visibleItems, [visibleItems]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || visibleItems.length < 2 || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const loopWidth = track.scrollWidth / 2;
      track.scrollLeft += 0.45;
      if (track.scrollLeft >= loopWidth) track.scrollLeft -= loopWidth;
    }, 30);
    return () => window.clearInterval(timer);
  }, [isPaused, visibleItems.length]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, moved: false, startX: event.clientX, startScrollLeft: track.scrollLeft };
    setIsPaused(true);
    track.setPointerCapture(event.pointerId);
  };
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active || event.pointerType === "touch") return;
    if (Math.abs(event.clientX - dragRef.current.startX) > 6) dragRef.current.moved = true;
    track.scrollLeft = dragRef.current.startScrollLeft - (event.clientX - dragRef.current.startX);
  };
  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current.active = false;
    if (trackRef.current?.hasPointerCapture(event.pointerId)) trackRef.current.releasePointerCapture(event.pointerId);
    setIsPaused(false);
  };
  const resolveHref = (href: string) => isExternalLink(href) ? href : withLocalePath(locale, href || "/products");

  return (
    <section className="suw-featured-products">
      <div className="suw-featured-products__inner">
        <header className="suw-featured-products__heading">
          <div><p className="suw-featured-products__eyebrow">{eyebrow || content.eyebrow}</p><h2 className="suw-featured-products__title">{title || content.title}</h2></div>
          <p className="suw-featured-products__intro">{description || content.description}</p>
        </header>
      </div>
      <div aria-label={eyebrow || content.eyebrow} className={`suw-featured-products__carousel${visibleItems.length === 1 ? " suw-featured-products__carousel--single" : ""}`} data-carousel={visibleItems.length > 1 ? "active" : "static"} onBlur={() => setIsPaused(false)} onClickCapture={(event) => { if (dragRef.current.moved) event.preventDefault(); }} onFocus={() => setIsPaused(true)} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onPointerCancel={handlePointerEnd} onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerEnd} ref={trackRef} role="region">
        {carouselItems.map((item, index) => {
          const image = <img alt={item.alt || content.eyebrow} className="suw-featured-products__image" draggable={false} src={resolveAssetUrl(item.image || "")} />;
          return <article className="suw-featured-products__card" key={`${item.id}-${index}`}>{item.link ? (isExternalLink(item.link) ? <a className="suw-featured-products__card-link" href={resolveHref(item.link)} rel="noreferrer" target="_blank">{image}</a> : <Link className="suw-featured-products__card-link" href={resolveHref(item.link)}>{image}</Link>) : image}</article>;
        })}
      </div>
      <div className="suw-featured-products__inner suw-featured-products__cta-row"><Link className="suw-featured-products__cta" href={resolveHref(ctaHref)}><span>{ctaLabel || content.cta}</span><span aria-hidden="true">↗</span></Link></div>
    </section>
  );
}
