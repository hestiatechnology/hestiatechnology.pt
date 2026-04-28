"use client";
import { useState } from "react";

export default function PricingTeaserHomeEn() {
  const [machines, setMachines] = useState(20);
  const [users, setUsers] = useState(15);
  const monthly = Math.round((300 + machines * 22 + users * 12) / 10) * 10;

  return (
    <section style={{ padding: "clamp(80px, 10vw, 128px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          background: "#060E24",
          color: "#fff",
          borderRadius: 24,
          padding: "clamp(32px, 5vw, 56px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, rgba(255,255,255,0.020) 0 1px, transparent 1px 8px)",
          }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="pricing-teaser-grid">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ width: 28, height: 1, background: "#8AA4DD", display: "inline-block", opacity: 0.55 }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8AA4DD" }}>Pricing</span>
              </div>
              <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Predictable pricing.<br />No year-end surprises.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, lineHeight: 1.6 }}>
                Hestia is a monthly subscription calculated by connected machines and active users. No perpetual licenses, no upgrade fees.
              </p>
              <div style={{ marginTop: 28 }}>
                <a
                  href="/en/prices"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 24px", background: "#fff", color: "#003DA5", borderRadius: 12, fontSize: 16, fontWeight: 500, textDecoration: "none" }}
                >
                  See full price simulator
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ember-hi, #DC5921)", marginBottom: 12 }}>
                Your estimate
              </div>
              <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1 }}>
                €{monthly.toLocaleString("de-DE")}
                <small style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginLeft: 4, fontWeight: 400 }}>/mo</small>
              </div>

              <div style={{ marginTop: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  Connected machines
                  <strong style={{ color: "#fff", fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{machines}</strong>
                </label>
                <input
                  type="range"
                  min={2}
                  max={80}
                  value={machines}
                  onChange={(e) => setMachines(+e.target.value)}
                  style={{ WebkitAppearance: "none", appearance: "none", width: "100%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.12)", outline: "none", cursor: "pointer" }}
                  className="brand-range"
                />
              </div>
              <div style={{ marginTop: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,0.7)", display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  Active users
                  <strong style={{ color: "#fff", fontFamily: "'Geist Mono', monospace", fontWeight: 500 }}>{users}</strong>
                </label>
                <input
                  type="range"
                  min={3}
                  max={60}
                  value={users}
                  onChange={(e) => setUsers(+e.target.value)}
                  style={{ WebkitAppearance: "none", appearance: "none", width: "100%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.12)", outline: "none", cursor: "pointer" }}
                  className="brand-range"
                />
              </div>
              <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                Includes DPP, IoT, mobile app, 99.9% SLA. No implementation cost in the early access program.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .pricing-teaser-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        .brand-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid var(--ember, #C2410C);
          cursor: pointer;
        }
        .brand-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid var(--ember, #C2410C);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
