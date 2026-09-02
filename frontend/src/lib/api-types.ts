export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type ApiImage = string | null;

export type HomePageResponse = {
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image: ApiImage;
  hero_image_mobile: ApiImage;
  product_categories_eyebrow: string;
  product_categories_title: string;
  product_categories_description: string;
  work_essentials_eyebrow: string;
  work_essentials_title: string;
  work_essentials_description: string;
  work_essentials_cta_text: string;
  work_essentials_cta_link: string;
  work_essentials_items: Array<{
    id: number;
    image: string | null;
    alt: string;
    link: string;
    sort_order: number;
  }>;
  technical_performance_eyebrow: string;
  technical_performance_title: string;
  technical_performance_description: string;
  technical_performance_image: ApiImage;
  technical_performance_cta_text: string;
  technical_performance_cta_link: string;
  technical_performance_items: Array<{
    id: number;
    title: string;
    description: string;
    sort_order: number;
  }>;
  corporate_workwear_eyebrow: string;
  corporate_workwear_title: string;
  corporate_workwear_description: string;
  corporate_workwear_personnel_title: string;
  corporate_workwear_personnel_description: string;
  corporate_workwear_personnel_image: ApiImage;
  corporate_workwear_promo_title: string;
  corporate_workwear_promo_description: string;
  corporate_workwear_promo_image: ApiImage;
  corporate_workwear_cta_text: string;
  corporate_workwear_cta_link: string;
  process_eyebrow: string;
  process_title: string;
  process_description: string;
  process_steps: Array<{ id: number; title: string; description: string; sort_order: number }>;
  production_insights_eyebrow: string;
  production_insights_title: string;
  production_insights_description: string;
  production_insight_items: Array<{
    id: number;
    image: string | null;
    title: string;
    short_description: string;
    detail_text: string;
    sort_order: number;
  }>;
  ticker_words: Array<{ text: string }>;
  brands_title: string;
  brands_description: string;
  brands: Array<{ id: number; name: string; image: ApiImage }>;
  activities_label: string;
  activities_title: string;
  activities_description: string;
  activities: Array<{ id: number; title: string; image: ApiImage }>;
  about: {
    label: string;
    title: string;
    subtitle: string;
    short_description: string;
    long_description: string;
    background_image: ApiImage;
    /** Admin’den; boşsa buton gösterilmez. */
    cta_button_text: string;
    /** Sabit iç yol (ör. `/corporate`); locale öneki sayfada eklenir. */
    cta_path: string;
    features: Array<{ key: string; value: string }>;
  };
  operational: {
    label: string;
    title: string;
    description: string;
    image: ApiImage;
    items: Array<{
      id: number;
      icon: ApiImage;
      title: string;
      description: string;
      external_link_enabled: boolean;
      external_url: string;
    }>;
  };
  video_title: string;
  video_description: string;
  /** Yüklenen MP4/WebM dosyası URL’si (admin: Video Dosyası). */
  video_file: ApiImage;
  video_image: ApiImage;
  news_section_title: string;
  news_section_button_text: string;
  news: NewsListItemResponse[];
  meta_title: string;
  meta_description: string;
};

export type CorporatePageResponse = {
  hero_image: ApiImage;
  hero_text: string;
  about_label: string;
  about_description: string;
  about_image: ApiImage;
  history_label: string;
  history_title: string;
  history_items: Array<{ id: number; year: string; description: string }>;
  vision_title: string;
  vision_description: string;
  mission_title: string;
  mission_description: string;
  brands_title: string;
  brands: Array<{ id: number; name: string; image: ApiImage }>;
  activities_label: string;
  activities_title: string;
  activities: Array<{ id: number; title: string; image: ApiImage }>;
  join_label: string;
  join_title: string;
  join_description: string;
  join_button_text: string;
  join_button_url: string;
  meta_title: string;
  meta_description: string;
  page: AboutPageContent;
};

export type AboutContentItem = { id: number; title: string; description: string };
export type AboutPageContent = {
  hero: { eyebrow: string; title: string; description: string };
  group: { eyebrow: string; title: string; description: string; supporting_label: string; image: ApiImage; image_mobile: ApiImage };
  why: { eyebrow: string; title: string; description: string; items: AboutContentItem[] };
  experience: { eyebrow: string; title: string; description: string; items: AboutContentItem[] };
  timeline: { eyebrow: string; title: string; items: Array<{ id: number; year_or_period: string; title: string; description: string }> };
  cta: { eyebrow: string; title: string; description: string; text: string; link: string };
};

export type NavigationItemResponse = {
  id: number;
  location: string;
  label: string;
  url: string;
  is_external: boolean;
};

export type SiteHeaderCopyResponse = {
  home_aria_label: string;
  desktop_nav_aria_label: string;
  mobile_nav_aria_label: string;
  locale_button_aria_label_prefix: string;
  mobile_menu_aria_label: string;
};

export type SiteFooterCopyResponse = {
  back_to_top_aria_label: string;
  home_aria_label: string;
  newsletter_error_message: string;
  newsletter_submit_aria_label: string;
  newsletter_success_message: string;
  contact_labels: {
    phone: string;
    fax: string;
    email: string;
    whatsapp: string;
  };
  social_labels: {
    instagram: string;
    linkedin: string;
    facebook: string;
    x: string;
    youtube: string;
  };
};

export type SiteNotFoundCopyResponse = {
  title: string;
  description: string;
  primary_button_text: string;
  secondary_button_text: string;
};

export type SiteSettingsResponse = {
  font_family: string;
  logo: ApiImage;
  phone: string;
  fax: string;
  email: string;
  address: string;
  latitude: string | null;
  longitude: string | null;
  contact_section_eyebrow: string;
  contact_section_title: string;
  contact_section_description: string;
  google_maps_url: string;
  apple_maps_url: string;
  yandex_maps_url: string;
  footer_title: string;
  footer_newsletter_title: string;
  footer_newsletter_placeholder: string;
  footer_newsletter_consent_text: string;
  footer_newsletter_consent_link_text: string;
  footer_contact_title: string;
  footer_navigation_title: string;
  footer_social_title: string;
  footer_address_label: string;
  copyright_text: string;
  instagram: string;
  linkedin: string;
  facebook: string;
  twitter: string;
  youtube: string;
  whatsapp: string;
  header_nav: NavigationItemResponse[];
  footer_nav: NavigationItemResponse[];
  header_copy: SiteHeaderCopyResponse;
  footer_copy: SiteFooterCopyResponse;
  not_found_copy: SiteNotFoundCopyResponse;
};

export type ProjectSectorResponse = {
  id: number;
  title: string;
  headline: string;
  description: string;
  product_groups: string[];
  image: ApiImage;
  image_mobile: ApiImage;
};

export type ProjectsPageResponse = {
  hero_eyebrow: string;
  hero_title: string;
  hero_description: string;
  cta_eyebrow: string;
  cta_title: string;
  cta_description: string;
  cta_text: string;
  sectors: ProjectSectorResponse[];
};

export type BrandSummaryResponse = {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  logo: ApiImage;
  card_image: ApiImage;
  description: string;
  url: string;
  /** Vitrin hover CTA; link kapalıysa boş döner. */
  cta_label: string;
};

export type GroupCompanyResponse = {
  id: number;
  name: string;
  logo: ApiImage;
  description: string;
  founded_year: number | null;
  detail_key?: string;
  slug?: string;
  detail_page_active: boolean;
};

export type GlobalOperationLocationResponse = {
  id: number;
  page_scope: "brands" | "companies";
  country_name: string;
  latitude: number;
  longitude: number;
};

export type BrandsPageResponse = {
  hero_title: string;
  hero_subtitle: string;
  hero_image: ApiImage;
  /** MP4/WebM tam URL; varsa MiniHero üzerinde oynatılır. */
  video_file: string | null;
  video_image: ApiImage;
  intro_label: string;
  intro_text: string;
  brands: BrandSummaryResponse[];
  ticker_words: Array<{ text: string }>;
  ticker_description: string;
  milestones_title: string;
  milestones_button_text: string;
  milestones_button_url: string;
  milestones_year_suffix: string;
  milestones: Array<{ id: number; year: string; description: string }>;
  companies_title: string;
  companies_description: string;
  companies: GroupCompanyResponse[];
  global_title: string;
  global_description: string;
  global_map_image: ApiImage;
  countries_text: string;
  locations: GlobalOperationLocationResponse[];
  meta_title: string;
  meta_description: string;
};

export type CompaniesPageResponse = {
  companies_title: string;
  hero_image: ApiImage;
  video_file: string | null;
  video_image: ApiImage;
  intro_label: string;
  intro_text: string;
  ticker_words: Array<{ text: string }>;
  ticker_description: string;
  milestones_title: string;
  milestones_button_text: string;
  milestones_button_url: string;
  milestones_year_suffix: string;
  milestones: Array<{ id: number; year: string; description: string }>;
  global_title: string;
  global_description: string;
  global_map_image: ApiImage;
  countries_text: string;
  locations: GlobalOperationLocationResponse[];
  companies: GroupCompanyResponse[];
  meta_title: string;
  meta_description: string;
};

export type GalleryImageResponse = {
  id: number;
  title: string;
  image: ApiImage;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
};

export type BrandDetailResponse = {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  logo: ApiImage;
  secondary_logo: ApiImage;
  card_image: ApiImage;
  description: string;
  content: string;
  url: string;
  cta_label: string;
  cta_url?: string;
  gallery_images: GalleryImageResponse[];
  contact_name: string;
  contact_email: string;
  has_global_block: boolean;
  global_block_title: string;
  global_block_text: string;
  global_map_image: ApiImage;
  countries_text?: string;
  locations?: GlobalOperationLocationResponse[];
  ticker_words: Array<{ text: string }>;
  brand_detail_cta_text: string;
  companies: GroupCompanyResponse[];
  brands: BrandSummaryResponse[];
  page_hero_title: string;
  page_hero_image: ApiImage;
  page_video_file: string | null;
  meta_title: string;
  meta_description: string;
};

export type GalleryPageResponse = {
  hero_title: string;
  hero_image: ApiImage;
  intro_text: string;
  show_more_text: string;
  lightbox_previous_aria_label: string;
  lightbox_next_aria_label: string;
  lightbox_close_aria_label: string;
  categories: Array<{ id: number; name: string; slug: string }>;
  brands: Array<{ id: number; name: string; image: ApiImage }>;
  video_title: string;
  video_description: string;
  video_image: ApiImage;
  /** Yüklenen video; doluysa öncelikli. */
  video_file: string | null;
  video_url: string;
  join_label: string;
  join_title: string;
  join_description: string;
  join_button_text: string;
  join_button_url: string;
  meta_title: string;
  meta_description: string;
};

export type CareerOpenPositionsCopyResponse = {
  count_label_suffix: string;
  previous_aria_label: string;
  next_aria_label: string;
};

export type CareerJobListingCopyResponse = {
  responsibilities_label: string;
  expectations_label: string;
  meta_labels: {
    department: string;
    location: string;
    work_type: string;
    employment: string;
    experience: string;
  };
};

export type CareerApplicationFormCopyResponse = {
  position_summary_label: string;
  form_title: string;
  submit_label: string;
  submitting_label: string;
  upload_label: string;
  privacy_link_label: string;
  privacy_consent_text: string;
  feedback_success_message: string;
  feedback_error_message: string;
  feedback_missing_cv_message: string;
  fields: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    cv: string;
    cover_letter: string;
  };
  placeholders: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    cv: string;
    cover_letter: string;
  };
};

export type CareerPageResponse = {
  hero_title: string;
  hero_image: ApiImage;
  intro_label: string;
  intro_title: string;
  intro_description: string;
  intro_image: ApiImage;
  intro_button_text: string;
  intro_button_url: string;
  positions_title: string;
  positions_button_text: string;
  departments: Array<{ id: number; name: string; icon: ApiImage; position_count: number }>;
  why_title: string;
  why_description: string;
  why_button_text: string;
  why_button_url: string;
  stats: Array<{ key: string; value: string }>;
  apply_form_title: string;
  kvkk_text: string;
  newsletter_title: string;
  newsletter_placeholder: string;
  newsletter_submit_aria_label: string;
  newsletter_success_message: string;
  newsletter_error_message: string;
  contact_label: string;
  contact_title: string;
  contact_description: string;
  contact_button_text: string;
  contact_button_url: string;
  apply_button_text: string;
  apply_button_url: string;
  ticker_words: Array<{ text: string }>;
  activities: Array<{ id: number; title: string; image: ApiImage }>;
  open_positions_copy: CareerOpenPositionsCopyResponse;
  job_listing_copy: CareerJobListingCopyResponse;
  application_form_copy: CareerApplicationFormCopyResponse;
  meta_title: string;
  meta_description: string;
};

export type JobPositionListItemResponse = {
  id: number;
  title: string;
  slug: string;
  department: {
    id: number;
    name: string;
    icon: ApiImage;
    position_count: number;
  } | null;
  location: string;
  work_type: string;
  work_type_display: string;
  employment_type: string;
  employment_type_display: string;
  experience_level: string;
};

export type JobPositionDetailResponse = JobPositionListItemResponse & {
  description: string;
  responsibilities: string;
  requirements: string;
  apply_button_text: string;
  apply_button_url: string;
};

export type NewsListItemResponse = {
  id: number;
  title: string;
  slug: string;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  date: string;
  summary: string;
  image: ApiImage;
};

export type NewsPageResponse = {
  hero_title: string;
  hero_image: ApiImage;
  featured: NewsListItemResponse | null;
  featured_button_text: string;
  list_load_more_text: string;
  gallery_title: string;
  gallery_images: GalleryImageResponse[];
  brands: Array<{ id: number; name: string; image: ApiImage }>;
  join_label: string;
  join_title: string;
  join_description: string;
  join_button_text: string;
  join_button_url: string;
  meta_title: string;
  meta_description: string;
};

export type NewsDetailResponse = {
  id: number;
  title: string;
  slug: string;
  category: {
    id: number;
    name: string;
    slug: string;
  } | null;
  date: string;
  summary: string;
  content: string;
  image: ApiImage;
  gallery_title: string;
  gallery_images: GalleryImageResponse[];
  previous_news: Pick<NewsListItemResponse, "id" | "title" | "slug"> | null;
  next_news: Pick<NewsListItemResponse, "id" | "title" | "slug"> | null;
  related_news: NewsListItemResponse[];
  share_title: string;
  previous_label: string;
  next_label: string;
  related_title: string;
  related_view_all_text: string;
  brands: Array<{ id: number; name: string; image: ApiImage }>;
  page_hero_title: string;
  page_hero_image: ApiImage;
  join_label: string;
  join_title: string;
  join_description: string;
  join_button_text: string;
  join_button_url: string;
  meta_title: string;
  meta_description: string;
};

export type ContactPageResponse = {
  map_embed_url: string;
  info_title: string;
  info_description: string;
  info_image: ApiImage;
  phone: string;
  email: string;
  address: string;
  form_title: string;
  kvkk_text: string;
  form_copy: {
    submit_label: string;
    submitting_label: string;
    privacy_link_label: string;
    feedback_success_message: string;
    feedback_error_message: string;
    fields: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    placeholders: {
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
  };
  newsletter_title: string;
  newsletter_placeholder: string;
  newsletter_submit_aria_label: string;
  newsletter_success_message: string;
  newsletter_error_message: string;
  /** Bülten şeridi için opsiyonel galeri seçimi (boşsa `activities` kullanılır). */
  gallery_images: GalleryImageResponse[];
  /** Ana sayfa faaliyet görselleri — şerit için `gallery_images` boşken kullanılır. */
  activities: Array<{ image: ApiImage }>;
  join_label: string;
  join_title: string;
  join_description: string;
  join_button_text: string;
  join_button_url: string;
  meta_title: string;
  meta_description: string;
};

export type LegalPageSectionResponse = {
  heading: string;
  body: string[];
};

export type LegalPageResponse = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  last_updated: string;
  last_updated_label: string;
  hero_image: ApiImage;
  hero_glow_image: ApiImage;
  sections: LegalPageSectionResponse[];
  meta_title: string;
  meta_description: string;
};
