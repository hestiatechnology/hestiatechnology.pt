const checks = [
  {
    title: "Produção em tempo real",
    desc: "Teares, lotes e ordens num só painel — os dados que alimentam cada passaporte.",
  },
  {
    title: "Rastreio por lote, do fio à expedição",
    desc: "Tonalidade, GSM, retenções de qualidade e libertação digital, sem dupla introdução.",
  },
  {
    title: "Sem migração dolorosa",
    desc: "Importa do ERP legado e do Excel. A operar em semanas, não meses.",
  },
];

const KPIS = [
  { label: "OEE", value: "84.3%" },
  { label: "Lotes hoje", value: "148" },
  { label: "Teares", value: "16/18" },
];

export default function ErpPillarHome() {
  return (
    <section style={{
      background: "linear-gradient(180deg, var(--muted) 0%, var(--background) 100%)",
      borderTop: "1px solid var(--border)",
      padding: "clamp(80px, 10vw, 128px) 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="erp-grid">
          {/* Left: dashboard mini */}
          <div style={{ position: "relative", order: 1 }} className="erp-visual">
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: 28,
              boxShadow: "var(--shadow-md)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Hestia ERP · Linha 2</div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 9999, fontSize: 12, fontWeight: 600, color: "#118D57", background: "#E6F4EC", border: "1px solid #B5DBC5" }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: "#118D57", display: "inline-block" }} />
                  Ao vivo
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
                {KPIS.map((k) => (
                  <div key={k.label} style={{ background: "var(--background)", border: "1px solid var(--border)", borderRadius: 10, padding: 14 }}>
                    <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>{k.label}</div>
                    <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 4, fontVariantNumeric: "tabular-nums" }}>{k.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: 6 }}>
                {Array.from({ length: 18 }).map((_, i) => {
                  const stopped = i === 4 || i === 13;
                  return (
                    <div key={i} style={{
                      aspectRatio: "1",
                      borderRadius: 6,
                      background: stopped ? "#FBE9E7" : "#E6F4EC",
                      border: `1px solid ${stopped ? "#B4231833" : "#118D5733"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: stopped ? "#B42318" : "#118D57",
                    }}>
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <use href="/textile-icons.svg#loom" />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div style={{ order: 2 }} className="erp-copy">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 28, height: 1, background: "var(--primary)", display: "inline-block", opacity: 0.55 }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)" }}>
                A base · Hestia ERP
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Um passaporte só é fiável<br />se os <em style={{ fontStyle: "normal", color: "var(--primary)" }}>dados</em> também forem.
            </h2>
            <p style={{ fontSize: 18, color: "var(--muted-foreground)", lineHeight: 1.6, marginTop: 16 }}>
              Por baixo do TextileEco corre um ERP têxtil completo. É ele que captura, em tempo real, cada lote, tear e ordem — para que o Passaporte Digital nasça dos dados reais da fábrica, não de estimativas.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
              {checks.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "var(--primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: 4, margin: 0 }}>{c.title}</h4>
                    <p style={{ fontSize: 15, color: "var(--muted-foreground)", margin: "4px 0 0" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a
                href="/pt/features"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 20px",
                  background: "var(--primary)",
                  color: "#fff",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Ver o ERP Hestia
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .erp-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .erp-visual { order: 2 !important; }
          .erp-copy { order: 1 !important; }
        }
      `}</style>
    </section>
  );
}
