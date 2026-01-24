export function Footer() {
  return (
    <footer className="py-16 flex justify-between items-center font-mono text-[0.7rem] text-text-tertiary tracking-wide">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
        <span>Available for interesting problems</span>
      </div>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
