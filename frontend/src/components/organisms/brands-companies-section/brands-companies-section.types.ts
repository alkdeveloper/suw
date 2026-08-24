export type BrandsCompanyItem = {
  id: string;
  title?: string;
  description: string;
  href?: string;
  logoAlt: string;
  logoHeight: number;
  logoSrc?: string;
  logoWidth: number;
};

export type BrandsCompaniesSectionProps = {
  className?: string;
  items?: BrandsCompanyItem[];
};
