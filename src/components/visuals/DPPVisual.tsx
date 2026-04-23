import { QrCode, CheckCircle2, Leaf, MapPin, Factory, Recycle, PackageCheck, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DPPVisual() {
  return (
    <div className="w-full h-full bg-background flex flex-col font-sans relative">
      {/* App Header */}
      <div className="shrink-0 h-14 border-b bg-background/80 backdrop-blur-md flex items-center justify-between px-4 sticky top-0 z-10">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <QrCode className="w-4 h-4" />
            </div>
            <span className=" text-sm">Passport</span>
        </div>
        <Badge variant="outline" className="text-[10px] bg-green-500/10 text-green-600 border-green-200 gap-1">
            <CheckCircle2 className="w-3 h-3" /> Verified
        </Badge>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="p-4 space-y-6 pb-20">
            {/* Product Header */}
            <div className="space-y-4 text-center">
                <div className="w-32 h-32 mx-auto rounded-2xl bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center relative overflow-hidden group">
                     {/* Placeholder for Product Image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:scale-110 transition-transform duration-500"></div>
                     <PackageCheck className="w-12 h-12 text-muted-foreground/40" />
                </div>
                <div>
                    <h2 className="text-xl tracking-tight">Premium Cotton Tee</h2>
                    <p className="text-xs text-muted-foreground">ID: #8849-2291-EU</p>
                </div>
            </div>

            {/* Sustainability Score */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">Sustainability Score</span>
                    <Leaf className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex items-end gap-2">
                    <span className="text-3xl text-green-600">A</span>
                    <div className="flex-1 h-2 bg-muted rounded-full mb-2 overflow-hidden">
                        <div className="h-full w-[95%] bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-muted-foreground">
                    <div className="bg-background rounded-md p-2 border flex items-center gap-2">
                        <Recycle className="w-3 h-3" /> 100% Recyclable
                    </div>
                    <div className="bg-background rounded-md p-2 border flex items-center gap-2">
                        <Leaf className="w-3 h-3" /> Organic
                    </div>
                </div>
            </div>

            {/* Supply Chain Timeline */}
            <div className="space-y-4">
                <h3 className="text-sm flex items-center gap-2">
                    <Factory className="w-4 h-4 text-primary" /> Supply Chain
                </h3>
                <div className="relative pl-4 border-l-2 border-muted space-y-6">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
                        <div className="text-xs">Manufacturing</div>
                        <div className="text-[10px] text-muted-foreground">Guimarães, Portugal • Feb 14</div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-muted-foreground/30 ring-4 ring-background"></div>
                        <div className="text-xs">Spinning</div>
                        <div className="text-[10px] text-muted-foreground">Braga, Portugal • Jan 28</div>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-muted-foreground/30 ring-4 ring-background"></div>
                        <div className="text-xs">Raw Material</div>
                        <div className="text-[10px] text-muted-foreground">Organic Farms, India • Jan 10</div>
                    </div>
                </div>
            </div>
            
            {/* Composition */}
             <div className="space-y-2">
                <h3 className="text-sm">Material Composition</h3>
                <div className="text-xs space-y-1">
                    <div className="flex justify-between p-2 rounded-lg bg-muted/20">
                        <span>Organic Cotton</span>
                        <span className="font-mono">95%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-muted/20">
                        <span>Elastane</span>
                        <span className="font-mono">5%</span>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* Scroll Hint (Phone) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20 flex flex-col items-center justify-end pb-6">
          <div className="flex flex-col items-center gap-1 animate-bounce opacity-100">
              <span className="text-[10px] uppercase text-primary tracking-widest">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-primary" />
          </div>
      </div>
    </div>
  );
}