export type GalleryShowcaseTile = {
  id: string;
  src?: string;
  alt: string;
  className: string;
};

export type GalleryShowcaseSectionProps = {
  className?: string;
  intro?: string;
  tiles?: GalleryShowcaseTile[];
  showMoreLabel?: string;
  lightboxPreviousAriaLabel?: string;
  lightboxNextAriaLabel?: string;
  lightboxCloseAriaLabel?: string;
};
