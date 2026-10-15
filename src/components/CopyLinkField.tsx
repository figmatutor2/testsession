import Button from "@/components/Button";
import InputField from "@/components/InputField";

// Figma CopyLinkField: 발행 후 공유할 링크 한 줄 (제목 · 링크칸 · 복사 버튼 · 설명)
// 복사 동작(클립보드)은 부모가 onCopy로 넘겨준다
type CopyLinkFieldProps = {
  title: string;
  url: string;
  onCopy: () => void;
  description?: string;
  copyLabel?: string;
  className?: string;
};

export default function CopyLinkField({
  title,
  url,
  onCopy,
  description = "",
  copyLabel = "복사",
  className = "",
}: CopyLinkFieldProps) {
  return (
    <div className={`flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md ${className}`}>
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex w-full items-center gap-inline-md">
        <InputField readOnly value={url} aria-label={title} className="flex-1" />
        <Button size="sm" onClick={onCopy}>
          {copyLabel}
        </Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}
    </div>
  );
}
