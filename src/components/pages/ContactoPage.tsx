"use client";
import { useState } from "react";

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.67-1.67a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
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

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Page hero */}
      <section className="page-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="page-hero__inner">
            <div className="eyebrow-row">
              <span className="eyebrow">Contacto</span>
            </div>
            <h1>Vamos conversar sobre a sua fábrica.</h1>
            <p>Trinta minutos. Sem pitch. Mostre-nos os seus processos, contamos-lhe se a Hestia faz sentido — e se não fizer, dizemos isso também.</p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="site-section">
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="contact-grid">
            {/* Info column */}
            <div>
              <h3 style={{ fontSize: 24, marginBottom: 16 }}>Onde estamos</h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: 16, lineHeight: 1.6 }}>
                HQ em Barcelos, equipa remota em Lisboa, Porto, Guimarães e Berlim.
              </p>
              <ul className="info-list">
                <li>
                  <MapPinIcon />
                  <div>
                    <strong>Sede</strong>
                    <span>Rua de São Gonçalo, 56<br />4750-274 Barcelos, Portugal</span>
                  </div>
                </li>
                <li>
                  <MailIcon />
                  <div>
                    <strong>Email</strong>
                    <span>hello@hestiatechnology.pt</span>
                  </div>
                </li>
                <li>
                  <PhoneIcon />
                  <div>
                    <strong>Telefone</strong>
                    <span>+351 253 000 000</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Form column */}
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 32 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, margin: "0 auto 16px", borderRadius: 14, background: "var(--ember-tint)", color: "var(--ember)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckIcon />
                  </div>
                  <h3 style={{ fontSize: 22, marginBottom: 8 }}>Mensagem recebida.</h3>
                  <p style={{ color: "var(--muted-foreground)", fontSize: 15 }}>Voltamos a si em menos de 24h úteis.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="field">
                    <label>Nome</label>
                    <input required placeholder="Maria Silva" />
                  </div>
                  <div className="field">
                    <label>Email da empresa</label>
                    <input required type="email" placeholder="maria@fabricatextil.pt" />
                  </div>
                  <div className="field">
                    <label>Empresa</label>
                    <input required placeholder="Têxtil de Barcelos, Lda." />
                  </div>
                  <div className="field">
                    <label>Tamanho da fábrica</label>
                    <select>
                      <option>Menos de 10 máquinas</option>
                      <option>10–30 máquinas</option>
                      <option>30–80 máquinas</option>
                      <option>Mais de 80 máquinas</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>O que gostaria de discutir?</label>
                    <textarea placeholder="Estamos a substituir o nosso ERP atual e queríamos perceber..." />
                  </div>
                  <button type="submit" className="btn btn--ember" style={{ width: "100%", marginTop: 8 }}>
                    Enviar mensagem <ArrowIcon />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
