import React from "react";
import { useCurrentFrame, interpolate, spring } from "remotion";
import { CONFIG } from "../config";

interface Book3DProps {
  scale?: number;
}

export const Book3D: React.FC<Book3DProps> = ({ scale = 1 }) => {
  const frame = useCurrentFrame();

  // Entrance spring rotation
  const enterSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: {
      damping: 14,
      stiffness: 90,
      mass: 0.8,
    },
  });

  // Perspective rotation: starts rotated, tilts elegantly forward towards viewer
  const rotateY = interpolate(enterSpring, [0, 1], [-26, -10]);
  const rotateX = interpolate(enterSpring, [0, 1], [14, 5]);
  const translateY = interpolate(enterSpring, [0, 1], [80, 0]);
  const currentScale = enterSpring * scale;

  // Specular sheen sweep animation across the cover
  const sheenPos = interpolate(frame, [25, 95], [-120, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1400px",
        transform: `translateY(${translateY}px) scale(${currentScale})`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Book Container */}
      <div
        style={{
          width: 480,
          height: 680,
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          boxShadow: `
            25px 35px 70px rgba(0, 0, 0, 0.85),
            0 0 50px ${CONFIG.colors.goldGlow}
          `,
          borderRadius: "8px 24px 24px 8px",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* FRONT COVER */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "8px 24px 24px 8px",
            background:
              "linear-gradient(145deg, #12121E 0%, #080811 50%, #17152A 100%)",
            border: "2px solid rgba(255, 209, 102, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 36px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Shimmer Light Flare traveling over cover */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "120px",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.22), transparent)",
              transform: `skewX(-25deg) translateX(${sheenPos}%)`,
              pointerEvents: "none",
            }}
          />

          {/* Top Tag & Author */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 18px",
                borderRadius: 20,
                background: "rgba(255, 209, 102, 0.12)",
                border: "1px solid rgba(255, 209, 102, 0.35)",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: CONFIG.colors.goldAccent,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              ★ OFFICIAL PLAYBOOK ★
            </div>
            <div
              style={{
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              ABHIJAY SHAH
            </div>
          </div>

          {/* Center Title Lockup */}
          <div style={{ textAlign: "center", margin: "24px 0" }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.28em",
                color: CONFIG.colors.cyanAccent,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              FROM
            </div>
            <h1
              style={{
                fontSize: 64,
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                background: `linear-gradient(135deg, #FFFFFF 0%, ${CONFIG.colors.goldAccent} 60%, #FFAA00 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: `0 4px 30px ${CONFIG.colors.goldGlow}`,
              }}
            >
              ZERO
              <br />
              TO SCALE
            </h1>
            <div
              style={{
                width: 70,
                height: 3,
                backgroundColor: CONFIG.colors.goldAccent,
                margin: "18px auto",
                borderRadius: 2,
              }}
            />
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.45,
                color: "#D0D0E0",
                margin: 0,
                padding: "0 10px",
                fontWeight: 400,
              }}
            >
              The Real-World Playbook for Building Profitable, High-Margin, and Enduring Businesses.
            </p>
          </div>

          {/* Bottom Badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 16,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: 3, color: CONFIG.colors.goldAccent, fontSize: 16 }}>
              ★★★★★
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: CONFIG.colors.cyanAccent,
                textTransform: "uppercase",
              }}
            >
              AMAZON KINDLE
            </div>
          </div>
        </div>

        {/* BOOK SPINE (Left Side Depth) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 38,
            borderRadius: "8px 0 0 8px",
            background: "linear-gradient(to right, #0A0A14, #1B1832)",
            transform: "rotateY(-90deg) translateX(-38px)",
            transformOrigin: "left center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset -2px 0 5px rgba(0,0,0,0.8)",
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              color: CONFIG.colors.goldAccent,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            ZERO TO SCALE · ABHIJAY SHAH
          </span>
        </div>
      </div>
    </div>
  );
};

