import { Badge } from "@/components/ui/badge";
import { Activity, Clock, Zap } from "lucide-react";

export function RealTimeVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-900/50 p-6">
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="bg-background border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-[10px] text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-full">Live</span>
                </div>
                <div className="text-xl">1,204</div>
                <div className="text-xs text-muted-foreground">Units/Hour</div>
            </div>
            <div className="bg-background border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                </div>
                <div className="text-xl">98%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="col-span-2 bg-background border rounded-xl p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Zap className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-sm">Production Line A</div>
                        <div className="text-xs text-muted-foreground">Running smoothly</div>
                    </div>
                </div>
                <Badge>Normal</Badge>
            </div>
        </div>
    </div>
  );
}
