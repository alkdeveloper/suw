import type { Metadata } from "next";

import { CareerJoinSection } from "@/src/components/organisms/career-join-section";
import { JobListingSection } from "@/src/components/organisms/job-listing-section";
import { MiniHero } from "@/src/components/organisms/mini-hero";
import { OpenPositionsSection } from "@/src/components/organisms/open-positions-section";
import { WhyAlkSection } from "@/src/components/organisms/why-alk-section";
import type {
  CareerPageResponse,
  JobPositionDetailResponse,
  JobPositionListItemResponse,
} from "@/src/lib/api-types";
import { createAPI } from "@/src/lib/api";
import { splitCareerList, splitCareerParagraphs } from "@/src/lib/career-job-text";
import type { SupportedLocale } from "@/src/lib/locale";
import { withLocalePath } from "@/src/lib/locale";
import { createLocalizedPageMetadata, resolveMetadataValue } from "@/src/lib/metadata";

export function generateStaticParams() {
  return [
    { locale: "tr" },
    { locale: "en" },
  ];
}

type CareerPageProps = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

async function getCareerPage(locale: SupportedLocale) {
  const response = await createAPI(locale).get<CareerPageResponse>("careers/");

  return response.data;
}

async function getJobPositions(locale: SupportedLocale) {
  const response = await createAPI(locale).get<JobPositionListItemResponse[] | { results?: JobPositionListItemResponse[] }>(
    "careers/positions/",
  );

  if (Array.isArray(response.data)) {
    return response.data;
  }

  return response.data.results ?? [];
}

async function getJobPositionDetail(locale: SupportedLocale, slug: string) {
  const response = await createAPI(locale).get<JobPositionDetailResponse>(`careers/positions/${slug}/`);

  return response.data;
}

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(\+)?\s*(.*)$/u);

  if (!match) {
    return {
      trailingText: value,
      value: 0,
    };
  }

  return {
    suffix: match[2] ?? undefined,
    trailingText: match[3] || undefined,
    value: Number(match[1]),
  };
}

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
  const { locale } = await params;
  const page = await getCareerPage(locale);

  return createLocalizedPageMetadata(locale, {
    title: resolveMetadataValue(page.meta_title, "Kariyer"),
    description: resolveMetadataValue(
      page.meta_description,
      "ALK Group kariyer fırsatlarını, açık pozisyonları ve çalışma kültürünü keşfedin.",
    ),
    path: "/career",
    image: page.hero_image ?? undefined,
  });
}

export default async function CareerPage({ params }: CareerPageProps) {
  const { locale } = await params;
  const [page, jobList] = await Promise.all([getCareerPage(locale), getJobPositions(locale)]);
  const jobs = await Promise.all(jobList.map((job) => getJobPositionDetail(locale, job.slug)));

  return (
    <main>
      <MiniHero
        backgroundImageSrc={page.hero_image ?? undefined}
        title={page.hero_title}
      />
      <CareerJoinSection
        ctaHref={page.intro_button_url ? withLocalePath(locale, page.intro_button_url) : undefined}
        ctaLabel={page.intro_button_text || undefined}
        eyebrow={page.intro_label}
        imageSrc={page.intro_image ?? undefined}
        title={page.intro_title}
      />
      <OpenPositionsSection
        positions={page.departments.map((department) => ({
          countLabel: `${department.position_count} ${page.open_positions_copy?.count_label_suffix ?? ""}`.trim(),
          iconSrc: department.icon ?? "",
          title: department.name,
        }))}
        nextAriaLabel={page.open_positions_copy?.next_aria_label}
        previousAriaLabel={page.open_positions_copy?.previous_aria_label}
        title={page.positions_title}
      />
      <JobListingSection
        applicationHref={withLocalePath(locale, "/career/application")}
        ctaHref={page.apply_button_text ? "#career-application" : undefined}
        ctaLabel={page.apply_button_text || undefined}
        expectationsLabel={page.job_listing_copy?.expectations_label}
        intro={page.intro_description}
        jobs={jobs.map((job) => ({
          ctaHref: page.apply_button_text ? "#career-application" : undefined,
          expectations: splitCareerList(job.requirements),
          id: String(job.id),
          slug: job.slug,
          meta: [
            { label: page.job_listing_copy?.meta_labels.department ?? "", value: job.department?.name ?? "" },
            { label: page.job_listing_copy?.meta_labels.location ?? "", value: job.location },
            { label: page.job_listing_copy?.meta_labels.work_type ?? "", value: job.work_type_display },
            { label: page.job_listing_copy?.meta_labels.employment ?? "", value: job.employment_type_display },
            { label: page.job_listing_copy?.meta_labels.experience ?? "", value: job.experience_level },
          ].filter((item) => item.label && item.value),
          responsibilities: splitCareerParagraphs(job.responsibilities),
          summary: job.description,
          tags: [
            { label: job.department?.name ?? "" },
            { label: job.location },
            { label: job.work_type_display },
          ].filter((item) => item.label),
          title: job.title,
        }))}
        responsibilitiesLabel={page.job_listing_copy?.responsibilities_label}
      />
      <WhyAlkSection
        ctaHref={page.why_button_url ? withLocalePath(locale, page.why_button_url) : undefined}
        ctaLabel={page.why_button_text || undefined}
        stats={page.stats.map((stat) => ({
          label: stat.key,
          ...parseStatValue(stat.value),
        }))}
        subtitle={page.why_description}
        title={page.why_title}
      />
    </main>
  );
}
