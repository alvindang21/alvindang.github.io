export function Hero() {
  return (
    <section className="hero relative min-h-[85vh] flex flex-col justify-center pb-32">
      <h1 className="font-serif text-[clamp(3rem,10vw,7rem)] font-light tracking-tight leading-none mb-8 animate-reveal-name">
        Alvin Dang
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 max-w-[900px] animate-fade-up [animation-delay:0.3s]">
        <p className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-light leading-snug">
          Lifecycle marketing leader. I build playbooks for scaling things that
          matter.
        </p>
        <div className="font-mono text-[0.8rem] text-text-tertiary leading-loose pt-1">
          <span className="block text-text-secondary">Currently at Relay</span>
          <span className="block">Previously Wealthsimple, Shopify</span>
          <span className="block">Lifecycle · Growth · Systems</span>
        </div>
      </div>
      <div className="absolute bottom-16 right-8 font-mono text-[0.7rem] text-text-tertiary tracking-widest uppercase [writing-mode:vertical-rl] animate-fade-up [animation-delay:0.6s]">
        Scroll
        <span className="block w-px h-10 bg-border mt-4 mx-auto animate-scroll-line" />
      </div>
    </section>
  );
}
