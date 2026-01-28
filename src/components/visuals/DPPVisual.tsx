import { QrCode, Smartphone } from "lucide-react";

export function DPPVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Phone Frame */}
      <div className="relative w-48 h-80 bg-slate-900 rounded-[2rem] shadow-2xl border-[4px] border-slate-700 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10">
        <div className="absolute top-0 w-full h-full bg-background flex flex-col">
            {/* Header */}
            <div className="h-12 bg-primary/10 flex items-center justify-center border-b">
                <span className="text-xs font-bold tracking-widest text-primary">DIGITAL PASSPORT</span>
            </div>
            {/* Content */}
            <div className="flex-1 p-4 flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <QrCode className="w-16 h-16 text-slate-900" />
                </div>
                <div className="space-y-2 w-full">
                    <div className="h-2 bg-muted rounded-full w-3/4 mx-auto"></div>
                    <div className="h-2 bg-muted rounded-full w-1/2 mx-auto"></div>
                </div>
                <div className="w-full p-2 rounded-lg bg-green-500/10 border border-green-500/20 mt-2">
                    <div className="flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-medium text-green-600">Authentic Product</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[60px] rounded-full -z-10"></div>
    </div>
  );
}
