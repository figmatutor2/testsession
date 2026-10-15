import type { ButtonHTMLAttributes } from "react";

// Figma Button: size=sm/md/lg, state=default/hover/disabled
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};

// 크기별 높이·여백·글자·기본 배경색
const sizeClasses: Record<ButtonSize, string> = {
  sm: "py-inline-sm text-label-md bg-action-primary",
  md: "h-48 py-control-x text-label-md bg-text-secondary",
  lg: "h-52 py-inline-sm text-label-lg bg-action-primary",
};

// 공통 모양 + hover(기본색 위에 반투명 파란 막을 덮음) + disabled
const baseClasses =
  "inline-flex items-center justify-center px-control-y rounded-control whitespace-nowrap text-center text-text-inverse " +
  "enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay " +
  "disabled:bg-border-subtle disabled:cursor-not-allowed";

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...rest}
    />
  );
}
