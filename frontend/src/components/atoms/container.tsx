import type { PropsWithChildren } from "react";

import { cn } from "@/src/lib/cn";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1260px] px-5 md:px-[30px]", className)}>
      {children}
    </div>
  );
}
