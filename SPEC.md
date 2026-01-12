# alvindang.com - Portfolio Website Specification

**Last Updated**: January 2025
**Status**: MVP Shipped, Iterating

---

## Executive Summary

Personal brand website for Alvin Dang, a Growth/Product/Lifecycle Marketing professional. The site establishes thought leadership, showcases work history, and creates a memorable professional presence. Aesthetic direction: "quiet luxury" - understated, premium, intentional restraint with personality.

---

## 1. Strategic Context

### 1.1 Core Purpose
- **Primary**: Establish personal brand and professional presence
- **Secondary**: Thought leadership platform for Growth/Product/Lifecycle Marketing
- **Tertiary**: Learning web development (HTML/CSS/JS fundamentals)

### 1.2 Target Audience
- General professional audience (not specifically hiring managers or collaborators)
- Goal: Visitors remember the name after leaving

### 1.3 Success Metric
A visitor should feel **memorable distinction** within 3 seconds of landing - the site should stand out among dozens of portfolios through visual identity and personal story.

### 1.4 Competitive Positioning
- Peer group: Independent Substack growth writers
- Content approach: Commentary on industry trends + reusable frameworks/playbooks
- Open to portfolio + newsletter split (e.g., Substack for content, site for presence)

---

## 2. Current State (MVP)

### 2.1 Technical Foundation
- **Hosting**: GitHub Pages
- **Stack**: HTML/CSS (learning JavaScript)
- **Design Origin**: Adapted from existing template/design

### 2.2 Existing Sections
1. Homepage
2. About/Bio
3. Projects/Work Showcase
4. Blog/Writing
5. Contact

### 2.3 What's Working
- Overall page structure and organization
- Site is live and functional on desktop

### 2.4 Known Issues

| Category | Issue | Severity |
|----------|-------|----------|
| Responsive | Navigation breaks on small mobile (< 375px) | High |
| Responsive | Text/spacing doesn't scale properly on mobile | High |
| Responsive | Fixed header takes too much vertical space on mobile | High |
| Animation | Inconsistent approaches (CSS, various methods mixed) | Medium |
| Animation | Visual inconsistency across the site | Medium |
| Animation | Code quality concerns (messy implementation) | Medium |
| Animation | Performance/bundle size unknown | Low |
| Design | Colors feel borrowed, not "mine" | High |
| Design | Typography feels borrowed, not "mine" | High |
| Design | Overall vibe doesn't feel authentic | High |
| Design | No formal design system (ad-hoc styling) | Medium |
| Content | Personal story barely present | High |
| Content | Projects section scope unclear (work history vs. case studies) | Medium |

---

## 3. Aesthetic Direction

### 3.1 Visual Philosophy: "Quiet Luxury"

Inspired by fashion brands:
- The Row
- Lemaire
- Issey Miyake
- Bottega Veneta

**Translation to web**:
- Muted, sophisticated color palette
- Generous whitespace and negative space
- Elegant, premium typography
- Intentional restraint - every element earns its place
- Quality over flash

### 3.2 Key Nuance
**Timeless but with personality** - not cold or sterile. The site should feel human, have character, while maintaining understated elegance.

### 3.3 Desired Aesthetic Attributes
- Minimal & clean
- Whitespace, simplicity, restraint
- Muted tones (likely monochrome with subtle accents)
- Premium feel without being flashy

### 3.4 Typography
- Direction: Undecided, open to recommendations
- Consideration: Mix of serif (editorial, timeless) and sans-serif (modern, clean) could bridge the "timeless with personality" goal

---

## 4. Content Strategy

### 4.1 Homepage
**Priority**: Highest - this is where memorable distinction must land

Must communicate:
- Who Alvin is
- Professional domain (Growth/Product/Lifecycle Marketing)
- Enough personality to be memorable

### 4.2 About/Bio
**Purpose**: Personal story that resonates

Current state: Barely there
Blocker: Uncertainty about what's interesting or worth sharing

**Need**: Define what aspects of the journey/perspective are unique and compelling

### 4.3 Projects/Work Showcase
**Format**: Hybrid - Timeline with expandable details

Content types:
- Work history (companies and roles)
- Scope needs definition (case studies? metrics? specific campaigns?)

**Open question**: How deep to go - career timeline vs. detailed impact stories?

### 4.4 Blog/Writing
**Purpose**: Thought leadership in Growth/Product/Lifecycle Marketing

Content types:
1. Commentary - opinions on industry trends
2. Frameworks - reusable playbooks and mental models

**Consideration**: May split content between site (evergreen, portfolio pieces) and external platform (Substack for regular content/newsletter)

### 4.5 Contact
**Approach**: Multiple contact options (email, LinkedIn, form, etc.)

---

## 5. Technical Requirements

### 5.1 Responsive Design (Critical)

**Must fix**:
- Navigation on < 375px screens
- Text/spacing scaling on mobile
- Fixed header taking too much vertical space

**Target**: Works beautifully on any device

### 5.2 Animation/Motion

**Current state**: Mixed approaches, inconsistent, messy code, unknown performance

**Goals**:
- Consistent animation style across site
- Smooth, polished motion design
- Clean, maintainable implementation
- Acceptable performance

**Priority**: Lower than mobile fixes and visual system

### 5.3 Design System

**Current state**: Ad-hoc (eyeballing values as building)

**Blocker**: Design confidence - uncertainty about creating a cohesive system

**Need**:
- Defined color tokens
- Typography scale
- Spacing system
- Component consistency

### 5.4 Static Site Generator

**Consideration**: Open to simpler tool for easier content updates

**Criteria**: Prioritize simplicity over learning complexity

**Options to evaluate**:
- Keep current HTML/CSS
- Hugo, Eleventy, or similar for easier templating
- Must not add significant complexity

### 5.5 Analytics

**Status**: Not decided

**Options**:
- Google Analytics (standard)
- Privacy-first alternatives (Plausible, Fathom)
- None

**Needs**: Decision on whether tracking matters for goals

### 5.6 Technical Constraints

- No specific browser requirements
- No specific accessibility requirements (follow best practices)
- No specific performance budget

---

## 6. Design System Requirements

### 6.1 Color Palette

**Direction**: Muted, sophisticated (quiet luxury)

Suggested approach:
- Primary: Near-black or warm charcoal
- Background: Off-white or warm neutral
- Accent: Single subtle color (optional)
- Consider: Warm vs. cool neutral tones

### 6.2 Typography Scale

**Open question**: Serif vs. sans-serif vs. mix

Considerations:
- Serif: Editorial, sophisticated, timeless (matches fashion brand aesthetic)
- Sans-serif: Modern, clean, minimal
- Mix: Serif headers for character, sans body for readability

### 6.3 Spacing System

- Establish consistent spacing scale (e.g., 4px, 8px, 16px, 24px, 32px, 48px, 64px)
- Generous whitespace to match quiet luxury aesthetic

### 6.4 Component Library

Define consistent patterns for:
- Buttons
- Links
- Cards (if used)
- Navigation
- Headers
- Footer

---

## 7. Implementation Approach

### 7.1 Workflow Philosophy

**Biggest fear**: Never finished (perpetually "in progress")

**Solution**: Time-boxing - ship after defined hours regardless of perfection

### 7.2 Iteration Priority

**This week** (incremental progress on each):
1. Mobile fixes - functional on all devices
2. Visual system - cohesive colors and typography
3. Add narrative - more story and voice

**Priority page**: Homepage first

### 7.3 Decision Framework

When in doubt:
- Ship over perfect
- Simple over clever
- Authentic over impressive
- Done over polished

---

## 8. Open Questions

### 8.1 Content Questions
- [ ] What specific aspects of your Growth/Product journey are unique and worth sharing?
- [ ] How deep should project case studies go?
- [ ] Newsletter/content split strategy?

### 8.2 Design Questions
- [ ] Warm neutrals or cool neutrals for color palette?
- [ ] Serif, sans-serif, or mixed typography?
- [ ] What represents "personality" in the quiet luxury context?

### 8.3 Technical Questions
- [ ] Stick with HTML/CSS or move to static site generator?
- [ ] Which analytics solution (if any)?
- [ ] Animation library choice (CSS-only vs. lightweight library)?

---

## 9. Recommendations

### 9.1 Static Site Generator
**Recommendation**: Consider Hugo or Eleventy

Rationale:
- Easier content management than raw HTML
- Still simple compared to React/Next.js
- Good learning without overwhelming complexity
- Better separation of content from presentation
- Makes blog posts easier to manage

### 9.2 Typography
**Recommendation**: System font stack with one elegant serif for headlines

Rationale:
- System fonts = fast, no load time
- Single serif headline font adds the "editorial" quiet luxury feel
- Keeps it simple while adding personality
- Consider: `font-family: "Playfair Display", Georgia, serif` for headlines

### 9.3 Color Palette
**Recommendation**: Warm monochrome (inspired by Bottega aesthetic)

```css
:root {
  --color-text: #1a1a1a;           /* Near black, warm */
  --color-text-muted: #6b6b6b;     /* Secondary text */
  --color-background: #faf9f7;     /* Warm off-white */
  --color-background-alt: #f0eeeb; /* Subtle contrast */
  --color-border: #e5e3df;         /* Soft dividers */
  --color-accent: #8b7355;         /* Optional: muted bronze */
}
```

### 9.4 Mobile Navigation
**Recommendation**: Slide-out drawer or collapsible menu

The fixed header taking vertical space can be solved by:
- Reducing header height on mobile
- Collapsing to hamburger/drawer
- Hiding nav on scroll-down, showing on scroll-up

### 9.5 Animation Approach
**Recommendation**: CSS-only with custom properties

Rationale:
- No bundle size impact
- Learning opportunity for CSS
- Can achieve polished results
- Consider single animation timing variable for consistency:

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

### 9.6 Analytics
**Recommendation**: Plausible Analytics (or skip entirely)

Rationale:
- Privacy-friendly (no cookie banner needed)
- Simple, lightweight
- Or skip - for personal brand/thought leadership, engagement metrics (comments, shares, replies) may matter more than page views

### 9.7 Content Strategy
**Recommendation**: Portfolio site for evergreen + Substack for regular content

Rationale:
- Substack has built-in audience growth mechanisms
- Site stays clean and manageable
- Best of both worlds
- Site can embed/link to newsletter

---

## 10. Next Actions (Time-boxed)

### Immediate (This Week)
- [ ] Fix mobile navigation (< 375px)
- [ ] Fix text/spacing on mobile
- [ ] Define color palette (use recommendation or customize)
- [ ] Choose/implement typography
- [ ] Write 2-3 sentences of personal story for homepage

### Near-term
- [ ] Establish CSS custom properties for design system
- [ ] Implement consistent animation timing
- [ ] Decide on static site generator
- [ ] Define project showcase scope

### Later
- [ ] Evaluate newsletter strategy
- [ ] Analytics implementation (if desired)
- [ ] Performance audit
- [ ] Accessibility audit

---

## Appendix A: Aesthetic Reference Translation

**The Row / Lemaire / Bottega Veneta web translation**:

| Fashion Attribute | Web Equivalent |
|------------------|----------------|
| Neutral palette | Muted, warm grayscale |
| Quality materials | Premium typography, smooth interactions |
| Minimal branding | Subtle, confident identity |
| Perfect fit | Intentional spacing, no clutter |
| Timeless pieces | Classic patterns, no trend-chasing |
| Quiet confidence | Let work speak, don't over-explain |

---

## Appendix B: Interview Summary

This spec was generated through a detailed interview covering:
- Goals and target audience
- Technical constraints and stack
- Current pain points and technical debt
- Aesthetic direction and inspiration
- Content strategy and format
- Work presentation approach
- Success criteria and fears
- Timeline and urgency
