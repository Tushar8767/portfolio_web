"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext({
  mode: "software",
  setMode: () => {},
  toggleMode: () => {},
  isCybersecurity: false,
  isSoftware: true,
});

export function ModeProvider({ children }) {
  const [mode, setModeState] = useState("software");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tushar_portfolio_mode");
      if (saved === "cybersecurity" || saved === "software") {
        setModeState(saved);
      }
    } catch {
      // localStorage may fail in restricted/private contexts
    }
    setMounted(true);
  }, []);

  const setMode = (newMode) => {
    if (newMode !== "software" && newMode !== "cybersecurity") return;
    setModeState(newMode);
    try {
      localStorage.setItem("tushar_portfolio_mode", newMode);
    } catch {
      // ignore
    }
  };

  const toggleMode = () => {
    const next = mode === "software" ? "cybersecurity" : "software";
    setMode(next);
  };

  const value = {
    mode,
    setMode,
    toggleMode,
    isCybersecurity: mode === "cybersecurity",
    isSoftware: mode === "software",
    mounted,
  };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
