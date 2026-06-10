---
name: Terminal Premier Industrial
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#43474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#405f91'
  primary: '#001736'
  on-primary: '#ffffff'
  primary-container: '#002b5b'
  on-primary-container: '#7594ca'
  inverse-primary: '#a9c7ff'
  secondary: '#0050cc'
  on-secondary: '#ffffff'
  secondary-container: '#0266ff'
  on-secondary-container: '#f9f7ff'
  tertiary: '#0e1824'
  on-tertiary: '#ffffff'
  tertiary-container: '#222c39'
  on-tertiary-container: '#8993a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#a9c7ff'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#264778'
  secondary-fixed: '#dae1ff'
  secondary-fixed-dim: '#b3c5ff'
  on-secondary-fixed: '#001849'
  on-secondary-fixed-variant: '#003fa4'
  tertiary-fixed: '#d9e3f5'
  tertiary-fixed-dim: '#bdc7d8'
  on-tertiary-fixed: '#121c29'
  on-tertiary-fixed-variant: '#3e4756'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
  terminal-red: '#C22B20'
  pure-white: '#FFFFFF'
  charcoal: '#1B1B1B'
  glass-border: rgba(255, 255, 255, 0.2)
typography:
  headline-xxl:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-xxl-mobile:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  max-width: 1400px
  columns: '12'
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
  element-gap: 24px
---

## Brand & Style

The design system is engineered for **Terminal Technologies** to project a "Tier-1" automotive and industrial presence. It balances precision engineering with executive-level sophistication, mirroring the high-polish aesthetic of global manufacturing leaders.

The visual style is a blend of **Corporate Modern** and **Glassmorphism**. It utilizes a clean, white-space-heavy foundation typical of high-end consumer technology (Apple-level polish), punctuated by modern industrial textures and glass-like translucent layers. This approach communicates transparency, technical mastery, and forward-looking innovation.

**Key Brand Pillars:**
- **Engineering Excellence:** Communicated through sharp alignment and systematic spacing.
- **Innovation:** Represented by electric blue accents and subtle motion.
- **Reliability:** Grounded in a deep, authoritative navy foundation.

## Colors

The palette is anchored by **Deep Industrial Blue (#002B5B)**, a color that commands authority and signals corporate stability. This is contrasted by **Electric Blue (#0066FF)**, used exclusively for interactive high-light moments and call-to-actions to symbolize energy and digital transformation.

**Steel Gray (#5A6473)** serves as the primary bridge for typography and secondary UI elements, while **Light Gray (#F5F7FA)** provides a sophisticated alternative to pure white for section backgrounds and card containers. The **Terminal Red (#C22B20)** from the legacy logo is reserved for critical status indicators or very rare high-impact accents to maintain the "premium" enterprise feel without appearing cluttered.

**Color Usage Guidelines:**
- **Backgrounds:** Primarily `pure-white` for clarity, with `Light Gray` used to distinguish content blocks.
- **Interactions:** Use `Electric Blue` for hovers and active states.
- **Dark Mode Sections:** Use `Deep Industrial Blue` or `Charcoal` for high-impact footer or industry-focus areas.

## Typography

This design system uses a dual-sans-serif approach to maximize both character and readability. **Manrope** is the headline face; its geometric yet warm structure feels modern and technologically advanced. **Inter** is used for all body and functional text due to its exceptional legibility in technical and enterprise contexts.

**Hierarchy Rules:**
- **Hero Headers:** Use `headline-xxl` with tight letter spacing to create a high-impact, editorial look.
- **Body Text:** Maintain a generous `1.8` line height for `body-lg` to ensure comfortable reading of long-form manufacturing capabilities.
- **Labels:** Use `label-sm` for small eyebrows above headings, always in uppercase with increased tracking to denote "Global Standards."

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with a 1400px max-width container, ensuring the "Apple-level" polish remains consistent across large displays. The 12-column grid is utilized to create asymmetric layouts—often leaving 1-2 columns empty to provide "breathing room" that signifies luxury and premium positioning.

**Breakpoint Strategy:**
- **Desktop (1440px+):** Full 1400px container with 80px side margins.
- **Tablet (768px - 1024px):** 8-column grid, margins reduced to 40px, section gaps reduced to 80px.
- **Mobile (Up to 767px):** Single column flow, 20px margins, typography scales to mobile roles.

**Vertical Rhythm:**
Sections are separated by a substantial `120px` gap (`section-gap`) to allow high-quality industrial imagery to stand out without competing with text.

## Elevation & Depth

Hierarchy is established using **Tonal Layers** and **Glassmorphism**. Rather than traditional heavy shadows, this design system uses "Light-Touch" depth:

1.  **Level 0 (Base):** `pure-white` or `Light Gray` (#F5F7FA).
2.  **Level 1 (Cards):** White surfaces with a very soft, high-diffusion shadow (`0px 10px 40px rgba(0, 43, 91, 0.05)`).
3.  **Level 2 (Glass):** Used for "Technology Section" cards or floating navigation. These use a backdrop blur of `20px`, a 20% white opacity fill, and a subtle 1px border using `glass-border`.
4.  **Interactive:** On hover, cards should transition to a slightly higher elevation (shadow opacity increases) and scale by 1.02x.

Depth is also conveyed through **Metallic Accents**—using subtle linear gradients (Steel Gray to Light Gray) on borders to mimic machined aluminum or steel.

## Shapes

The shape language is **Rounded**, utilizing a base radius of `0.5rem (8px)` for small components like inputs and small buttons. 

However, for the defining "Enterprise" look, **Large Container Cards** utilize a `1rem (16px)` radius. This softens the industrial imagery and creates a more approachable, modern feel. 

- **Standard Elements:** 8px (Buttons, Inputs, Tags)
- **Cards & Sections:** 16px (Product cards, Highlight sections)
- **Media:** 16px (Factory photos, Video containers)

## Components

### Buttons
- **Primary:** Deep Industrial Blue background, white text, 8px radius. High-polish hover effect: background shifts to Electric Blue.
- **Secondary/Outline:** 1.5px border in Steel Gray, transitions to a full fill of Deep Industrial Blue on hover.
- **CTA Text:** `label-sm` font weight for clarity.

### Cards
- **Product/Service Cards:** 16px radius, white background, soft shadow. On hover, the image should scale slightly (1.05x) within its masked container.
- **KPI Cards:** Glassmorphic style with bold numbers in Deep Industrial Blue.

### Input Fields
- **Style:** Minimalist. 1px border in Light Gray that turns Electric Blue on focus.
- **Labels:** Use floating labels or `label-sm` placed above the field.

### Navigation (Header)
- **Standard:** Transparent with white text when over Hero imagery.
- **Sticky:** On scroll, transitions to white background with a 1px bottom border in `Light Gray`. Nav links use `Deep Industrial Blue`.

### News & Insights
- Vertical card layout with high-quality industrial thumbnails. Use `Steel Gray` for metadata (dates/categories).

### Footer
- **Theme:** High-contrast Dark. Background `Deep Industrial Blue`. Text `pure-white` with 60% opacity for secondary links.