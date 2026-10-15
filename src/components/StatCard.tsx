// Figma StatCard: 응답 현황 숫자 카드. highlight=true는 참석 인원 합계에만 쓴다
type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
};

export default function StatCard({ label, value, highlight = false, className = "" }: StatCardProps) {
  const boxColor = highlight ? "bg-info-subtle" : "bg-surface-subtle";
  const valueColor = highlight ? "text-info-strong" : "text-text-strong";

  return (
    <div
      className={`flex flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md ${boxColor} ${className}`}
    >
      <span className="text-caption-md text-text-secondary">{label}</span>
      <span className={`text-title-lg ${valueColor}`}>{value}</span>
    </div>
  );
}
