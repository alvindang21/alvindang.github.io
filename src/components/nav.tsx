"use client";

import { useEffect, useState } from "react";

const navItems = [
  { index: "01", label: "Work", href: "#work" },
  { index: "02", label: "Projects", href: "#projects" },
  { index: "03", label: "Writing", href: "#writing" },
  { index: "04", label: "Contact", href: "#contact" },
];

export function Nav() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const footer = document.querySelector("footer");
      if (!footer) return false;

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "100px" }
      );

      observer.observe(footer);
      return true;
    };

    if (!setupObserver()) {
      const retryId = requestAnimationFrame(setupObserver);
      return () => cancelAnimationFrame(retryId);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <nav
      className={`
        fixed bottom-8 left-8 z-50 hidden md:flex flex-col gap-3
        font-mono text-[0.75rem] uppercase tracking-wide
        transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-text-tertiary hover:text-accent transition-colors"
        >
          <span className="text-text-tertiary/60">{item.index}</span> {item.label}
        </a>
      ))}
    </nav>
  );
}

export function MobileNav() {
  return (
    <nav className="md:hidden flex gap-6 py-4 font-mono text-[0.75rem] uppercase tracking-wide">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-text-tertiary hover:text-accent transition-colors"
        >
          <span className="text-text-tertiary/60">{item.index}</span> {item.label}
        </a>
      ))}
    </nav>
  );
}
