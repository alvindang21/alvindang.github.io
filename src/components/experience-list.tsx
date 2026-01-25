"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { ExperienceModal } from "./experience-modal";
import { companyLogos } from "./company-logos";

export function ExperienceList() {
  const [selected, setSelected] = useState<(typeof experience)[number] | null>(
    null
  );

  return (
    <section id="work">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="font-mono text-[0.7rem] font-normal tracking-widest uppercase text-text-tertiary">
          Experience
        </h2>
        <span className="font-mono text-[0.7rem] text-text-tertiary">
          {String(experience.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative">
        {/* Timeline line - desktop only */}
        <div className="absolute left-[0.45rem] top-6 bottom-6 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-8">
          {experience.map((job, i) => {
            const Logo = companyLogos[job.logo];
            const isLast = i === experience.length - 1;

            return (
              <article
                key={job.company}
                onClick={() => setSelected(job)}
                className={`
                  relative grid grid-cols-[1fr_auto] md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8
                  py-5 px-0 md:pl-8 cursor-pointer rounded-sm
                  transition-all duration-300 ease-out
                  hover:bg-bg-subtle/50 hover:shadow-sm hover:scale-[1.005]
                  ${job.current ? "border-l-2 border-accent pl-4 md:pl-8 md:border-l-0 md:ml-0" : ""}
                `}
              >
                {/* Timeline dot - desktop only */}
                <div
                  className={`
                    absolute left-0 top-7 w-[0.6rem] h-[0.6rem] rounded-full border-2 border-background
                    hidden md:block transition-colors
                    ${job.current ? "bg-accent animate-pulse-dot" : "bg-border"}
                    ${isLast ? "opacity-50" : ""}
                  `}
                />

                {/* Index number - desktop only */}
                <span className="font-mono text-[0.7rem] text-text-tertiary pt-1.5 hidden md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2">
                  {/* Company name with logo */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-text-tertiary opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0">
                      <Logo className="w-full h-full" />
                    </div>
                    <h3 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-normal tracking-tight leading-none">
                      {job.company}
                    </h3>
                    {job.current && (
                      <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                        Now
                      </span>
                    )}
                  </div>

                  {/* Role */}
                  <p className="font-mono text-[0.75rem] text-text-secondary tracking-wide">
                    {job.role}
                  </p>

                  {/* Highlights/metrics */}
                  {job.highlights && job.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {job.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="font-mono text-[0.65rem] text-accent tracking-wide bg-accent/8 px-2 py-0.5 rounded-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Years */}
                <span className="font-mono text-[0.7rem] text-text-tertiary self-start pt-2">
                  {job.years}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <ExperienceModal
        experience={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
