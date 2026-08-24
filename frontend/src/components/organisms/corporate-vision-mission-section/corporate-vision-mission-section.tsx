import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

type CorporateVisionMissionItem = {
  title: string;
  text: string;
};

type CorporateVisionMissionSectionProps = {
  className?: string;
  items?: CorporateVisionMissionItem[];
};

export function CorporateVisionMissionSection({
  className,
  items: sectionItems = [],
}: CorporateVisionMissionSectionProps) {
  return (
    <section className={cn("corporate-vision-mission", className)}>
      <Container className="corporate-vision-mission__grid">
        {sectionItems.map((item) => (
          <article className="corporate-vision-mission__item" key={item.title}>
            <h3 className="corporate-vision-mission__title">{item.title}</h3>
            <p className="corporate-vision-mission__text">{item.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
