import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function SubHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn(`text-subHeading text-lg`, className)}>{children}</h1>
  );
}
