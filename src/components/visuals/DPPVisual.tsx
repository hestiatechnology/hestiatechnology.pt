import { QrCode, Smartphone } from "lucide-react";

export function DPPVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden p-4">
      {/* Phone Frame */}
      <div className="relative w-48 h-80 max-w-[80%] max-h-[90%] bg-slate-900 rounded-[2rem] shadow-2xl border-[4px] border-slate-700 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-10 flex flex-col">
        
            {/* Header */}
            <div className="h-12 shrink-0 bg-primary/10 flex items-center justify-center border-b">
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-primary">DIGITAL PASSPORT</span>
            </div>
            {/* Content */}
            <div className="flex-1 p-4 flex flex-col items-center space-y-4 justify-center bg-background w-full">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <QrCode className="w-12 h-12 md:w-16 md:h-16 text-slate-900" />
                </div>
                <div className="space-y-2 w-full">
                    <div className="h-1.5 md:h-2 bg-muted rounded-full w-3/4 mx-auto"></div>
                    <div className="h-1.5 md:h-2 bg-muted rounded-full w-1/2 mx-auto"></div>
                </div>
                <div className="w-full p-2 rounded-lg bg-green-500/10 border border-green-500/20 mt-2">
                    <div className="flex items-center gap-2 justify-center">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[9px] md:text-[10px] font-medium text-green-600 whitespace-nowrap">Authentic Product</span>
                    </div>
                </div>
            </div>
        
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[60px] rounded-full -z-10"></div>
    </div>
  );
}
