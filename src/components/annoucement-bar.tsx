import { Megaphone, Star, Zap, Gift, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AnnouncementBarProps {
  message: string;
  type?: "default" | "success" | "warning" | "info" | "promotion";
  icon?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  onClose?: () => void;
  className?: string;
}

const typeStyles = {
  default:
    "bg-gradient-to-r from-slate-900 to-slate-800 text-white border-slate-700",
  success:
    "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-500",
  warning:
    "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400",
  info: "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-500",
  promotion: "bg-gradient-to-r from-primary to-chart-2 text-primary-foreground",
};

const typeIcons = {
  default: <Megaphone className="h-4 w-4" />,
  success: <Star className="h-4 w-4" />,
  warning: <Zap className="h-4 w-4" />,
  info: <Bell className="h-4 w-4" />,
  promotion: <Gift className="h-4 w-4" />,
};

export function AnnouncementBar({
  message,
  type = "default",
  icon,
  actionText,
  actionHref,
  onClose,
  className,
}: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "border-b transition-all duration-300 ease-in-out z-0",
        typeStyles[type],
        className,
      )}
    >
      {/* Animated background pattern 
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>*/}

      <div className="relative flex items-center justify-center px-4 py-3 sm:px-6">
        <div className="flex items-center space-x-3">
          {/* Icon */}
          <div className="flex-shrink-0 animate-bounce">
            {icon || typeIcons[type]}
          </div>

          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-center sm:text-left">
              {message}
            </p>
          </div>

          {/* Action Button */}
          {actionText && (
            <div className="flex-shrink-0">
              {actionHref ? (
                <a
                  href={actionHref}
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200 backdrop-blur-sm"
                >
                  {actionText}
                </a>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs font-semibold bg-white/20 hover:bg-white/30 text-white border-0 h-7"
                >
                  {actionText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Shimmer effect */}
      <div
        className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
        style={{
          animation: "shimmer 3s ease-in-out infinite",
          transform: "translateX(-100%)",
        }}
      />
    </div>
  );
}
