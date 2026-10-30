import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { Rocket, Zap } from "lucide-react";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();

  // Entrance springs for the 3 hook beats
  const spring1 = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 11, stiffness: 120 },
  });

  const spring2 = spring({
    frame: frame - 25,
    fps: CONFIG.fps,
    config: { damping: 11, stiffness: 120 },
  });

  const spring3 = spring({
    frame: frame - 55,
    fps: CONFIG.fps,
    config: { damping: 11, stiffness: 120 },
  });

  // Continuous subtle zoom
  const cameraZoom = interpolate(frame, [0, 150], [1, 1.08]);

  return (
    <div
      style={{
        width: CONFIG.width,
        height: CONFIG.height,
        position: "relative",
        transform: `scale(${cameraZoom})`,
      }}
    >
      <ParticleBackground accent="cyan" />

      <SafeZoneContainer>
        {/* Top Header Pill */}
        <div style={{ opacity: spring1 }}>
          <HeaderPill
            label="Day 01 · The Building Challenge"
            accent={CONFIG.colors.cyanAccent}
            icon={<Rocket size={22} color={CONFIG.colors.cyanAccent} />}
          />
        </div>

        {/* Center Massive Hook Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            textAlign: "center",
            width: "100%",
          }}
        >
          {/* Beat 1: 30 DAYS */}
          <div
            style={{
              transform: `scale(${interpolate(spring1, [0, 1], [0.6, 1])})`,
              opacity: spring1,
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 104,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                textShadow: `0 0 40px ${CONFIG.colors.cyanGlow}`,
                lineHeight: 1,
              }}
            >
              30 DAYS.
            </span>
          </div>

          {/* Beat 2: 10+ PRODUCTS */}
          <div
            style={{
              transform: `scale(${interpolate(spring2, [0, 1], [0.6, 1])})`,
              opacity: spring2,
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 94,
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background: `linear-gradient(135deg, ${CONFIG.colors.cyanAccent} 0%, ${CONFIG.colors.primaryViolet} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1,
              }}
            >
              10+ PRODUCTS.
            </span>
          </div>

          {/* Beat 3: ONE BUILDING JOURNEY */}
          <div
            style={{
              transform: `scale(${interpolate(spring3, [0, 1], [0.7, 1])})`,
              opacity: spring3,
              marginTop: 10,
            }}
          >
            <div
              style={{
                padding: "16px 36px",
                borderRadius: 20,
                background: "rgba(255, 255, 255, 0.08)",
                border: `1.5px solid ${CONFIG.colors.primaryViolet}`,
                boxShadow: `0 0 30px ${CONFIG.colors.primaryVioletGlow}`,
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 42,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                ONE BUILDING JOURNEY.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Teaser */}
        <div
          style={{
            opacity: spring3,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: CONFIG.colors.textMuted,
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <Zap size={22} color={CONFIG.colors.cyanAccent} />
          <span>Follow along as everything is built publicly</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};

