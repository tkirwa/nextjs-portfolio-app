// import { cn } from "@/lib/utils";
import { cn } from "@/lib/client/utils";
import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white p-6 shadow-sm transition hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
