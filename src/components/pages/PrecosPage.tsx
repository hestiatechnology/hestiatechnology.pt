"use client";
import { useState } from "react";

const tiers = [
  {
    name: "Studio",
    annualPrice: 99,
    monthlyPrice: 125,
    desc: "Para marcas e pequenos produtores.",
    features: ["Até 10 utilizadores", "Gestão de techpacks", "Gestão de amostras", "Ordens de produção", "Ordens de venda", "DPP incluído"],
    featured: false,
  },
  {
    name: "Atelier",
    annualPrice: 590,
    monthlyPrice: 740,
    desc: "Para fábricas pequenas a entrar no digital.",
    features: ["Até 8 máquinas conetadas", "Até 10 utilizadores", "ERP + MES + DPP", "Suporte email", "App móvel"],
    featured: false,
  },
  {
    name: "Fábrica",
    annualPrice: 1490,
    monthlyPrice: 1860,
    desc: "Para fábricas têxteis em operação 24/7.",
    features: ["Até 30 máquinas conetadas", "Até 30 utilizadores", "Tudo do Atelier", "IA Assistant + previsão", "Suporte prioritário 12×5", "SLA 99.9%", "Onboarding dedicado"],
    featured: true,
  },
  {
    name: "Indústria",
    annualPrice: null,
    monthlyPrice: null,
    desc: "Operações multi-fábrica, grupos têxteis.",
    features: ["Máquinas e utilizadores ilimitados", "Multi-site, multi-empresa", "Tudo da Fábrica", "Integrações personalizadas", "SLA 99.95% · 24×7", "Customer Success dedicado"],
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function PrecosPage() {
  const [annual, setAnnual] = useState(true);
  const [machines, setMachines] = useState(20);
  const [users, setUsers] = useState(15);
  const [iot, setIot] = useState(true);
  const [ai, setAi] = useState(true);
  const simulatorMonthly = Math.round((300 + machines * 22 + users * 12 + (iot ? 120 : 0) + (ai ? 280 : 0)) / 10) * 10;

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">Preços</span>
            </div>
            <h1>Preço claro. Sem letras pequenas.</h1>
            <p>Subscrição mensal. Sem licenças perpétuas, sem custo de upgrade, sem consultoria de seis meses. Cancele a qualquer momento.</p>
          </div>
        </div>
      </section>

      {/* Tier grid */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 40 }}>
            <span style={{ fontSize: 14, color: annual ? "var(--muted-foreground)" : "var(--foreground)", fontWeight: annual ? 400 : 500 }}>Mensal</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                position: "relative", width: 48, height: 26, borderRadius: 999,
                background: annual ? "var(--ember)" : "var(--border)",
                border: "none", cursor: "pointer", transition: "background 200ms ease", padding: 0,
              }}
              aria-label="Alternar faturação anual/mensal"
            >
              <span style={{
                position: "absolute", top: 3, left: annual ? 25 : 3,
                width: 20, height: 20, borderRadius: "50%",
                background: "var(--card)", transition: "left 200ms ease",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }} />
            </button>
            <span style={{ fontSize: 14, color: annual ? "var(--foreground)" : "var(--muted-foreground)", fontWeight: annual ? 500 : 400 }}>
              Anual
            </span>
            {annual && (
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                background: "var(--ember-tint)", color: "var(--ember)",
                padding: "3px 8px", borderRadius: 999,
              }}>
                2 meses grátis
              </span>
            )}
          </div>

          <div className="tier-grid">
            {tiers.map((t) => {
              const price = annual ? t.annualPrice : t.monthlyPrice;
              return (
                <div key={t.name} className={"tier" + (t.featured ? " tier--featured" : "")}>
                  <h3>{t.name}</h3>
                  <div className="tier__desc">{t.desc}</div>
                  <div className="tier__price">
                    {price !== null ? (
                      <>€{price.toLocaleString("de-DE")}<small>/mês</small></>
                    ) : (
                      "Custom"
                    )}
                  </div>
                  {price !== null && (
                    <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginBottom: 8 }}>
                      {annual ? "Faturação anual" : "Faturação mensal"} · IVA não incluído
                    </div>
                  )}
                  <ul>
                    {t.features.map((f, i) => (
                      <li key={i}>
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/pt/contact"
                    className={"btn " + (t.featured ? "btn--ember" : "btn--ghost")}
                    style={{ marginTop: "auto" }}
                  >
                    {price !== null ? "Agendar demo" : "Falar com vendas"}
                    <ArrowIcon />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="site-section site-section--muted">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head section-head--center">
            <div className="eyebrow-row" style={{ justifyContent: "center" }}>
              <span className="eyebrow">Simulador</span>
            </div>
            <h2>Estime a sua subscrição.</h2>
            <p>Ajuste para a realidade da sua fábrica e veja o custo mensal estimado.</p>
          </div>

          <div style={{ maxWidth: 720, margin: "0 auto", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 40, boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  Máquinas{" "}
                  <strong style={{ fontFamily: "Geist Mono, monospace", color: "var(--primary)" }}>{machines}</strong>
                </label>
                <input
                  type="range"
                  className="brand-range"
                  style={{ WebkitAppearance: "none", appearance: "none", width: "100%", height: 4, borderRadius: 2, background: "var(--border)", outline: "none", cursor: "pointer" }}
                  min={2}
                  max={80}
                  value={machines}
                  onChange={(e) => setMachines(+e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  Utilizadores{" "}
                  <strong style={{ fontFamily: "Geist Mono, monospace", color: "var(--primary)" }}>{users}</strong>
                </label>
                <input
                  type="range"
                  className="brand-range"
                  style={{ WebkitAppearance: "none", appearance: "none", width: "100%", height: 4, borderRadius: 2, background: "var(--border)", outline: "none", cursor: "pointer" }}
                  min={3}
                  max={60}
                  value={users}
                  onChange={(e) => setUsers(+e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              <label style={{
                display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
                border: "1px solid var(--border)", borderRadius: 10, cursor: "pointer", flex: 1,
                background: iot ? "var(--ember-tint)" : "transparent",
                transition: "background 150ms ease",
              }}>
                <input type="checkbox" checked={iot} onChange={(e) => setIot(e.target.checked)} />
                <span style={{ fontSize: 14 }}>IoT Retrofit (+€120)</span>
              </label>
              <label style={{
                display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
                border: "1px solid var(--border)", borderRadius: 10, cursor: "pointer", flex: 1,
                background: ai ? "var(--ember-tint)" : "transparent",
                transition: "background 150ms ease",
              }}>
                <input type="checkbox" checked={ai} onChange={(e) => setAi(e.target.checked)} />
                <span style={{ fontSize: 14 }}>IA Assistant (+€280)</span>
              </label>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Estimativa mensal</div>
                <div style={{ fontFamily: "Geist Mono, monospace", fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", marginTop: 4, lineHeight: 1 }}>
                  €{simulatorMonthly.toLocaleString("de-DE")}
                  <small style={{ fontSize: 16, color: "var(--muted-foreground)", marginLeft: 4 }}>/mês</small>
                </div>
              </div>
              <a href="/pt/contact" className="btn btn--ember">
                Agendar demo <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .brand-range::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 18px; height: 18px; border-radius: 999px;
          background: var(--card); border: 2px solid var(--ember); cursor: pointer;
        }
        .brand-range::-moz-range-thumb {
          width: 18px; height: 18px; border-radius: 999px;
          background: var(--card); border: 2px solid var(--ember); cursor: pointer;
        }
      `}</style>
    </>
  );
}
