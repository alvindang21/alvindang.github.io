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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let footerObserver: IntersectionObserver | null = null;
    let sectionObserver: IntersectionObserver | null = null;

    const setupObservers = () => {
      const footer = document.querySelector("footer");
      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean) as Element[];

      if (!footer || sections.length === 0) return false;

      footerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "100px" }
      );

      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
      );

      footerObserver.observe(footer);
      sections.forEach((section) => sectionObserver?.observe(section));

      return true;
    };

    if (!setupObservers()) {
      const retryId = requestAnimationFrame(setupObservers);
      return () => cancelAnimationFrame(retryId);
    }

    return () => {
      footerObserver?.disconnect();
      sectionObserver?.disconnect();
    };
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
      {navItems.map((item) => {
        const isActive = activeSection === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            className={`
              transition-all duration-200
              ${isActive ? "text-accent translate-x-1" : "text-text-tertiary hover:text-accent"}
            `}
          >
            <span
              className={`transition-colors ${isActive ? "text-accent/80" : "text-text-tertiary/60"}`}
            >
              {item.index}
            </span>{" "}
            {item.label}
          </a>
        );
      })}
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
          <span className="text-text-tertiary/60">{item.index}</span>{" "}
          {item.label}
        </a>
      ))}
    </nav>
  );
}
