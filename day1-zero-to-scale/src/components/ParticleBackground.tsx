import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { CONFIG } from "../config";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  seed: number;
}

export const ParticleBackground: React.FC<{ accent?: "cyan" | "violet" | "gold" }> = ({
  accent = "cyan",
}) => {
  const frame = useCurrentFrame();

  const particles: Particle[] = useMemo(() => {
    const list: Particle[] = [];
    const colors = [CONFIG.colors.cyanAccent, CONFIG.colors.primaryViolet, "#FFFFFF"];
    for (let i = 0; i < 35; i++) {
      list.push({
        x: (i * 31) % 1080,
        y: (i * 59) % 1920,
        size: 2 + ((i * 7) % 5),
        speed: 0.5 + ((i * 13) % 15) * 0.1,
        color: colors[i % colors.length],
        seed: i * 17,
      });
    }
    return list;
  }, []);

  const glowColor =
    accent === "gold"
      ? CONFIG.colors.goldGlow
      : accent === "violet"
      ? CONFIG.colors.primaryVioletGlow
      : CONFIG.colors.cyanGlow;

  return (
    <div
      style={{
        position: "absolute",
        width: CONFIG.width,
        height: CONFIG.height,
        backgroundColor: CONFIG.colors.bgDark,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Dynamic Ambient Gradient Blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(8,8,14,0) 70%)`,
          filter: "blur(70px)",
          transform: `translate(${Math.sin(frame * 0.02) * 40}px, ${Math.cos(frame * 0.015) * 40}px)`,
          opacity: 0.75,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "18%",
          right: "5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CONFIG.colors.primaryVioletGlow} 0%, rgba(8,8,14,0) 70%)`,
          filter: "blur(90px)",
          transform: `translate(${Math.cos(frame * 0.02) * 50}px, ${Math.sin(frame * 0.015) * 50}px)`,
          opacity: 0.65,
        }}
      />

      {/* Subtle Perspective Cyber Grid Floor */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 500,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          transform: "perspective(400px) rotateX(45deg)",
          transformOrigin: "bottom center",
        }}
      />

      {/* Floating Spark / Bokeh Particles */}
      {particles.map((p, idx) => {
        const yOffset = (frame * p.speed * 2 + p.seed) % 1920;
        const currentY = 1920 - yOffset;
        const xOffset = p.x + Math.sin((frame + p.seed) * 0.03) * 25;
        const opacity = interpolate(
          (frame + p.seed) % 90,
          [0, 45, 90],
          [0.2, 0.85, 0.2]
        );

        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: xOffset,
              top: currentY,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              opacity,
            }}
          />
        );
      })}

      {/* Vignette Overlay for cinematic darkness */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(4,4,8,0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

