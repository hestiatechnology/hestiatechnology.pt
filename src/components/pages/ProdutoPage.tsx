const modules = [
  {
    icon: "loom",
    eyebrow: "MES & Chão de fábrica",
    title: "Cada tear conetado, cada paragem registada.",
    desc: "Integração com Picanol, Toyota, Sulzer, Vamatex e máquinas de tinturaria via OPC-UA, MQTT ou retrofit IoT. KPIs ao segundo, OEE em tempo real, alertas de paragem por SMS e app.",
    bullets: ["Conetores nativos para 14 marcas de teares", "Retrofit IoT para máquinas legadas", "OEE, MTBF, MTTR automáticos"],
  },
  {
    icon: "lot",
    eyebrow: "Lotes & Rastreio",
    title: "Do fio cru à expedição, sem folha de Excel.",
    desc: "Cada lote é rastreado por cor, tonalidade, GSM, fornecedor de fio e máquina. Retenção de QC com fluxo de aprovação e libertação digital.",
    bullets: ["Rastreio 100% por lote", "Controlo de tonalidade visual", "Workflows de QC configuráveis"],
  },
  {
    icon: "dpp",
    eyebrow: "Conformidade & DPP",
    title: "Pronto para o ESPR antes do regulador.",
    desc: "Geração automática de Passaporte Digital de Produto, relatórios CSRD, REACH, ZDHC, ECO PASSPORT. Co-criámos o standard aberto THREAD para DPP têxtil.",
    bullets: ["DPP em todos os lotes", "Relatórios CSRD prontos", "Standard aberto THREAD"],
  },
  {
    icon: "pattern",
    eyebrow: "Planeamento & IA",
    title: "Modelos treinados em dados têxteis europeus.",
    desc: "Previsão de prazos por lote, deteção de defeitos por imagem, otimização de carga de teares. O assistente Hestia responde em linguagem natural.",
    bullets: ["Previsão de prazos +92% precisão", "Visão por computador para defeitos", "Assistente em PT/EN"],
  },
  {
    icon: "order-tag",
    eyebrow: "Vendas & ERP",
    title: "ERP completo, sem o peso dos anos 90.",
    desc: "Encomendas, faturação, contabilidade SAFT-PT, RH leve, CRM integrado. Substitui PHC, Primavera, SAP B1 — e custa metade.",
    bullets: ["SAFT-PT certificado", "Integração SIBS, MB Way, Stripe", "Recursos humanos leves"],
  },
  {
    icon: "thread",
    eyebrow: "Sustentabilidade",
    title: "Mede, audita e reduz a pegada de carbono.",
    desc: "Cálculo automático de CO₂ por lote (Higg MSI / Eco Profile), consumo energético por máquina, água por tinturaria. Relatórios ESG diretos para o board.",
    bullets: ["Higg MSI · Eco Profile", "Energia & água por máquina", "Relatórios ESG automáticos"],
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function ProdutoPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">Produto</span>
            </div>
            <h1>Uma plataforma. Toda a fábrica.</h1>
            <p>A Hestia substitui 4–6 sistemas legados que a sua fábrica usa hoje: ERP, MES, controlo de qualidade, sustentabilidade, RH leve. Tudo num só portal, com a mesma base de dados.</p>
          </div>
        </div>
      </section>

      {/* Feature cards — first 3 modules */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="feature-grid">
            {modules.slice(0, 3).map((m) => (
              <div key={m.icon} className="feature-card">
                <div className="feature-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <use href={`/textile-icons.svg#${m.icon}`} />
                  </svg>
                </div>
                <h4>{m.title}</h4>
                <p>{m.desc.split(".")[0]}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module rows */}
      <section className="site-section site-section--muted">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">Módulos</span>
            </div>
            <h2>Seis módulos, uma só plataforma.</h2>
          </div>
          <div>
            {modules.map((m, i) => (
              <div key={i} className="module-row">
                <div>
                  <div className="eyebrow-row">
                    <span className="eyebrow">{m.eyebrow}</span>
                  </div>
                  <h3 style={{ fontSize: 28, letterSpacing: "-0.025em", marginBottom: 16 }}>{m.title}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: 16, lineHeight: 1.65, marginBottom: 24 }}>{m.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {m.bullets.map((b, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, fontSize: 14.5, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--status-running)", flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="module-row__visual">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width={120} height={120} style={{ color: "var(--ember)", opacity: 0.35 }}>
                    <use href={`/textile-icons.svg#${m.icon}`} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
