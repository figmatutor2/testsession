import type { ReactNode } from "react";
import IconNone from "@/components/IconNone";

// Figma NavBar: 화면 상단 바. 가운데 title, 양옆 left/right 아이콘 자리(없으면 빈 칸)
type NavBarProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

export default function NavBar({ title, left, right, className = "" }: NavBarProps) {
  return (
    <header className={`flex h-65 w-full items-center gap-section p-page-horizontal ${className}`}>
      {left ?? <IconNone />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
