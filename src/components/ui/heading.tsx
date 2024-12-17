import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        `md:text-5xl sm:text-4xl text-3xl font-semibold`,
        className
      )}
    >
      {children}
    </h1>
  );
}
