import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Competitor {
  id: string;
  name: string;
  /** One-time license cost per user */
  perUser: number;
  /** Fixed module costs (one-time) */
  moduleCosts: number;
  /** Annual maintenance as a fraction of total license (e.g. 0.15 = 15%) */
  maintenanceRate: number;
  /** Typical implementation time */
  implementation: string;
  /** Has DPP support */
  hasDpp: boolean;
  /** Has real-time production monitoring */
  hasRealtime: boolean;
  /** Has automatic regulatory updates */
  hasAutoUpdates: boolean;
  /** Pricing model description */
  model: string;
}

const competitors: Competitor[] = [
  {
    id: "software1",
    name: "Software 1",
    perUser: 327.25,
    moduleCosts: 0,
    maintenanceRate: 0.15,
    implementation: "2–4 months",
    hasDpp: false,
    hasRealtime: false,
    hasAutoUpdates: false,
    model: "perpetual",
  },
  {
    id: "software2",
    name: "Software 2",
    perUser: 400,
    moduleCosts: 5950,
    maintenanceRate: 0.16,
    implementation: "2–4 months",
    hasDpp: false,
    hasRealtime: false,
    hasAutoUpdates: false,
    model: "perpetual",
  },
  {
    id: "software3",
    name: "Software 3",
    perUser: 500,
    moduleCosts: 3000,
    maintenanceRate: 0.2,
    implementation: "3–6 months",
    hasDpp: false,
    hasRealtime: false,
    hasAutoUpdates: false,
    model: "perpetual",
  },
  {
    id: "software4",
    name: "Software 4",
    perUser: 350,
    moduleCosts: 2500,
    maintenanceRate: 0.18,
    implementation: "2–4 months",
    hasDpp: false,
    hasRealtime: false,
    hasAutoUpdates: false,
    model: "perpetual",
  },
  {
    id: "software5",
    name: "Software 5",
    perUser: 1200,
    moduleCosts: 15000,
    maintenanceRate: 0.22,
    implementation: "6–12 months",
    hasDpp: false,
    hasRealtime: false,
    hasAutoUpdates: false,
    model: "perpetual",
  },
];

// Hestia pricing constants
const HESTIA_BASE = 99;
const HESTIA_MANAGER = 18;
const HESTIA_OPERATOR = 5;
const HESTIA_INCLUDED_MANAGERS = 2;
const HESTIA_INCLUDED_OPERATORS = 5;

function calcHestiaMonthly(managers: number, operators: number): number {
  const extraManagers = Math.max(0, managers - HESTIA_INCLUDED_MANAGERS);
  const extraOperators = Math.max(0, operators - HESTIA_INCLUDED_OPERATORS);
  return HESTIA_BASE + extraManagers * HESTIA_MANAGER + extraOperators * HESTIA_OPERATOR;
}

function calcCompetitor(c: Competitor, totalUsers: number) {
  const licenseCost = totalUsers * c.perUser + c.moduleCosts;
  const annualMaintenance = licenseCost * c.maintenanceRate;
  return { licenseCost, annualMaintenance };
}

function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

const copy = {
  en: {
    title: "How Hestia Compares",
    subtitle: "Choose a competitor and factory size to see a real cost comparison.",
    label: "Compare",
    competitor: "Choose Competitor",
    factorySize: "Factory Size",
    small: "Small Factory",
    smallDesc: "1 Manager + 15 Operators",
    mid: "Mid-size Factory",
    midDesc: "3 Managers + 40 Operators",
    upfront: "Upfront License",
    annual: "Annual Maintenance",
    monthly: "Monthly Cost",
    implementation: "Implementation",
    dpp: "DPP Compliance",
    realtime: "Real-time Monitoring",
    autoUpdates: "Auto Regulatory Updates",
    year1: "Total Year 1",
    year3: "Total Over 3 Years",
    savings: "You save with Hestia",
    included: "Built-in",
    notIncluded: "Not included",
    hestiaMonthly: "/month",
    noUpfront: "No upfront cost",
    weeks: "2–4 weeks",
  },
  pt: {
    title: "Como a Hestia Se Compara",
    subtitle: "Escolha um concorrente e tamanho de fábrica para ver uma comparação real de custos.",
    label: "Comparação",
    competitor: "Escolha o Concorrente",
    factorySize: "Tamanho da Fábrica",
    small: "Pequena Fábrica",
    smallDesc: "1 Gestor + 15 Operadores",
    mid: "Fábrica Média",
    midDesc: "3 Gestores + 40 Operadores",
    upfront: "Licença Inicial",
    annual: "Manutenção Anual",
    monthly: "Custo Mensal",
    implementation: "Implementação",
    dpp: "Conformidade DPP",
    realtime: "Monitorização Tempo Real",
    autoUpdates: "Atualizações Regulatórias",
    year1: "Total Ano 1",
    year3: "Total em 3 Anos",
    savings: "Poupa com a Hestia",
    included: "Integrada",
    notIncluded: "Não incluída",
    hestiaMonthly: "/mês",
    noUpfront: "Sem custo inicial",
    weeks: "2–4 semanas",
  },
};

type FactorySize = "small" | "mid";
const FACTORY_SIZES: Record<FactorySize, { managers: number; operators: number }> = {
  small: { managers: 1, operators: 15 },
  mid: { managers: 3, operators: 40 },
};

interface CompetitorComparisonProps {
  locale: "en" | "pt";
}

export function CompetitorComparison({ locale }: CompetitorComparisonProps) {
  const t = copy[locale];
  const [selectedId, setSelectedId] = useState(competitors[0].id);
  const [size, setSize] = useState<FactorySize>("small");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const comp = competitors.find((c) => c.id === selectedId)!;
  const { managers, operators } = FACTORY_SIZES[size];
  const totalUsers = managers + operators;

  const hestiaMonthly = calcHestiaMonthly(managers, operators);
  const hestiaYear1 = hestiaMonthly * 12;
  const hestiaYear3 = hestiaYear1 * 3;

  const { licenseCost, annualMaintenance } = calcCompetitor(comp, totalUsers);
  const compYear1 = licenseCost + annualMaintenance;
  const compYear3 = licenseCost + annualMaintenance * 3;

  const savingsYear1 = compYear1 - hestiaYear1;
  const savingsYear3 = compYear3 - hestiaYear3;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Competitor selector */}
        <div className="relative flex-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
            {t.competitor}
          </label>
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between gap-2 border border-border rounded-xl px-4 py-3 bg-card text-sm font-semibold hover:border-primary/40 transition-colors"
          >
            {comp.name}
            <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", dropdownOpen && "rotate-180")} />
          </button>
          {dropdownOpen && (
            <div className="absolute z-20 top-full mt-1 w-full border border-border rounded-xl bg-card shadow-lg overflow-hidden">
              {competitors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => { setSelectedId(c.id); setDropdownOpen(false); }}
                  className={cn(
                    "w-full text-left px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors",
                    c.id === selectedId && "bg-primary/5 text-primary font-semibold"
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Factory size toggle */}
        <div className="flex-1">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
            {t.factorySize}
          </label>
          <div className="flex border border-border rounded-xl overflow-hidden">
            {(["small", "mid"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSize(s)}
                className={cn(
                  "flex-1 px-4 py-3 text-sm font-medium transition-colors",
                  size === s
                    ? "bg-primary text-white"
                    : "bg-card hover:bg-muted/50"
                )}
              >
                <span className="block">{s === "small" ? t.small : t.mid}</span>
                <span className="block text-[10px] opacity-70 mt-0.5">
                  {s === "small" ? t.smallDesc : t.midDesc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Competitor card */}
        <div className="border border-border rounded-2xl p-6 bg-muted/20">
          <h3 className="font-heading font-bold text-lg text-muted-foreground mb-5">{comp.name}</h3>
          <div className="space-y-3 text-sm">
            <Row label={t.upfront} value={formatEur(licenseCost)} muted />
            <Row label={t.annual} value={`${formatEur(annualMaintenance)}/${locale === "pt" ? "ano" : "year"}`} muted />
            <Row label={t.implementation} value={comp.implementation} muted />
            <FeatureRow label={t.dpp} has={comp.hasDpp} />
            <FeatureRow label={t.realtime} has={comp.hasRealtime} />
            <FeatureRow label={t.autoUpdates} has={comp.hasAutoUpdates} />
            <div className="border-t border-border/60 pt-3 mt-4">
              <Row label={t.year1} value={formatEur(compYear1)} muted bold />
              <Row label={t.year3} value={formatEur(compYear3)} muted bold />
            </div>
          </div>
        </div>

        {/* Hestia card */}
        <div className="border-2 border-primary/30 rounded-2xl p-6 bg-primary/4 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl tracking-widest uppercase">
            Hestia
          </div>
          <h3 className="font-heading font-bold text-lg mb-5">Hestia OS</h3>
          <div className="space-y-3 text-sm">
            <Row label={t.upfront} value={t.noUpfront} primary />
            <Row label={t.monthly} value={`${formatEur(hestiaMonthly)}${t.hestiaMonthly}`} primary />
            <Row label={t.implementation} value={t.weeks} primary />
            <FeatureRow label={t.dpp} has={true} primary />
            <FeatureRow label={t.realtime} has={true} primary />
            <FeatureRow label={t.autoUpdates} has={true} primary />
            <div className="border-t border-primary/20 pt-3 mt-4">
              <Row label={t.year1} value={formatEur(hestiaYear1)} primary bold />
              <Row label={t.year3} value={formatEur(hestiaYear3)} primary bold />
            </div>
          </div>
        </div>
      </div>

      {/* Savings banner */}
      {savingsYear3 > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">{t.savings}</p>
          <div className="flex items-center justify-center gap-6">
            <div>
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{formatEur(savingsYear1)}</span>
              <span className="text-xs text-muted-foreground ml-1">{locale === "pt" ? "no 1.º ano" : "in year 1"}</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{formatEur(savingsYear3)}</span>
              <span className="text-xs text-muted-foreground ml-1">{locale === "pt" ? "em 3 anos" : "over 3 years"}</span>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-muted-foreground text-center leading-relaxed">
        {locale === "pt"
          ? "* Os preços dos concorrentes são estimativas baseadas em informação pública e podem não estar atualizados. Contacte cada fornecedor para valores exatos."
          : "* Competitor pricing shown is estimated based on publicly available information and may not be up to date. Contact each vendor for exact pricing."}
      </p>
    </div>
  );
}

function Row({ label, value, muted, primary, bold }: { label: string; value: string; muted?: boolean; primary?: boolean; bold?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn(
        bold && "font-bold",
        primary && "text-primary font-semibold",
        muted && !bold && "text-foreground/60",
      )}>
        {value}
      </span>
    </div>
  );
}

function FeatureRow({ label, has, primary }: { label: string; has: boolean; primary?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-muted-foreground">{label}</span>
      {has ? (
        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", primary ? "bg-primary/15 text-primary" : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400")}>
          <Check className="w-3 h-3" />
        </div>
      ) : (
        <div className="w-5 h-5 rounded-full bg-red-100 text-red-500 dark:bg-red-900/30 flex items-center justify-center">
          <X className="w-3 h-3" />
        </div>
      )}
    </div>
  );
}
