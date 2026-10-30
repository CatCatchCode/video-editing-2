import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { Compass, ArrowRight, Flame } from "lucide-react";

export const Scene4Journey: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const steps = [
    { label: "EXPERIMENT", desc: "Build & test real ideas fast", delay: 20 },
    { label: "LEARN", desc: "Extract feedback & iterate code", delay: 50 },
    { label: "SCALE", desc: "Turn working systems into assets", delay: 80 },
  ];

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="violet" />

      <SafeZoneContainer>
        <HeaderPill
          label="The Philosophy"
          accent={CONFIG.colors.primaryViolet}
          icon={<Compass size={22} color={CONFIG.colors.primaryViolet} />}
        />

        {/* Section Title */}
        <div
          style={{
            textAlign: "center",
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: CONFIG.colors.cyanAccent,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            How Solutions Are Built
          </div>
          <h2
            style={{
              fontSize: 60,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            THE SOLO JOURNEY
          </h2>
          <p
            style={{
              fontSize: 22,
              color: CONFIG.colors.textMuted,
              marginTop: 12,
              marginBottom: 0,
              lineHeight: 1.4,
              padding: "0 20px",
            }}
          >
            Continuous experimentation. Independent engineering. Uncapped leverage.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {steps.map((s, idx) => {
            const stepSpring = spring({
              frame: frame - s.delay,
              fps: CONFIG.fps,
              config: { damping: 11, stiffness: 120 },
            });

            return (
              <div
                key={idx}
                style={{
                  transform: `translateX(${interpolate(stepSpring, [0, 1], [-60, 0])}px)`,
                  opacity: stepSpring,
                }}
              >
                <GlassCard
                  highlight={idx === 2}
                  glowColor={CONFIG.colors.cyanGlow}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 30px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background:
                          idx === 2
                            ? CONFIG.colors.cyanAccent
                            : "rgba(255,255,255,0.08)",
                        color: idx === 2 ? "#08080E" : "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        fontWeight: 900,
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 32,
                          fontWeight: 900,
                          color: idx === 2 ? CONFIG.colors.cyanAccent : "#FFFFFF",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          color: CONFIG.colors.textMuted,
                          marginTop: 4,
                        }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={26} color={idx === 2 ? CONFIG.colors.cyanAccent : CONFIG.colors.textMuted} />
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Bottom Metric */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 24px",
            borderRadius: 30,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: CONFIG.colors.textWhite,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          <Flame size={22} color="#FF6B6B" />
          <span>Turning pure code into scalable business assets</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
