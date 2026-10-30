import React from "react";
import { CONFIG } from "../config";

interface HeaderPillProps {
  label: string;
  accent?: string;
  icon?: React.ReactNode;
}

export const HeaderPill: React.FC<HeaderPillProps> = ({
  label,
  accent = CONFIG.colors.cyanAccent,
  icon,
}) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 24px",
        borderRadius: 50,
        background: "rgba(255, 255, 255, 0.07)",
        border: `1px solid ${accent}55`,
        boxShadow: `0 0 20px -5px ${accent}44`,
        backdropFilter: "blur(12px)",
      }}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: accent,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
};
