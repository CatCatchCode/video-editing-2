import React from "react";
import { CONFIG } from "../config";

interface SafeZoneContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const SafeZoneContainer: React.FC<SafeZoneContainerProps> = ({
  children,
  style,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: CONFIG.safeArea.top,
        bottom: CONFIG.safeArea.bottom,
        left: CONFIG.safeArea.left,
        right: CONFIG.safeArea.right,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
