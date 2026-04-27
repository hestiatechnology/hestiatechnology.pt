"use client";
import { useState, useEffect } from "react";

const LOOMS = [
  { id: "L-014", name: "Tear Picanol Optimax", lot: "2A-0094", baseRpm: 612, status: "running" as const },
  { id: "L-022", name: "Tear Toyota JAT810", lot: "2A-0091", baseRpm: 588, status: "running" as const },
  { id: "L-031", name: "Tear Vamatex Leonardo", lot: "2A-0102", baseRpm: 0, status: "hold" as const },
  { id: "L-007", name: "Tear Sulzer G6500", lot: "—", baseRpm: 0, status: "maintenance" as const },
  { id: "L-019", name: "Tear Picanol GTMax", lot: "2A-0089", baseRpm: 0, status: "error" as const },
];

const STATUS_LABEL: Record<string, string> = {
  running: "A correr",
  hold: "Em retenção",
  maintenance: "Manutenção",
  error: "Erro",
};

function LiveFloorCard({ tick, time }: { tick: number; time: string }) {
  const oee = 84 + ((tick % 5) - 2) * 0.4;
  const lots = 142 + (tick % 7);
  const running = 14 + (tick % 3);
  const machines = 18;

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
          Chão de fábrica · Linha 2
        </div>
        <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
          LIVE · {time}
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, margin: "16px 0" }}>
        {[
          { label: "OEE", value: oee.toFixed(1), unit: "%", delta: "+1.8 vs ontem", down: false },
          { label: "Lotes hoje", value: lots, unit: "", delta: `+${tick % 7} última hora`, down: false },
          { label: "Teares", value: `${running}/${machines}`, unit: "", delta: "2 em paragem", down: true },
        ].map((kpi) => (
          <div key={kpi.label} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 12 }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{kpi.label}</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", marginTop: 4, fontVariantNumeric: "tabular-nums" }}>
              {kpi.value}
              {kpi.unit && <span style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{kpi.unit}</span>}
            </div>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: kpi.down ? "#F5B544" : "#3CCB7F", marginTop: 2 }}>{kpi.delta}</div>
          </div>
        ))}
      </div>

      {/* Loom rows */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {LOOMS.map((l) => {
          const rpm = l.status === "running" ? l.baseRpm + (tick % 5) : 0;
          return (
            <div key={l.id} style={{ display: "grid", gridTemplateColumns: "32px 1fr auto auto", gap: 12, alignItems: "center", padding: "10px 4px", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 13 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(91,123,217,0.12)", color: "#5B7BD9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <use href="/textile-icons.svg#loom" />
                </svg>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.92)", fontWeight: 500 }}>{l.name}</div>
                <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{l.id} · Lote {l.lot}</div>
              </div>
              <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                {rpm > 0 ? `${rpm} rpm` : "—"}
              </div>
              <span className={`s-${l.status}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 8px", borderRadius: 9999, fontSize: 11, fontWeight: 600, border: "1px solid" }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: "currentColor", display: "inline-block" }} />
                {STATUS_LABEL[l.status]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HeroA() {
  const [tick, setTick] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTick((t) => t + 1);
      setTime(new Date().toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const id = setInterval(update, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{ position: "relative", background: "#060E24", color: "#fff", padding: "clamp(64px, 9vw, 128px) 0 clamp(48px, 6vw, 96px)", overflow: "hidden" }}>
      {/* Weave texture */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 8px), repeating-linear-gradient(90deg, rgba(255,255,255,0.020) 0 1px, transparent 1px 8px)" }} />
      {/* Glows */}
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: 999, filter: "blur(120px)", opacity: 0.5, top: -120, left: "30%", width: 540, height: 540, background: "#003DA5" }} />
      <div style={{ position: "absolute", pointerEvents: "none", borderRadius: 999, filter: "blur(120px)", opacity: 0.25, bottom: -200, right: -100, width: 420, height: 420, background: "#5B7BD9" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          {/* Left */}
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px 6px 6px", borderRadius: 9999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 22, height: 22, borderRadius: 9999, background: "#003DA5", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>v2</span>
              Acesso antecipado · 2026
            </span>
            <h1 style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.04em", margin: "0 0 24px", textWrap: "balance" }}>
              O sistema operativo para a sua{" "}
              <em style={{ fontStyle: "normal", color: "#8AA4DD" }}>fábrica têxtil</em>.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", maxWidth: 540, marginBottom: 36 }}>
              Substitua o seu ERP legado por uma plataforma cloud, IA-nativa e pronta para o Passaporte Digital de Produto. Implementação em semanas, não meses.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/pt/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 24px", background: "#fff", color: "#003DA5", borderRadius: 12, fontSize: 16, fontWeight: 500, textDecoration: "none" }}
              >
                Agendar demonstração
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a
                href="/pt/features"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 52, padding: "0 24px", background: "transparent", color: "#fff", borderRadius: 12, fontSize: 16, fontWeight: 500, textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Ver o produto
              </a>
            </div>
            <div style={{ display: "flex", gap: 48, marginTop: 56, flexWrap: "wrap" }}>
              {[
                { value: "2–4", unit: "sem", label: "Implementação" },
                { value: "−38%", unit: "", label: "Custo TCO 3 anos" },
                { value: "100%", unit: "", label: "DPP-ready · ESPR" },
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

          {/* Right: live floor card */}
          <LiveFloorCard tick={tick} time={time} />
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
