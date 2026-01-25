import { projects, type Project } from "@/data/projects";

export function ProjectsList() {
  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="font-mono text-[0.7rem] font-normal tracking-widest uppercase text-text-tertiary">
          Projects
        </h2>
        <span className="font-mono text-[0.7rem] text-text-tertiary">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isLink = project.url !== "#";

  if (isLink) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-[auto_1fr_auto] gap-8 items-baseline py-4 transition-opacity hover:opacity-60"
      >
        <ProjectCardContent project={project} index={index} />
      </a>
    );
  }

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-baseline py-4">
      <ProjectCardContent project={project} index={index} />
    </div>
  );
}

function ProjectCardContent({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <>
      <span className="font-mono text-[0.7rem] text-text-tertiary pt-1">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-normal tracking-tight leading-none">
          {project.title}
        </h3>
        <p className="text-[0.9rem] text-text-tertiary max-w-[400px]">
          {project.description}
        </p>
      </div>
      <span className="font-mono text-[0.7rem] text-text-tertiary self-start pt-2">
        {project.year}
      </span>
    </>
  );
}
