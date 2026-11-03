# Developer Hero Redesign & WhatsApp Direct Integration

Redesign the landing page into a high-impact, split-screen developer hero featuring a bold role introduction, an interactive command-line terminal showcase, and a live 3D wireframe scene, while wiring the primary **Let's Talk** navigation action directly to WhatsApp with a pre-filled greeting message.

## User Review & Critical Decisions

> [!IMPORTANT]
> Please review the confirmed design choices below. Once you click **Proceed**, we will implement the new home page and WhatsApp integration immediately. If you would like a specific phone number wired into the WhatsApp link right away, feel free to reply with your number or approve the plan and share it anytime.

- **Confirmed Decision — Hero Layout Direction**: Replace the portrait cutout composition with a **Bold Developer Hero** featuring a strong developer headline and role introduction on the left, paired with the **Interactive Terminal** and **3D Wireframe Scene** on the right.
- **Confirmed Decision — Eliminating Cutout Artifacts**: Remove the extracted portrait cutout and floating side cards from the landing page so the dark-and-violet canvas feels 100% native, cohesive, and distraction-free.
- **Confirmed Decision — WhatsApp CTA Behavior**: The **Let's Talk** button in the top navigation bar (and mobile menu) will open WhatsApp (`https://wa.me/<number>?text=...`) in a new tab with a pre-filled greeting message (`"Hi Abubacker! I came across your portfolio and would love to connect."`).
- **WhatsApp Number Configuration**: Centralize your WhatsApp number in the profile configuration so it powers both the header **Let's Talk** button and a quick-chat action in the Contact section.

---

## 1. Overview & Core Concept

- **What It Does**: Establishes an immediate, unmistakable identity for **Abubacker (`Abu.`)** as a Full-Stack Developer, React Engineer, and emerging AI Engineer the moment a visitor lands on the page.
- **Target Audience / Persona**: Tech recruiters, engineering hiring managers, founders, and freelance clients evaluating technical craftsmanship, shipped production work, and responsiveness.
- **Key Value**: Replaces a static image cutout with a living, interactive proof of engineering skill (live 3D WebGL geometry + interactive zsh terminal + instant WhatsApp outreach).

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **First Impression (Above the Fold)**: Visitors land on a stark `#050505` void canvas illuminated by subtle violet radial depth and floating 3D wireframe polyhedra. The left column delivers a crisp typographic introduction, role cycling/positioning, and primary CTAs (**Explore Work** and **Download Resume**), while the right column runs an interactive terminal session (`abubacker@portfolio — zsh`) that types out live commands (`whoami`, `cat role.json`, `ls skills/`, `git log`) and also supports interactive user commands (`help`, `projects`, `skills`, `contact`, `clear`).
  2. **Full-Width Proof & Tech Strip**: Directly beneath the 2-column hero split sits a clean, full-width horizontal proof bar displaying core stack capabilities and real shipping metrics with tabular numerals (`tabular-nums`) and unboxed typographic separators (`·`).
  3. **Instant WhatsApp Outreach (`Let's Talk`)**: Clicking **Let's Talk** in the top navigation bar (or mobile menu drawer) launches `https://wa.me/` in a new tab with a pre-encoded greeting message ready to send.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: High-craft dark developer monograph combining architectural typography, tactile terminal UI, and spatial 3D WebGL depth.
  - *Color Palette & Mood (60-30-10 Budget)*:
    - **60% Dominant Canvas**: Deep obsidian void (`--color-void: #050505`) for zero-glare contrast.
    - **30% Structural Surfaces**: Obsidian slate containers (`--color-surface: #0b0b10`, `--color-surface-2: #131318`) with subtle hairline outlines (`--color-line: #1f1f28`) and muted mist prose (`--color-mist: #9d9db0`).
    - **10% Focal Accent**: High-intent electric violet (`--color-violet-600: #7c3aed`, `--color-violet-500: #a855f7`, `--color-violet-400: #c084fc`) reserved for primary CTAs, active navigation states, terminal prompt chevrons, and 3D wireframe emissive lighting.
  - *Typography & Hierarchy*:
    - **Display Headlines**: Bold geometric display type (`clamp(2.5rem, 4.8vw, 4.25rem)`), `tracking-tight`, `text-wrap: balance`, with a violet gradient highlight on the core engineering role.
    - **Body Copy**: Clean sans-serif prose (`15px–16px`, `leading-relaxed`, constrained to `60ch` measure).
    - **Monospace Telemetry & Terminal**: `JetBrains Mono` with `tabular-nums` for terminal output, command prompts, and numerical counters.
  - *Component Styling & Layout*:
    - **Desktop Baseline (1440px)**: 12-column split hero container (`max-w-6xl`, `items-center`) with generous outer padding and balanced 2-column visual weight, followed by a full-width marquee/proof ribbon below the split.
    - **Top Bar Contract**: 3-zone header (`Abu.` brand wordmark — 5 single-line section links — `Let's Talk ↗` WhatsApp CTA) with zero white border flash on scroll.

- **Interactive Feedback & Motion**:
  - **Compositor-Only Transitions**: Smooth entrance reveals (`transform`, `opacity`) settling with `cubic-bezier(0.16, 1, 0.3, 1)` curves.
  - **Interactive Terminal Commands**: Once the automated intro script finishes (or at any time), visitors can click quick-command chips or type commands (`projects`, `skills`, `whatsapp`, `clear`) directly inside the terminal window.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Split-Screen Developer Hero with Interactive Terminal + 3D WebGL Scene**
  - *Chosen Approach*: Pair an authoritative typographic left column with an upgraded interactive terminal and lazily mounted 3D wireframe background scene on the right.
  - *Why*: Directly addresses both pain points with the previous layout—eliminating the unnatural portrait cutout on the dark background while restoring a strong developer headline, clear role identity, and interactive engineering polish.
  - *Alternatives Considered*: Keeping the portrait cutout with heavier dark vignettes was passed over because light studio cards and hair edges still contrast unnaturally against `#050505`.

- **Decision 2: Direct `wa.me` Deep Link with Pre-Filled URL-Encoded Message**
  - *Chosen Approach*: Use a structured helper that builds `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}` and opens it safely with `target="_blank" rel="noopener noreferrer"`.
  - *Why*: Works universally across mobile (opens the native WhatsApp app directly) and desktop (opens WhatsApp Web / Desktop app) with zero third-party SDK overhead or popup blockers.
  - *Alternatives Considered*: `whatsapp://send` custom protocol URI was passed over because desktop browsers without the native app installed fail to resolve it, whereas `https://wa.me/` gracefully handles both web and native apps.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        Central Profile Configuration                     │
│  • Identity & Role Copy    • WhatsApp Number & Pre-filled Greeting      │
│  • Social & Resume URLs    • Interactive Terminal Command Definitions   │
└───────────────────┬─────────────────────────────────┬───────────────────┘
                    │                                 │
                    ▼                                 ▼
┌───────────────────────────────────────┐ ┌───────────────────────────────┐
│           Top Navigation Bar          │ │      Redesigned Hero View     │
│  ┌─────────┐ ┌───────────┐ ┌────────┐ │ │  ┌─────────────────────────┐  │
│  │  Abu.   │ │ Nav Links │ │Let's   │ │ │  │ 3D Wireframe Canvas     │  │
│  │  Brand  │ │ ScrollSpy │ │Talk ↗  │ │ │  │ (Floating Polyhedra)    │  │
│  └─────────┘ └───────────┘ └───┬────┘ │ │  └─────────────────────────┘  │
└────────────────────────────────┼──────┘ │  ┌────────────┬────────────┐  │
                                 │        │  │ Left Col:  │ Right Col: │  │
                                 │        │  │ Developer  │ Interactive│  │
                                 │        │  │ Headline,  │ Terminal   │  │
                                 │        │  │ Bio & CTAs │ Window     │  │
                                 │        │  └────────────┴────────────┘  │
                                 │        │  ┌─────────────────────────┐  │
                                 │        │  │ Full-Width Tech & Proof │  │
                                 │        │  │ Marquee Strip           │  │
                                 │        │  └─────────────────────────┘  │
                                 │        └───────────────┬───────────────┘
                                 │                        │
                                 ▼                        ▼
┌─────────────────────────────────────────────────────────────────────────┐
│             External WhatsApp Deep-Link Handler (wa.me)                 │
│     Opens WhatsApp Web / Mobile App with URL-Encoded Greeting Text      │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - **Profile Config**: Stores `brand` (`"Abu."`), `role`, `whatsappNumber`, `whatsappMessage`, and helper `getWhatsAppUrl()` so any CTA across the app uses the exact same formatted deep link.
  - **Terminal State**: Manages `lines` history, `typingLine` auto-typer buffer, `userInput` interactive prompt state, and quick-command execution (`help`, `projects`, `skills`, `contact`, `clear`).

- **Interactive Component & State Mapping**:
  - **Navbar `Let's Talk` CTA**: Renders as an external anchor (`<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">`) in both the desktop top bar and mobile drawer so clicks open WhatsApp immediately without triggering iframe navigation errors.
  - **Hero Primary CTAs**:
    - `View Projects` smoothly scrolls to `#projects` and syncs the navbar active state.
    - `Download Resume` triggers `/resume.pdf` download.
  - **Interactive Terminal Window**: Auto-types the developer introduction script when scrolled into view, then unlocks an interactive input prompt and clickable command shortcuts so visitors can explore skills, projects, or launch WhatsApp directly from the terminal.
