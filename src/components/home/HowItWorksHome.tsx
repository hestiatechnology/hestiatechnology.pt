const steps = [
  {
    n: "01",
    title: "Conecte os seus dados",
    desc: "Importação ERP legado, Excel, máquinas Picanol/Toyota/Sulzer e sensores IoT existentes. Zero re-instalação.",
  },
  {
    n: "02",
    title: "Veja em tempo real",
    desc: "Cada tear, lote, ordem e operador num único painel. KPIs ao segundo, alertas no telemóvel do diretor de produção.",
  },
  {
    n: "03",
    title: "Cumpra a regulação",
    desc: "Passaporte Digital de Produto, ESPR e relatórios CSRD são gerados automaticamente para cada lote enviado.",
  },
];

export default function HowItWorksHome() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 128px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 28, height: 1, background: "var(--primary)", display: "inline-block", opacity: 0.55 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)" }}>O processo</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            Três passos. Sem consultoria de seis meses.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
            Trocar o ERP de uma fábrica não tem de ser um projeto de 18 meses. A Hestia foi construída para entrar a operar antes do próximo trimestre fechar.
          </p>
        </div>

        <div className="hiw-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 0,
          border: "1px solid var(--border)",
          borderRadius: 16,
          overflow: "hidden",
          background: "var(--card)",
        }}>
          {steps.map((s, i) => (
            <div key={s.n} className="hiw-step" style={{
              padding: 32,
              borderRight: i < 2 ? "1px solid var(--border)" : undefined,
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "var(--primary)",
                color: "#fff",
                fontFamily: "'Geist Mono', monospace",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 24,
              }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
          .hiw-step { border-right: none !important; border-bottom: 1px solid var(--border); }
          .hiw-step:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
