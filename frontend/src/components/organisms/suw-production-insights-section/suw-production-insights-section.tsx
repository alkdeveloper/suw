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
    title: "İYİ İŞ GİYİMİ DETAYLARDA BAŞLAR.",
    description: "Doğru kumaştan uygulama tekniğine, kalite kontrolden sevkiyata kadar her aşama ürünün performansını belirler. SUW üretim sürecinin temel bileşenlerini keşfedin.",
    showDetail: "detayı göster",
    showFront: "ön yüzü göster",
    items: [
      ["KUMAŞ SEÇİMİ", "İş giyiminde performans doğru kumaş seçimiyle başlar.", "Dokuma ve örme kumaş yapıları, lif türleri, gramaj, dayanıklılık ve kullanım koşulları ürünün performansını doğrudan etkiler. Kumaş seçimi çalışma ortamına ve ürünün kullanım amacına göre yapılır."],
      ["ÜRÜN ÖZELLİKLERİ", "Çalışma koşullarına göre geliştirilen fonksiyonel detaylar.", "Cep çözümleri, reflektif detaylar, ergonomik kesimler, nefes alabilirlik, su iticilik ve hareket özgürlüğü gibi özellikler ürünün kullanım senaryosuna göre belirlenir."],
      ["BASKI TEKNİKLERİ", "Kurumsal kimliğe ve kumaşa uygun baskı çözümleri.", "Transfer, serigrafi ve diğer tekstil baskı teknikleri; kumaş yapısı, kullanım yoğunluğu ve görsel gereksinimlere göre seçilir."],
      ["NAKIŞ UYGULAMALARI", "Dayanıklı ve profesyonel kurumsal kimlik uygulamaları.", "Logo ve marka uygulamalarında kullanılan nakış tekniği, iplik seçimi, yoğunluk ve uygulama alanı ürün yapısına göre planlanır."],
      ["PAKETLEME & SEVKİYAT", "Ürünün doğru şekilde hazırlanması ve teslim edilmesi.", "Katlama, etiketleme, bireysel paketleme, koli düzeni ve sevkiyat hazırlığı müşterinin teslimat gereksinimlerine göre yönetilir."],
      ["KALİTE KONTROL", "Üretimin her aşamasında sistematik kontrol.", "Kumaş, ölçü, dikiş, baskı, nakış ve final ürün kontrolleri üretim süreci boyunca gerçekleştirilerek ürünlerin belirlenen standartlara uygunluğu doğrulanır."],
    ],
  },
  en: {
    eyebrow: "PRODUCTION INSIGHTS",
    title: "GREAT WORKWEAR STARTS WITH THE DETAILS.",
    description: "From fabric selection and application techniques to quality control and delivery, every stage influences product performance. Explore the key components of the SUW production process.",
    showDetail: "show details",
    showFront: "show front",
    items: [
      ["FABRIC SELECTION", "Workwear performance begins with the right fabric.", "Woven and knitted structures, fibre composition, weight, durability and working conditions directly influence product performance. Fabrics are selected around the working environment and intended use."],
      ["PRODUCT FEATURES", "Functional details developed around real working conditions.", "Pocket systems, reflective details, ergonomic cuts, breathability, water repellency and freedom of movement are defined according to each product's use case."],
      ["PRINTING TECHNIQUES", "Print solutions suited to the fabric and corporate identity.", "Transfer, screen printing and other textile printing methods are selected according to fabric structure, frequency of use and visual requirements."],
      ["EMBROIDERY", "Durable, professional applications for corporate identity.", "Embroidery technique, thread selection, stitch density and placement are planned around the garment structure and the requirements of each logo application."],
      ["PACKAGING & DELIVERY", "Products prepared and delivered with the right process.", "Folding, labelling, individual packaging, carton organisation and shipment preparation are managed according to the customer's delivery requirements."],
      ["QUALITY CONTROL", "Systematic inspection throughout production.", "Fabric, measurements, stitching, printing, embroidery and finished products are inspected throughout production to confirm compliance with defined standards."],
    ],
  },
} as const;

const fallbackImages = [
  "/images/mock/industry-manufacturing.jpg",
  "/images/mock/industry-automotive.jpg",
  "/images/mock/industry-construction.jpg",
  "/images/mock/industry-logistics.jpg",
  "/images/mock/industry-corporate.jpg",
  "/images/mock/industry-hospitality.jpg",
];

export function SuwProductionInsightsSection({ eyebrow, title, description, items = [], locale = "tr" }: Props) {
  const [flippedId, setFlippedId] = useState<string | number | null>(null);
  const content = fallbackContent[locale];
  const fallbackItems: ProductionInsightItem[] = content.items.map((item, index) => ({
    id: `fallback-${index}`,
    image: fallbackImages[index],
    title: item[0],
    short_description: item[1],
    detail_text: item[2],
  }));
  const visibleItems = items.length > 0 ? items : fallbackItems;
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
            <p className="suw-production-insights__eyebrow">{eyebrow || content.eyebrow}</p>
            <h2 className="suw-production-insights__title">{title || content.title}</h2>
          </div>
          <p className="suw-production-insights__intro">{description || content.description}</p>
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
