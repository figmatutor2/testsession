import type { LabelHTMLAttributes } from "react";

// Figma Label: 입력칸 위 라벨. required면 "필수" 표시가 붙는다
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  required?: boolean;
};

export default function Label({ label, required = false, className = "", ...rest }: LabelProps) {
  return (
    <label className={`inline-flex items-center gap-inline-sm ${className}`} {...rest}>
      <span className="text-label-lg text-text-strong">{label}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </label>
  );
}
