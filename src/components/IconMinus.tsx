// Figma icon/minus: 빼기 아이콘. 색은 글자색(currentColor)을 따라간다
export default function IconMinus({ className = "size-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M20 12H4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
