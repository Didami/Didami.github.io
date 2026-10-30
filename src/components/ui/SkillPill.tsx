interface Props {
  label: string;
  src: string;
  href?: string;
}

export const SkillPill = ({ label, src, href }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4 py-3">
      <img className="w-8 h-8 object-contain" src={src} />
      <span
        className={`font-heading font-medium text-lg ${href != null ? "hover:text-details" : ""}`}
      >
        {href == null ? (
          label
        ) : (
          <a href={href} target="_blank">
            {label}
          </a>
        )}
      </span>
    </div>
  );
};
