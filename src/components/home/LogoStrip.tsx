export default function LogoStrip() {
  const partners = [
    { label: "IPCA", bold: "IPCA" },
    { label: "Startup Portugal", bold: "Portugal" },
    { label: "Portugal 2030", bold: "Portugal" },
    { label: "EU ESPR", bold: "EU" },
    { label: "ANI Inovação", bold: "ANI" },
  ];

  return (
    <section style={{
      padding: "48px 0",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--background)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>
          Construído com
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", fontFamily: "'Geist Mono', monospace", fontSize: 14, color: "var(--muted-foreground)", fontWeight: 500 }}>
          {partners.map((p) => {
            const parts = p.label.split(p.bold);
            return (
              <span key={p.label}>
                {parts[0]}
                <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>{p.bold}</strong>
                {parts[1]}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
