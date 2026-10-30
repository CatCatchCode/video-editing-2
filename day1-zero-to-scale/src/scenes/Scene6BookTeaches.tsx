import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { Target, DollarSign, TrendingUp, ShieldCheck, BarChart3, BookOpen } from "lucide-react";

export const Scene6BookTeaches: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const pillars = [
    {
      title: "Idea Validation",
      desc: "Test market appetite before writing code",
      icon: <Target size={26} color={CONFIG.colors.cyanAccent} />,
      accent: CONFIG.colors.cyanAccent,
      delay: 15,
    },
    {
      title: "Unit Economics",
      desc: "Build positive margin from Day 1",
      icon: <DollarSign size={26} color={CONFIG.colors.goldAccent} />,
      accent: CONFIG.colors.goldAccent,
      delay: 35,
    },
    {
      title: "Cash Flow Discipline",
      desc: "Self-sustaining runway without vanity burn",
      icon: <TrendingUp size={26} color={CONFIG.colors.primaryViolet} />,
      accent: CONFIG.colors.primaryViolet,
      delay: 55,
    },
    {
      title: "Unfair Moats",
      desc: "Defensible competitive advantages that compound",
      icon: <ShieldCheck size={26} color="#00F5D4" />,
      accent: "#00F5D4",
      delay: 75,
    },
    {
      title: "Predictable Scaling",
      desc: "Systems, automation & leverage over chaotic hustle",
      icon: <BarChart3 size={26} color="#FFAA00" />,
      accent: "#FFAA00",
      delay: 95,
    },
  ];

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="gold" />

      <SafeZoneContainer>
        <HeaderPill
          label="Inside The Playbook"
          accent={CONFIG.colors.goldAccent}
          icon={<BookOpen size={22} color={CONFIG.colors.goldAccent} />}
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
              fontSize: 54,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            WHAT THE BOOK TEACHES
          </h2>
          <p
            style={{
              fontSize: 20,
              color: CONFIG.colors.textMuted,
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            5 tactical pillars for building an enduring enterprise
          </p>
        </div>

        {/* 5 Value Pillars */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
          {pillars.map((p, idx) => {
            const pillarSpring = spring({
              frame: frame - p.delay,
              fps: CONFIG.fps,
              config: { damping: 11, stiffness: 120 },
            });

            return (
              <div
                key={idx}
                style={{
                  transform: `translateX(${interpolate(pillarSpring, [0, 1], [-50, 0])}px)`,
                  opacity: pillarSpring,
                }}
              >
                <GlassCard
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    padding: "16px 22px",
                    borderLeft: `4px solid ${p.accent}`,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        color: CONFIG.colors.textMuted,
                        marginTop: 2,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div style={{ color: CONFIG.colors.goldAccent, fontSize: 19, fontWeight: 600 }}>
          <span>Practical, zero-fluff frameworks for builders</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
