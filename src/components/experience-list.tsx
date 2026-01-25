"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { ExperienceModal } from "./experience-modal";

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

      <div className="flex flex-col gap-16">
        {experience.map((job, i) => (
          <article
            key={job.company}
            onClick={() => setSelected(job)}
            className="grid grid-cols-[auto_1fr_auto] gap-8 items-baseline py-4 cursor-pointer transition-opacity hover:opacity-60"
          >
            <span className="font-mono text-[0.7rem] text-text-tertiary pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-[clamp(1.5rem,4vw,2.5rem)] font-normal tracking-tight leading-none">
                {job.company}
              </h3>
              <p className="font-mono text-[0.75rem] text-text-secondary tracking-wide mb-1">
                {job.role}
              </p>
            </div>
            <span className="font-mono text-[0.7rem] text-text-tertiary self-start pt-2">
              {job.years}
            </span>
          </article>
        ))}
      </div>

      <ExperienceModal
        experience={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
