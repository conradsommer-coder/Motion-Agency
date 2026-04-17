# Motion Agency — motionagency.mx

Branding, diseño web y marketing digital en Los Cabos, Baja California Sur.

---

## Project Structure

```
/
├── next-app/                  # Next.js 14 App Router (production)
│   ├── app/
│   │   ├── (site)/            # Public pages with Navbar + Footer
│   │   │   ├── page.tsx       # Homepage /
│   │   │   ├── services/
│   │   │   ├── motion-designs/
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   │   └── [id]/
│   │   │   └── contact/
│   │   ├── login/             # Admin login (standalone)
│   │   ├── admin/             # Protected admin panel
│   │   │   ├── new/
│   │   │   └── edit/[id]/
│   │   ├── api/
│   │   │   └── gemini/        # Server-side Gemini API route
│   │   ├── layout.tsx         # Root layout (SEO metadata, fonts, providers)
│   │   ├── sitemap.ts         # Auto-generated /sitemap.xml
│   │   └── robots.ts          # Auto-generated /robots.txt
│   ├── components/            # Navbar, Footer
│   ├── context/               # AuthContext, LanguageContext (en/es)
│   ├── data/                  # Bilingual content
│   ├── utils/                 # blogStore (localStorage)
│   ├── types.ts
│   ├── Dockerfile             # Multi-stage Docker build
│   ├── ecosystem.config.js    # PM2 config
│   ├── next.config.ts         # output: standalone
│   └── .env.local.example
│
├── .github/
│   └── workflows/
│       └── deploy.yml         # Auto-deploy on push to main
│
└── DEPLOY.md                  # Full server setup guide
```

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
cd next-app
npm install
cp .env.local.example .env.local   # add your GEMINI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Production Deploy

See **[DEPLOY.md](./DEPLOY.md)** for the full guide including:

- GitHub Secrets to configure
- First-time Hetzner server setup
- Caddy reverse-proxy config for `motionagency.mx`
- PM2 process management

Every push to `main` automatically deploys via GitHub Actions → SSH.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Fonts | Inter + Playfair Display (next/font) |
| Icons | Lucide React |
| Deployment | PM2 + Caddy on Hetzner |
| CI/CD | GitHub Actions |
