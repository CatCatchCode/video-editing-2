import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./compositions/MainVideo";
import { CONFIG } from "./config";
import { loadFont } from "@remotion/google-fonts/Inter";

// Load Inter font family
loadFont();

export const RemotionRoot: React.FC = () => {
  // Total frames: 8 scenes sum (2100) minus 7 transition overlaps (7 * 15 = 105) = 1995 frames (~66.5 seconds)
  const d = CONFIG.durations;
  const totalFrames =
    d.scene1Hook +
    d.scene2Intro +
    d.scene3WhatIBuild +
    d.scene4Journey +
    d.scene5BookReveal +
    d.scene6BookTeaches +
    d.scene7CTA +
    d.scene8Outro -
    7 * d.transitionDuration;

  return (
    <>
      {/* Primary Vertical 9:16 Video (Instagram Reels / YouTube Shorts / TikTok) */}
      <Composition
        id="Day1ZeroToScale"
        component={MainVideo}
        durationInFrames={totalFrames}
        fps={CONFIG.fps}
        width={CONFIG.width}
        height={CONFIG.height}
      />
    </>
  );
};
