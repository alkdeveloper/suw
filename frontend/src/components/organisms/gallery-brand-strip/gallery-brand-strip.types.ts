export type GalleryBrandStripLogo = {
  id: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type GalleryBrandStripProps = {
  className?: string;
  logos?: GalleryBrandStripLogo[];
};
