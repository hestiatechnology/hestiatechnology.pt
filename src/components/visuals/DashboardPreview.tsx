import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, BarChart3, LineChart, PieChart, Users, Zap } from "lucide-react";

export function DashboardPreview() {
  return (
    <Card className="w-full aspect-[16/10] overflow-hidden bg-background/50 backdrop-blur-sm border shadow-2xl relative">
      {/* Sidebar - Decorative */}
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r bg-muted/20 flex flex-col items-center py-4 gap-4 hidden sm:flex">
        <div className="w-8 h-8 rounded-lg bg-primary/20"></div>
        <div className="w-8 h-8 rounded-lg bg-muted/40 mt-8"></div>
        <div className="w-8 h-8 rounded-lg bg-muted/40"></div>
        <div className="w-8 h-8 rounded-lg bg-muted/40"></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 sm:left-16 right-0 h-14 border-b bg-background/50 flex items-center px-6 justify-between">
        <div className="w-32 h-4 rounded-full bg-muted"></div>
        <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-muted"></div>
            <div className="w-8 h-8 rounded-full bg-muted"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute top-14 left-0 sm:left-16 right-0 bottom-0 p-6 space-y-6 overflow-hidden">
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-card/50 space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-xs">
                    <span>Total Production</span>
                    <BarChart3 className="w-4 h-4" />
                </div>
                <div className="text-2xl">12,450 <span className="text-xs text-green-500 font-normal ml-1">+12%</span></div>
            </div>
            <div className="p-4 rounded-xl border bg-card/50 space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-xs">
                    <span>Efficiency</span>
                    <Zap className="w-4 h-4" />
                </div>
                <div className="text-2xl">94.2% <span className="text-xs text-green-500 font-normal ml-1">+2.4%</span></div>
            </div>
            <div className="p-4 rounded-xl border bg-card/50 space-y-2 hidden md:block">
                <div className="flex items-center justify-between text-muted-foreground text-xs">
                    <span>Active Orders</span>
                    <Users className="w-4 h-4" />
                </div>
                <div className="text-2xl">48 <span className="text-xs text-muted-foreground font-normal ml-1">Active</span></div>
            </div>
        </div>

        {/* Chart Area */}
        <div className="grid grid-cols-3 gap-4 h-full">
            <div className="col-span-2 rounded-xl border bg-card/50 p-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-24 h-4 rounded-full bg-muted"></div>
                    <Badge variant="outline" className="text-xs">Weekly</Badge>
                </div>
                {/* Fake Chart Bars */}
                <div className="flex items-end justify-between h-32 px-2 gap-2">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                        <div key={i} className="w-full bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors relative group">
                            <div className="absolute bottom-0 w-full bg-primary/60 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-1 rounded-xl border bg-card/50 p-4 space-y-3">
                 <div className="w-20 h-4 rounded-full bg-muted mb-4"></div>
                 {[1,2,3].map(i => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted/50 shrink-0"></div>
                        <div className="space-y-1 w-full">
                            <div className="w-16 h-2 rounded-full bg-muted"></div>
                            <div className="w-full h-1.5 rounded-full bg-muted/30"></div>
                        </div>
                    </div>
                 ))}
            </div>
        </div>

      </div>
    </Card>
  );
}
