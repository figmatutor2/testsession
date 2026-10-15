// Figma icon/none: 아이콘이 없을 때 자리만 차지하는 빈 칸 (24x24)
export default function IconNone({ className = "size-24" }: { className?: string }) {
  return <span aria-hidden="true" className={`block shrink-0 ${className}`} />;
}
