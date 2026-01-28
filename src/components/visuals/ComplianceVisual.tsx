import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, FileCheck, AlertCircle } from "lucide-react";

export function ComplianceVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
      <div className="w-full max-w-sm bg-background border rounded-xl shadow-xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
        <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-sm">Compliance Status</span>
            </div>
            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">Verified</Badge>
        </div>
        <div className="p-4 space-y-3">
            {[
                { label: "EU Regulations Check", status: "passed" },
                { label: "Material Safety Data", status: "passed" },
                { label: "Supply Chain Traceability", status: "passed" },
                { label: "Carbon Footprint Report", status: "pending" },
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.status === 'passed' ? 'bg-green-100 text-green-600 dark:bg-green-900/30' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30'}`}>
                            {item.status === 'passed' ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="p-3 bg-muted/30 border-t flex justify-center">
            <div className="text-xs text-muted-foreground flex items-center gap-1">
                <FileCheck className="w-3 h-3" /> Last audit: Today
            </div>
        </div>
      </div>
    </div>
  );
}
