"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { sendPhoneConversion } from "@/src/lib/google-ads";

type TrackedPhoneLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  children: ReactNode;
  href: `tel:${string}`;
};

export function TrackedPhoneLink({ children, href, ...props }: TrackedPhoneLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0) {
      return;
    }

    const tracked = sendPhoneConversion(() => {
      window.location.href = href;
    });

    if (tracked) {
      event.preventDefault();
    }
  }

  return (
    <a
      {...props}
      data-google-ads-phone-conversion="true"
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
