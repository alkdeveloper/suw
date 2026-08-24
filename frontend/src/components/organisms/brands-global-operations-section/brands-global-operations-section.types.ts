export type BrandsGlobalOperationsLocation = {
  id: string;
  label: string;
  left: string;
  top: string;
};

export type BrandsGlobalOperationsSectionProps = {
  className?: string;
  description?: string;
  locations?: BrandsGlobalOperationsLocation[];
  mapAlt?: string;
  mapImageSrc?: string;
  subtitle?: string;
  title?: string;
};
