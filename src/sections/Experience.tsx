import { Section } from "../components/layout";

interface TimelineItemProps {
  title: string;
  description?: string;
  date?: string;
}

const TimelineItem = ({ title, description, date }: TimelineItemProps) => {
  return (
    <article className="relative border-l-2 border-details/70 pl-7 pb-16 last:pb-0">
      {/* Timeline dot */}
      <span className="absolute -left-2.25 h-4 w-4 rounded-full bg-details" />

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h4 className="font-heading text-2xl font-semibold text-fg">{title}</h4>

        {description && (
          <p className="font-heading text-lg leading-relaxed text-gray">
            {description}
          </p>
        )}

        {date && (
          <span className="mt-8 font-heading text-lg font-medium text-details">
            {date}
          </span>
        )}
      </div>
    </article>
  );
};

export const Experience = () => {
  return (
    <Section id="experience" className="flex flex-col justify-center gap-20">
      {/* SECTION HEADER */}
      <h2 className="font-heading text-5xl font-semibold text-fg">
        Experience & Education
      </h2>

      {/* TIMELINES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* EDUCATION */}
        <div>
          <h3 className="mb-8 font-heading text-3xl font-semibold text-details">
            Education
          </h3>

          <div className="flex flex-col">
            <TimelineItem
              title="Tecnológico de Monterrey"
              description="Ingeniería en Tecnologías Computacionales"
              date="Aug 2025 - Present"
            />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <h3 className="mb-8 font-heading text-3xl font-semibold text-details">
            Experience
          </h3>

          <div className="flex flex-col">
            <TimelineItem
              title="Personal projects & indie apps"
              description="Building and launching mobile and web applications."
            />

            <TimelineItem
              title="App Store & Google Play"
              description="Outfiter (iOS) · UNIRENTA Cotizador (iOS/Android)"
            />

            <TimelineItem
              title="Academic Courses"
              description="Courses, competitions and team projects."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
