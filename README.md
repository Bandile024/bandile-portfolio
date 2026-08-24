# Bandile Ngwenya — Personal Website

A personal portfolio and service-request site for **Bandile Ngwenya**, Data
Analytics & AI Engineer Intern. Rebuilt from a static multi-page HTML/CSS
site into a full-stack **Next.js + TypeScript** app, so it's dynamic,
type-safe, and a template you can keep learning from.

> 📌 **Portfolio page:** the old hard-coded project links were removed on
> purpose. The Portfolio page now pulls your public repos **live from the
> GitHub API**, so once you push new projects to GitHub they'll appear here
> automatically — nothing to edit.

---

## 1. Tech stack — and why each piece is here

Full-stack web dev is really a few layers stacked on top of each other.
Here's what's doing each job, and why it was picked:

| Layer | Tool | What it's for |
|---|---|---|
| **Framework** | [Next.js 14](https://nextjs.org) (App Router) | Handles routing, renders pages on the server, and gives you API routes — so frontend *and* backend live in one project. |
| **Language** | [TypeScript](https://www.typescriptlang.org) | Adds types to JavaScript. Catches bugs (typos, wrong data shapes) while you type, before you ever run the app. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | Utility classes instead of a separate `.css` file per component — fast to write, and every class is scoped so nothing leaks. |
| **Motion** | [Framer Motion](https://www.framer.com/motion/) | Declarative scroll/entry animations (`AnimatedSection.tsx`) without hand-writing CSS keyframes. |
| **Icons** | [lucide-react](https://lucide.dev) | A single consistent icon set as React components. |
| **Email** | [Resend](https://resend.com) | A backend API route (`app/api/contact/route.ts`) uses this to send form submissions as real emails — see §5. |
| **Data source** | [GitHub REST API](https://docs.github.com/en/rest) | The Portfolio page fetches your repos directly, server-side. |

This combination (Next.js + TypeScript + Tailwind) is one of the most
common professional stacks in web development right now — what you learn
here transfers directly to real jobs and other projects.

---

## 2. How the project is organized

```
bandile-portfolio/
├── app/                    # Every folder here = a URL route (the App Router)
│   ├── layout.tsx          # Shared shell: fonts, <Header>, <Footer> — wraps every page
│   ├── page.tsx             # "/"        → Home
│   ├── about/page.tsx      # "/about"    → About
│   ├── portfolio/page.tsx  # "/portfolio"→ Portfolio (fetches GitHub repos)
│   ├── qna/page.tsx        # "/qna"      → FAQ
│   ├── contact/page.tsx    # "/contact"  → Contact form
│   ├── request/page.tsx    # "/request"  → Request-a-service form
│   ├── api/
│   │   ├── contact/route.ts  # POST /api/contact  → sends the contact email
│   │   └── request/route.ts  # POST /api/request  → sends the service-request email
│   ├── globals.css         # Tailwind setup + small reusable classes (.btn-primary, .card, …)
│   └── not-found.tsx       # Custom 404 page
├── components/              # Reusable UI pieces, shared across pages
├── data/site.ts             # ALL site copy lives here — one file to edit
├── lib/
│   ├── github.ts            # Fetches your repos from the GitHub API
│   └── email.ts              # Sends emails via Resend
├── public/                   # Static files served as-is (robots.txt, images…)
├── .env.example              # Template for secrets — copy to .env.local
└── package.json              # Dependencies + npm scripts
```

**The core mental model:** a *folder* under `app/` becomes a *URL*. A
`page.tsx` inside it is what renders for that URL. Anything in
`components/` is a reusable building block those pages import.

### Server components vs. client components
Next.js pages are **server components by default** — they run on the
server, can `fetch()` data directly (see `app/portfolio/page.tsx`), and
send zero extra JavaScript to the browser for that logic.

Any component that needs interactivity — state, click handlers,
`useEffect` — must opt in with `"use client"` at the top of the file
(look at `FaqAccordion.tsx`, `ContactForm.tsx`, `Terminal.tsx`). That's the
single most important concept to internalize in the App Router.

---

## 3. Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed. Then, from
inside this folder:

```bash
npm install       # downloads every package in package.json
npm run dev        # starts the dev server
```

Open **http://localhost:3000** — the site is now running, with hot reload
(edit a file, save, see it update instantly).

Other scripts:

```bash
npm run build   # builds an optimized production version (also type-checks + lints)
npm run start   # runs the production build locally
npm run lint    # just runs the linter
```

---

## 4. Editing content

Almost everything text-based lives in **`data/site.ts`** — your name,
role, bio, skills, FAQ answers, contact details, social links, service
dropdown options. Change it there and every page that uses it updates.
That's what "dynamic" means here: one source of truth instead of copy
pasted across five HTML files.

To add your CV/resume as a download: drop a PDF into `public/` (e.g.
`public/Bandile-Ngwenya-CV.pdf`) — the filename already matches
`profile.resumeUrl` in `data/site.ts`, wire up a link to it wherever you'd
like (e.g. the About page or Hero).

---

## 5. Setting up the contact & request forms (Resend)

Both forms POST to an API route, which emails you the submission using
[Resend](https://resend.com) (they have a generous free tier).

1. Copy the example env file: `cp .env.example .env.local`
2. Sign up at resend.com, grab an **API key**.
3. Paste it into `.env.local` as `RESEND_API_KEY`.
4. Set `CONTACT_TO_EMAIL` to the address you want submissions sent to.
5. Restart `npm run dev`.

Until you do this, forms still "work" — they just log the submission to
your terminal instead of emailing it, so you can build/test without an
account.

---

## 6. How the Portfolio page stays dynamic

`lib/github.ts` calls `https://api.github.com/users/<username>/repos`
directly from the server. `app/portfolio/page.tsx` awaits that call and
renders a `<ProjectCard>` per repo. Because it's a **server** component,
this fetch never runs in the visitor's browser — it runs on the server (or
at build time, then re-checks every hour via
[Next.js ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)).

To point it at your own account, set `NEXT_PUBLIC_GITHUB_USERNAME` in
`.env.local` (defaults to `Bandile024`).

---

## 7. Deploying it

The easiest path is [Vercel](https://vercel.com) (made by the Next.js
team, free for personal projects):

1. Push this project to a GitHub repo.
2. Go to vercel.com → **New Project** → import that repo.
3. Add the same environment variables from `.env.local` in the Vercel
   project settings.
4. Deploy — Vercel builds and hosts it, and redeploys automatically on
   every push.

---

## 8. Suggested next steps (for learning)

- Add a **Projects detail page** (`app/portfolio/[slug]/page.tsx`) — a
  great intro to Next.js *dynamic routes*.
- Swap the Portfolio page's GitHub fetch for a small **database** (e.g.
  [Supabase](https://supabase.com) or [Prisma](https://www.prisma.io) +
  SQLite) once you want projects with custom descriptions/images instead
  of raw repo metadata.
- Add **tests** with [Vitest](https://vitest.dev) for the API routes.
- Add a light/dark theme toggle with
  [`next-themes`](https://github.com/pacocoursey/next-themes).

---

## Credits

Design & copy rebuilt from an original static HTML/CSS site by Bandile
Ngwenya. Rebuilt as a Next.js + TypeScript app to be dynamic, professional,
and a hands-on reference for learning full-stack development.
