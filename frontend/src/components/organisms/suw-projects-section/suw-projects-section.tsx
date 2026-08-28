"use client";

import { useParams } from "next/navigation";

import { resolveAssetUrl } from "@/src/lib/assets";

type ProjectItem = {
  id: string;
  client: string;
  title: string;
  imageSrc: string;
  type: string;
};

const sectionContent = {
  tr: {
    eyebrow: "SEÇİLİ PROJELER",
    titleLine1: "İŞ GİYİMİ",
    titleLine2: "SAHADA.",
    intro:
      "Kurumsal üniformalardan teknik saha programlarına kadar her proje; ekibin kimliği, operasyonu ve ihtiyaçları doğrultusunda geliştirilir.",
    projects: [
      {
        id: "01",
        client: "PROJE 01",
        title: "KURUMSAL İŞ GİYİMİ",
        imageSrc: "/images/mock/project-1.jpg",
        type: "Kurumsal Üniforma Programı",
      },
      {
        id: "02",
        client: "PROJE 02",
        title: "SAHA İŞ GİYİMİ",
        imageSrc: "/images/mock/project-2.jpg",
        type: "Teknik İş Giyimi Programı",
      },
      {
        id: "03",
        client: "PROJE 03",
        title: "ÖZEL KOLEKSİYON",
        imageSrc: "/images/mock/project-3.jpg",
        type: "Özel Tasarım & Üretim",
      },
    ] as ProjectItem[],
  },

  en: {
    eyebrow: "SELECTED PROJECTS",
    titleLine1: "WORKWEAR",
    titleLine2: "IN PRACTICE.",
    intro:
      "From corporate uniforms to technical field programs, each project is developed around the identity, operations and needs of the team.",
    projects: [
      {
        id: "01",
        client: "PROJECT 01",
        title: "CORPORATE WORKWEAR",
        imageSrc: "/images/mock/project-1.jpg",
        type: "Corporate Uniform Program",
      },
      {
        id: "02",
        client: "PROJECT 02",
        title: "FIELD WORKWEAR",
        imageSrc: "/images/mock/project-2.jpg",
        type: "Technical Workwear Program",
      },
      {
        id: "03",
        client: "PROJECT 03",
        title: "CUSTOM COLLECTION",
        imageSrc: "/images/mock/project-3.jpg",
        type: "Custom Design & Production",
      },
    ] as ProjectItem[],
  },
};

export function SuwProjectsSection() {
  const params = useParams();
  const locale = params?.locale === "en" ? "en" : "tr";
  const content = sectionContent[locale];

  return (
    <section className="suw-projects">
      <div className="suw-projects__inner">
        <header className="suw-projects__heading">
          <div>
            <p className="suw-projects__eyebrow">
              {content.eyebrow}
            </p>

            <h2 className="suw-projects__title">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>
          </div>

          <p className="suw-projects__intro">
            {content.intro}
          </p>
        </header>

        <div className="suw-projects__grid">
          {content.projects.map((project, index) => (
            <article
              className={`suw-projects__card suw-projects__card--${index + 1}`}
              key={project.id}
            >
              <img
                alt={project.title}
                className="suw-projects__image"
                src={resolveAssetUrl(project.imageSrc)}
              />

              <div
                aria-hidden="true"
                className="suw-projects__overlay"
              />

              <div className="suw-projects__content">
                <div className="suw-projects__top">
                  <span>{project.id}</span>
                  <span>{project.client}</span>
                </div>

                <div className="suw-projects__bottom">
                  <div>
                    <p className="suw-projects__type">
                      {project.type}
                    </p>

                    <h3>
                      {project.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="suw-projects__arrow"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
