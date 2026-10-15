import type { InputHTMLAttributes } from "react";
import Radio from "@/components/Radio";
import Label from "@/components/Label";

// Figma RadioOption: 라디오 + 라벨 한 줄 (참석/불참 선택)
type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  id: string;
  label: string;
  required?: boolean;
};

export default function RadioOption({ id, label, required = false, className = "", ...rest }: RadioOptionProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Radio id={id} {...rest} />
      <Label htmlFor={id} label={label} required={required} className="cursor-pointer" />
    </div>
  );
}
