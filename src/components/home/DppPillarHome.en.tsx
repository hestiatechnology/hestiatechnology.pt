const checks = [
  {
    title: "THREAD Compatible",
    desc: "Open standard co-built with the European textile industry.",
  },
  {
    title: "Ready for QR, NFC and GS1",
    desc: "Direct export to labels and physical codes.",
  },
  {
    title: "One-Click Audit",
    desc: "Immutable history and API for external auditors.",
  },
];

export default function DppPillarHomeEn() {
  return (
    <section style={{
      background: "linear-gradient(180deg, var(--ember-tint) 0%, var(--background) 100%)",
      borderTop: "1px solid var(--ember-soft)",
      padding: "clamp(80px, 10vw, 128px) 0",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="dpp-grid">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ width: 28, height: 1, background: "var(--ember)", display: "inline-block", opacity: 0.55 }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ember)" }}>
                Digital Product Passport
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
              ESPR arrives in 2027.<br />We're ready{" "}
              <em style={{ fontStyle: "normal", color: "var(--ember)" }}>from day one</em>.
            </h2>
            <p style={{ fontSize: 18, color: "var(--muted-foreground)", lineHeight: 1.6, marginTop: 16 }}>
              Every batch produced in Hestia already carries a complete Digital Product Passport. Origin, carbon footprint, recyclability, REACH compliance — all generated automatically.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
              {checks.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 16 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "var(--ember)",
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
                href="/en/dpp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 44,
                  padding: "0 20px",
                  background: "var(--ember)",
                  color: "#fff",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                See DPP Guide
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: 48,
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}>
              <div style={{
                position: "absolute",
                inset: 16,
                border: "1px dashed var(--ember-soft)",
                borderRadius: 12,
                pointerEvents: "none",
              }} />
              <img src="/dpp-seal.svg" alt="DPP Seal" style={{ width: 240, height: 240 }} />
              <div style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                right: 24,
                fontFamily: "'Geist Mono', monospace",
                fontSize: 11,
                color: "var(--muted-foreground)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "space-between",
              }}>
                <span>DPP READY</span>
                <span>LOT 2A-0094</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .dpp-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
