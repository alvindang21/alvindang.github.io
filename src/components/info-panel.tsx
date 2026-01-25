"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function InfoPanel() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="font-mono text-[0.75rem] tracking-widest uppercase text-text-tertiary transition-colors hover:text-accent">
          Info
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[520px] p-8 pt-20 overflow-y-auto">
        <SheetTitle className="sr-only">About Alvin Dang</SheetTitle>
        <div className="space-y-6">
          <p className="font-serif text-xl font-light leading-relaxed">
            Lifecycle is the thread. A decade building growth systems at{" "}
            <a
              href="https://relayfi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-border transition-colors hover:border-accent hover:text-accent"
            >
              Relay
            </a>
            , Wealthsimple, and Shopify — turning user journeys into playbooks
            that scale.
          </p>
          <p className="font-serif text-xl font-light leading-relaxed">
            Outside of work, I'm a multi-set Challenger in TFT (top 0.01% — yes,
            I take fake points very seriously) and a lifelong Raptors fan. Also
            an amateur barista and aggressively mediocre home cook.
          </p>

          <div className="font-mono text-[0.8rem] text-text-tertiary leading-loose pl-4 border-l-2 border-border">
            The gaming thing isn't a flex, it's a character flaw. But it did
            teach me more about systems and feedback loops than any business
            book.
          </div>

          <div className="space-y-6 pt-4">
            <InfoSection
              label="Now"
              value="Leading Lifecycle Marketing at Relay"
            />
            <InfoSection
              label="Previously"
              value="Wealthsimple, Shopify, Homebase, BlackBerry"
            />
            <InfoSection
              label="Education"
              value="Lazaridis School of Business, Wilfrid Laurier"
            />
          </div>

          <div className="flex gap-16 pt-6 mt-8 border-t border-border">
            <a
              href="mailto:alvin@alvindang.com"
              className="font-mono text-[0.8rem] text-text-secondary tracking-wide transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/alvindang"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8rem] text-text-secondary tracking-wide transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function InfoSection({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[0.7rem] tracking-widest uppercase text-text-tertiary mb-1">
        {label}
      </div>
      <div className="text-[0.95rem] text-text-secondary leading-relaxed">
        {value}
      </div>
    </div>
  );
}
