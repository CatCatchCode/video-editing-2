import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { Code, Cpu, BookOpen, User } from "lucide-react";

export const Scene2Intro: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const badge1Spring = spring({
    frame: frame - 25,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 110 },
  });

  const badge2Spring = spring({
    frame: frame - 45,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 110 },
  });

  const badge3Spring = spring({
    frame: frame - 65,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 110 },
  });

  const badges = [
    {
      label: "Software Engineer",
      sub: "Production Systems & Architecture",
      icon: <Code size={30} color={CONFIG.colors.cyanAccent} />,
      springVal: badge1Spring,
      accent: CONFIG.colors.cyanAccent,
    },
    {
      label: "Digital Product Creator",
      sub: "Solo Ventures & SaaS Tools",
      icon: <Cpu size={30} color={CONFIG.colors.primaryViolet} />,
      springVal: badge2Spring,
      accent: CONFIG.colors.primaryViolet,
    },
    {
      label: "Amazon KDP Author",
      sub: "Books on Business & Unit Economics",
      icon: <BookOpen size={30} color={CONFIG.colors.goldAccent} />,
      springVal: badge3Spring,
      accent: CONFIG.colors.goldAccent,
    },
  ];

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="violet" />

      <SafeZoneContainer>
        <HeaderPill
          label="Meet The Builder"
          accent={CONFIG.colors.primaryViolet}
          icon={<User size={22} color={CONFIG.colors.primaryViolet} />}
        />

        {/* Central Founder Card */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Main Name Intro */}
          <GlassCard
            highlight
            glowColor={CONFIG.colors.primaryVioletGlow}
            style={{
              textAlign: "center",
              transform: `scale(${interpolate(titleSpring, [0, 1], [0.85, 1])})`,
              opacity: titleSpring,
            }}
          >
            <div
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: CONFIG.colors.cyanAccent,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Hi, I'm
            </div>
            <h1
              style={{
                fontSize: 78,
                fontWeight: 900,
                margin: 0,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              {CONFIG.brand.name}
            </h1>
          </GlassCard>

          {/* 3 Staggered Role Badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {badges.map((b, idx) => (
              <div
                key={idx}
                style={{
                  transform: `translateX(${interpolate(b.springVal, [0, 1], [-80, 0])}px)`,
                  opacity: b.springVal,
                }}
              >
                <GlassCard
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 22,
                    padding: "20px 28px",
                    borderLeft: `4px solid ${b.accent}`,
                  }}
                >
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {b.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {b.label}
                    </div>
                    <div
                      style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: CONFIG.colors.textMuted,
                        marginTop: 4,
                      }}
                    >
                      {b.sub}
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div style={{ textAlign: "center", color: CONFIG.colors.textMuted, fontSize: 20 }}>
          <span>Pulling back the curtain on building digital leverage</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
