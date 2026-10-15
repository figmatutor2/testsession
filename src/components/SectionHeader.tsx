// Figma SectionHeader: subtitle · title · description 묶음. 필요 없는 줄은 show* 로 끈다
type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  className?: string;
};

export default function SectionHeader({
  subtitle = "",
  title = "",
  description = "",
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex w-full flex-col items-center gap-stack-md text-center ${className}`}>
      {showSubtitle && <p className="w-full text-label-md text-action-secondary">{subtitle}</p>}
      {showTitle && <h2 className="w-full text-title-lg text-text-primary">{title}</h2>}
      {showDescription && <p className="w-full text-body-md text-text-primary">{description}</p>}
    </div>
  );
}
