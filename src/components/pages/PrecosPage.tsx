"use client";
import React, { useState } from "react";

const tiersData = {
  pt: [
    {
      name: "Arranque",
      annualPrice: 249,
      monthlyPrice: 310,
      setupFee: null,
      desc: "Para pequenas oficinas a dar os primeiros passos.",
      features: ["Até 3 máquinas conetadas", "Até 5 utilizadores", "ERP + DPP básico", "Suporte via email", "App móvel"],
      featured: false,
    },
    {
      name: "Atelier",
      annualPrice: 590,
      monthlyPrice: 740,
      setupFee: 490,
      desc: "Para fábricas pequenas a entrar no digital.",
      features: ["Até 8 máquinas conetadas", "Até 10 utilizadores", "ERP + MES + DPP", "Suporte email", "App móvel"],
      featured: false,
    },
    {
      name: "Fábrica",
      annualPrice: 1490,
      monthlyPrice: 1860,
      setupFee: 990,
      desc: "Para fábricas têxteis em operação 24/7.",
      features: ["Até 30 máquinas conetadas", "Até 30 utilizadores", "Tudo do Atelier", "IA Assistant + previsão", "Suporte prioritário 12×5", "SLA 99.9%", "Onboarding dedicado"],
      featured: true,
    },
    {
      name: "Indústria",
      annualPrice: null,
      monthlyPrice: null,
      setupFee: null,
      desc: "Operações multi-fábrica, grupos têxteis.",
      features: ["Máquinas e utilizadores ilimitados", "Multi-site, multi-empresa", "Tudo da Fábrica", "Integrações personalizadas", "SLA 99.95% · 24×7", "Customer Success dedicado"],
      featured: false,
    },
  ],
  en: [
    {
      name: "Starter",
      annualPrice: 249,
      monthlyPrice: 310,
      setupFee: null,
      desc: "For small workshops taking their first digital steps.",
      features: ["Up to 3 connected machines", "Up to 5 users", "Basic ERP + DPP", "Email support", "Mobile app"],
      featured: false,
    },
    {
      name: "Atelier",
      annualPrice: 590,
      monthlyPrice: 740,
      setupFee: 490,
      desc: "For small factories entering the digital age.",
      features: ["Up to 8 connected machines", "Up to 10 users", "ERP + MES + DPP", "Email support", "Mobile app"],
      featured: false,
    },
    {
      name: "Factory",
      annualPrice: 1490,
      monthlyPrice: 1860,
      setupFee: 990,
      desc: "For textile factories running 24/7.",
      features: ["Up to 30 connected machines", "Up to 30 users", "Everything in Atelier", "AI Assistant + forecasting", "Priority support 12×5", "SLA 99.9%", "Dedicated onboarding"],
      featured: true,
    },
    {
      name: "Industry",
      annualPrice: null,
      monthlyPrice: null,
      setupFee: null,
      desc: "Multi-factory operations and textile groups.",
      features: ["Unlimited machines & users", "Multi-site, multi-company", "Everything in Factory", "Custom integrations", "SLA 99.95% · 24×7", "Dedicated Customer Success"],
      featured: false,
    },
  ],
};

const copy = {
  pt: {
    eyebrow: "Preços",
    h1: "Preço claro. Sem letras pequenas.",
    subtitle: "Subscrição mensal. Sem licenças perpétuas, sem custo de upgrade, sem consultoria de seis meses. Cancele a qualquer momento.",
    monthly: "Mensal",
    annual: "Anual",
    twoMonthsFree: "2 meses grátis",
    billingAnnual: "Faturação anual",
    billingMonthly: "Faturação mensal",
    vatNote: "IVA não incluído",
    setupFeeNote: (fee: number) => `+ €${fee} taxa de implementação (única)`,
    custom: "Custom",
    ctaPaid: "Agendar demo",
    ctaCustom: "Falar com vendas",
    simulatorEyebrow: "Simulador",
    simulatorH2: "Estime a sua subscrição.",
    simulatorDesc: "Ajuste para a realidade da sua fábrica e veja o custo mensal estimado.",
    machines: "Máquinas",
    users: "Utilizadores",
    iotLabel: "IoT Retrofit (+€120)",
    aiLabel: "IA Assistant (+€280)",
    estimateLabel: "Estimativa mensal",
    compareTitle: "Comparação de funcionalidades",
    featuredLabel: "Mais popular",
    perMonth: "/mês",
    ctaSimulator: "Agendar demo",
    contactHref: "/pt/contact",
  },
  en: {
    eyebrow: "Pricing",
    h1: "Clear Pricing. No Fine Print.",
    subtitle: "Monthly subscription. No perpetual licences, no upgrade fees, no six-month consultancy. Cancel any time.",
    monthly: "Monthly",
    annual: "Annual",
    twoMonthsFree: "2 months free",
    billingAnnual: "Annual billing",
    billingMonthly: "Monthly billing",
    vatNote: "VAT not included",
    setupFeeNote: (fee: number) => `+ €${fee} one-time setup fee`,
    custom: "Custom",
    ctaPaid: "Book a demo",
    ctaCustom: "Talk to sales",
    simulatorEyebrow: "Simulator",
    simulatorH2: "Estimate your subscription.",
    simulatorDesc: "Adjust for your factory's reality and see the estimated monthly cost.",
    machines: "Machines",
    users: "Users",
    iotLabel: "IoT Retrofit (+€120)",
    aiLabel: "AI Assistant (+€280)",
    estimateLabel: "Monthly estimate",
    compareTitle: "Feature comparison",
    featuredLabel: "Most popular",
    perMonth: "/mo",
    ctaSimulator: "Book a demo",
    contactHref: "/en/contact",
  },
};

type FVal = boolean | string;

const featureTable = {
  pt: [
    {
      category: "Plataforma",
      rows: [
        { label: "Máquinas conetadas",  values: ["3", "8", "30", "Ilimitadas"] as FVal[] },
        { label: "Utilizadores",         values: ["5", "10", "30", "Ilimitados"] as FVal[] },
        { label: "App móvel",            values: [true, true, true, true] as FVal[] },
        { label: "Multi-site",           values: [false, false, false, true] as FVal[] },
      ],
    },
    {
      category: "Módulos",
      rows: [
        { label: "ERP",                          values: ["Básico", true, true, true] as FVal[] },
        { label: "MES",                          values: [false, true, true, true] as FVal[] },
        { label: "DPP (Passaporte Digital)",      values: ["Básico", true, true, true] as FVal[] },
        { label: "IA Assistant + previsão",       values: [false, false, true, true] as FVal[] },
        { label: "IoT Retrofit",                  values: [false, false, true, true] as FVal[] },
      ],
    },
    {
      category: "Suporte",
      rows: [
        { label: "Suporte por email",             values: [true, true, true, true] as FVal[] },
        { label: "Suporte prioritário",           values: [false, false, "12×5", "24×7"] as FVal[] },
        { label: "SLA",                           values: [false, false, "99.9%", "99.95%"] as FVal[] },
        { label: "Onboarding dedicado",           values: [false, false, true, true] as FVal[] },
        { label: "Customer Success dedicado",     values: [false, false, false, true] as FVal[] },
      ],
    },
    {
      category: "Integrações",
      rows: [
        { label: "REST API",                      values: [false, false, true, true] as FVal[] },
        { label: "Integrações personalizadas",    values: [false, false, false, true] as FVal[] },
        { label: "Multi-empresa",                 values: [false, false, false, true] as FVal[] },
      ],
    },
  ],
  en: [
    {
      category: "Platform",
      rows: [
        { label: "Connected machines",  values: ["3", "8", "30", "Unlimited"] as FVal[] },
        { label: "Users",               values: ["5", "10", "30", "Unlimited"] as FVal[] },
        { label: "Mobile app",          values: [true, true, true, true] as FVal[] },
        { label: "Multi-site",          values: [false, false, false, true] as FVal[] },
      ],
    },
    {
      category: "Modules",
      rows: [
        { label: "ERP",                         values: ["Basic", true, true, true] as FVal[] },
        { label: "MES",                         values: [false, true, true, true] as FVal[] },
        { label: "DPP (Digital Product Passport)", values: ["Basic", true, true, true] as FVal[] },
        { label: "AI Assistant + forecasting",  values: [false, false, true, true] as FVal[] },
        { label: "IoT Retrofit",                values: [false, false, true, true] as FVal[] },
      ],
    },
    {
      category: "Support",
      rows: [
        { label: "Email support",               values: [true, true, true, true] as FVal[] },
        { label: "Priority support",            values: [false, false, "12×5", "24×7"] as FVal[] },
        { label: "SLA",                         values: [false, false, "99.9%", "99.95%"] as FVal[] },
        { label: "Dedicated onboarding",        values: [false, false, true, true] as FVal[] },
        { label: "Dedicated Customer Success",  values: [false, false, false, true] as FVal[] },
      ],
    },
    {
      category: "Integrations",
      rows: [
        { label: "REST API",                    values: [false, false, true, true] as FVal[] },
        { label: "Custom integrations",         values: [false, false, false, true] as FVal[] },
        { label: "Multi-company",               values: [false, false, false, true] as FVal[] },
      ],
    },
  ],
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M18 6 6 18M6 6l12 12" />
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

export default function PrecosPage({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const t = copy[locale];
  const tiers = tiersData[locale];

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
              <span className="eyebrow">{t.eyebrow}</span>
            </div>
            <h1>{t.h1}</h1>
            <p>{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Tier grid */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 40 }}>
            <span style={{ fontSize: 14, color: annual ? "var(--muted-foreground)" : "var(--foreground)", fontWeight: annual ? 400 : 500 }}>{t.monthly}</span>
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
              {t.annual}
            </span>
            {annual && (
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase",
                background: "var(--ember-tint)", color: "var(--ember)",
                padding: "3px 8px", borderRadius: 999,
              }}>
                {t.twoMonthsFree}
              </span>
            )}
          </div>

          <div className="tier-grid">
            {tiers.map((tier) => {
              const price = annual ? tier.annualPrice : tier.monthlyPrice;
              return (
                <div key={tier.name} className={"tier" + (tier.featured ? " tier--featured" : "")} style={{ position: "relative" }}>
                  {tier.featured && (
                    <span style={{
                      position: "absolute", top: -12, right: 24,
                      padding: "4px 12px", borderRadius: 9999,
                      background: "var(--primary)", color: "#fff",
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                    }}>
                      {t.featuredLabel}
                    </span>
                  )}
                  <h3>{tier.name}</h3>
                  <div className="tier__desc">{tier.desc}</div>
                  <div className="tier__price">
                    {price !== null ? (
                      <>€{price.toLocaleString("de-DE")}<small>{t.perMonth}</small></>
                    ) : (
                      t.custom
                    )}
                  </div>
                  {price !== null && (
                    <div style={{ fontSize: 12, color: "var(--muted-foreground)", marginBottom: 8 }}>
                      {annual ? t.billingAnnual : t.billingMonthly} · {t.vatNote}
                    </div>
                  )}
                  {tier.setupFee !== null && tier.setupFee !== undefined && (
                    <div style={{
                      fontSize: 12, color: "var(--muted-foreground)",
                      borderTop: "1px solid var(--border)", paddingTop: 8, marginBottom: 8,
                    }}>
                      {t.setupFeeNote(tier.setupFee)}
                    </div>
                  )}
                  <ul>
                    {tier.features.map((f, i) => (
                      <li key={i}>
                        <CheckIcon />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={t.contactHref}
                    className={"btn " + (tier.featured ? "btn--ember" : "btn--ghost")}
                    style={{ marginTop: "auto" }}
                  >
                    {price !== null ? t.ctaPaid : t.ctaCustom}
                    <ArrowIcon />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 32 }}>{t.compareTitle}</h2>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
              <thead>
                <tr>
                  <th style={{ width: "36%", padding: "0 0 16px", textAlign: "left", fontSize: 13, color: "var(--muted-foreground)", fontWeight: 500 }} />
                  {tiers.map((tier) => (
                    <th key={tier.name} style={{
                      padding: "0 16px 16px", textAlign: "center", fontSize: 13, fontWeight: 600,
                      color: tier.featured ? "var(--primary)" : "var(--foreground)",
                    }}>
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureTable[locale].map((group) => (
                  <React.Fragment key={group.category}>
                    <tr>
                      <td colSpan={5} style={{
                        padding: "20px 0 8px", fontSize: 11, fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "var(--muted-foreground)", borderTop: "1px solid var(--border)",
                      }}>
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} style={{ borderTop: "1px solid var(--border)" }}>
                        <td style={{ padding: "13px 0", fontSize: 14, color: "var(--foreground)" }}>
                          {row.label}
                        </td>
                        {row.values.map((val, i) => (
                          <td key={i} style={{ padding: "13px 16px", textAlign: "center", fontSize: 13 }}>
                            {val === true && (
                              <span style={{ display: "inline-flex", justifyContent: "center", color: "var(--status-running)" }}>
                                <CheckIcon />
                              </span>
                            )}
                            {val === false && (
                              <span style={{ display: "inline-flex", justifyContent: "center", color: "var(--muted-foreground)", opacity: 0.4 }}>
                                <XIcon />
                              </span>
                            )}
                            {typeof val === "string" && (
                              <span style={{ fontWeight: 500, color: "var(--foreground)" }}>{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="site-section site-section--muted">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head section-head--center">
            <div className="eyebrow-row" style={{ justifyContent: "center" }}>
              <span className="eyebrow">{t.simulatorEyebrow}</span>
            </div>
            <h2>{t.simulatorH2}</h2>
            <p>{t.simulatorDesc}</p>
          </div>

          <div style={{ maxWidth: 720, margin: "0 auto", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 40, boxShadow: "var(--shadow-sm)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 500, display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  {t.machines}{" "}
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
                  {t.users}{" "}
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
                <span style={{ fontSize: 14 }}>{t.iotLabel}</span>
              </label>
              <label style={{
                display: "flex", alignItems: "center", gap: 10, padding: "12px 16px",
                border: "1px solid var(--border)", borderRadius: 10, cursor: "pointer", flex: 1,
                background: ai ? "var(--ember-tint)" : "transparent",
                transition: "background 150ms ease",
              }}>
                <input type="checkbox" checked={ai} onChange={(e) => setAi(e.target.checked)} />
                <span style={{ fontSize: 14 }}>{t.aiLabel}</span>
              </label>
            </div>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>{t.estimateLabel}</div>
                <div style={{ fontFamily: "Geist Mono, monospace", fontSize: 56, fontWeight: 500, letterSpacing: "-0.04em", marginTop: 4, lineHeight: 1 }}>
                  €{simulatorMonthly.toLocaleString("de-DE")}
                  <small style={{ fontSize: 16, color: "var(--muted-foreground)", marginLeft: 4 }}>{t.perMonth}</small>
                </div>
              </div>
              <a href={t.contactHref} className="btn btn--ember">
                {t.ctaSimulator} <ArrowIcon />
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
