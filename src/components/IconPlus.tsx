// Figma icon/plus: 더하기 아이콘. 색은 글자색(currentColor)을 따라간다
export default function IconPlus({ className = "size-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M12 20V12M12 12V4M12 12H20M12 12H4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
