import StepButton from "@/components/StepButton";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";

// Figma Stepper: 동반 인원 입력 (− 값 +). 최솟값이면 − 버튼이 꺼진다
type StepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  className?: string;
};

export default function Stepper({ value, onChange, min = 0, max, unit = "명", className = "" }: StepperProps) {
  const canDecrease = value > min;
  const canIncrease = max === undefined || value < max;

  return (
    <div className={`flex items-center gap-stack-sm ${className}`}>
      <StepButton
        aria-label="줄이기"
        disabled={!canDecrease}
        onClick={() => onChange(value - 1)}
        icon={<IconMinus className="size-20" />}
      />
      <span aria-live="polite" className="text-heading-md text-text-strong whitespace-nowrap">
        {value}
        {unit}
      </span>
      <StepButton
        aria-label="늘리기"
        disabled={!canIncrease}
        onClick={() => onChange(value + 1)}
        icon={<IconPlus className="size-20" />}
      />
    </div>
  );
}
