export type MiniHeroProps = {
  title: string;
  className?: string;
  fillViewport?: boolean;
  /** Poster / statik arka plan (video yokken veya video poster olarak). */
  backgroundImageSrc?: string;
  /** Arka plan görselinin üzerinde oynatılır (ör. markalar hero MP4). */
  videoSrc?: string;
  backgroundMaskSrc?: string;
  glowImageSrc?: string;
  subtitle?: string;
  showScrollIndicator?: boolean;
  variant?: "default" | "brands";
  contentAlignment?: "center" | "bottom-left" | "bottom-right" | "left-center";
};
