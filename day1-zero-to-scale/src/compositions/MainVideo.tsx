import React from "react";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { CONFIG } from "../config";
import { Scene1Hook } from "../scenes/Scene1Hook";
import { Scene2Intro } from "../scenes/Scene2Intro";
import { Scene3WhatIBuild } from "../scenes/Scene3WhatIBuild";
import { Scene4Journey } from "../scenes/Scene4Journey";
import { Scene5BookReveal } from "../scenes/Scene5BookReveal";
import { Scene6BookTeaches } from "../scenes/Scene6BookTeaches";
import { Scene7CTA } from "../scenes/Scene7CTA";
import { Scene8Outro } from "../scenes/Scene8Outro";

export const MainVideo: React.FC = () => {
  const d = CONFIG.durations;
  const t = d.transitionDuration;

  return (
    <TransitionSeries>
      {/* SCENE 1: The Hook (0 - 5.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene1Hook}>
        <Scene1Hook />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 2: Personal Intro (5.0s - 13.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene2Intro}>
        <Scene2Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 3: What I Build (13.0s - 24.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene3WhatIBuild}>
        <Scene3WhatIBuild />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 4: The Journey & Mindset (24.0s - 34.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene4Journey}>
        <Scene4Journey />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-top-left" })}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 5: Day 1 Hero Book Reveal - "Zero to Scale" (34.0s - 47.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene5BookReveal}>
        <Scene5BookReveal />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 6: Inside the Playbook (47.0s - 57.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene6BookTeaches}>
        <Scene6BookTeaches />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 7: Call to Action (57.0s - 65.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene7CTA}>
        <Scene7CTA />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: t })}
      />

      {/* SCENE 8: Closing Brand Outro (65.0s - 70.0s) */}
      <TransitionSeries.Sequence durationInFrames={d.scene8Outro}>
        <Scene8Outro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
