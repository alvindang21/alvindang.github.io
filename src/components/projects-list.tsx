import { projects, type Project } from "@/data/projects";

export function ProjectsList() {
  const hasRealProjects = projects.some((p) => p.url !== "#");

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="font-mono text-[0.7rem] font-normal tracking-widest uppercase text-text-tertiary">
          Projects
        </h2>
        <span className="font-mono text-[0.7rem] text-text-tertiary">
          {hasRealProjects ? String(projects.length).padStart(2, "0") : "—"}
        </span>
      </div>

      {hasRealProjects ? (
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      ) : (
        <PlaceholderCard />
      )}
    </section>
  );
}

function PlaceholderCard() {
  return (
    <div className="relative border border-dashed border-border/60 p-8 md:p-12">
      <div className="flex flex-col gap-4">
        <span className="font-mono text-[0.7rem] tracking-widest uppercase text-text-tertiary">
          In Development
        </span>
        <h3 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-light tracking-tight leading-tight text-text-secondary/70">
          Side projects launching 2025
        </h3>
        <p className="font-mono text-[0.8rem] text-text-tertiary max-w-[400px] leading-relaxed">
          Currently building tools at the intersection of lifecycle marketing
          and product growth. Check back soon.
        </p>
      </div>
      <div className="absolute top-4 right-4 font-mono text-[0.65rem] text-text-tertiary/50">
        01
      </div>
    </div>
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
