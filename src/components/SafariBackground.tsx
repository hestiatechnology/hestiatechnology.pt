import { Safari } from "./magicui/safari";
import ERPDashDark from "@/assets/dashboard_darkmode.png";
import ERPDashLight from "@/assets/Dashboard.png";
import { useTheme } from "@/hooks/useTheme";

export default function SafariBackground() {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative w-full max-w-7xl mx-auto sm:px-0 px-2">
      {isDarkMode ? (
        <Safari
          url="erp.hestiatechnology.pt"
          imageSrc={ERPDashDark.src}
          className="object-contain w-full h-auto max-h-[60vw] sm:max-h-[500px]"
        />
      ) : (
        <Safari
          url="erp.hestiatechnology.pt"
          imageSrc={ERPDashLight.src}
          className="object-contain w-full h-auto max-h-[60vw] sm:max-h-[500px] "
        />
      )}
    </div>
  );
}
