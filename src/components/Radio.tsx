import type { InputHTMLAttributes } from "react";

// Figma Radio: state=default/selected/disabled → checked, disabled 속성으로 표현
type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

// 바깥 원 20px. 선택되면 테두리가 두꺼워져 가운데 흰 점(8px)만 남는다
const radioClasses =
  "appearance-none size-20 rounded-pill bg-surface-default border-2 border-text-tertiary cursor-pointer " +
  "checked:border-6 checked:border-action-primary " +
  "disabled:border-text-disabled disabled:cursor-not-allowed " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary";

export default function Radio({ className = "", ...rest }: RadioProps) {
  // 손가락으로 누르기 쉽게 48x48 영역 안 가운데에 둔다
  return (
    <span className={`inline-flex size-48 shrink-0 items-center justify-center ${className}`}>
      <input type="radio" className={radioClasses} {...rest} />
    </span>
  );
}
