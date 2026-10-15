import AttendanceBadge from "@/components/AttendanceBadge";

// Figma ResponseRow/true: 응답 현황 목록 한 줄 (이름 + 부가 정보 + 참석 배지)
// 불참이면 meta에 동반 인원을 넣지 않는다
type ResponseRowTrueProps = {
  name: string;
  meta?: string;
  status?: "yes" | "no";
  className?: string;
};

export default function ResponseRowTrue({ name, meta = "", status = "yes", className = "" }: ResponseRowTrueProps) {
  return (
    <div
      className={`flex h-78 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md ${className}`}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-inline-sm">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        <p className="truncate text-caption-md text-text-tertiary">{meta}</p>
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
