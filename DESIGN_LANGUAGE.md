# Bluebird Design Language

## Overview
This document outlines the design system and visual language used across the Bluebird website. All pages should follow these guidelines for consistency.

## Typography

### Font Families
- **Headlines**: `font-headline` (Inter, sans-serif) - Used for all headings (h1, h2, h3)
- **Body**: `font-body` (Inter, system-ui, sans-serif) - Used for all body text

### Font Sizes & Hierarchy

#### Page Headers (Inner Pages - /contact, /about, /projects)
- **Badge/Label** (optional): `text-xs` with `tracking-[2.5px]` uppercase, `px-5 py-2 bg-accentSubtle text-accent font-semibold rounded-full`
- **H1**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` with `font-bold` (NOT font-semibold)
- **Description**: `text-base sm:text-lg md:text-xl` with `text-textMuted` and `leading-relaxed`
- **Container**: `mb-16 sm:mb-20 md:mb-24`

#### Section Headers (Home Page Sections - FAQ, Pricing, Testimonials, HowItWorks, RecentProjects)
- **Section Padding**: `py-14 sm:py-16 md:py-20` or `py-16 sm:py-20 md:py-24`
- **Header Container**: `text-center mb-8 sm:mb-10` or `mb-10 sm:mb-12`
- **Label**: `text-xs text-textMuted mb-2` or `mb-3`
- **H2**: `text-2xl sm:text-xl md:text-2xl font-semibold text-text mb-1`
- **Description**: `text-sm text-textMuted max-w-md mx-auto` (optional)

#### Card/Content Headers
- **H3**: `text-lg` or `text-xl` with `font-semibold`
- **Body text**: `text-sm` with `text-textMuted` and `leading-relaxed`
- **Small body text**: `text-xs sm:text-sm` with `text-textMuted`
- **Card titles**: `text-base sm:text-lg font-semibold text-text`

### Font Weights
- Headlines: `font-bold` (700) or `font-semibold` (600)
- Body: Regular (400) or `font-medium` (500)

## Colors

### Primary Palette
- **Background**: `bg-bg` (#FAF8F5)
- **Text Primary**: `text-text` (#1A1A1A)
- **Text Muted**: `text-textMuted` (#4A4A4A)
- **Accent**: `accent` (#0047AB - Cobalt Blue)
- **Accent Dark**: `accentDark` (#003A8F)
- **Accent Subtle**: `accentSubtle` (#E6EDF5)

### Usage
- Primary text: `text-text`
- Secondary/descriptive text: `text-textMuted`
- Links and CTAs: `text-accent`
- Backgrounds: `bg-bg` or `bg-white`
- Borders: `border-accentSubtle/50`

## Spacing

### Section Padding
- Standard sections: `py-16 sm:py-20 md:py-24`
- Page top padding: `pt-28 sm:pt-32 md:pt-36`
- Page bottom padding: `pb-20 sm:pb-24 md:pb-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`

### Container Widths
- Full width sections: `max-w-7xl mx-auto`
- Content sections: `max-w-6xl mx-auto`
- Forms/narrow content: `max-w-md mx-auto`

### Gaps
- Grid gaps: `gap-8 sm:gap-12` or `gap-5 sm:gap-6`
- Section spacing: `mb-10 sm:mb-12` or `mb-16 sm:mb-20 md:mb-24`

## Visual Hierarchy

### Page Headers (Inner Pages - /contact, /about, /projects)
```html
<div class="mb-16 sm:mb-20 md:mb-24">
  <!-- Optional badge/label -->
  <p class="inline-block px-5 py-2 bg-accentSubtle text-accent font-semibold rounded-full text-xs tracking-[2.5px] uppercase mb-6">
    SECTION LABEL
  </p>
  <!-- H1 with underline decoration -->
  <h1 class="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight mb-6 sm:mb-8 max-w-5xl">
    <span class="relative inline-block">
      Page Title
      <span class="absolute -bottom-2 left-0 right-0 h-3 bg-accentSubtle -rotate-1 -z-10"></span>
    </span>
  </h1>
  <!-- Description -->
  <p class="text-base sm:text-lg md:text-xl text-textMuted max-w-3xl leading-relaxed">
    Description text
  </p>
</div>
```

**Important**: 
- H1 must use `font-bold` (not `font-semibold`)
- H1 must use the full responsive scale: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Description uses `text-base sm:text-lg md:text-xl` (not `text-md`)

### Section Headers (Home Page Sections)
```html
<div class="text-center mb-8 sm:mb-10">
  <p class="text-xs text-textMuted mb-2">
    Section label
  </p>
  <h2 class="font-headline text-2xl sm:text-xl md:text-2xl font-semibold text-text mb-1">
    Section Title
  </h2>
  <p class="text-sm text-textMuted max-w-md mx-auto">
    Optional description
  </p>
</div>
```

**Note**: Section padding should be `py-14 sm:py-16 md:py-20` or `py-16 sm:py-20 md:py-24` depending on section importance.

## Components

### Cards
- Background: `bg-white` or `bg-white/50`
- Border: `border border-accentSubtle/50`
- Border radius: `rounded-2xl`
- Padding: `p-5 sm:p-6`
- Hover: `hover:shadow-lg hover:border-accent/30 transition-all duration-300`

### Buttons
- Primary: `bg-text text-bg` or `bg-accent text-white`
- Border radius: `rounded-full` or `rounded-xl`
- Padding: `px-6 py-3`
- Font: `text-sm font-medium`
- Hover: `hover:scale-[1.02] transition-all duration-300`

### Forms
- Inputs: `bg-white border border-accentSubtle rounded-xl`
- Focus: `focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent`
- Text: `text-sm text-text placeholder-textMuted/60`
- Padding: `px-4 py-3`

## Background Elements

### Animated Background (Inner Pages)
```html
<div class="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl animate-pulse-slow"></div>
<div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accentSubtle/30 rounded-full blur-3xl animate-pulse-slow-delay"></div>
```

## Layout Patterns

### Grid Layouts
- 3 columns: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 2 columns: `grid grid-cols-1 md:grid-cols-2`
- 4 columns: `grid grid-cols-1 lg:grid-cols-4`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Always provide mobile styles first, then override for larger screens

## Content Guidelines

### Web Agency Content Themes
- Focus on results and outcomes
- Emphasize speed, performance, and conversion
- Use clear, direct language
- Highlight client success stories
- Showcase technical capabilities
- Emphasize custom solutions over templates

### Tone
- Professional but approachable
- Direct and clear
- Results-oriented
- No agency jargon or fluff
