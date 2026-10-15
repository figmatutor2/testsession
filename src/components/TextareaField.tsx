import type { TextareaHTMLAttributes } from "react";

// Figma TextareaField: 여러 줄 입력 박스
// state=default·focus·active는 InputField처럼 브라우저 상태로 자동 표현된다
type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const baseClasses =
  "min-h-45 w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x " +
  "text-body-lg text-text-primary placeholder:text-text-disabled outline-none focus:border-action-primary";

export default function TextareaField({ className = "", ...rest }: TextareaFieldProps) {
  return <textarea className={`${baseClasses} ${className}`} {...rest} />;
}
