export type BrandDetailInfoContactItem = {
  href?: string;
  icon: "person" | "email" | "website";
  id: string;
  label: string;
};

export type BrandDetailInfoSectionProps = {
  className?: string;
  contacts: BrandDetailInfoContactItem[];
  description?: string;
};
