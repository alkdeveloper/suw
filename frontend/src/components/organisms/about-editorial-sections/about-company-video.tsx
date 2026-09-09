"use client";

import { useRef, useState } from "react";
import type { AboutPageContent } from "@/src/lib/api-types";
import type { SupportedLocale } from "@/src/lib/locale";

type VideoContent = AboutPageContent["video"];

export function AboutCompanyVideo({ content, locale }: { content: VideoContent; locale: SupportedLocale }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!content.is_active) return null;

  const hasMedia = Boolean(content.video || content.poster);
  const playLabel = locale === "tr" ? "Üretim videosunu oynat" : "Play the production video";

  const playVideo = async () => {
    if (!videoRef.current || !content.video) return;
    await videoRef.current.play();
  };

  return (
    <section className="about-editorial about-editorial--video">
      <div className={`about-editorial__inner${hasMedia ? "" : " about-editorial__inner--text-only"}`}>
        <div className="about-editorial__video-copy">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        {hasMedia ? (
          <div className="about-editorial__video-frame">
            {content.video ? (
              <video
                ref={videoRef}
                controls={isPlaying}
                poster={content.poster ?? undefined}
                preload="metadata"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={content.video} type="video/mp4" />
              </video>
            ) : content.poster ? <img alt="" src={content.poster} /> : null}
            {content.video && !isPlaying ? (
              <button className="about-editorial__video-play" type="button" aria-label={playLabel} onClick={playVideo}>
                <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M11 8l13 8-13 8z" /></svg>
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
