type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  bg: number;
};

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function BlogPage({ posts }: { posts: Post[] }) {
  const featured = posts[0];
  const rest = posts.slice(1);

  if (!featured) {
    return (
      <>
        <section className="page-hero">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="page-hero__inner">
              <div className="eyebrow-row"><span className="eyebrow">Blog</span></div>
              <h1>Notas da fábrica.</h1>
              <p>Pensamentos sobre indústria têxtil europeia, regulação, IA aplicada à produção e como construímos a Hestia.</p>
            </div>
          </div>
        </section>
        <section className="site-section">
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", color: "var(--muted-foreground)" }}>
            Ainda não há artigos publicados.
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">Blog</span>
            </div>
            <h1>Notas da fábrica.</h1>
            <p>Pensamentos sobre indústria têxtil europeia, regulação, IA aplicada à produção e como construímos a Hestia.</p>
          </div>
        </div>
      </section>

      {/* Blog content */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Featured post */}
          <a
            href={`/pt/blog/${featured.slug}`}
            className="blog-card"
            style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", marginBottom: 48, alignItems: "stretch" }}
          >
            <div className={`blog-card__cover blog-card__cover-bg-${featured.bg}`} style={{ aspectRatio: "auto", minHeight: 240 }}>
              <div className="weave-overlay" />
              {featured.tags[0] && <span className="badge">{featured.tags[0]}</span>}
            </div>
            <div className="blog-card__body" style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="blog-card__meta">DESTAQUE · {featured.date}</div>
              <h3 style={{ fontSize: 28, marginBottom: 16, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{featured.title}</h3>
              <p style={{ fontSize: 16, marginBottom: 24 }}>{featured.description}</p>
              <div>
                <span className="btn btn--ghost btn--sm" style={{ display: "inline-flex" }}>
                  Ler artigo <ArrowUpRightIcon />
                </span>
              </div>
            </div>
          </a>

          {/* Blog grid */}
          {rest.length > 0 && (
            <div className="blog-grid">
              {rest.map((p, i) => (
                <a key={i} href={`/pt/blog/${p.slug}`} className="blog-card">
                  <div className={`blog-card__cover blog-card__cover-bg-${p.bg}`}>
                    <div className="weave-overlay" />
                    {p.tags[0] && <span className="badge">{p.tags[0]}</span>}
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">{p.date}</div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .blog-card[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
