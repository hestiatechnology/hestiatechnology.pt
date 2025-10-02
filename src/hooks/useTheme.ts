import { useState, useEffect } from "react";

/**
 * A hook to sync with the theme set on the `<html>` element.
 */
export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    // Observe changes in the 'class' attribute of the <html> element
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return { isDarkMode };
}
