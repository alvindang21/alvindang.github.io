"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type Experience } from "@/data/experience";
import { companyLogos } from "@/components/company-logos";

interface Props {
  experience: Experience | null;
  open: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, open, onClose }: Props) {
  const Logo = experience ? companyLogos[experience.logo] : null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[560px] p-10">
        {experience && (
          <>
            <DialogHeader className="flex-row items-start gap-6 mb-10">
              <div className="w-12 h-12 flex items-center justify-center border border-border p-2.5">
                {Logo && <Logo className="w-full h-full" />}
              </div>
              <div className="flex-1">
                <DialogTitle className="font-serif text-3xl font-normal tracking-tight leading-none mb-2">
                  {experience.company}
                </DialogTitle>
                <p className="font-mono text-[0.8rem] text-text-secondary tracking-wide">
                  {experience.role}
                </p>
              </div>
            </DialogHeader>

            <p className="font-mono text-[0.75rem] text-text-tertiary mb-6">
              {experience.years}
            </p>

            <p className="font-serif text-lg leading-relaxed text-text-secondary mb-10">
              {experience.description}
            </p>

            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[0.8rem] text-text-tertiary tracking-wide transition-colors hover:text-accent group"
            >
              Visit website
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
