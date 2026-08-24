export type BrandDetailGalleryImage = {
  alt: string;
  height: number;
  objectPosition?: string;
  src?: string;
  width: number;
};

export type BrandDetailGallerySectionProps = {
  buttonHref?: string;
  buttonLabel?: string;
  className?: string;
  images: BrandDetailGalleryImage[];
};
