// Figma AttendanceBadge: status=yes(참석) / no(불참)
type AttendanceBadgeProps = {
  status: "yes" | "no";
  className?: string;
};

const statusClasses = {
  yes: "bg-info-subtle text-info-strong",
  no: "bg-background-subtle text-text-secondary",
};

export default function AttendanceBadge({ status, className = "" }: AttendanceBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-pill px-control-compact py-inline-sm text-label-md whitespace-nowrap ${statusClasses[status]} ${className}`}
    >
      {status === "yes" ? "참석" : "불참"}
    </span>
  );
}
