"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Required for hydration mismatch prevention with next-themes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="font-mono text-[0.75rem] tracking-widest uppercase text-text-tertiary transition-colors hover:text-accent"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
