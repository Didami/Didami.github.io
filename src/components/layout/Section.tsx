import type { ReactNode } from "react";

interface Props {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ id, className = "", children }: Props) => (
  <section
    id={id}
    className={`py-24 mx-6 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-24 ${className}`}
  >
    {children}
  </section>
);
