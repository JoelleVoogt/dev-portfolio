# Portfolio v8.2 — Joelle Voogt

Front-end developer with a UX background. Based in Delft.

Live: [joellevoogt.vercel.app](https://joellevoogt.vercel.app)

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind v4

## Architecture

Custom design system built in `globals.css` using Tailwind v4 `@theme`
blocks — no config file. Includes color scales, spacing tokens, and
reusable utility classes.

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
