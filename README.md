# Portfolio v8.2 — Joelle Voogt

Front-end developer with a UX background. Based in Delft.

Live: [joellevoogt.vercel.app](https://joellevoogt.vercel.app)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind v4

## Design System

Built entirely in `globals.css` using Tailwind v4 `@theme` blocks — no config file.

**Color scales**

- `brand` — green (50–950)
- `secondary` — orange (50–950)
- `surface` — neutral (0–950)

**Shadow tokens**

- `--shadow-brand` — green glow
- `--shadow-secondary` — orange glow
- `--shadow-brand-card` — card glow with inset depth

**Custom utilities**

- `text-glow-brand` / `text-glow-secondary` — layered text glow effects
- `project-image` — hover-animated box shadow
- `link-button` — inset fill animation on hover

**Typography**

- Poppins (body)
- JetBrains Mono (mono)
- Geist Sans (UI)

## Architecture

Components are composed from nested sub-components for flexibility
and reuse. Project data is managed in a dedicated `projects.tsx`
data component, keeping content separate from presentation.

## Components

`Button` `ProjectCard` `ProjectWindow` `Tag` `TagList` `Skill`
`Socials` `SystemBoot` `Terminal` `Directories` `Concatenate`

## Sections

- `whoami` — background and skills
- `projects` — featured work
- `contact` — GitHub, LinkedIn, email

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
