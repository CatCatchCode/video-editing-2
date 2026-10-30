import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./compositions/MainVideo";
import { LinkedInLandscape } from "./compositions/LinkedInLandscape";
import { CONFIG } from "./config";
import { loadFont } from "@remotion/google-fonts/Inter";

// Load Inter font family
loadFont();

export const RemotionRoot: React.FC = () => {
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
      {/* 1. Primary Vertical 9:16 Video (Instagram Reels, YouTube Shorts, TikTok) */}
      <Composition
        id="Day1ZeroToScale"
        component={MainVideo}
        durationInFrames={totalFrames}
        fps={CONFIG.fps}
        width={CONFIG.width}
        height={CONFIG.height}
      />

      {/* 2. Primary Landscape 16:9 Video (LinkedIn Feed, YouTube Desktop, Twitter/X) */}
      <Composition
        id="Day1ZeroToScale-Landscape"
        component={LinkedInLandscape}
        durationInFrames={totalFrames}
        fps={CONFIG.fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
