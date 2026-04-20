import { experience } from "@/data/experience";

export default function Home() {
  return (
    <div className="pt-[clamp(5rem,12vh,8rem)] pb-[clamp(4rem,10vh,6rem)] pr-[clamp(1.5rem,5vw,3rem)] pl-[clamp(2rem,8vw,8rem)]">
      <div className="mb-[clamp(5rem,14vh,9rem)] animate-rise">
        <h1 className="relative font-serif text-[clamp(1.6rem,3.2vw,2.2rem)] font-light leading-none tracking-[-0.02em] mb-3">
          <strong className="font-medium">Alvin Dang</strong>
          <span
            aria-hidden
            className="block w-[120px] h-px mt-[1.1rem] bg-[var(--rule)]"
          />
        </h1>
      </div>

      {experience.map((job, i) => (
        <article
          key={job.year}
          className="grid grid-cols-[64px_1fr] gap-x-8 items-baseline mb-[clamp(1.6rem,4vh,2.4rem)] animate-rise"
          style={{ animationDelay: `${0.04 * (i + 1)}s` }}
        >
          <h2 className="text-[1.05rem] font-light leading-[1.55] tracking-[-0.005em] text-[var(--soft)] m-0">
            {job.year}
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.55] tracking-[-0.005em] text-[var(--foreground)] m-0 max-w-[690px]">
            <strong className="font-medium">{job.role}</strong> at{" "}
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-bloom"
            >
              {job.company}
            </a>
            , {job.tagline}
          </p>
        </article>
      ))}

      <nav
        className="grid grid-cols-[64px_1fr] gap-x-8 mt-[clamp(7rem,18vh,12rem)] text-[1.05rem] animate-rise"
        style={{ animationDelay: "0.3s" }}
      >
        <span />
        <div className="flex flex-wrap gap-[1.4rem]">
          <a href="mailto:alvin@alvindang.com" className="link-bloom italic">
            Email
          </a>
          <a
            href="https://linkedin.com/in/alvindang"
            target="_blank"
            rel="noopener noreferrer"
            className="link-bloom italic"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/alvindang"
            target="_blank"
            rel="noopener noreferrer"
            className="link-bloom italic"
          >
            X
          </a>
          <a
            href="https://substack.com/@alvindang"
            target="_blank"
            rel="noopener noreferrer"
            className="link-bloom italic"
          >
            Substack
          </a>
        </div>
      </nav>
    </div>
  );
}
