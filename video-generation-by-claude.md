# How to Design Video Using Claude AI — Complete Guide
> *Synthesized from Claude, Gemini, Perplexity, and ChatGPT AI tool responses*

---

## The Core Truth: How Claude Actually "Designs" Videos

Across Claude, Gemini, and Perplexity, there is **100% agreement on one fundamental truth**:

> **Claude does not generate raw video pixels or output MP4 files by itself.**
> Instead, Claude functions as the **Creative Director, Lead Motion Designer, Scriptwriter, and Code Architect**.

The trending, agency-level Instagram Reels you see online are built using **Code-Driven Motion Graphics** and **Agent Orchestration**:

1. **The Code Route (Claude & Perplexity consensus):** Claude writes frame-accurate **React & TypeScript code using Remotion** (and FFmpeg). Remotion turns web code, CSS, and SVG/3D animations into rendered video frames.
2. **The Generative Route (Gemini consensus):** Claude orchestrates **Model Context Protocol (MCP)** tools and AI generative models (e.g., Kling, Sora, Veo, Flux) to generate B-roll, which is then stitched and styled with code.
3. **Why Antigravity IDE is the core hub:** Antigravity provides the workspace, terminal execution, file system access, and subagent orchestration necessary to write the code, spin up local previews, run FFmpeg/Remotion render commands, and call external tools autonomously.

---

## What Is Required Before You Begin

| Category | Requirements |
| :--- | :--- |
| **Environment** | **Antigravity IDE** (with Claude or Gemini models selected) |
| **Frameworks** | **Node.js** and a blank **Remotion** project (`npx create-video --yes --blank my-video`) |
| **Media Assets** | Put in `/public`: your raw video (or talking head), logo (`logo.png`), fonts (Inter, Poppins, Montserrat), and background music / SFX |
| **Design Brief** | Target audience, topic, 9:16 vertical ratio (1080×1920), brand hex codes, and Instagram UI safe zones (top 250px, bottom 340px clear) |

---

## Step-by-Step: How Creators Use Claude in Antigravity

### Step 1: Ideation & Hook Crafting
Claude drafts a scroll-stopping hook (the first 2–3 seconds), followed by a 4-part structure:
**Hook → Problem → Solution → Proof / Call-to-Action**

### Step 2: Beat Table & Storyboard *(Crucial Best Practice)*
Before writing any code or rendering, Claude generates a second-by-second beat table outlining timecodes, camera zooms, on-screen text, and audio cues.

### Step 3: Frame-Accurate Code Generation
Antigravity generates modular TypeScript components using Remotion. Every animation uses mathematical springs (`spring()`) and interpolation (`interpolate()`) rather than stiff CSS transitions.

### Step 4: Interactive Local Preview
Antigravity starts the local preview server (`npm run dev`). You preview the video live in your browser and check for text overlaps, face-covering captions, or pacing issues.

### Step 5: Surgical Revisions & Final Render
You provide natural-language feedback (*"make the hook 20% punchier"*, *"increase caption contrast"*). Antigravity modifies the code and renders the final video (`npx remotion render`) to `out/final.mp4`.

---

## The Three Tiers of Video Design

```
   ┌────────────────────────────────────────────────────────┐
   │ STANDARD: Scripting & Edit Planning (CapCut / Cut Plan)│
   └───────────────────────────┬────────────────────────────┘
                               │
   ┌───────────────────────────▼────────────────────────────┐
   │ PREMIUM: Code Motion Graphics (Remotion + Transitions)  │
   └───────────────────────────┬────────────────────────────┘
                               │
   ┌───────────────────────────▼────────────────────────────┐
   │ ADVANCED: Multi-Agent Pipeline (Three.js + AI B-Roll)  │
   └────────────────────────────────────────────────────────┘
```

---

### Method 1 — Standard Method: Assisted Scripting & Quick Cut
*Easiest, no code required*

**How it works:** Claude acts as your storyboard artist, copywriter, and editor's assistant.

**The Workflow:**
1. Ask Claude for a hook, script, and scene-by-scene shot list for a 30-second Reel.
2. Ask for on-screen text, caption timing, and music mood.
3. Ask for a CapCut/Premiere edit plan: cuts, zooms, transitions, and where to place each effect.
4. You paste your rough topic or transcript; Claude generates a scene-by-scene cut plan with exact timecodes, punch-in cues, on-screen text, and B-roll suggestions.
5. Record footage and edit by following the plan in CapCut, Premiere, or DaVinci Resolve.

**Best for:** Fast turnarounds, beginners, and talking-head videos. Quality depends on your own editing.

---

### Method 2 — Premium Method: Code-Based Motion Graphics in Remotion
*The trending "After Effects without After Effects" method*

**How it works:** Claude and Antigravity **build the entire video** directly inside a Remotion React project. This is the source of the popular motion-graphics trend on Instagram.

**The Workflow:**
1. Set up the project:
   ```bash
   npx create-video --yes --blank my-video
   cd my-video
   npm install
   npx remotion skills add
   npm run dev
   ```
2. Write a detailed creative brief (see the Master Prompt below).
3. Claude structures the video into reusable `<Scene>` TypeScript components.
4. Generates kinetic typography, spring reveals, animated progress bars, lower thirds, and audio ducking (music lowers when speech is active).
5. Synchronizes word-by-word animated captions (karaoke style) to audio.
6. Preview in browser; iterate with natural-language feedback: *"make the intro faster"*, *"bigger text"*, *"add glow"*.
7. Render with `npx remotion render`.

**Everything is parameterized:** Changing colors or text in a single `config.ts` file updates the whole video.

**Best for:** High-retention Instagram Reels, SaaS product demos, educational content, and branded agency videos. Output looks like paid After Effects motion graphics.

---

### Method 3 — Advanced Method: Multi-Agent Parallel Orchestration
*For creators who post daily and want a fully automated pipeline*

**How it works:** Full autonomous pipeline orchestrating 3D graphics, generative AI models, and audio synthesis in parallel. You act purely as the **Creative Director**.

**The Workflow:**

- **Subagent 1 — Script:** Claude writes it from your notes or a topic list.
- **Subagent 2 — Visual Assets:** Generates high-fidelity B-roll using image/video generation models (e.g., Flux, Kling 3.0, Veo 3.1, Sora 2 Pro). Claude automatically routes shots to the best model — product close-ups to Kling, cinematic sweeps to Veo.
- **Subagent 3 — 3D & Motion Graphics:** Three.js 3D scenes, particle systems, Lottie animations, shader backgrounds, and data-driven animated charts built inside Remotion.
- **Subagent 4 — Audio:** TTS voiceover via ElevenLabs, word-level timestamp extraction with Whisper for synced karaoke captions, noise reduction, and music ducking.
- **Batch Rendering:** A parameterized template script swaps a JSON config (title, colors, images) to render 10+ video variations automatically.
- **Automation:** Renders, exports, and schedules posts without manual intervention.

**Model Routing Strategy:**
- Veo 3.1 → cinematic sweeping shots
- Kling 3.0 / Sora 2 Pro → complex object motion and talking-head segments
- Flux / Nano Banana Pro → static product hero images

**Best for:** Daily automated content pipelines, high-end 3D motion graphics, and faceless viral channels.

**Reality Check:** For AI-generated backgrounds or extra visual shots, creators connect separate image/video-generation tools to Claude via MCP plugins. Claude then incorporates those assets into the Remotion edit.

---

## The Advanced Pipeline (Visual Summary)

```
Creative Brief
      │
      ▼
Claude Code (TypeScript + Remotion React)
      │
      ├──► Remotion Scenes (2D motion graphics, captions, transitions)
      │
      ├──► Three.js / Lottie (3D objects, particles, SVG animations)
      │
      └──► FFmpeg (final compression, audio mixing, H.264 MP4 export)
```

---

## Best Practices for Antigravity IDE

1. **Create a blank Remotion project first** and add all raw video, logo, fonts, music, and brand guide to `/public` before prompting.
2. **Always require a Beat Table before code.** Ask Claude for a second-by-second plan FIRST — this prevents wasted renders.
3. **Iterate in small steps.** *"Make the hook 20% faster"* works better than *"improve it"*.
4. **Give a reference style.** It's the biggest quality boost. Examples: Apple Keynote, Linear.app, MKBHD intro, Notion-style.
5. **Preview before rendering.** Always review the local preview and still frames before triggering the final `npx remotion render` command.
6. **Safe margins matter.** Keep all text and graphics inside Instagram's safe zones: top 250px and bottom 340px must stay clear of critical content.

---

## Short Revision Prompts (Use After Preview)

After the first preview, use prompts like:

- *"Make the first 2 seconds more aggressive: add a bold hook, faster text reveal, and a subtle zoom."*
- *"Reduce zoom frequency by 50% and make transitions smoother."*
- *"Make captions larger, add a black outline, and keep them in the lower-middle safe zone."*
- *"Add an animated red highlight behind the most important word in each caption."*
- *"Make the ending CTA stronger: show the logo, a short CTA line, and a subtle scale animation."*
- *"Render a 15-second preview first, then wait for my approval before full render."*

---

## Master Prompt for Antigravity IDE

> Copy and paste this directly into Antigravity IDE to generate a professional, After Effects-grade Instagram Reel.
> Replace everything in `[brackets]` with your own details.

```text
You are a senior motion designer, Remotion engineer, and viral Instagram Reels strategist.
Your goal is to build a high-retention, agency-grade 9:16 vertical video using Remotion and
React in this workspace.

ROLE
You are an elite AI Video Director and Motion Graphics Expert. Use your installed Remotion
skills and any connected MCP video generation plugins to produce a highly engaging,
professional Instagram Reel.

PROJECT BRIEF
- Topic: [INSERT TOPIC HERE, e.g., "3 AI Tools That Feel Illegal to Know"]
- Target Audience: [INSERT AUDIENCE, e.g., tech entrepreneurs, content creators]
- Tone: [bold / premium / techy / playful] — Style reference: [e.g., Apple Keynote, Linear.app, MKBHD intro]
- Output: 1080×1920 (9:16 vertical), 30 fps, H.264 MP4, duration: ~30–45 seconds

TECH SPEC
- TypeScript, one reusable <Scene> component per scene
- All timing via frames — use spring() and interpolate(), never CSS transitions
- Put all text, colors, and timings in a single config.ts file for easy editing
- Render to: out/final_reel.mp4

DESIGN SYSTEM & SAFE MARGINS
- Colors: Background #0A0A10 | Primary #6C5CE7 (neon indigo) | Accent #00F5D4 (cyan) | Text #FFFFFF
- Fonts: Bold modern sans-serif via @remotion/google-fonts (Inter or Montserrat)
- Mobile Safe Zones: Leave top 250px and bottom 340px clear of ALL critical content
- Text Constraints: Minimum 64px for headers; maximum 2 lines per screen at any time

NARRATIVE STRUCTURE
1. [0-3s]   HOOK        — High-contrast, punchy statement with kinetic spring reveal to stop scrolling
2. [3-12s]  PROBLEM     — 2–3 animated bullet points with staggered icon slide-ins
3. [12-25s] SOLUTION    — Core demonstration: animated UI cards, data charts, or product showcase
4. [25-30s] CTA         — Logo reveal, profile handle (@yourhandle), spring-animated follow prompt

MOTION GRAPHICS & AFTER EFFECTS-STYLE EFFECTS
- Text reveals: spring-based per-word and per-letter staggered animations
- Scene transitions: smooth slide, wipe, and zoom-through using @remotion/transitions
- Camera motion: subtle punch-in zooms on key beats, floating particle background, soft glow/blur
- Animated gradient background, masks, line-draw animations, number count-up counters
- Easing must feel premium — absolutely no linear motion
- Highlight: active word in captions dynamically scales and highlights in accent color (#00F5D4)
- Progress bar: thin animated indicator across the top or bottom of the screen

CAPTIONS
- Word-by-word animated captions synchronized to [voiceover.mp3 in /public]
- Active word highlighted in accent color; previous words dim to 40% opacity
- Caption text: 52–64px, bold, with a subtle dark shadow or outline for readability

AUDIO
- Background music (public/music.mp3) at 15% volume with smooth fade-in and fade-out
- Duck music to 8% volume whenever speech is present
- Subtle whoosh SFX on every scene transition (public/sfx/ folder)
- Voiceover on top at full volume with normalized levels

WORKFLOW INSTRUCTIONS
1. Do NOT write code or render immediately.
   First output:
   a) Your understanding of the video
   b) A proposed scroll-stopping hook line
   c) A scene-by-scene beat table with exact timecodes, visuals, on-screen text, animations, and audio cues
   d) A list of planned graphics, effects, and motion elements
   e) Any missing assets or clarifying questions
2. After I approve the beat table, build the Remotion project.
3. Run the preview server and self-check every scene boundary for text overflow, face-covering captions, and layout breaks.
4. Generate a contact sheet with one still frame per scene for my visual review.
5. Do NOT render the final MP4 until I explicitly approve the preview.
6. Render to out/final_reel.mp4 and tell me the exact command used.

QUALITY BAR
It should look like a paid agency motion-graphics video — not a template.
Professional, modern, and cinematic. Zero watermarks. Zero low-quality AI artifacts.
```

---

## Quick-Start Command Reference

```bash
# 1. Create a new Remotion project
npx create-video --yes --blank my-video

# 2. Navigate into the project
cd my-video

# 3. Install dependencies
npm install

# 4. Add Remotion Agent Skills (for Claude/Antigravity)
npx remotion skills add

# 5. Start local preview server
npm run dev

# 6. Render final video
npx remotion render

# 7. (Advanced) Render a specific composition
npx remotion render MyComposition out/final_reel.mp4
```

---

## Reality Check

Claude itself does not magically produce a finished cinematic video from nothing. The reliable professional setup is:

**Claude + Remotion (code-based rendering) + FFmpeg (audio/compression) + Your Creative Approval**

For AI-generated backgrounds, B-roll, or extra visual shots, creators connect separate image/video-generation tools (Kling, Veo, Flux) to Claude via MCP plugins inside Antigravity IDE. Claude then orchestrates and incorporates those assets into the final Remotion edit.

---

*Sources: claude-idea-to-design-video-editing.md · gemini-idea-to-design-video-editing.md · perplexity-idea-for-video-editing.md*

