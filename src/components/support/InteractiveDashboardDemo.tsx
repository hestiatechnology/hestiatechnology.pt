import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, ChevronDown, Plus, UserPlus, Factory, GripVertical, Settings, Bell, TrendingUp, AlertCircle, Clock, ReceiptText, BarChart3, FileText, SwitchCamera, X, Users, SquarePlus, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    title: "Bem-vindo ao Painel de controlo",
    description: "Este é o seu Dashboard do Hestia ERP. Aqui encontra uma visão global e as métricas vitais da sua empresa prontas a analisar.",
    target: "dashboard-root"
  },
  {
    title: "Ações Rápidas",
    description: "Aqui pode criar rapidamente Faturas, Clientes ou Ordens de Produção sem ter de navegar pelos respetivos menus verticais do ERP.",
    target: "quick-actions"
  },
  {
    title: "Modo de Edição",
    description: "Ao ativar o botão 'Editar dashboard', poderá reorganizar a disposição dos cartões arrastando-os pelo ícone.",
    target: "edit-mode"
  },
  {
    title: "Adicionar Cartão",
    description: "Para além de reposicionar, pode carregar em 'Adicionar card' (quando em modo de edição) para abrir o catálogo e incluir novas métricas à sua medida.",
    target: "add-card-modal"
  },
  {
    title: "Resumo Financeiro",
    description: "Consulte o total faturado no mês atual, os saldos que estão em aberto (por receber) e os valores em atraso.",
    target: "financial-summary"
  },
  {
    title: "Documentos Recentes",
    description: "Cartões como as 'Últimas Faturas' permitem ver imediatamente os documentos emitidos nos últimos dias e o seu estado.",
    target: "invoices-card"
  },
  {
    title: "Controlo de Stock",
    description: "Personalize ainda alertas como o de Stock Baixo para saber sempre quais os materiais que precisa de encomendar com urgência.",
    target: "low-stock-card"
  }
];

export default function InteractiveDashboardDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const stepData = STEPS[currentStep];

  const goNext = () => setCurrentStep((p) => Math.min(p + 1, STEPS.length - 1));
  const goPrev = () => setCurrentStep((p) => Math.max(p - 1, 0));

  useEffect(() => {
    // Simulamos o ligar/desligar do edit mode no passo do edit-mode
    if (currentStep === 2 && !editMode) setEditMode(true);
    if (currentStep !== 2 && editMode) setEditMode(false);
  }, [currentStep]);

  // Helper para decidir estilos de highlight
  const getHighlightClass = (targetName: string) => {
    if (stepData.target === targetName && targetName !== "dashboard-root" && targetName !== "add-card-modal") {
      return "ring-4 ring-primary ring-offset-4 ring-offset-[#fdfdfd] z-10 relative shadow-xl scale-[1.01] transition-all bg-white rounded-xl";
    }
    return "transition-all duration-300";
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 my-8">
      
      {/* Container Principal do Mock do Hestia ERP - FORCE LIGHT MODE */}
      <div className="w-full aspect-[4/3] md:aspect-[16/8] border border-neutral-200 rounded-3xl bg-[#f8f9fa] md:bg-white overflow-hidden flex flex-col relative shadow-xl text-sm mb-4 text-neutral-900 font-sans">
        
        {/* Mock Modal "Adicionar Card" (Only visible in step 3) */}
        <div className={`absolute inset-0 z-50 bg-neutral-900/30 backdrop-blur-[1px] flex items-center justify-center transition-all duration-300 ${stepData.target === "add-card-modal" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
           <div className={`w-full max-w-[500px] bg-[#fdfdfd] rounded-[28px] shadow-2xl p-6 flex flex-col gap-2 transition-transform duration-500 delay-100 ${stepData.target === "add-card-modal" ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
              <h2 className="text-[22px] font-normal tracking-tight text-neutral-900 mb-1">Adionar cartão</h2>
              
              <div className="flex flex-col gap-4">
                 <div className="flex flex-col gap-2 p-3">
                   <h3 className="text-sm font-medium text-neutral-800">Escolha o cartão que necessita.</h3>
                   
                   {/* Material 3 Outlined Select Mock */}
                   <div className="relative mt-2 border border-neutral-400 rounded ring-transparent hover:border-neutral-900 transition-colors px-4 py-3 min-h-[56px] flex items-center justify-between cursor-pointer bg-white">
                      <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-neutral-600 font-medium">Cartão</span>
                      <span className="text-base text-neutral-900">Resumo Financeiro</span>
                      <ChevronDown className="w-5 h-5 text-neutral-600" />
                   </div>
                 </div>

                 {/* Mock Card Preview Inside Modal */}
                 <div className="mx-3 mb-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm opacity-80 zoom-95 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                       <div className="flex flex-col gap-0.5">
                         <span className="text-xs font-medium text-neutral-500">Faturado este mês</span>
                         <span className="text-base font-semibold text-primary">€ 14.500,00</span>
                       </div>
                       <ReceiptText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-full h-px bg-neutral-200"></div>
                 </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="ghost" className="text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-full font-medium h-10 px-6">Cancelar</Button>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-medium h-10 px-6">Adicionar</Button>
              </div>
           </div>
        </div>

        {/* Mock Main Content */}
        <div className={`flex-1 flex flex-col h-full bg-[#fdfdfd] overflow-y-auto ${getHighlightClass("dashboard-root")}`}>
          
          {/* Header Title (Painel de controlo) */}
          <div className="px-6 py-8 md:px-10 md:py-10 pb-0">
             <div className="text-xs text-neutral-500 mb-1 flex items-center gap-1 font-medium">
               <span>Início</span>
             </div>
             <h1 className="text-[32px] md:text-[36px] font-normal tracking-tight text-neutral-900 leading-tight">Painel de controlo</h1>
             <p className="text-sm text-neutral-500 mt-1">Comece a configurar a sua app <a href="#" className="font-medium text-primary hover:underline ml-1">Mostrar mais</a></p>
          </div>

          <div className="mx-auto max-w-[1400px] w-full mt-6">
            {/* Quick Actions & Edit Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-10 py-5">
              
              <div className={`flex flex-wrap items-center gap-3 ${getHighlightClass("quick-actions")} p-1`}>
                <span className="text-xs font-medium text-neutral-500 mr-2 uppercase tracking-wide">Ações rápidas</span>
                <Button variant="outline" className="h-10 rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-medium px-5">
                  <Plus className="w-4 h-4 mr-2" /> Nova fatura
                </Button>
                <Button variant="outline" className="h-10 rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-medium px-5">
                  <UserPlus className="w-4 h-4 mr-2" /> Novo cliente
                </Button>
                <Button variant="outline" className="h-10 rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-medium px-5 hidden sm:flex">
                  <Factory className="w-4 h-4 mr-2" /> Nova ordem de produção
                </Button>
              </div>

              <div className={`flex items-center gap-4 ${getHighlightClass("edit-mode")} p-2 rounded-xl`}>
                {editMode && (
                  <Button variant="outline" className={`h-10 rounded-full border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-medium px-5 transition-all duration-300 ${stepData.target === 'add-card-modal' ? 'ring-4 ring-primary ring-offset-2 border-primary/50 text-primary' : ''}`}>
                    <SquarePlus className="w-4 h-4 mr-2" />
                    Adicionar card
                  </Button>
                )}
                <div className="flex items-center gap-3 cursor-pointer select-none border border-neutral-200 py-1.5 px-3 rounded-full hover:bg-neutral-50" onClick={() => setEditMode(!editMode)}>
                  <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 relative ${editMode ? 'bg-[#1cc06b]' : 'bg-neutral-400'}`}>
                    <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${editMode ? 'translate-x-[24px]' : 'translate-x-0'}`}></div>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">Editar</span>
                </div>
              </div>

            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-10 pb-16">
              
              {/* Card - Resumo Financeiro */}
              <div className={`bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col w-full h-[350px] ${getHighlightClass("financial-summary")}`}>
                 <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200 min-h-[48px]">
                    {editMode && <GripVertical className="w-5 h-5 text-neutral-400 cursor-grab hover:text-neutral-600 transition-colors" />}
                    <h1 className="text-base font-normal flex-1 text-center truncate text-neutral-900 leading-tight">Resumo Financeiro</h1>
                    {editMode && <X className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-red-500 transition-colors" />}
                 </div>
                 
                 <div className="flex flex-col justify-center flex-1 gap-3 px-4 overflow-hidden">
                    <div className="flex flex-col gap-3 w-full">
                       
                       <div className="flex items-center justify-between text-[#1cc06b]">
                         <div className="flex flex-col gap-0.5">
                           <span className="text-xs font-medium text-neutral-500">Faturado este mês</span>
                           <span className="text-lg font-semibold text-primary">€ 14.500,00</span>
                         </div>
                         <ReceiptText className="w-6 h-6 text-primary opacity-90" />
                       </div>

                       <div className="w-full h-px bg-neutral-200"></div>

                       <div className="flex justify-between gap-4">
                         <div className="flex flex-col gap-0.5 flex-1">
                           <span className="text-xs font-medium text-neutral-500">Saldo em aberto</span>
                           <span className="text-sm font-medium text-primary">€ 3.200,00</span>
                         </div>
                         <div className="flex flex-col gap-0.5 flex-1">
                           <span className="text-xs font-medium text-neutral-500">Saldo em atraso</span>
                           <span className="text-sm font-medium text-red-600">€ 550,00</span>
                         </div>
                       </div>

                       <div className="flex items-center gap-1.5 rounded bg-[#FFDAD6] px-2 py-1 mt-1">
                         <TriangleAlert className="w-3.5 h-3.5 text-[#410002]" />
                         <span className="text-[11px] font-medium text-[#410002]">Existem faturas vencidas em aberto</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Card - Últimas faturas */}
              <div className={`bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col w-full h-[350px] ${getHighlightClass("invoices-card")}`}>
                 <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200 min-h-[48px]">
                    {editMode && <GripVertical className="w-5 h-5 text-neutral-400 cursor-grab hover:text-neutral-600 transition-colors" />}
                    <h1 className="text-base font-normal flex-1 text-center truncate text-neutral-900 leading-tight">Faturas recentes</h1>
                    {editMode && <X className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-red-500 transition-colors" />}
                 </div>

                 <div className="flex flex-col flex-1 overflow-hidden p-2">
                   <div className="overflow-y-auto w-full h-full pr-1">
                     {[
                       { id: "FT 2026/12", client: "Acme Corp", total: "€ 450,00", time: "13/05/2026" },
                       { id: "FT 2026/11", client: "Têxteis Silva", total: "€ 1.250,00", time: "12/05/2026" },
                       { id: "FT 2026/10", client: "Malhas e Fios Lda", total: "€ 8.900,00", time: "11/05/2026" },
                       { id: "FT 2026/09", client: "Indústrias ABC", total: "€ 2.100,00", time: "09/05/2026" },
                       { id: "FT 2026/08", client: "Exemplo Lda", total: "€ 340,00", time: "05/05/2026" },
                     ].map((inv, idx) => (
                        <div key={idx} className="flex flex-row items-center py-3 border-b border-neutral-200 last:border-b-0 cursor-pointer hover:bg-neutral-50 transition-colors px-2">
                           <div className="flex-1 min-w-0 pr-4">
                             <p className="text-sm font-normal text-neutral-900 truncate" title={inv.client}>{inv.id} - {inv.client}</p>
                           </div>
                           <div className="w-[80px] text-right shrink-0">
                             <span className="text-xs text-neutral-500">{inv.time}</span>
                           </div>
                           <div className="w-[88px] text-right shrink-0">
                             <span className="text-sm font-normal text-primary">{inv.total}</span>
                           </div>
                        </div>
                     ))}
                   </div>
                 </div>
              </div>

               {/* Card - Alerta de Stock */}
               <div className={`bg-white border border-neutral-200 rounded-xl shadow-sm flex flex-col w-full h-[350px] ${getHighlightClass("low-stock-card")}`}>
                 <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-200 min-h-[48px]">
                    {editMode && <GripVertical className="w-5 h-5 text-neutral-400 cursor-grab hover:text-neutral-600 transition-colors" />}
                    <h1 className="text-base font-normal flex-1 text-center truncate text-neutral-900 leading-tight">Alerta de Stock</h1>
                    {editMode && <X className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-red-500 transition-colors" />}
                 </div>
                 
                 <div className="flex flex-col flex-1 overflow-hidden p-2">
                   <div className="overflow-y-auto w-full h-full pr-1">
                     {[
                       { id: "ART-001", name: "Fio de Algodão Branco", stock: "12 un" },
                       { id: "ART-045", name: "Etiquetas Têxteis (Lote)", stock: "5 un" },
                       { id: "ART-102", name: "Agulhas Industriais 90/14", stock: "2 un" },
                       { id: "ART-033", name: "Linha Poliéster Preta", stock: "0 un" },
                       { id: "ART-089", name: "Botão Redondo 15mm", stock: "8 un" },
                     ].map((item, idx) => (
                        <div key={idx} className="flex flex-row items-center py-3 border-b border-neutral-200 last:border-b-0 cursor-pointer hover:bg-neutral-50 transition-colors px-2">
                           <div className="flex-1 min-w-0 pr-4">
                             <p className="text-sm font-normal text-neutral-900 truncate" title={item.name}>{item.name}</p>
                             <p className="text-[11px] text-neutral-500 mt-0.5">{item.id}</p>
                           </div>
                           <div className="w-[60px] text-right shrink-0">
                             <span className="text-sm font-medium text-red-600">{item.stock}</span>
                           </div>
                        </div>
                     ))}
                   </div>
                 </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Título de Passo Atual Simples Acima */}
      {/* Container de Informação do Tour e Controlos de Navegação que acompanha cada passo em modo lista em baixo */}
      <div className="w-full flex flex-col md:flex-row gap-6 mt-2 items-center justify-between">
        
        {/* Texto descritivo que transita a cada passo */}
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-sm tracking-wide uppercase">Passo {currentStep + 1} de {STEPS.length}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300"></div>
            <h3 className="font-semibold text-xl text-neutral-900 dark:text-white">{stepData.title}</h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base max-w-3xl">
            {stepData.description}
          </p>
        </div>

        {/* Botões Simples */}
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="outline" className="h-11 px-5 rounded-full border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-medium" onClick={goPrev} disabled={currentStep === 0}>
            <ChevronLeft className="w-4 h-4 mr-2" /> Passo Anterior
          </Button>
          <Button className="h-11 px-5 rounded-full bg-primary hover:bg-primary/90 text-white font-medium shadow-sm transition-all" onClick={goNext} disabled={currentStep === STEPS.length - 1}>
            Passo Seguinte <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

      </div>

    </div>
  );
}