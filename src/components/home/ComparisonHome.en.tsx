const legacy = [
  "Perpetual licenses + 18% annual maintenance",
  "6–18 months to implement",
  "No DPP / ESPR support",
  "Expensive customization, vendor lock-in",
  "Manual regulatory updates",
  "No mobile app for the shop floor",
];

const hestia = [
  "Monthly subscription · no license cost",
  "Live in 2–4 weeks",
  "DPP-ready from the first lot",
  "Open API · no lock-in",
  "Automatic regulatory updates",
  "Native app for factory tablet",
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ComparisonHomeEn() {
  return (
    <section style={{ padding: "clamp(80px, 10vw, 128px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 28, height: 1, background: "var(--primary)", display: "inline-block", opacity: 0.55 }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--primary)" }}>Compare</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 16 }}>Legacy ERPs vs. Hestia.</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--muted-foreground)" }}>
            Traditional textile ERPs were designed in the 90s, with perpetual licenses, endless implementation projects and zero European compliance. Hestia is the opposite — in every dimension.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="compare-grid">
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 32,
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 4 }}>Legacy ERP</h3>
            <div style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 24 }}>SAP, Datatêxtil, Wintex, etc.</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {legacy.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: i > 0 ? "1px solid var(--border)" : undefined, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flexShrink: 0, width: 20, height: 20, marginTop: 2, color: "#B42318" }}><XIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24, padding: 16, background: "var(--muted)", borderRadius: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>3-Year TCO</div>
              <div style={{ fontSize: 28, fontWeight: 600, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>€420,000</div>
            </div>
          </div>

          <div style={{
            background: "var(--card)",
            border: "2px solid var(--primary)",
            borderRadius: 16,
            padding: 32,
            position: "relative",
            boxShadow: "0 0 0 4px rgba(0,61,165,0.05)",
          }}>
            <div style={{
              position: "absolute",
              top: -12,
              left: 32,
              padding: "4px 12px",
              borderRadius: 9999,
              background: "var(--primary)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>Hestia</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 4 }}>Hestia ERP</h3>
            <div style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 24 }}>Cloud · AI-native · DPP-ready</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {hestia.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: i > 0 ? "1px solid var(--border)" : undefined, fontSize: 14.5, lineHeight: 1.5 }}>
                  <span style={{ flexShrink: 0, width: 20, height: 20, marginTop: 2, color: "var(--status-running)" }}><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 24, padding: 16, background: "var(--ember-tint)", borderRadius: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ember)" }}>3-Year TCO</div>
              <div style={{ fontSize: 28, fontWeight: 600, marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
                €258,000{" "}
                <span style={{ fontSize: 14, color: "var(--ember)", fontWeight: 500, marginLeft: 8 }}>−38%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .compare-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
