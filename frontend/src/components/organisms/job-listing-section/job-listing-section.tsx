"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { JobCardProps, JobDetailPanelProps, JobListingSectionProps } from "./job-listing-section.types";

function Tag({ label }: { label: string }) {
  return <span className="job-listing__tag">{label}</span>;
}

function JobCard({ item, isActive, onSelect }: JobCardProps) {
  return (
    <button
      className={cn(
        "job-listing__card",
        isActive ? "job-listing__card--active" : "job-listing__card--inactive",
      )}
      onClick={onSelect}
      type="button"
    >
      <h3
        className={cn(
          "job-listing__card-title",
          isActive ? "job-listing__card-title--active" : item.muted ? "job-listing__card-title--muted" : "job-listing__card-title--default",
        )}
      >
        {item.title}
      </h3>

      <div className="job-listing__card-tags">
        {item.tags.map((tag) => (
          <Tag key={`${item.id}-${tag.label}`} label={tag.label} />
        ))}
      </div>

      <p className="job-listing__card-summary">{item.summary}</p>
    </button>
  );
}

function DetailPanel({ item, ctaHref, ctaLabel, applicationHref, responsibilitiesLabel, expectationsLabel }: JobDetailPanelProps) {
  const applicationUrl = applicationHref ? `${applicationHref}?position=${item.slug}` : item.ctaHref ?? ctaHref;

  return (
    <div className="job-listing__detail-panel">
      <h3 className="job-listing__detail-title">{item.title}</h3>

      <div className="job-listing__detail-tags">
        {item.tags.map((tag) => (
          <Tag key={`${item.id}-detail-${tag.label}`} label={tag.label} />
        ))}
      </div>

      <div className={cn("job-listing__detail-block", "job-listing__detail-block--first")}>
        <p className="job-listing__detail-label">{responsibilitiesLabel}</p>
        {item.responsibilities.map((paragraph) => (
          <p key={paragraph} className="job-listing__detail-paragraph">{paragraph}</p>
        ))}
      </div>

      <div className="job-listing__detail-block">
        <p className="job-listing__detail-label">{expectationsLabel}</p>
        <ul className="job-listing__detail-list">
          {item.expectations.map((expectation) => (
            <li key={expectation}>{expectation}</li>
          ))}
        </ul>
      </div>

      <div className="job-listing__meta-grid">
        {item.meta.map((meta) => (
          <div key={`${item.id}-${meta.label}`}>
            <p className="job-listing__meta-label">{meta.label}</p>
            <p className="job-listing__meta-value">{meta.value}</p>
          </div>
        ))}
      </div>

      {applicationUrl && ctaLabel ? (
        <div className="job-listing__cta-wrap">
          <Link className="job-listing__cta" href={applicationUrl}>
            <span>{ctaLabel}</span>
            <Image alt="" className="job-listing__cta-icon" height={24} src="/images/job-listing/arrow-right.svg" width={12} />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function JobListingSection({
  intro,
  ctaHref,
  ctaLabel,
  applicationHref,
  jobs,
  className,
  responsibilitiesLabel,
  expectationsLabel,
  activeJobId: controlledActiveJobId,
  onActiveJobIdChange,
}: JobListingSectionProps) {
  const [internalActiveId, setInternalActiveId] = useState<string>(() => jobs[0]?.id ?? "");
  const isControlled = controlledActiveJobId !== undefined && onActiveJobIdChange !== undefined;
  const activeId = isControlled ? controlledActiveJobId : internalActiveId;

  function setActiveId(next: string) {
    if (isControlled) {
      onActiveJobIdChange(next);
    } else {
      setInternalActiveId(next);
    }
  }
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [thumbHeight, setThumbHeight] = useState<number>(0);
  const [thumbOffset, setThumbOffset] = useState<number>(0);

  const activeJob = useMemo(
    () => jobs.find((job) => job.id === activeId) ?? jobs[0],
    [activeId, jobs],
  );

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const updateThumb = () => {
      const { clientHeight, scrollHeight, scrollTop } = element;

      if (scrollHeight <= clientHeight) {
        setThumbHeight(clientHeight);
        setThumbOffset(0);
        return;
      }

      const nextThumbHeight = Math.max((clientHeight * clientHeight) / scrollHeight, 96);
      const maxOffset = clientHeight - nextThumbHeight;
      const nextThumbOffset = (scrollTop / (scrollHeight - clientHeight)) * maxOffset;

      setThumbHeight(nextThumbHeight);
      setThumbOffset(nextThumbOffset);
    };

    updateThumb();
    element.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);

    return () => {
      element.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [jobs]);

  if (!activeJob) {
    return null;
  }

  return (
    <section className={cn("job-listing", className)}>
      <Container>
        {intro ? <p className="job-listing__intro">{intro}</p> : null}

        <div className="job-listing__layout">
          <div className="job-listing__desktop-list-wrap">
            <div className="job-listing__desktop-scroll-shell">
              <div className="job-listing__desktop-scrollbar-track" aria-hidden="true">
                <div
                  className="job-listing__desktop-scrollbar-thumb"
                  style={{
                    height: `${thumbHeight}px`,
                    transform: `translateY(${thumbOffset}px)`,
                  }}
                />
              </div>

              <div ref={scrollRef} className="job-listing__desktop-list-scroll">
              <div className={cn("job-listing__desktop-list-inner", "job-listing__desktop-stack")}>
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    isActive={job.id === activeJob.id}
                    item={job}
                    onSelect={() => setActiveId(job.id)}
                  />
                ))}
              </div>
              </div>
            </div>
          </div>

          <div className="job-listing__list-stack">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                isActive={job.id === activeJob.id}
                item={job}
                onSelect={() => setActiveId(job.id)}
              />
            ))}
          </div>

          <div className="job-listing__detail-wrap">
            <DetailPanel
              applicationHref={applicationHref}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              expectationsLabel={expectationsLabel}
              item={activeJob}
              responsibilitiesLabel={responsibilitiesLabel}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
