# Deployment Guide — Motion Agency

Self-hosted deployment on a Hetzner Linux server via GitHub Actions → SSH → PM2.

---

## 1. GitHub Secrets

Go to **GitHub → Repository → Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|---|---|
| `SSH_PRIVATE_KEY` | Your private key (the full contents of `~/.ssh/id_rsa` or equivalent) |
| `SERVER_HOST` | Your server IP or hostname (e.g. `123.456.789.0`) |
| `SERVER_USER` | SSH user (e.g. `root` or `deploy`) |
| `SERVER_PATH` | Absolute path to the repo on the server (e.g. `/var/www/motion-agency`) |

---

## 2. First-Time Server Setup

### a. Prerequisites (Ubuntu/Debian)

```bash
# Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
npm install -g pm2

# Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install caddy
```

### b. Clone & First Build

```bash
# Clone repo
git clone https://github.com/YOUR_ORG/YOUR_REPO.git /var/www/motion-agency
cd /var/www/motion-agency/next-app

# Create .env.local from example
cp .env.local.example .env.local
nano .env.local   # fill in GEMINI_API_KEY

# Install and build
npm ci
npm run build

# Start with PM2
pm2 start ecosystem.config.js
pm2 save                  # persist across reboots
pm2 startup               # follow the printed instructions
```

---

## 3. Caddy Configuration

Edit `/etc/caddy/Caddyfile`:

```caddy
motionagency.mx {
    reverse_proxy localhost:3000
}

www.motionagency.mx {
    redir https://motionagency.mx{uri} permanent
}
```

Then reload:

```bash
sudo systemctl reload caddy
```

Caddy automatically handles TLS (Let's Encrypt) — no manual certificate work needed.

---

## 4. Ongoing Deploys

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. SSHes into the server
2. `git pull`s the latest code
3. Runs `npm ci && npm run build` inside `next-app/`
4. Restarts the PM2 process

Monitor logs:

```bash
pm2 logs motion-agency
pm2 monit
```

---

## 5. Verify

- `https://motionagency.mx` — live site
- `https://motionagency.mx/sitemap.xml` — auto-generated sitemap
- `https://motionagency.mx/robots.txt` — robots file
