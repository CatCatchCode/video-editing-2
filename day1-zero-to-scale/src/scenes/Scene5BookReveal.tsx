import React from "react";
import { useCurrentFrame, spring, interpolate } from "remotion";
import { CONFIG } from "../config";
import { ParticleBackground } from "../components/ParticleBackground";
import { SafeZoneContainer } from "../components/SafeZoneContainer";
import { HeaderPill } from "../components/HeaderPill";
import { Book3D } from "../components/Book3D";
import { Sparkles, Star } from "lucide-react";

export const Scene5BookReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const titleSpring = spring({
    frame,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 90 },
  });

  const subtitleSpring = spring({
    frame: frame - 30,
    fps: CONFIG.fps,
    config: { damping: 12, stiffness: 90 },
  });

  return (
    <div style={{ width: CONFIG.width, height: CONFIG.height, position: "relative" }}>
      <ParticleBackground accent="gold" />

      <SafeZoneContainer>
        {/* Top Header Tag */}
        <div style={{ opacity: titleSpring }}>
          <HeaderPill
            label="Day 01 · Official Book Launch"
            accent={CONFIG.colors.goldAccent}
            icon={<Sparkles size={22} color={CONFIG.colors.goldAccent} />}
          />
        </div>

        {/* Center 3D Book Model */}
        <div style={{ margin: "20px 0" }}>
          <Book3D scale={1.05} />
        </div>

        {/* Bottom Title & Subtitle Card */}
        <div
          style={{
            textAlign: "center",
            width: "100%",
            transform: `translateY(${interpolate(subtitleSpring, [0, 1], [30, 0])}px)`,
            opacity: subtitleSpring,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              color: CONFIG.colors.goldAccent,
              marginBottom: 10,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill={CONFIG.colors.goldAccent} color={CONFIG.colors.goldAccent} />
            ))}
            <span style={{ marginLeft: 8, fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>
              5.0 RATED PLAYBOOK
            </span>
          </div>

          <h3
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#FFFFFF",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            ZERO TO SCALE
          </h3>
          <p
            style={{
              fontSize: 20,
              lineHeight: 1.4,
              color: CONFIG.colors.textMuted,
              marginTop: 8,
              marginBottom: 0,
              padding: "0 20px",
            }}
          >
            The playbook for building profitable, high-margin, and enduring businesses.
          </p>
        </div>
      </SafeZoneContainer>
    </div>
  );
};
