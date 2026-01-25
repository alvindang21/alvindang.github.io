export function Contact() {
  return (
    <section id="contact" className="py-48 border-t border-border">
      <div className="max-w-[700px]">
        <p className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-light leading-snug mb-16">
          Let's talk about growth, systems, or whatever you're building. I'm
          always curious.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 items-start">
          <ContactLink href="mailto:alvin@alvindang.com">Say hello</ContactLink>
          <ContactLink href="https://linkedin.com/in/alvindang" external>
            LinkedIn
          </ContactLink>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="inline-flex items-center gap-2 font-mono text-[0.85rem] tracking-wide text-text-secondary transition-colors hover:text-accent group"
    >
      <span className="opacity-0 -translate-x-2.5 transition-all group-hover:opacity-100 group-hover:translate-x-0">
        →
      </span>
      {children}
    </a>
  );
}
