import { ArrowRight } from "lucide-react";
import type { Project } from "../../data/projects";

export const ProjectSlide = ({
  id,
  name,
  category,
  period,
  description,
  technologies,
  images,
  ctaTitle,
  href,
}: Project) => {
  return (
    <article
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        id % 2 === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* PROJECT INFORMATION */}
      <div className="flex w-full min-w-0 flex-1 flex-col items-start">
        {/* Project title */}
        <div className="flex w-full flex-col gap-2">
          <h2 className="font-heading text-4xl font-semibold leading-tight text-fg sm:text-5xl xl:text-6xl">
            <span className="text-details text-3xl sm:text-4xl xl:text-5xl">
              {String(id).padStart(2, "0")}.
            </span>{" "}
            {name}
          </h2>

          <h3 className="font-heading text-2xl font-semibold text-details sm:text-3xl xl:text-4xl">
            {category}
          </h3>
        </div>

        {/* Project period */}
        <p className="mt-5 font-heading text-base text-gray sm:mt-8 sm:text-xl">
          {period}
        </p>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg/90 sm:mt-5 sm:text-lg xl:text-xl">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-8">
          {technologies.map((technology) => (
            <img
              key={technology}
              src={`/images/icons/${technology}.png`}
              alt={technology}
              title={technology}
              className="h-8 w-8 object-contain opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100 sm:h-10 sm:w-10 xl:h-12 xl:w-12"
            />
          ))}
        </div>

        {/* Project link */}
        <a
          href={href}
          target="_blank"
          className="group mt-7 inline-flex items-center gap-2 text-base font-semibold text-details transition-colors hover:text-fg sm:mt-10 sm:text-lg xl:text-xl"
        >
          <span>{ctaTitle}</span>

          <ArrowRight
            size={24}
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>
      </div>

      {/* PROJECT SCREENSHOTS */}
      <div className="relative h-90 w-full max-w-105 shrink-0 sm:h-120 sm:max-w-125 lg:h-110 lg:flex-1 lg:max-w-140 xl:h-155">
        {/* Background screenshot */}
        {images[0] && (
          <img
            src={images[0]}
            alt={`${name} application screen`}
            className="absolute left-[5%] top-[14%] z-20 h-[72%] w-[48%] object-contain opacity-95 transition-transform duration-500 hover:-translate-x-2 hover:-translate-y-2 sm:hover:-translate-x-10 sm:hover:-translate-y-10"
          />
        )}

        {/* Secondary screenshot */}
        {images[1] && (
          <img
            src={images[1]}
            alt={`${name} application screen`}
            className="absolute right-[8%] top-[2%] z-10 h-[72%] w-[48%] object-contain opacity-90 transition-transform duration-500 hover:translate-x-2 hover:-translate-y-2 sm:hover:translate-x-10 sm:hover:-translate-y-10"
          />
        )}

        {/* Foreground screenshot */}
        {images[2] && (
          <img
            src={images[2]}
            alt={`${name} application screen`}
            className="absolute bottom-[1%] left-1/2 z-30 h-[74%] w-[52%] -translate-x-1/2 object-contain transition-transform duration-500 hover:-translate-y-2 sm:hover:-translate-y-10"
          />
        )}
      </div>
    </article>
  );
};
