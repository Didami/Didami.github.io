import { Section } from "../components/layout";
import { Button, OrbitIcon } from "../components/ui";

const createOrbitAngles = (
  count: number,
  startAngle: number,
  endAngle: number,
) => {
  return Array.from({ length: count }, (_, index) => {
    if (count === 1) return (startAngle + endAngle) / 2;

    const step = (endAngle - startAngle) / (count - 1);

    return startAngle + step * index;
  });
};

export const Hero = () => {
  const technologies = [
    { name: "Sketch", src: "/images/icons/Sketch.png" },
    { name: "Python", src: "/images/icons/Python.png" },
    { name: "MATLAB", src: "/images/icons/Matlab.png" },
    { name: "C++", src: "/images/icons/C++.png" },
    { name: "Flutter", src: "/images/icons/Flutter.png" },
    { name: "React", src: "/images/icons/React.png" },
    { name: "Swift", src: "/images/icons/Swift.png" },
    { name: "Firebase", src: "/images/icons/Firebase.png" },
  ];

  const orbitAngles = createOrbitAngles(technologies.length, -150, -30);

  return (
    <Section
      id="home"
      className="relative flex flex-1 items-center justify-center lg:flex-row"
    >
      <div className=" flex flex-1 flex-col items-center gap-24 lg:flex-row lg:gap-12">
        {/* LEFT SECTION */}
        <div className="flex w-full flex-1 flex-col justify-center gap-8 sm:gap-12">
          {/* INTRODUCTION */}
          <div>
            <h1 className="pb-8 font-sans text-5xl font-bold text-details sm:text-6xl lg:pb-12 lg:text-7xl xl:text-8xl">
              <span className="font-sans italic text-fg">I'm</span> Diego
            </h1>

            <h2 className="pb-3 font-sans text-2xl font-semibold text-fg sm:text-3xl lg:text-4xl">
              Software Engineering Student
            </h2>

            <h2 className="pb-12 font-sans text-xl font-semibold text-details sm:text-2xl lg:pb-24 lg:text-3xl">
              Mobile Development · Web · Product
            </h2>

            <a
              href="https://tec.mx/es/santa-fe"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-details"
            >
              <h3 className="font-heading text-lg font-normal text-fg sm:text-xl lg:text-2xl">
                <span className="text-details">@</span> Tecnológico de Monterrey
                CSF
                <span className="text-gray">,</span>
                <br />
                <span className="text-details">Mexico City</span>
              </h3>
            </a>
          </div>

          {/* CALLS TO ACTION */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              label="Things I've Built"
              href="#projects"
              className="w-full sm:w-auto"
            />
            <Button
              label="Get in Touch"
              href="#contact"
              outlined
              className="w-full sm:w-auto"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex w-full flex-1 flex-col items-center gap-8 sm:gap-12">
          {/* PROFILE AND TECHNOLOGIES */}
          <div className="@container relative w-full max-w-70 sm:max-w-sm lg:max-w-md">
            {/* PROFILE IMAGE */}
            <div className="aspect-square w-full overflow-hidden rounded-full border-2 border-borders">
              <img
                src="/images/profile.png"
                alt="Portrait of Diego"
                className="h-full w-full object-contain object-bottom"
              />
            </div>

            {/* TECHNOLOGIES */}
            {technologies.map((technology, index) => (
              <OrbitIcon
                key={technology.name}
                name={technology.name}
                src={technology.src}
                angle={orbitAngles[index]}
                radius={0.6}
                size={32}
              />
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-row justify-center gap-10 sm:gap-12">
            <a
              className="transition-opacity hover:opacity-50"
              href="https://github.com/Didami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/images/icons/GitHub.png"
                alt=""
                width={32}
                height={32}
              />
            </a>

            <a
              className="transition-opacity hover:opacity-50"
              href="https://www.linkedin.com/in/diego-flores-álvarez-376715371/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/images/icons/LinkedIn.png"
                alt=""
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-widest text-fg/30 transition-colors duration-300 hover:text-fg/70 sm:bottom-6 sm:text-sm"
      >
        ↓ SCROLL TO EXPLORE
      </a>
    </Section>
  );
};
