export function WritingList() {
  const posts: { title: string; url: string; year: number }[] = [];

  return (
    <section id="writing" className="py-32 border-t border-border">
      <div className="flex justify-between items-baseline mb-16">
        <h2 className="font-mono text-[0.7rem] font-normal tracking-widest uppercase text-text-tertiary">
          Writing
        </h2>
        <span className="font-mono text-[0.7rem] text-text-tertiary">
          {String(posts.length).padStart(2, "0")}
        </span>
      </div>

      {posts.length === 0 ? (
        <p className="font-mono text-[0.8rem] text-text-tertiary">Coming soon.</p>
      ) : (
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="flex justify-between items-baseline py-4 border-b border-border transition-all hover:pl-4 hover:border-accent group"
            >
              <h3 className="font-serif text-xl font-normal italic transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <span className="font-mono text-[0.7rem] text-text-tertiary flex-shrink-0 ml-8">
                {post.year}
              </span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
