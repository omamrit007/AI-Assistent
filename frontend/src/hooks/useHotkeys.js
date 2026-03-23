import { useEffect } from "react";

export default function useHotkeys(toggle) {
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.code === "Space") {
        toggle();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);
}