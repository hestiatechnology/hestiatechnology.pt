import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Minus, Plus, Check, Brain, Link2, BarChart3, Package, Sparkles, ArrowRight, Users, UserCog } from "lucide-react";
import { cn } from "@/lib/utils";

const PLATFORM_BASE = 99;
const INCLUDED_MANAGERS = 2;
const INCLUDED_OPERATORS = 5;
const MANAGER_PRICE = 18;
const OPERATOR_PRICE = 5;
const ANNUAL_DISCOUNT = 0.15;

const MODULES = [
  { key: "ai",           price: 20,  Icon: Brain,     accent: "#8B5CF6", bg: "rgba(139,92,246,0.12)" },
  { key: "integrations", price: 99,  Icon: Link2,     accent: "#10B981", bg: "rgba(16,185,129,0.12)" },
  { key: "analytics",    price: 29,  Icon: BarChart3, accent: "#F59E0B", bg: "rgba(245,158,11,0.12)" },
  { key: "dpp",          price: 69,  Icon: Package,   accent: "#3B82F6", bg: "rgba(59,130,246,0.12)" },
];

const copy = {
  en: {
    config_title: "Configure Your Plan",
    seats_title: "User Seats",
    managers: "Managers",
    operators: "Operators",
    modules_title: "Add-on Modules",
    modules: [
      "AI Document Validation",
      "Advanced Integrations",
      "Real-time Analytics",
      "Advanced DPP",
    ],
    included: "included free",
    extra: (n: number) => `+${n} extra`,
    monthly_label: "Monthly",
    annual_label: "Annual",
    breakdown_title: "Cost Breakdown",
    platform_base: "Platform base",
    extra_managers: (n: number) => `${n} extra manager${n > 1 ? "s" : ""} × €${MANAGER_PRICE}`,
    extra_operators: (n: number) => `${n} extra operator${n > 1 ? "s" : ""} × €${OPERATOR_PRICE}`,
    total_monthly: "Total / month",
    billed_annually: "billed annually",
    annual_note: (s: number) => `Save ~€${s} per year`,
    cta: "Talk to our team",
    per_month: "/mo",
  },
  pt: {
    config_title: "Configure o Seu Plano",
    seats_title: "Lugares de Utilizador",
    managers: "Gestores",
    operators: "Operadores",
    modules_title: "Módulos Adicionais",
    modules: [
      "Validação de Documentos com IA",
      "Integrações Avançadas",
      "Análise em Tempo Real",
      "DPP Avançado",
    ],
    included: "incluído grátis",
    extra: (n: number) => `+${n} extra`,
    monthly_label: "Mensal",
    annual_label: "Anual",
    breakdown_title: "Resumo de Custos",
    platform_base: "Base da plataforma",
    extra_managers: (n: number) => `${n} gestor${n > 1 ? "es" : ""} extra × €${MANAGER_PRICE}`,
    extra_operators: (n: number) => `${n} operador${n > 1 ? "es" : ""} extra × €${OPERATOR_PRICE}`,
    total_monthly: "Total / mês",
    billed_annually: "faturado anualmente",
    annual_note: (s: number) => `Poupe ~€${s} por ano`,
    cta: "Falar com a nossa equipa",
    per_month: "/mês",
  },
};

function buildContactUrl(
  base: string,
  managers: number,
  operators: number,
  modules: Set<string>,
  monthly: number,
) {
  const params = new URLSearchParams({
    managers: String(managers),
    operators: String(operators),
    monthly: String(monthly),
  });
  if (modules.size > 0) params.set("modules", [...modules].join(","));
  return `${base}?${params.toString()}`;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    const t0 = performance.now();
    const dur = 380;

    const step = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(from + (to - from) * ease));
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else prevRef.current = to;
    };

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value]);

  return <>{display}</>;
}

function SeatCounter({
  label,
  included,
  value,
  min,
  max,
  extra,
  onChange,
  Icon,
}: {
  label: string;
  included: number;
  value: number;
  min: number;
  max: number;
  extra: number;
  onChange: (v: number) => void;
  Icon: React.ElementType;
}) {
  const barCount = Math.min(value, 12);
  const overflow = value > 12 ? value - 12 : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {included} included
              {extra > 0 && (
                <span className="text-primary font-medium ml-1">· +{extra} extra</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onChange(Math.max(min, value - 1))}
            disabled={value <= min}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-150 disabled:opacity-25 disabled:cursor-not-allowed"
            aria-label="Decrease"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="w-9 text-center font-bold text-base tabular-nums">{value}</span>
          <button
            onClick={() => onChange(Math.min(max, value + 1))}
            disabled={value >= max}
            className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-150 disabled:opacity-25 disabled:cursor-not-allowed"
            aria-label="Increase"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Seat visualizer */}
      <div className="flex items-center gap-1">
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              i < included ? "bg-primary/35" : "bg-primary"
            )}
          />
        ))}
        {overflow > 0 && (
          <span className="text-[10px] text-muted-foreground font-medium ml-0.5">
            +{overflow}
          </span>
        )}
        {barCount === 0 && (
          <div className="h-1.5 flex-1 rounded-full bg-border" />
        )}
      </div>
    </div>
  );
}

interface Props {
  locale: "en" | "pt";
  contactHref: string;
}

export default function PricingSimulator({ locale, contactHref }: Props) {
  const t = copy[locale];

  const [managers, setManagers] = useState(2);
  const [operators, setOperators] = useState(10);
  const [activeModules, setActiveModules] = useState<Set<string>>(new Set());
  const [annual, setAnnual] = useState(false);

  const extraManagers = Math.max(0, managers - INCLUDED_MANAGERS);
  const extraOperators = Math.max(0, operators - INCLUDED_OPERATORS);
  const managersCost = extraManagers * MANAGER_PRICE;
  const operatorsCost = extraOperators * OPERATOR_PRICE;
  const modulesCost = MODULES.filter((m) => activeModules.has(m.key)).reduce(
    (sum, m) => sum + m.price,
    0
  );

  const totalMonthly = PLATFORM_BASE + managersCost + operatorsCost + modulesCost;
  const displayMonthly = annual ? Math.round(totalMonthly * (1 - ANNUAL_DISCOUNT)) : totalMonthly;
  const totalAnnual = Math.round(totalMonthly * 12 * (1 - ANNUAL_DISCOUNT));
  const annualSavings = totalMonthly * 12 - totalAnnual;

  const toggleModule = (key: string) => {
    setActiveModules((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const breakdownItems = [
    { label: t.platform_base, amount: PLATFORM_BASE },
    ...(extraManagers > 0 ? [{ label: t.extra_managers(extraManagers), amount: managersCost }] : []),
    ...(extraOperators > 0 ? [{ label: t.extra_operators(extraOperators), amount: operatorsCost }] : []),
    ...MODULES.filter((m) => activeModules.has(m.key)).map((mod) => ({
      label: t.modules[MODULES.indexOf(mod)],
      amount: mod.price,
    })),
  ];

  const basePct = (PLATFORM_BASE / totalMonthly) * 100;
  const manPct = (managersCost / totalMonthly) * 100;
  const opPct = (operatorsCost / totalMonthly) * 100;
  const modPct = (modulesCost / totalMonthly) * 100;

  return (
    <div className="max-w-4xl mx-auto rounded-2xl border border-border shadow-xl shadow-black/5 overflow-hidden bg-card">
      <div className="grid lg:grid-cols-[1fr_300px]">

        {/* ── LEFT: Configurator ── */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-border space-y-7">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-5">
              {t.seats_title}
            </p>
            <div className="space-y-5">
              <SeatCounter
                label={t.managers}
                included={INCLUDED_MANAGERS}
                value={managers}
                min={1}
                max={20}
                extra={extraManagers}
                onChange={setManagers}
                Icon={UserCog}
              />
              <SeatCounter
                label={t.operators}
                included={INCLUDED_OPERATORS}
                value={operators}
                min={0}
                max={200}
                extra={extraOperators}
                onChange={setOperators}
                Icon={Users}
              />
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              {t.modules_title}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MODULES.map((mod, i) => {
                const active = activeModules.has(mod.key);
                const Icon = mod.Icon;
                return (
                  <button
                    key={mod.key}
                    onClick={() => toggleModule(mod.key)}
                    className={cn(
                      "group relative flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all duration-200",
                      active
                        ? "border-primary/40 shadow-sm"
                        : "border-border hover:border-border/60 hover:bg-muted/30"
                    )}
                    style={active ? { background: mod.bg } : undefined}
                  >
                    <div
                      className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={active ? { backgroundColor: mod.bg, color: mod.accent } : undefined}
                    >
                      <Icon className={cn("w-3.5 h-3.5", !active && "text-muted-foreground")} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-xs font-semibold leading-snug", !active && "text-foreground/65")}>
                        {t.modules[i]}
                      </p>
                      <p
                        className="text-[11px] mt-0.5 font-medium"
                        style={active ? { color: mod.accent } : undefined}
                      >
                        {!active && <span className="text-muted-foreground">+</span>}
                        €{mod.price}<span className="text-muted-foreground font-normal">{t.per_month}</span>
                      </p>
                    </div>
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200",
                        active ? "border-primary bg-primary" : "border-muted-foreground/30"
                      )}
                    >
                      {active && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Price Summary ── */}
        <div className="bg-muted/20 p-6 md:p-8 flex flex-col gap-5">

          {/* Billing toggle */}
          <div className="flex items-center bg-background rounded-full p-1 border border-border gap-0.5 self-center">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200",
                !annual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.monthly_label}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5",
                annual
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t.annual_label}
              <span
                className={cn(
                  "text-[9px] font-bold px-1 py-0.5 rounded-sm leading-tight",
                  annual
                    ? "bg-white/20 text-white"
                    : "bg-primary/10 text-primary"
                )}
              >
                −15%
              </span>
            </button>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className="flex items-start justify-center gap-0.5">
              <span className="text-xl font-semibold text-muted-foreground mt-3">€</span>
              <span className="text-[4rem] font-bold tracking-tight tabular-nums leading-none">
                <AnimatedNumber value={displayMonthly} />
              </span>
              <span className="text-sm text-muted-foreground self-end mb-1.5">{t.per_month}</span>
            </div>
            {annual && (
              <p className="text-xs text-muted-foreground mt-1">
                €{totalAnnual} {t.billed_annually}
              </p>
            )}
            {annual && annualSavings > 0 && (
              <div className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold">
                <Sparkles className="w-3 h-3" />
                {t.annual_note(annualSavings)}
              </div>
            )}
          </div>

          {/* Cost bar */}
          <div className="space-y-1.5">
            <div className="flex h-2 rounded-full overflow-hidden gap-px bg-muted">
              <div
                className="bg-primary/50 transition-all duration-500 ease-out"
                style={{ width: `${basePct}%` }}
              />
              {managersCost > 0 && (
                <div
                  className="transition-all duration-500 ease-out"
                  style={{ width: `${manPct}%`, background: "#8B5CF6", opacity: 0.6 }}
                />
              )}
              {operatorsCost > 0 && (
                <div
                  className="transition-all duration-500 ease-out"
                  style={{ width: `${opPct}%`, background: "#10B981", opacity: 0.6 }}
                />
              )}
              {modulesCost > 0 && (
                <div
                  className="transition-all duration-500 ease-out"
                  style={{ width: `${modPct}%`, background: "#F59E0B", opacity: 0.6 }}
                />
              )}
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {t.breakdown_title}
            </p>
            <div className="space-y-1.5">
              {breakdownItems.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline gap-2">
                  <span className="text-xs text-muted-foreground truncate">{item.label}</span>
                  <span className="text-xs font-semibold tabular-nums shrink-0">€{item.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3 mt-auto">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold">{t.total_monthly}</span>
              <span className="text-primary font-bold text-base tabular-nums">€{totalMonthly}</span>
            </div>

            <Button className="w-full rounded-xl font-semibold gap-2 group" asChild>
              <a
                href={buildContactUrl(
                  contactHref,
                  managers,
                  operators,
                  activeModules,
                  totalMonthly
                )}
              >
                {t.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
