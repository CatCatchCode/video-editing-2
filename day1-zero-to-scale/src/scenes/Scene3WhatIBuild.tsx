import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { Terminal, Layers, Cpu, BookOpen, Layers3 } from "lucide-react";

export const Scene3WhatIBuild: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const items = [
    {
      title: "Real-World Software",
      desc: "Robust full-stack platforms, APIs & production backends",
      icon: <Terminal size={32} color={CONFIG.colors.cyanAccent} />,
      accent: CONFIG.colors.cyanAccent,
      delay: 20,
    },
    {
      title: "Business Systems",
      desc: "Management software & operational dashboards",
      icon: <Layers size={32} color={CONFIG.colors.primaryViolet} />,
      accent: CONFIG.colors.primaryViolet,
      delay: 45,
    },
    {
      title: "AI-Powered Automation",
      desc: "Autonomous agent workflows & smart data tooling",
      icon: <Cpu size={32} color="#00F5D4" />,
      accent: "#00F5D4",
      delay: 70,
    },
    {
      title: "Digital Products & Books",
      desc: "High-margin digital assets, playbooks & guides",
      icon: <BookOpen size={32} color={CONFIG.colors.goldAccent} />,
      accent: CONFIG.colors.goldAccent,
      delay: 95,
    },
  ];

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="cyan" />

      <SafeZoneContainer>
        <HeaderPill
          label="The Portfolio"
          accent={CONFIG.colors.cyanAccent}
          icon={<Layers3 size={22} color={CONFIG.colors.cyanAccent} />}
        />

        {/* Section Title */}
        <div
          style={{
            textAlign: "center",
            opacity: titleSpring,
            transform: `translateY(${interpolate(titleSpring, [0, 1], [-20, 0])}px)`,
          }}
        >
          <h2
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            WHAT I BUILD
          </h2>
          <p
            style={{
              fontSize: 22,
              color: CONFIG.colors.textMuted,
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            Engineering solutions that turn code into business leverage
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {items.map((item, idx) => {
            const itemSpring = spring({
              frame: frame - item.delay,
              fps: CONFIG.fps,
              config: { damping: 12, stiffness: 110 },
            });

            return (
              <div
                key={idx}
                style={{
                  transform: `scale(${interpolate(itemSpring, [0, 1], [0.88, 1])}) translateY(${interpolate(
                    itemSpring,
                    [0, 1],
                    [40, 0]
                  )}px)`,
                  opacity: itemSpring,
                }}
              >
                <GlassCard
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    padding: "20px 24px",
                    borderLeft: `5px solid ${item.accent}`,
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
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        color: CONFIG.colors.textMuted,
                        marginTop: 4,
                        lineHeight: 1.35,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Footer Pill */}
        <div style={{ color: CONFIG.colors.cyanAccent, fontSize: 20, fontWeight: 600 }}>
          <span>100% Solopreneur & Independent Engineering</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
