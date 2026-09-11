"use client";

import { useState, type KeyboardEvent } from "react";
import { resolveAssetUrl } from "@/src/lib/assets";
import type { SupportedLocale } from "@/src/lib/locale";

type ProductionInsightItem = {
  id: number | string;
  image: string | null;
  title: string;
  short_description: string;
  detail_text: string;
  sort_order?: number;
};

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ProductionInsightItem[];
  locale?: SupportedLocale;
};

const fallbackContent = {
  tr: {
    eyebrow: "ÜRETİM BİLGİSİ",
    showDetail: "detayı göster",
    showFront: "ön yüzü göster",
  },
  en: {
    eyebrow: "PRODUCTION INSIGHTS",
    showDetail: "show details",
    showFront: "show front",
  },
} as const;

export function SuwProductionInsightsSection({ title, description, items = [], locale = "tr" }: Props) {
  const [flippedId, setFlippedId] = useState<string | number | null>(null);
  const content = fallbackContent[locale];
  const visibleItems = items;
  if (!title && !description && visibleItems.length === 0) return null;
  const toggleCard = (id: string | number) => setFlippedId((current) => current === id ? null : id);
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string | number) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleCard(id);
  };

  return (
    <section className="suw-production-insights">
      <div className="suw-production-insights__inner">
        <header className="suw-production-insights__heading">
          <div>
            {title ? <h2 className="suw-production-insights__title">{title}</h2> : null}
          </div>
          {description ? <p className="suw-production-insights__intro">{description}</p> : null}
        </header>

        <div className="suw-production-insights__grid">
          {visibleItems.map((item, index) => {
            const isFlipped = flippedId === item.id;
            return (
              <article className={`suw-production-insights__card${isFlipped ? " suw-production-insights__card--flipped" : ""}`} key={item.id}>
                <button
                  aria-label={`${item.title} — ${isFlipped ? content.showFront : content.showDetail}`}
                  aria-pressed={isFlipped}
                  className="suw-production-insights__flip-button"
                  onClick={() => {
                    const hasDesktopHover = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches;
                    if (!hasDesktopHover) toggleCard(item.id);
                  }}
                  onKeyDown={(event) => handleKeyDown(event, item.id)}
                  type="button"
                >
                  <span className="suw-production-insights__flip-inner">
                    <span className="suw-production-insights__face suw-production-insights__face--front">
                      {item.image ? <img alt={item.title} className="suw-production-insights__image" src={resolveAssetUrl(item.image)} /> : <span aria-hidden="true" className="suw-production-insights__image-placeholder" />}
                      <span className="suw-production-insights__front-content">
                        <span className="suw-production-insights__number">{String(index + 1).padStart(2, "0")}</span>
                        <span className="suw-production-insights__card-copy">
                          <strong>{item.title}</strong>
                          <span>{item.short_description}</span>
                        </span>
                        <span aria-hidden="true" className="suw-production-insights__indicator">↗</span>
                      </span>
                    </span>
                    <span className="suw-production-insights__face suw-production-insights__face--back">
                      <span className="suw-production-insights__back-accent" />
                      <span className="suw-production-insights__back-content">
                        <span className="suw-production-insights__number">{String(index + 1).padStart(2, "0")}</span>
                        <strong>{item.title}</strong>
                        <span className="suw-production-insights__detail-text">{item.detail_text}</span>
                      </span>
                      <span aria-hidden="true" className="suw-production-insights__back-indicator">−</span>
                    </span>
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
