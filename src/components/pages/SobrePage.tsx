const team = [
  { name: "Daniel Pereira", role: "CEO & co-fundador", img: "/CEO.jpg" },
  { name: "António Silva", role: "Lead Developer" },
  { name: "Daniela Carvalho", role: "Developer" },
  { name: "Artur Pinto", role: "Developer" },
  { name: "Thiago Yabuki", role: "Developer" },
];

const stats = [
  { n: "2025", l: "Fundada em Barcelos" },
  { n: "2", l: "Fábricas piloto" },
  { n: "5", l: "Pessoas na equipa" },
];

export default function SobrePage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">Sobre</span>
            </div>
            <h1>Construído em Barcelos. Para fábricas em toda a Europa.</h1>
            <p>Crescemos no meio do cluster têxtil português. Conhecemos os seus teares, os seus tinturados, e as suas folhas de Excel — e estamos aqui para acabar com elas.</p>
          </div>
        </div>
      </section>

      {/* Mission split */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-split">
            <div>
              <div className="eyebrow-row">
                <span className="eyebrow">A nossa missão</span>
              </div>
              <h2 style={{ marginBottom: 24 }}>Reindustrializar a Europa, um ERP têxtil de cada vez.</h2>
              <p style={{ color: "var(--muted-foreground)", fontSize: 17, lineHeight: 1.65, marginBottom: 16 }}>
                A indústria têxtil europeia produz <strong>€170 mil milhões</strong> por ano. Está pressionada por baixos preços asiáticos, pelas regras de sustentabilidade e por uma geração de software que parou em 1998.
              </p>
              <p style={{ color: "var(--muted-foreground)", fontSize: 17, lineHeight: 1.65 }}>
                Acreditamos que a forma de competir não é correr pelo preço. É dar a cada fábrica europeia ferramentas dignas de uma fábrica de chips: dados em tempo real, IA, conformidade automática, transparência total na cadeia de valor.
              </p>
            </div>
            <div style={{ background: "var(--thread-cotton)", borderRadius: 18, padding: 40, border: "1px solid var(--border)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                {stats.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "Geist Mono, monospace", fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", color: "var(--ember)" }}>{s.n}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="site-section site-section--muted">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">Equipa</span>
            </div>
            <h2>Engenheiros, designers e gente de fábrica.</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="member">
                <div className="member__photo">
                  {m.img ? (
                    <img src={m.img} alt={m.name} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", background: "var(--thread-linen)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Geist Mono, monospace", fontSize: 36, color: "var(--ember)", opacity: 0.4 }}>
                      {m.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </div>
                  )}
                </div>
                <div className="member__body">
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .about-split { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  );
}
