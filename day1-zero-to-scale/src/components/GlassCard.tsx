import React from "react";
import { CONFIG } from "../config";

interface GlassCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  highlight?: boolean;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  style,
  highlight = false,
  glowColor = CONFIG.colors.cyanGlow,
}) => {
  return (
    <div
      style={{
        background: CONFIG.colors.cardBg,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1.5px solid ${
          highlight ? CONFIG.colors.cardBorderHighlight : CONFIG.colors.cardBorder
        }`,
        borderRadius: 24,
        padding: "24px 32px",
        boxShadow: highlight
          ? `0 12px 40px -10px ${glowColor}, inset 0 1px 1px rgba(255,255,255,0.2)`
          : "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.08)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
