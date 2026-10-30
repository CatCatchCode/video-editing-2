import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export const Scene8Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const cardSpring = spring({
    frame: frame - 25,
    fps: CONFIG.fps,
    config: { damping: 11, stiffness: 110 },
  });

  const barProgress = interpolate(frame, [15, 75], [3, 20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="cyan" />

      <SafeZoneContainer>
        <HeaderPill
          label="The Road Ahead"
          accent={CONFIG.colors.cyanAccent}
          icon={<Sparkles size={22} color={CONFIG.colors.cyanAccent} />}
        />

        {/* Central Outro Card */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            textAlign: "center",
          }}
        >
          {/* Main Title */}
          <div
            style={{
              opacity: titleSpring,
              transform: `scale(${interpolate(titleSpring, [0, 1], [0.85, 1])})`,
            }}
          >
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: CONFIG.colors.cyanAccent,
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Day 01 Complete
            </div>
            <h2
              style={{
                fontSize: 66,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              THIS IS JUST
              <br />
              THE BEGINNING.
            </h2>
          </div>

          {/* Outro Follow Card */}
          <div
            style={{
              opacity: cardSpring,
              transform: `translateY(${interpolate(cardSpring, [0, 1], [30, 0])}px)`,
              width: "100%",
            }}
          >
            <GlassCard
              highlight
              glowColor={CONFIG.colors.cyanGlow}
              style={{
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                }}
              >
                30 Days of Building, Creating & Sharing
              </div>

              {/* Progress Bar Component */}
              <div style={{ width: "100%", marginTop: 8 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 16,
                    fontWeight: 700,
                    color: CONFIG.colors.textMuted,
                    marginBottom: 8,
                  }}
                >
                  <span>{CONFIG.brand.journeyDay}</span>
                  <span style={{ color: CONFIG.colors.cyanAccent }}>1 OF 30 PRODUCTS</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 10,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${barProgress}%`,
                      height: "100%",
                      borderRadius: 10,
                      background: `linear-gradient(to right, ${CONFIG.colors.primaryViolet}, ${CONFIG.colors.cyanAccent})`,
                      boxShadow: `0 0 12px ${CONFIG.colors.cyanAccent}`,
                    }}
                  />
                </div>
              </div>

              {/* Follow Handle Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 28px",
                  borderRadius: 50,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: `1px solid ${CONFIG.colors.cyanAccent}`,
                  marginTop: 10,
                }}
              >
                <CheckCircle2 size={24} color={CONFIG.colors.cyanAccent} />
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "0.05em",
                  }}
                >
                  Follow @AbhijayShah
                </span>
                <ChevronRight size={22} color={CONFIG.colors.cyanAccent} />
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Footer Tagline */}
        <div style={{ color: CONFIG.colors.textMuted, fontSize: 20, textAlign: "center" }}>
          <span>See you tomorrow for Day 02 · Let's build something extraordinary</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
