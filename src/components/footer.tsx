export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between gap-8 font-mono text-[0.7rem] text-text-tertiary tracking-wide">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
            <span>Available for interesting problems</span>
          </div>
          <p className="text-[0.65rem] max-w-[280px] leading-relaxed opacity-70">
            Open to advisory roles, consulting on lifecycle strategy, and select
            fractional engagements.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-4">
          <div className="flex gap-6">
            <a
              href="mailto:alvin@alvindang.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/alvindang"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 text-[0.65rem] opacity-70">
            <span>Toronto, Canada</span>
            <span>·</span>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
