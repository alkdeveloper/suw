"use client";

import { useParams } from "next/navigation";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

const sectionContent = {
  tr: {
    eyebrow: "FİKİRDEN TESLİMATA",
    titleLine1: "TEK SÜREÇ.",
    titleLine2: "SİZE GÖRE ŞEKİLLENDİ.",
    intro:
      "İlk ürün kararından son teslimata kadar tüm aşamalar, tek ve koordineli bir iş giyim programı kapsamında yönetilir.",
    steps: [
      {
        id: "01",
        title: "ÜRÜN SEÇİMİ",
        description:
          "Ekibiniz, çalışma ortamınız ve operasyonel ihtiyaçlarınıza göre doğru ürün grubu belirlenir.",
      },
      {
        id: "02",
        title: "TASARIM & MARKALAMA",
        description:
          "Renkler, logolar, nakış, baskı, etiket ve görsel detaylar kurumsal kimliğinize göre uyarlanır.",
      },
      {
        id: "03",
        title: "NUMUNE",
        description:
          "Üretim öncesinde kalıp, malzeme, renk ve markalama detaylarını doğrulamak için numuneler hazırlanır.",
      },
      {
        id: "04",
        title: "ÜRETİM",
        description:
          "Onaylanan ürünler, belirlenen teknik özellikler ve kalite standartları doğrultusunda üretime alınır.",
      },
      {
        id: "05",
        title: "KALİTE KONTROL",
        description:
          "Ürünler süreç boyunca tutarlılık, işçilik ve son görünüm açısından kontrol edilir.",
      },
      {
        id: "06",
        title: "TESLİMAT",
        description:
          "Tamamlanan siparişler proje gerekliliklerine göre hazırlanır, paketlenir ve teslim edilir.",
      },
    ] as ProcessStep[],
  },

  en: {
    eyebrow: "FROM IDEA TO DELIVERY",
    titleLine1: "ONE PROCESS.",
    titleLine2: "BUILT AROUND YOU.",
    intro:
      "From the first product decision to final delivery, every stage is managed as part of one coordinated workwear program.",
    steps: [
      {
        id: "01",
        title: "PRODUCT SELECTION",
        description:
          "We define the right product range according to your team, working environment and operational needs.",
      },
      {
        id: "02",
        title: "DESIGN & BRANDING",
        description:
          "Colors, logos, embroidery, prints, labels and visual details are adapted to your corporate identity.",
      },
      {
        id: "03",
        title: "SAMPLING",
        description:
          "Samples are prepared to confirm fit, materials, colors and branding before production.",
      },
      {
        id: "04",
        title: "PRODUCTION",
        description:
          "Approved products move into production with defined specifications and quality standards.",
      },
      {
        id: "05",
        title: "QUALITY CONTROL",
        description:
          "Products are checked throughout the process for consistency, workmanship and final presentation.",
      },
      {
        id: "06",
        title: "DELIVERY",
        description:
          "Finished orders are prepared, packed and delivered according to the agreed project requirements.",
      },
    ] as ProcessStep[],
  },
};

export function SuwProcessSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-process">
      <div className="suw-process__inner">
        <header className="suw-process__heading">
          <div>
            <p className="suw-process__eyebrow">
              {content.eyebrow}
            </p>

            <h2 className="suw-process__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>
          </div>

          <p className="suw-process__intro">
            {content.intro}
          </p>
        </header>

        <div className="suw-process__steps">
          {content.steps.map((step) => (
            <article className="suw-process__step" key={step.id}>
              <div className="suw-process__step-top">
                <span className="suw-process__number">
                  {step.id}
                </span>
                <span className="suw-process__line" />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}