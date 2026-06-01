"use client";
import { useState, useEffect } from "react";

const CHAIN = [
  { id: "S1", label: "Fiber", icon: "thread" as const },
  { id: "S2", label: "Spinning", icon: "roll" as const },
  { id: "S3", label: "Weaving", icon: "loom" as const },
  { id: "S4", label: "Finishing", icon: "dye-bath" as const },
];

const CHECKS = [
  { l: "Fiber origin", v: "BCI Cotton" },
  { l: "CO₂ footprint", v: "4.2 kg eq/kg" },
  { l: "Recyclability", v: "Class A · 92%" },
  { l: "Substances", v: "REACH ✓ · ZDHC ✓" },
];

function PassportCard({ tick, time }: { tick: number; time: string }) {
  const scans = 1240 + (tick % 9);
  const verified = (tick % 4) + 1;

  return (
    <div style={{
      position: "relative",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 18,
      padding: 20,
      backdropFilter: "blur(8px)",
    }}>
      {/* Top header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#3CCB7F",
            display: "inline-block",
            boxShadow: "0 0 0 0 rgba(60,203,127,0.6)",
            animation: "pulse-dot 1.8s ease-out infinite",
          }} />
          Digital Product Passport · TextileEco
        </div>
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
          LIVE · {time}
        </div>
      </div>

      {/* Product identity */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "16px 0" }}>
        <div style={{ flexShrink: 0, width: 64, height: 64, borderRadius: 12, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 8 }}>
          <img src="/dpp-seal.svg" alt="DPP QR" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>Twill Fabric · 280 g/m²</div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>GTIN 05601234567890 · LOT 2A-0094</div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "#3CCB7F", marginTop: 2 }}>{scans.toLocaleString("en-GB")} public scans</div>
        </div>
      </div>

      {/* Traceability chain */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginBottom: 16 }}>
        {CHAIN.map((s, i) => (
          <div key={s.id} style={{
            background: i < verified ? "rgba(60,203,127,0.10)" : "rgba(255,255,255,0.025)",
            border: `1px solid ${i < verified ? "rgba(60,203,127,0.35)" : "rgba(255,255,255,0.06)"}`,
            borderRadius: 8,
            padding: "8px 6px",
            textAlign: "center",
            transition: "background 400ms ease, border-color 400ms ease",
          }}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={i < verified ? "#3CCB7F" : "rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}>
              <use href={`/textile-icons.svg#${s.icon}`} />
            </svg>
            <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Compliance rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {CHECKS.map((r) => (
          <div key={r.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 4px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 13 }}>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>{r.l}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>
              {r.v}
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#3CCB7F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroAEn() {
  const [tick, setTick] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTick((t) => t + 1);
      setTime(new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const id = setInterval(update, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: "relative", background: "#060E24", color: "#fff", padding: "clamp(64px, 9vw, 128px) 0 clamp(48px, 6vw, 96px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, rgba(255,255,255,0.020) 0 1px, transparent 1px 8px)" }} />
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: 999, filter: "blur(120px)", opacity: 0.5, top: -120, left: "30%", width: 540, height: 540, background: "#003DA5" }} />
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: 999, filter: "blur(120px)", opacity: 0.25, bottom: -200, right: -100, width: 420, height: 420, background: "#5B7BD9" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px 6px 6px", borderRadius: 9999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: 22, padding: "0 8px", borderRadius: 9999, background: "#003DA5", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>DPP</span>
              TextileEco · by Hestia Technology
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 0 24px", textWrap: "balance" }}>
              A digital passport for every{" "}
              <em style={{ fontStyle: "normal", color: "#8AA4DD" }}>textile product</em>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", maxWidth: 540, marginBottom: 36 }}>
              TextileEco is the fiber-level record — the central registry behind the Digital Product Passport required by ESPR. Generate it, share it via QR, and prove the compliance of every product you make.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="https://textileeco.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 24px", background: "#fff", color: "#003DA5", borderRadius: 12, fontSize: 16, fontWeight: 500, textDecoration: "none" }}
              >
                Explore TextileEco
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a
                href="/en/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 24px", background: "transparent", color: "#fff", borderRadius: 12, fontSize: 16, fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Book a Demo
              </a>
            </div>
            <div style={{ display: "flex", gap: 48, marginTop: 56, flexWrap: "wrap" }}>
              {[
                { value: "2027", unit: "", label: "ESPR · DPP mandatory" },
                { value: "QR · NFC", unit: "", label: "GS1 Digital Link" },
                { value: "100%", unit: "", label: "Traceable to fiber" },
              ].map((m) => (
                <div key={m.label}>
                  <strong style={{ fontFamily: "Geist, sans-serif", fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em", color: "#fff", display: "block", lineHeight: 1 }}>
                    {m.value}
                    {m.unit && <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)", marginLeft: 4 }}>{m.unit}</span>}
                  </strong>
                  <div style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <PassportCard tick={tick} time={time} />
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
