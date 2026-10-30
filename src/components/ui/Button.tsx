import { ArrowRight } from "lucide-react";

interface Props {
  label: string;
  outlined?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button = ({
  label,
  outlined = false,
  onClick,
  href,
  className = "",
}: Props) => {
  const styles = `group inline-flex flex-row items-center justify-center gap-2 rounded-2xl px-6 py-2.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-details sm:px-9 sm:py-3 ${
    outlined
      ? "border-2 border-fg bg-transparent hover:bg-fg"
      : "bg-details hover:bg-gray"
  } ${className}`;

  const content = (
    <>
      <span
        className={`font-heading text-base font-normal transition-colors duration-300 sm:text-xl ${
          outlined ? "text-fg group-hover:text-bg" : "text-bg"
        }`}
      >
        {label}
      </span>

      <ArrowRight
        className={`size-5 shrink-0 transition-colors duration-300 sm:size-6 ${
          outlined ? "text-fg group-hover:text-bg" : "text-bg"
        }`}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={styles}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles}>
      {content}
    </button>
  );
};
