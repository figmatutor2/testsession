import IconCheck from "@/components/IconCheck";

// Figma SuccessIcon: 발행 완료·참석 신청 완료에 쓰는 동그란 체크 표시 (64x64)
export default function SuccessIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle text-info-strong ${className}`}
    >
      {/* 32px 크기에서 선 두께가 Figma처럼 3px이 되도록 2.25로 맞춤 */}
      <IconCheck className="size-32" strokeWidth={2.25} />
    </div>
  );
}
