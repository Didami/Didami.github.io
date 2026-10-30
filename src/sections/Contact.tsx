import { useState } from "react";
import { Section } from "../components/layout";

const EMAIL = "didami.dev@gmail.com";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="font-heading text-4xl font-semibold text-fg sm:text-5xl">
          Let's build something together
        </h2>

        <p className="max-w-xl text-lg text-gray sm:text-xl">
          Open to internships, freelance projects and collaborations.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="font-heading text-xl font-medium text-details transition-colors hover:text-fg sm:text-3xl"
        >
          {EMAIL}
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="text-sm tracking-widest text-fg/50 transition-colors hover:text-fg"
        >
          {copied ? "COPIED ✓" : "COPY EMAIL"}
        </button>
      </div>
    </Section>
  );
};
