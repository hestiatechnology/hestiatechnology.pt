import React from "react";
import { ChevronLeft } from "lucide-react";

interface ArticlePageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  backHref?: string;
}

export default function ArticlePage({ title, description, children, backHref = "/pt/support" }: ArticlePageProps) {
  return (
    <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 py-20 px-4 md:px-8 mt-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <a 
          href={backHref} 
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Voltar ao Centro de Suporte
        </a>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none bg-white dark:bg-neutral-900 p-6 md:p-10 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
          {children}
        </div>
      </div>
    </div>
  );
}