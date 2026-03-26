# Hillcrest Church — Website Brief

## Overview
A beautiful, modern, scroll-driven church website for Hillcrest Baptist Church in Stillwater, Oklahoma. Replace their dated single-page site with a multi-page Next.js site that tells their story, welcomes newcomers, and showcases their community.

**Existing site:** https://www.hillcrestonline.org (very basic, minimal design, placeholder text visible)

---

## Business Info
- **Name:** Hillcrest Baptist Church
- **Location:** 902 North Washington, Stillwater, OK 74075
- **Phone:** 405.372.7330
- **Tagline:** "Whoever you are, wherever you are from, you are welcome here."
- **Mission:** Developing Dedicated Disciples of Jesus Christ
- **Tagline 2:** "Hillcrest — Where streams of healing water flow"

---

## Design Direction

### Color Palette
- Primary: Warm earthy tones — forest green, cream/off-white, warm brown
- Feel: Welcoming, trustworthy, peaceful, community-focused
- Use the church's existing imagery heavily

### Typography
- Headings: Serif (elegant, traditional church feel but modern)
- Body: Clean sans-serif

### Visual Style
- Warm photography throughout (use downloaded church photos)
- Soft gradients and subtle textures
- Scroll-driven animations (fade-in sections, parallax hero)
- Modern card layouts for info sections
- Professional but approachable

---

## Pages to Build

### 1. Home Page (/)
**Sections:**
- Hero: Full-screen with church name, tagline, pastoral image, CTA button ("Join Us Sunday")
- Welcome: Brief intro + "Learn More" link to Our Story
- Gathering Times: Clean cards showing Sunday & Wednesday schedules
- Our Story Teaser: Photo + brief history excerpt + link
- Photo Gallery: 3-column grid of church photos
- Location/Contact: Address, phone, embed map
- Footer: Links, service times recap, social

### 2. Our Story (/our-story)
**Sections:**
- Hero with "Our Story" title + background image
- Mission statement (Developing Dedicated Disciples)
- Vision text (Jeremiah 29:7)
- Timeline/history (1955, 1957, 1964, 1984 milestones)
- Call to action: Join us Sunday

### 3. I'm New (/i-m-new)
**Sections:**
- Hero: "We can't wait to meet you"
- What to Expect (service length, music style, nursery, fellowship)
- What to Wear (casual, come as you are)
- Gathering Times (all services)
- Contact form
- Map/location

### 4. Sermons/Media (/media)
**Sections:**
- Hero: "Sermons"
- Text: "We release Sunday services the following week. Check back for new sermons."
- Archive link note
- Featured sermon placeholder

### 5. Contact (/contact)
**Sections:**
- Hero: " We'd love to hear from you"
- Contact info (phone, address, email)
- Service times recap
- Contact form (name, email, message, phone optional)
- Map embed

---

## Content Notes
- All real content from scraped site — no made-up text
- Use all 5 downloaded church photos
- Use the logo.jpg
- Build on the genuine warmth and community focus
- Enhance but don't fabricate church info

---

## Build Checklist
- [ ] Copy template to src/
- [ ] Set up project
- [ ] Home page with all sections
- [ ] Our Story page with timeline
- [ ] I'm New page with form
- [ ] Sermons page
- [ ] Contact page with form + map
- [ ] Nav and footer
- [ ] Mobile responsive
- [ ] Scroll animations
- [ ] Build succeeds
- [ ] Local test

---

## Assets
All in ~/projects/client-sites/hillcrest-church/public/
- logo.jpg (church logo)
- hero-worship.jpg (worship photo)
- church-photo1.jpg, church-photo2.jpg, church-photo3.jpg
- theme-hero1.jpg, theme-hero3.jpg
- gathering-bg.png (background image)
