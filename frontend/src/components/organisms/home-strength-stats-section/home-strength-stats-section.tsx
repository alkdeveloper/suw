"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type HomeStrengthStat = {
  label: string;
  value: string;
};

type ParsedStatValue = {
  numericValue: number;
  suffix?: string;
  trailingText?: string;
};

function ArrowIcon() {
  return (
    <svg fill="none" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.585815 1L10.4949 11.4091C10.6587 11.5798 10.7887 11.7826 10.8771 12.0059C10.9655 12.2292 11.0105 12.4676 11.0096 12.7081C11.0087 12.9487 10.9619 13.1867 10.8718 13.4093C10.7818 13.6319 10.6502 13.8338 10.4851 14.0032L0.585815 24"
        stroke="#F5F5F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

type HomeStrengthStatsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  stats?: HomeStrengthStat[];
};

function parseStatValue(value: string): ParsedStatValue {
  const match = value.trim().match(/^(\d[\d.,]*)(\+)?\s*(.*)$/u);

  if (!match) {
    return {
      numericValue: 0,
      trailingText: value,
    };
  }

  return {
    numericValue: Number(match[1].replace(/[^\d]/g, "")),
    suffix: match[2] ?? undefined,
    trailingText: match[3] || undefined,
  };
}

function useAnimatedCount(targetValue: number, isActive: boolean) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isActive || targetValue <= 0) {
      return;
    }

    let frameId = 0;
    let startTime = 0;
    const duration = targetValue >= 1000 ? 2400 : 1800;

    const easeOutExpo = (progress: number) => {
      if (progress >= 1) {
        return 1;
      }

      return 1 - Math.pow(2, -10 * progress);
    };

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      if (progress >= 1) {
        setCount(targetValue);
      } else {
        setCount(targetValue * easedProgress);
      }

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [isActive, targetValue]);

  return count;
}

function formatAnimatedStat(value: number, suffix?: string, trailingText?: string) {
  const baseValue = new Intl.NumberFormat("tr-TR").format(Math.floor(value));

  return `${baseValue}${suffix ?? ""}${trailingText ? ` ${trailingText}` : ""}`;
}

function StatCard({ label, value, isActive }: HomeStrengthStat & { isActive: boolean }) {
  const parsedValue = useMemo(() => parseStatValue(value), [value]);
  const animatedValue = useAnimatedCount(parsedValue.numericValue, isActive);

  const displayValue = useMemo(() => {
    if (parsedValue.numericValue <= 0) {
      return value;
    }

    return formatAnimatedStat(animatedValue, parsedValue.suffix, parsedValue.trailingText);
  }, [animatedValue, parsedValue.numericValue, parsedValue.suffix, parsedValue.trailingText, value]);

  return (
    <div className="home-strength-stats__item">
      <p className="home-strength-stats__label">{label}</p>
      <p className="home-strength-stats__value">{displayValue}</p>
    </div>
  );
}

export function HomeStrengthStatsSection({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  stats: items = [],
}: HomeStrengthStatsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState<boolean>(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || hasEnteredView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasEnteredView]);

  return (
    <section ref={sectionRef} className="home-strength-stats">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center md:px-[30px]">
        {eyebrow ? <p className="home-strength-stats__eyebrow">{eyebrow}</p> : null}
        {title ? <h2 className="home-strength-stats__title">{title}</h2> : null}
        {description ? <p className="home-strength-stats__description">{description}</p> : null}

        <div className="home-strength-stats__grid">
          {items.map((stat) => (
            <StatCard isActive={hasEnteredView} key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <Link className="home-strength-stats__button" href={ctaHref}>
            <span>{ctaLabel}</span>
            <ArrowIcon />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
