import type { AboutPageContent } from "@/src/lib/api-types";

type VideoContent = AboutPageContent["video"];

export function AboutCompanyVideo({ content }: { content: VideoContent }) {
  if (!content.is_active || !content.video) return null;

  return (
    <section className="about-editorial about-editorial--video">
      <div className="about-editorial__inner">
        <div className="about-editorial__video-frame">
          <video autoPlay muted loop playsInline poster={content.poster ?? undefined} preload="auto">
            <source src={content.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
