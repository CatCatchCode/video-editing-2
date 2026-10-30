export const CONFIG = {
  // Video Specifications
  fps: 30,
  width: 1080,
  height: 1920, // 9:16 vertical standard
  
  // Scene Durations in Frames (30 fps)
  durations: {
    scene1Hook: 150,        // 5.0s: "30 DAYS. 10+ PRODUCTS. ONE BUILDING JOURNEY."
    scene2Intro: 240,       // 8.0s: "Hi, I'm Abhijay Shah..."
    scene3WhatIBuild: 330,  // 11.0s: What I Build (4 categories)
    scene4Journey: 300,     // 10.0s: The Journey & Solo Building Mindset
    scene5BookReveal: 390,  // 13.0s: Day 1 Hero Reveal "Zero to Scale"
    scene6BookTeaches: 300, // 10.0s: 5 Value Pillars
    scene7CTA: 240,         // 8.0s: Amazon Kindle CTA & Link
    scene8Outro: 195,       // 6.5s: "This is just the beginning"
    transitionDuration: 15, // 0.5s overlap between scenes
  },

  // Color Palette
  colors: {
    bgDark: "#08080E",
    bgDarker: "#040408",
    primaryViolet: "#6C5CE7",
    primaryVioletGlow: "rgba(108, 92, 231, 0.4)",
    cyanAccent: "#00F5D4",
    cyanGlow: "rgba(0, 245, 212, 0.45)",
    goldAccent: "#FFD166",
    goldGlow: "rgba(255, 209, 102, 0.5)",
    textWhite: "#FFFFFF",
    textMuted: "#A0A0B8",
    cardBg: "rgba(255, 255, 255, 0.05)",
    cardBorder: "rgba(255, 255, 255, 0.12)",
    cardBorderHighlight: "rgba(0, 245, 212, 0.35)",
  },

  // Mobile Safe Areas for Instagram Reels / YouTube Shorts / TikTok
  safeArea: {
    top: 240,    // Clear top UI icons & search
    bottom: 340, // Clear captions, audio ticker, like/share buttons
    left: 60,
    right: 60,
  },

  // Personal Brand & Book Metadata
  brand: {
    name: "Abhijay Shah",
    tagline: "Software Engineer | Digital Product Creator | Amazon KDP Author",
    bookTitle: "ZERO TO SCALE",
    bookSubtitle: "The Real-World Playbook for Building Profitable, High-Margin, and Enduring Businesses",
    bookLinkShort: "lnkd.in/dvnPPcxu",
    bookLinkUrl: "https://lnkd.in/dvnPPcxu",
    amazonKindleBadge: "Available on Amazon Kindle",
    handle: "@AbhijayShah",
    journeyDay: "DAY 01 / 30",
  },
};

