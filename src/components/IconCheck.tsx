// Figma icon/check: 체크 아이콘. 색은 글자색(currentColor)을 따라간다
type IconCheckProps = {
  className?: string;
  strokeWidth?: number;
};

export default function IconCheck({ className = "size-24", strokeWidth = 3 }: IconCheckProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M4.5 12L9.5 16L18.5 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
