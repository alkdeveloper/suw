export type BrandDetailFeatureContactItem = {
  id: string;
  label: string;
  href?: string;
  icon: "person" | "email" | "website";
};

export type BrandDetailFeatureSectionProps = {
  bottomDescription?: string;
  buttonHref?: string;
  buttonLabel?: string;
  className?: string;
  contacts: BrandDetailFeatureContactItem[];
  imageAlt: string;
  imageHeight: number;
  imageSrc?: string;
  imageWidth: number;
  topDescription?: string;
};
