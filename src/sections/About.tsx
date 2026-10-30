import { Section } from "../components/layout";
import { SkillPill } from "../components/ui";

export const About = () => {
  const academic = [
    {
      label: "Data Structures & Algorithms",
      src: "/images/icons/C++.png",
      href: "https://github.com/Didami/TC1031-Data-Structures-and-Fundamental-Algorithms",
    },
    {
      label: "SQL & Database Design",
      src: "/images/icons/MariaDB.png",
    },
    { label: "Computational Modeling", src: "/images/icons/Matlab.png" },
    { label: "Computer Architecture", src: "/images/icons/MarieJS.png" },
    { label: "IoT & Embedded Systems", src: "/images/icons/Arduino.png" },
  ];

  const indie = [
    { label: "Mobile Development", src: "/images/icons/Flutter.png" },
    { label: "Web Development", src: "/images/icons/React.png" },
    { label: "Design", src: "/images/icons/Sketch.png" },
  ];

  return (
    <Section id="about">
      <div className="flex flex-1 flex-col items-stretch gap-10 lg:flex-row lg:gap-12">
        {/* INTRODUCTION */}
        <div className="flex flex-1 flex-col lg:flex-2 gap-8 md:gap-10 lg:gap-12">
          <h2 className="text-3xl font-semibold leading-tight text-fg sm:text-4xl">
            I’m a Software Engineering Student interested in building
            thoughtful, well-crafted digital products.
          </h2>

          <p className="text-lg leading-relaxed text-gray sm:text-xl lg:text-2xl">
            From mobile applications to web experiences, I enjoy exploring the
            intersection of engineering, design, and product development.
            Currently, I'm strengthening my foundations in computer science
            while building projects that turn ideas into functional products.
          </p>

          <div className="flex flex-row items-stretch gap-3">
            <div className="w-0.5 shrink-0 bg-details" />
            <p className="font-medium text-base italic text-fg sm:text-lg">
              Fun fact: I started coding when I was 13.
            </p>
          </div>
        </div>

        {/* DESKTOP SEPARATOR */}
        <div className="hidden self-stretch bg-borders lg:block lg:w-0.5 lg:shrink-0" />

        {/* SKILLS */}
        <div className="flex flex-1 flex-col gap-10 sm:gap-12 lg:gap-12">
          {/* ACADEMIC */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-lg font-medium uppercase tracking-wide text-details sm:text-xl">
              Academic foundations:
            </h3>

            <div className="flex flex-col gap-3">
              {academic.map((skill) => (
                <SkillPill key={skill.label} {...skill} />
              ))}
            </div>
          </div>

          {/* INDEPENDENT PROJECTS */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-lg font-medium uppercase tracking-wide text-details sm:text-xl">
              Beyond the classroom:
            </h3>

            <div className="flex flex-col gap-3">
              {indie.map((skill) => (
                <SkillPill key={skill.label} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
