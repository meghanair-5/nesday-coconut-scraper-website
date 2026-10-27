# Nesday Electric Coconut Scraper website

Marketing and product website for **Nesday Electric Coconut Scraper**, a household electric coconut scraper by Biars Industries (Kerala, India).

The site is a fast, statically generated Next.js app. Customers order by phone: there is no cart or online payment. All product information comes from the official Nesday manual and previous website. Anything that still needs confirmation is marked on the page and listed in [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md#26-features-that-require-business-approval-or-credentials-before-launch).

## Features

- Homepage with hero, benefits, product showcase, attachments, how it works, specifications, videos, FAQ and call to action
- Product listing and data-driven product detail pages with an image gallery
- How It Works / Instructions page with the manual's steps, safety, maintenance and recycling guidance
- About, Contact (phone only) and five policy pages (warranty, shipping, returns, privacy, terms)
- Mobile-first responsive layout from 320px to 1920px, with an accessible mobile menu
- YouTube videos that load only after the visitor presses play (privacy-enhanced mode)
- Page metadata, canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`, Organization JSON-LD
- Security headers (CSP, HSTS, frame, referrer and permissions policies)
- Unit tests (Vitest) and end-to-end tests (Playwright) covering pages, links, menu and overflow

## Technology stack

| Area      | Choice                                                     |
| --------- | ---------------------------------------------------------- |
| Framework | Next.js 16 (App Router, static generation, React Compiler) |
| UI        | React 19, Tailwind CSS 4, Radix UI Dialog, Lucide icons    |
| Language  | TypeScript 5 (strict)                                      |
| Quality   | ESLint 9 (`eslint-config-next`), Prettier 3                |
| Testing   | Vitest 5 + React Testing Library, Playwright               |
| Runtime   | Node.js 22 LTS or 24 LTS (minimum 20.19 or 22.12)          |

## Getting started

```powershell
git clone <repository-url>
cd nesday-coconut-scraper-website
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open <http://localhost:3000>.

## Commands

| Command                | What it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `npm run dev`          | Start the development server with hot reload                  |
| `npm run build`        | Create a production build                                     |
| `npm run start`        | Serve the production build (run `build` first)                |
| `npm run lint`         | Run ESLint                                                    |
| `npm run typecheck`    | Run the TypeScript compiler without emitting files            |
| `npm run format`       | Format all files with Prettier                                |
| `npm run format:check` | Check formatting without changing files                       |
| `npm test`             | Run unit tests once                                           |
| `npm run test:e2e`     | Run Playwright tests (builds must exist: run `npm run build`) |
| `npm run check`        | Lint, typecheck, format check, unit tests and build in one go |

The first time you run end-to-end tests, install the browser: `npx playwright install chromium`.

## Environment

| Variable               | Required           | Purpose                                                         |
| ---------------------- | ------------------ | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes, in production | Public site URL for canonical links, Open Graph and the sitemap |
| `PLAYWRIGHT_PORT`      | No                 | Port for end-to-end tests (default 3100)                        |

## Editing content

All business content lives in `src/config/site.ts` and `src/data/`. You do not need to touch page components to change prices, phone numbers, specifications, FAQs or policies. See [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md#19-how-to-add-or-update-products-prices-images-and-content).

## Deployment

The recommended host is Vercel (free tier is sufficient). Import the Git repository, set `NEXT_PUBLIC_SITE_URL`, and deploy. Any Node.js host that can run `npm run build && npm run start` also works. Full instructions, including DNS, are in [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md#22-how-to-deploy-the-website).

## Troubleshooting

- **`npm` is not recognised**: install Node.js LTS and reopen the terminal.
- **Port 3000 already in use**: run `npx next dev --port 3001`.
- **`npm run start -- --port 3001` ignores the port in PowerShell**: use `npx next start --port 3001`.
- **Playwright says the browser is missing**: run `npx playwright install chromium`.
- **Images or styles look stale**: stop the server, delete the `.next` folder, and run again.

More in [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md#24-troubleshooting-common-errors).
