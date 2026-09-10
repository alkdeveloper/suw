import type { AboutPageContent } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
import { AboutCompanyVideo } from "./about-company-video";

const WhyIcon = ({ index }: { index: number }) => {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons = [
    <><path d="M32 6l7 5 9-1 3 8 8 4-2 9 4 8-7 6-1 9-9 1-7 6-7-6-9-1-1-9-7-6 4-8-2-9 8-4 3-8 9 1 7-5z"/><path d="M25 34l8 8 16-18"/></>,
    <><path d="M14 50l5-15L46 8l10 10-27 27-15 5z"/><path d="M39 15l10 10M18 36l11 9M43 48h15M48 43v10M54 38v20"/></>,
    <><path d="M13 35a19 19 0 0138 0v14H39V36h12M13 36h12v13H13z"/><path d="M39 53c0 5-4 8-9 8h-4M23 29a9 9 0 0118 0"/></>,
    <><rect x="9" y="14" width="46" height="36" rx="3"/><path d="M9 23h46M19 56h26M26 50v6M38 50v6"/><path d="M23 35h18M36 30l6 5-6 5"/></>,
    <><path d="M9 25l23-12 23 12-23 12L9 25z"/><path d="M9 25v24l23 12 23-12V25M32 37v24M20 19l23 12"/><path d="M45 8h12v12M57 8L45 20"/></>,
  ];

  return <svg aria-hidden="true" viewBox="0 0 64 68" {...common}>{icons[index] ?? icons[0]}</svg>;
};

export function AboutEditorialSections({ content, locale }: { content: AboutPageContent; locale: SupportedLocale }) {
  void locale;
  return <>
    <section className="about-editorial about-editorial--group">
      <div className="about-editorial__inner">
        <div className="about-editorial__group-media">
          {content.group.image ? <img alt="" src={content.group.image} style={{ objectPosition: `center ${content.group.image_position}` }} /> : null}
        </div>
        <div className="about-editorial__group-copy">
          {content.group.title ? <h2>{content.group.title}</h2> : null}
          {content.group.description ? <p>{content.group.description}</p> : null}
        </div>
      </div>
    </section>
    <AboutCompanyVideo content={content.video} />
    <section className="about-editorial about-editorial--timeline"><div className="about-editorial__inner">{content.timeline.title ? <header className="about-editorial__timeline-heading"><h2>{content.timeline.title}</h2></header> : null}<div className="about-editorial__timeline-list">{content.timeline.items.map((item,index)=><article className={index%2===0?"about-editorial__timeline-item--left":"about-editorial__timeline-item--right"} key={item.id} style={{gridRow:index+1}}><time>{item.year}</time><p>{item.description}</p></article>)}</div></div></section>
    <section className="about-editorial about-editorial--why"><div className="about-editorial__inner"><header className="about-editorial__why-heading"><h2>{content.why.title}</h2></header><div className="about-editorial__items">{content.why.items.slice(0,5).map((item,index)=><article key={item.id}><WhyIcon index={index}/><p>{item.description}</p></article>)}</div></div></section>
  </>;
}
