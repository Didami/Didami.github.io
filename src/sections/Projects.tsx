import { Section } from "../components/layout";
import { ProjectSlide } from "../components/ui";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col">
        {/* SECTION HEADER */}
        <h2 className="mb-10 font-heading text-lg font-semibold uppercase tracking-widest text-details">
          My projects
        </h2>

        {/* PROJECT SLIDES */}
        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <ProjectSlide key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};
