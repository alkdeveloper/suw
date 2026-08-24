"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/src/components/atoms/container";
import { cn } from "@/src/lib/cn";

import type { WhyAlkSectionProps, WhyAlkStatisticCardProps } from "./why-alk-section.types";

function CtaArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="why-alk__cta-icon"
      fill="none"
      viewBox="0 0 12 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
        fill="#F5F5F5"
      />
    </svg>
  );
}

function useAnimatedCount(targetValue: number, isActive: boolean) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    let frameId = 0;
    let startTime = 0;
    const duration = targetValue >= 1000 ? 2800 : 2200;

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

function formatStatValue(value: number) {
  return new Intl.NumberFormat("tr-TR").format(Math.floor(value));
}

function StatisticCard({ stat, isActive }: WhyAlkStatisticCardProps) {
  const animatedValue = useAnimatedCount(stat.value, isActive);

  const displayValue = useMemo(() => {
    const baseValue = formatStatValue(animatedValue);
    const suffix = stat.suffix ?? "";
    const trailingText = stat.trailingText ? ` ${stat.trailingText}` : "";

    return `${baseValue}${suffix}${trailingText}`;
  }, [animatedValue, stat.suffix, stat.trailingText]);

  return (
    <div className="why-alk__stat-card">
      <p className="why-alk__stat-label">{stat.label}</p>
      <p className="why-alk__stat-value">{displayValue}</p>
    </div>
  );
}

export function WhyAlkSection({
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  stats,
  className,
}: WhyAlkSectionProps) {
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
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasEnteredView]);

  return (
    <section ref={sectionRef} className={cn("why-alk", className)}>
      <Container>
        <div className="why-alk__header">
          {title ? <h2 className="why-alk__title">{title}</h2> : null}
          {subtitle ? <p className="why-alk__subtitle">{subtitle}</p> : null}
        </div>

        <div className="why-alk__stats-grid">
          {stats.map((stat) => (
            <StatisticCard key={stat.label} isActive={hasEnteredView} stat={stat} />
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="why-alk__cta-wrap">
            <Link className="why-alk__cta-button" href={ctaHref}>
              <span>{ctaLabel}</span>
              <CtaArrowIcon />
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
