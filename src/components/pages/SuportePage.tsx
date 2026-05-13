import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Search, Book, HelpCircle, Settings, PlayCircle } from "lucide-react";

const SUPPORT_CATEGORIES = [
  { id: "getting-started", label: "Primeiros Passos", icon: Book },
  { id: "billing", label: "Faturação", icon: FileText },
  { id: "settings", label: "Configurações", icon: Settings },
  { id: "faq", label: "Perguntas Frequentes", icon: HelpCircle },
];

const ARTICLES: Record<string, { title: string; description: string; type: "video" | "article"; href?: string }[]> = {
  "getting-started": [
    { 
      title: "Dashboard geral", 
      description: "Uma visão geral rápida de todas as funcionalidades.", 
      type: "video",
      href: "/pt/support/dashboard-geral"
    },
  ],
  "billing": [],
  "settings": [],
  "faq": [],
};

export default function SuportePage() {
  const [activeTab, setActiveTab] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");

  const activeArticles = ARTICLES[activeTab] || [];

  return (
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 py-20 px-4 md:px-8 pt-32">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Centro de Suporte
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Encontre respostas, tutoriais e guias para aproveitar o Hestia ERP ao máximo.
          </p>
          
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <Input 
              type="text" 
              placeholder="Pesquise por artigos ou tópicos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 w-full bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-full"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* Sidebar / Tabs */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-2">
            {SUPPORT_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-left ${
                    activeTab === cat.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-neutral-600 hover:bg-neutral-200/50 dark:text-neutral-400 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Articles list */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold mb-6">
              {SUPPORT_CATEGORIES.find(c => c.id === activeTab)?.label}
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {activeArticles
                .filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((article, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <CardHeader className="pb-3 px-5 pt-5">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      {article.type === "video" ? <PlayCircle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      <span className="text-xs font-semibold uppercase tracking-wider">{article.type === "video" ? "Vídeo" : "Artigo"}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-neutral-500 line-clamp-2 mt-2 leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    {article.href ? (
                      <a href={article.href}>
                        <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent">
                          Ler mais &rarr;
                        </Button>
                      </a>
                    ) : (
                      <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent">
                        Ler mais &rarr;
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
              {activeArticles.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <div className="col-span-2 text-center py-12 text-neutral-500">
                  Nenhum resultado encontrado para "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}