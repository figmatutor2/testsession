import type { InputHTMLAttributes } from "react";
import Label from "@/components/Label";
import InputField from "@/components/InputField";

// Figma Input: 라벨 + 한 줄 입력칸 + 안내 문구 (일시·장소·이름 등)
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  required?: boolean;
  helper?: string;
  showHelper?: boolean;
};

export default function Input({
  id,
  label,
  required = false,
  helper = "",
  showHelper = false,
  className = "",
  ...rest
}: InputProps) {
  return (
    <div className={`flex w-full flex-col items-start gap-inline-compact ${className}`}>
      <Label htmlFor={id} label={label} required={required} />
      <InputField id={id} required={required} {...rest} />
      {showHelper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
