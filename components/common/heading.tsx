"use client"
import { cn } from "@/lib/utils/utils";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

export function Heading({ level = 1, className, children }: Readonly<HeadingProps>) {
  const Tag = `h${level}` as React.ElementType;
  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight text-foreground",
        level === 1 && "text-2xl",
        level === 2 && "text-xl",
        level === 3 && "text-lg",
        level === 4 && "text-base",
        level === 5 && "text-sm",
        level === 6 && "text-xs",
        className
      )}
    >
      {children}
    </Tag>
  );
}
