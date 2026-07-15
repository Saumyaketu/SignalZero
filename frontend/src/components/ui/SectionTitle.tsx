interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white">{title}</h2>

      {subtitle && <p className="text-sm text-zinc-400 mt-1">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
