import type { InputHTMLAttributes } from "react";

// Figma InputField: 한 줄 입력 박스
// state=default(빈 칸)·focus(입력 중)·active(값 있음)는 브라우저 상태로 자동 표현된다
type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

const baseClasses =
  "h-45 w-full min-w-0 rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x " +
  "text-body-lg text-text-primary placeholder:text-text-disabled outline-none focus:border-action-primary";

export default function InputField({ type = "text", className = "", ...rest }: InputFieldProps) {
  return <input type={type} className={`${baseClasses} ${className}`} {...rest} />;
}
