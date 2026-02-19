import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GoogleCalendarButtonProps {
  label?: string;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export function GoogleCalendarButton({
  label = "Agendar uma Demonstração",
  variant = "primary",
  size = "lg",
  className = "",
}: GoogleCalendarButtonProps) {
  const [open, setOpen] = useState(false);

  
  const calendarUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1onooq6xYX4tyZd6GpAqcXGL8nSUDHUSGfE4ac2_ciKo5gD_5-BrR1vS1W79qFSmR-A3_YYAcS?gv=true";

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizes = {
    default: "h-10 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  };

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90",
    outline:
      "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
        {label}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl lg:max-w-5xl xl:max-w-6xl w-full p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-4">
            <DialogTitle>Agendar uma Demonstração</DialogTitle>
          </DialogHeader>
          <div className="w-full h-[500px] lg:h-[600px] xl:h-[650px]">
            <iframe
              src={calendarUrl}
              title="Google Calendar Appointment Scheduling"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="payment"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
