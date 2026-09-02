import Link from "next/link";
import type { AboutPageContent } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";

const Heading = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => <header className="about-editorial__heading"><p>{eyebrow}</p><div><h2>{title}</h2>{description ? <span>{description}</span> : null}</div></header>;

export function AboutEditorialSections({ content, locale }: { content: AboutPageContent; locale: SupportedLocale }) {
  return <>
    <section className="about-editorial about-editorial--group"><div className="about-editorial__inner"><div className="about-editorial__group-media">{content.group.image ? <picture>{content.group.image_mobile ? <source media="(max-width:767px)" srcSet={content.group.image_mobile} /> : null}<img alt="" src={content.group.image} /></picture> : <div>SUW</div>}</div><div className="about-editorial__group-copy"><p className="about-editorial__eyebrow">{content.group.eyebrow}</p><h2>{content.group.title}</h2><p>{content.group.description}</p><span>{content.group.supporting_label}</span></div></div></section>
    <section className="about-editorial about-editorial--why"><div className="about-editorial__inner"><Heading eyebrow={content.why.eyebrow} title={content.why.title} description={content.why.description}/><div className="about-editorial__items">{content.why.items.map((item,index)=><article key={item.id}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="about-editorial about-editorial--experience"><div className="about-editorial__inner"><Heading eyebrow={content.experience.eyebrow} title={content.experience.title} description={content.experience.description}/><div className="about-editorial__items">{content.experience.items.map((item,index)=><article key={item.id}><span>{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="about-editorial about-editorial--timeline"><div className="about-editorial__inner"><Heading eyebrow={content.timeline.eyebrow} title={content.timeline.title}/><div className="about-editorial__timeline">{content.timeline.items.map(item=><article key={item.id}><strong>{item.year_or_period}</strong>{item.title?<h3>{item.title}</h3>:null}<p>{item.description}</p></article>)}</div></div></section>
    <section className="about-editorial about-editorial--cta"><div className="about-editorial__inner"><p className="about-editorial__eyebrow">{content.cta.eyebrow}</p><div className="about-editorial__cta-grid"><h2>{content.cta.title}</h2><div><p>{content.cta.description}</p><Link href={withLocalePath(locale,content.cta.link||"/projects")}>{content.cta.text}<span>↗</span></Link></div></div></div></section>
  </>;
}
