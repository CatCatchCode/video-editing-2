import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { GlassCard } from "../components/GlassCard";
import { ShoppingBag, ExternalLink, ArrowRight, BookOpen } from "lucide-react";

export const Scene7CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 100 },
  });

  const buttonSpring = spring({
    frame: frame - 25,
    fps: CONFIG.fps,
    config: { damping: 10, stiffness: 120 },
  });

  const linkSpring = spring({
    frame: frame - 50,
    fps: CONFIG.fps,
    config: { damping: 11, stiffness: 110 },
  });

  // Pulse effect for CTA button
  const buttonPulse = 1 + Math.sin(frame * 0.12) * 0.03;

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="gold" />

      <SafeZoneContainer>
        <HeaderPill
          label="Get Your Copy Today"
          accent={CONFIG.colors.goldAccent}
          icon={<ShoppingBag size={22} color={CONFIG.colors.goldAccent} />}
        />

        {/* Center Call to Action Card */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            textAlign: "center",
          }}
        >
          {/* Main Hook Card */}
          <div
            style={{
              opacity: titleSpring,
              transform: `scale(${interpolate(titleSpring, [0, 1], [0.85, 1])})`,
              width: "100%",
            }}
          >
            <GlassCard
              highlight
              glowColor={CONFIG.colors.goldGlow}
              style={{
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 16px",
                  borderRadius: 20,
                  background: "rgba(255, 209, 102, 0.15)",
                  color: CONFIG.colors.goldAccent,
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                }}
              >
                <BookOpen size={18} />
                <span>OFFICIAL LAUNCH EDITION</span>
              </div>

              <h2
                style={{
                  fontSize: 60,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  margin: 0,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                READ ZERO TO SCALE
              </h2>

              <p
                style={{
                  fontSize: 22,
                  color: CONFIG.colors.textMuted,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                Instant digital download available worldwide
              </p>

              {/* Amazon Kindle Official Store Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 28px",
                  borderRadius: 50,
                  background: "#11111D",
                  border: "1.5px solid rgba(255, 209, 102, 0.4)",
                  marginTop: 8,
                }}
              >
                <span style={{ fontSize: 22, color: CONFIG.colors.goldAccent }}>★</span>
                <span
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  Amazon Kindle Store
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Direct Link Action Button */}
          <div
            style={{
              opacity: buttonSpring,
              transform: `scale(${buttonSpring * buttonPulse})`,
              width: "100%",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${CONFIG.colors.cyanAccent} 0%, #00C49F 100%)`,
                boxShadow: `0 12px 35px -5px ${CONFIG.colors.cyanGlow}`,
                borderRadius: 22,
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#08080E",
                  letterSpacing: "-0.01em",
                }}
              >
                Grab Your Copy Now
              </span>
              <ArrowRight size={32} color="#08080E" strokeWidth={3} />
            </div>
          </div>

          {/* Short Link Display Pill */}
          <div
            style={{
              opacity: linkSpring,
              transform: `translateY(${interpolate(linkSpring, [0, 1], [20, 0])}px)`,
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 24px",
              borderRadius: 30,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: CONFIG.colors.cyanAccent,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <ExternalLink size={22} />
            <span>{CONFIG.brand.bookLinkShort}</span>
          </div>
        </div>

        {/* Footer Prompt */}
        <div style={{ color: CONFIG.colors.textMuted, fontSize: 20 }}>
          <span>Tap link in bio or find link pinned in top comment</span>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
