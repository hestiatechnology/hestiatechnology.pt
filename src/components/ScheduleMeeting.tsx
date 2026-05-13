"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

export default function ScheduleMeeting() {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        className="px-8 cursor-pointer"
        onClick={() => setShowIframe(true)}
      >
        Agendar uma reunião
      </Button>
      <Dialog open={showIframe} onOpenChange={setShowIframe}>
        <DialogContent className="!bg-white !text-black dark:!bg-white dark:!text-black">
          <iframe
            title="Schedule Investment Meeting"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1onooq6xYX4tyZd6GpAqcXGL8nSUDHUSGfE4ac2_ciKo5gD_5-BrR1vS1W79qFSmR-A3_YYAcS?gv=true"
            style={{ border: 0, width: "100%", height: 600, marginTop: 24 }}
            frameBorder={0}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
