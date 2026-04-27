function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const whatIsDpp = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Regulamento da UE",
    desc: "O DPP é exigido pelo regulamento ESPR da União Europeia para produtos têxteis. Entra em vigor progressivamente a partir de 2026.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
    title: "Transparência Total",
    desc: "Cada produto recebe um registo digital com origem, materiais, impacto ambiental e cadeia de abastecimento — acessível via QR code.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    title: "Uma Fonte de Verdade",
    desc: "Todos os dados do produto — do fio cru à expedição — num único registo estruturado, pronto para auditoria e partilha com compradores.",
  },
];

const benefits = [
  {
    eyebrow: "Rastreabilidade",
    title: "Do fio à etiqueta, sem lacunas.",
    desc: "Cada lote é ligado a fornecedores, matérias-primas, certificações e processos. O DPP é gerado automaticamente a partir dos dados já existentes no Hestia.",
    bullets: ["Rastreio 100% por lote e SKU", "Fornecedores e certificações por camada", "Exportação conforme o formato ESPR"],
  },
  {
    eyebrow: "Conformidade",
    title: "Pronto para o regulador, hoje.",
    desc: "O Hestia co-criou o standard aberto THREAD para DPP têxtil. Os relatórios CSRD, REACH e ZDHC são gerados com um clique, sem trabalho manual.",
    bullets: ["Standard aberto THREAD (co-criado)", "Relatórios CSRD e REACH automáticos", "Histórico de conformidade auditável"],
  },
  {
    eyebrow: "Vantagem Comercial",
    title: "O DPP como argumento de venda.",
    desc: "Marcas e retalhistas europeus já exigem transparência de cadeia. Ter DPP nativo é um diferenciador face a concorrentes asiáticos sem rastreabilidade.",
    bullets: ["QR code partilhável com compradores", "Dados ESG prontos para relatório anual", "Conformidade visível antes da auditoria"],
  },
  {
    eyebrow: "Futuro",
    title: "À prova de regulação crescente.",
    desc: "O ESPR vai alargar a obrigatoriedade a mais categorias têxteis até 2030. O Hestia atualiza automaticamente os formatos de DPP sem custo adicional.",
    bullets: ["Atualizações de formato incluídas", "Suporte a DPP multi-produto", "Integrado com plataformas EU de registo"],
  },
];

export default function DPPPage() {
  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">DPP</span>
            </div>
            <h1>Conformidade DPP incluída em todos os planos.</h1>
            <p>O Passaporte Digital de Produto da UE deixa de ser um projeto separado. No Hestia, nasce automaticamente dos dados que já introduz todos os dias.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
              <a href="/pt/contact" className="btn btn--ember btn--lg">
                Agendar demo DPP <ArrowIcon />
              </a>
              <a href="/pt/prices" className="btn btn--ghost btn--lg">
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is DPP */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">O que é</span>
            </div>
            <h2>Passaporte Digital de Produto.</h2>
            <p>Um requisito legal europeu que obriga fabricantes têxteis a documentar e partilhar informação sobre cada produto ao longo de toda a sua vida útil.</p>
          </div>
          <div className="feature-grid">
            {whatIsDpp.map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-card__icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — module rows */}
      <section className="site-section site-section--muted">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head">
            <div className="eyebrow-row">
              <span className="eyebrow">Porquê Hestia</span>
            </div>
            <h2>Mais do que conformidade.</h2>
          </div>
          <div>
            {benefits.map((b, i) => (
              <div key={i} className="module-row">
                <div>
                  <div className="eyebrow-row">
                    <span className="eyebrow">{b.eyebrow}</span>
                  </div>
                  <h3 style={{ fontSize: 28, letterSpacing: "-0.025em", marginBottom: 16 }}>{b.title}</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: 16, lineHeight: 1.65, marginBottom: 24 }}>{b.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {b.bullets.map((bullet, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, fontSize: 14.5, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--status-running)", flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="module-row__visual">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width={120} height={120} style={{ color: "var(--ember)", opacity: 0.35 }}>
                    <use href="/textile-icons.svg#dpp" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="section-head section-head--center">
            <div className="eyebrow-row" style={{ justifyContent: "center" }}>
              <span className="eyebrow">Próximo passo</span>
            </div>
            <h2>Não espere pelo regulador.</h2>
            <p>As marcas europeias já pedem conformidade DPP aos seus fornecedores. Esteja pronto antes da concorrência.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
              <a href="/pt/contact" className="btn btn--ember btn--lg">
                Falar com especialista <ArrowIcon />
              </a>
              <a href="/pt/prices" className="btn btn--ghost btn--lg">
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
