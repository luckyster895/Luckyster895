# Abhinav Saxena – Personal Website

Next.js (static export) + Tailwind CSS + Framer Motion.

## Edit content
All text lives in `lib/data.ts`.

## Add your photo
Drop a square image at `public/photo.jpg`. The hero uses it automatically (an "AS" monogram shows until then).

## Resume
`/resume` is built from the same data. The "Download PDF" button opens the print dialog, where you choose "Save as PDF".

## Run locally (Windows PowerShell)
```bash
npm.cmd install
npm.cmd run dev
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo on the `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. The base path is set automatically from the repo name.
