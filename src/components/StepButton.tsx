import type { ButtonHTMLAttributes, ReactNode } from "react";
import IconMinus from "@/components/IconMinus";

// Figma StepButton: Stepper의 −/+ 버튼 (44x44). state=disabled → disabled 속성
// aria-label로 "인원 줄이기"처럼 버튼 뜻을 꼭 알려준다
type StepButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

const baseClasses =
  "flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default " +
  "text-text-primary disabled:text-text-disabled disabled:cursor-not-allowed";

export default function StepButton({ icon, type = "button", className = "", ...rest }: StepButtonProps) {
  return (
    <button type={type} className={`${baseClasses} ${className}`} {...rest}>
      {icon ?? <IconMinus className="size-20" />}
    </button>
  );
}
