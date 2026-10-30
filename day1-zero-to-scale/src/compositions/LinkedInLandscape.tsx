import React from "react";
import { useCurrentFrame } from "remotion";
import { MainVideo } from "./MainVideo";
import { CONFIG } from "../config";
import {
  Rocket,
  BookOpen,
  ShoppingBag,
  CheckCircle2,
  ExternalLink,
  Star,
  Terminal,
} from "lucide-react";

export const LinkedInLandscape: React.FC = () => {
  const frame = useCurrentFrame();

  // Determine current active scene based on frame timecodes
  const d = CONFIG.durations;
  const t = d.transitionDuration;

  const t1 = d.scene1Hook - t;
  const t2 = t1 + d.scene2Intro - t;
  const t3 = t2 + d.scene3WhatIBuild - t;
  const t4 = t3 + d.scene4Journey - t;
  const t5 = t4 + d.scene5BookReveal - t;
  const t6 = t5 + d.scene6BookTeaches - t;
  const t7 = t6 + d.scene7CTA - t;

  let currentSceneIdx = 1;
  if (frame >= t7) currentSceneIdx = 8;
  else if (frame >= t6) currentSceneIdx = 7;
  else if (frame >= t5) currentSceneIdx = 6;
  else if (frame >= t4) currentSceneIdx = 5;
  else if (frame >= t3) currentSceneIdx = 4;
  else if (frame >= t2) currentSceneIdx = 3;
  else if (frame >= t1) currentSceneIdx = 2;



  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        backgroundColor: CONFIG.colors.bgDark,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px 80px",
        boxSizing: "border-box",
        overflow: "hidden",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "20%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CONFIG.colors.cyanGlow} 0%, transparent 70%)`,
          filter: "blur(120px)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CONFIG.colors.primaryVioletGlow} 0%, transparent 70%)`,
          filter: "blur(140px)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      {/* LEFT COLUMN: 9:16 Vertical Video in Titanium Phone Bezel */}
      <div
        style={{
          width: 530,
          height: 942,
          position: "relative",
          borderRadius: 44,
          border: "4px solid rgba(255, 255, 255, 0.18)",
          boxShadow: `
            0 30px 80px -10px rgba(0, 0, 0, 0.9),
            0 0 40px ${CONFIG.colors.cyanGlow}
          `,
          overflow: "hidden",
          backgroundColor: "#000000",
          flexShrink: 0,
        }}
      >
        {/* Dynamic Island Speaker Notch */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 24,
            borderRadius: 16,
            background: "#0A0A10",
            zIndex: 100,
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        />

        {/* Scaled 9:16 Remotion Composition (0.4907x scale of 1080x1920) */}
        <div
          style={{
            width: 1080,
            height: 1920,
            transform: "scale(0.4907)",
            transformOrigin: "top left",
          }}
        >
          <MainVideo />
        </div>
      </div>

      {/* RIGHT COLUMN: Executive Presentation Slide Deck (16:9 Landscape Expansion) */}
      <div
        style={{
          width: 1160,
          height: 942,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 50px",
          borderRadius: 36,
          background: "rgba(255, 255, 255, 0.04)",
          backdropFilter: "blur(30px)",
          border: "1.5px solid rgba(255, 255, 255, 0.12)",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* TOP STATUS HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                padding: "8px 20px",
                borderRadius: 50,
                background: "rgba(0, 245, 212, 0.12)",
                border: "1px solid rgba(0, 245, 212, 0.4)",
                color: CONFIG.colors.cyanAccent,
                fontSize: 16,
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              DAY 01 OF 30
            </div>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF" }}>
              The Building, Creating & Sharing Challenge
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, color: CONFIG.colors.textMuted, fontSize: 18 }}>
            <span>By</span>
            <span style={{ color: "#FFFFFF", fontWeight: 700 }}>Abhijay Shah</span>
          </div>
        </div>

        {/* DYNAMIC CENTER DISPLAY BASED ON SCENE */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {currentSceneIdx <= 2 && (
            <div>
              <div style={{ color: CONFIG.colors.cyanAccent, fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
                [ EXECUTIVE PROFILE & INITIATIVE ]
              </div>
              <h1 style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
                30 Days. 10+ Products.
                <br />
                <span style={{ color: CONFIG.colors.cyanAccent }}>One Solo Building Journey.</span>
              </h1>
              <p style={{ fontSize: 24, color: CONFIG.colors.textMuted, marginTop: 18, lineHeight: 1.5 }}>
                Follow software engineer and digital creator Abhijay Shah as every architectural design,
                MVP launch, revenue experiment, and automation workflow is built in public.
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 28 }}>
                <div style={{ padding: "14px 24px", borderRadius: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                  <Terminal size={24} color={CONFIG.colors.cyanAccent} />
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>Software Architecture</span>
                </div>
                <div style={{ padding: "14px 24px", borderRadius: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                  <Rocket size={24} color={CONFIG.colors.primaryViolet} />
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>AI Automation Tools</span>
                </div>
                <div style={{ padding: "14px 24px", borderRadius: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", gap: 12 }}>
                  <BookOpen size={24} color={CONFIG.colors.goldAccent} />
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>Kindle Publishing</span>
                </div>
              </div>
            </div>
          )}

          {currentSceneIdx >= 3 && currentSceneIdx <= 4 && (
            <div>
              <div style={{ color: CONFIG.colors.primaryViolet, fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
                [ ENGINEERING PRINCIPLES ]
              </div>
              <h1 style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
                Turning Clean Code Into
                <br />
                <span style={{ color: CONFIG.colors.primaryViolet }}>Scalable Business Assets</span>
              </h1>
              <p style={{ fontSize: 24, color: CONFIG.colors.textMuted, marginTop: 18, lineHeight: 1.5 }}>
                Modern technology enables a solo engineer to operate with the leverage of an entire team.
                Through rapid feedback loops and automation, production software becomes compounding enterprise equity.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 28 }}>
                <div style={{ padding: "18px 24px", borderRadius: 16, background: "rgba(255,255,255,0.06)", borderLeft: `4px solid ${CONFIG.colors.cyanAccent}` }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>High-Margin Unit Economics</div>
                  <div style={{ fontSize: 16, color: CONFIG.colors.textMuted, marginTop: 4 }}>Zero marginal cost of reproduction for digital tools</div>
                </div>
                <div style={{ padding: "18px 24px", borderRadius: 16, background: "rgba(255,255,255,0.06)", borderLeft: `4px solid ${CONFIG.colors.goldAccent}` }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF" }}>Autonomous Systems</div>
                  <div style={{ fontSize: 16, color: CONFIG.colors.textMuted, marginTop: 4 }}>Self-sustaining operations powered by modern AI agents</div>
                </div>
              </div>
            </div>
          )}

          {currentSceneIdx >= 5 && currentSceneIdx <= 6 && (
            <div>
              <div style={{ color: CONFIG.colors.goldAccent, fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
                [ DAY 01 SPOTLIGHT PLAYBOOK ]
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill={CONFIG.colors.goldAccent} color={CONFIG.colors.goldAccent} />
                ))}
                <span style={{ color: CONFIG.colors.goldAccent, fontWeight: 700, fontSize: 18, marginLeft: 8 }}>
                  5.0 RATED ON AMAZON KINDLE
                </span>
              </div>
              <h1 style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
                ZERO TO SCALE
              </h1>
              <p style={{ fontSize: 22, color: CONFIG.colors.textMuted, marginTop: 12, lineHeight: 1.45 }}>
                The Real-World Playbook for Building Profitable, High-Margin, and Enduring Businesses.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 22 }}>
                <div style={{ padding: "14px 20px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontWeight: 800, color: "#FFFFFF" }}>1. Idea Validation:</span>
                  <span style={{ color: CONFIG.colors.textMuted, marginLeft: 6 }}>Filter demand before building</span>
                </div>
                <div style={{ padding: "14px 20px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontWeight: 800, color: "#FFFFFF" }}>2. Unit Economics:</span>
                  <span style={{ color: CONFIG.colors.textMuted, marginLeft: 6 }}>Engineering gross margin excellence</span>
                </div>
                <div style={{ padding: "14px 20px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontWeight: 800, color: "#FFFFFF" }}>3. Cash Flow:</span>
                  <span style={{ color: CONFIG.colors.textMuted, marginLeft: 6 }}>Disciplined working capital allocation</span>
                </div>
                <div style={{ padding: "14px 20px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span style={{ fontWeight: 800, color: "#FFFFFF" }}>4. Unfair Moats:</span>
                  <span style={{ color: CONFIG.colors.textMuted, marginLeft: 6 }}>Defensibility in an AI-saturated market</span>
                </div>
              </div>
            </div>
          )}

          {currentSceneIdx >= 7 && (
            <div>
              <div style={{ color: CONFIG.colors.cyanAccent, fontSize: 20, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
                [ TAKE ACTION TODAY ]
              </div>
              <h1 style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1.1 }}>
                Start Reading
                <br />
                <span style={{ color: CONFIG.colors.goldAccent }}>Zero to Scale</span> on Kindle
              </h1>
              <p style={{ fontSize: 24, color: CONFIG.colors.textMuted, marginTop: 18, lineHeight: 1.5 }}>
                Available worldwide on Amazon Kindle. Get instant digital delivery and begin building your playbook today.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 32 }}>
                <div
                  style={{
                    padding: "20px 36px",
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${CONFIG.colors.cyanAccent} 0%, #00C49F 100%)`,
                    color: "#08080E",
                    fontSize: 24,
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    boxShadow: `0 10px 30px ${CONFIG.colors.cyanGlow}`,
                  }}
                >
                  <ShoppingBag size={28} />
                  <span>Available on Amazon Kindle</span>
                </div>

                <div
                  style={{
                    padding: "18px 28px",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.08)",
                    border: "1.5px solid rgba(255,255,255,0.15)",
                    color: CONFIG.colors.cyanAccent,
                    fontSize: 22,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <ExternalLink size={24} />
                  <span>lnkd.in/dvnPPcxu</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METRIC TRACKER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, color: CONFIG.colors.textMuted, fontSize: 18 }}>
            <CheckCircle2 size={22} color={CONFIG.colors.cyanAccent} />
            <span>Follow along for 30 daily builds, source code releases, and system breakdowns.</span>
          </div>

          <div
            style={{
              padding: "10px 22px",
              borderRadius: 30,
              background: "rgba(255,255,255,0.08)",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "0.08em",
            }}
          >
            CONNECT ON LINKEDIN
          </div>
        </div>
      </div>
    </div>
  );
};
