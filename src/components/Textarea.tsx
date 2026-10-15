import type { TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

// Figma Textarea: 라벨 + 여러 줄 입력칸 + 안내 문구
// rows=2는 제목(최대 2줄), rows=4는 본문
type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  id: string;
  label: string;
  rows?: "4" | "2";
  required?: boolean;
  helper?: string;
  showHelper?: boolean;
};

// 줄 수별 입력칸 높이 (Figma: 4줄 120px, 2줄 72px)
const rowsClasses = {
  "4": "h-120",
  "2": "h-72",
};

export default function Textarea({
  id,
  label,
  rows = "4",
  required = false,
  helper = "",
  showHelper = false,
  className = "",
  ...rest
}: TextareaProps) {
  return (
    <div className={`flex w-full flex-col items-start gap-inline-compact ${className}`}>
      <Label htmlFor={id} label={label} required={required} />
      <TextareaField id={id} rows={Number(rows)} required={required} className={rowsClasses[rows]} {...rest} />
      {showHelper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
