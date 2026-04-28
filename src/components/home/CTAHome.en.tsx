export default function CTAHomeEn() {
  return (
    <section style={{
      background: "#060E24",
      color: "#fff",
      textAlign: "center",
      padding: "clamp(80px, 10vw, 128px) 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.6,
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, rgba(255,255,255,0.020) 0 1px, transparent 1px 8px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        pointerEvents: "none",
        borderRadius: 9999,
        filter: "blur(120px)",
        opacity: 0.4,
        width: 600,
        height: 600,
        background: "#003DA5",
        bottom: -300,
        left: "50%",
        transform: "translateX(-50%)",
      }} />

      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <span style={{ width: 28, height: 1, background: "#8AA4DD", display: "inline-block", opacity: 0.55 }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8AA4DD" }}>Next step</span>
        </div>
        <h2 style={{
          color: "#fff",
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          Ready to transform your textile factory?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, marginBottom: 36 }}>
          Join the early access program. Limited spots — we're onboarding 8 factories before year-end.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/en/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 52,
              padding: "0 24px",
              background: "#fff",
              color: "#003DA5",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book a Demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="/en/features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 52,
              padding: "0 24px",
              background: "transparent",
              color: "#fff",
              borderRadius: 12,
              fontSize: 16,
              fontWeight: 500,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.25)",
              cursor: "pointer",
            }}
          >
            Explore the product
          </a>
        </div>
      </div>
    </section>
  );
}
