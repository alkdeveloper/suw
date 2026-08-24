export type BrandDetailIntroLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BrandDetailIntroSectionProps = {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  logos?: BrandDetailIntroLogo[];
  tagline?: string;
  description?: string;
  className?: string;
};
