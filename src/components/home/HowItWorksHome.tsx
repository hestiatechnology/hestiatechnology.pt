const steps = [
  {
    n: "01",
    title: "Recolha a cadeia de valor",
    desc: "Fornecedores, fibras, tinturaria e processos — importados do seu ERP, Excel ou registados em segundos. Cada elo fica ligado ao produto.",
  },
  {
    n: "02",
    title: "Gere o passaporte",
    desc: "O TextileEco compõe automaticamente o Passaporte Digital de cada produto ou lote: origem, pegada de carbono, reciclabilidade e conformidade REACH.",
  },
  {
    n: "03",
    title: "Partilhe e prove",
    desc: "Exportação direta para QR, NFC e GS1 Digital Link. O consumidor, o cliente e o auditor acedem ao mesmo registo — pronto para o ESPR.",
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
            Do fio ao passaporte. Em três passos.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
            Criar um Passaporte Digital não tem de ser um projeto de meses nem uma folha de Excel por produto. O TextileEco transforma os dados que já tem num registo conforme e partilhável.
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
