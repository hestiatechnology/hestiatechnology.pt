export default function SiteAnnouncement() {
  return (
    <div style={{
      background: "#060E24",
      color: "#fff",
      fontSize: 13,
      padding: "8px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      flexWrap: "wrap",
    }}>
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 10px",
        borderRadius: 9999,
        background: "#003DA5",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}>Investidores</span>
      <span>Estamos a abrir a próxima ronda — fundadores de fábrica e VCs.</span>
      <a
        href="/pt/contact"
        style={{ color: "rgba(255,255,255,0.85)", textDecoration: "underline", textUnderlineOffset: 3, whiteSpace: "nowrap" }}
      >
        Falar com a equipa →
      </a>
    </div>
  );
}
