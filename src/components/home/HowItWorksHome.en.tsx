const steps = [
  {
    n: "01",
    title: "Capture the value chain",
    desc: "Suppliers, fibers, dyeing and processes — imported from your ERP, Excel, or logged in seconds. Every link stays tied to the product.",
  },
  {
    n: "02",
    title: "Generate the passport",
    desc: "TextileEco automatically composes the Digital Product Passport for each product or lot: origin, carbon footprint, recyclability and REACH compliance.",
  },
  {
    n: "03",
    title: "Share and prove it",
    desc: "Direct export to QR, NFC and GS1 Digital Link. Consumer, customer and auditor all read the same record — ESPR-ready.",
  },
];

export default function HowItWorksHomeEn() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 128px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 28, height: 1, background: "var(--primary)", display: "inline-block", opacity: 0.55 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)" }}>How It Works</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>
            From fiber to passport. In three steps.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
            Creating a Digital Product Passport shouldn't be a months-long project, nor a spreadsheet per product. TextileEco turns the data you already have into a compliant, shareable record.
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
