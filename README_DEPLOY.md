# Deployment Instructions

## 1. Push to GitHub
- Create a new repository on GitHub.
- Push this code:
```bash
git init
git remote add origin YOUR_GITHUB_REPO_URL
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 2. Setup Convex (Backend)
- Go to [convex.dev](https://convex.dev) and create a new project.
- Link your local project to Convex:
```bash
npx convex dev
```
- This will prompt you to log in and create a new project.
- Once linked, go to the Convex Dashboard > Settings > Environment Variables and add:
  - `OPENROUTER_API_KEY`: Your OpenRouter API key.

## 3. Deploy on Netlify (Frontend)
- Create a new site on Netlify from your GitHub repo.
- Netlify should automatically detect the build settings from `netlify.toml`.
- **Environment Variables**: In Netlify, go to Site Settings > Environment Variables and add:
  - `VITE_CONVEX_URL`: Your Convex deployment URL (e.g., `https://happy-otter-123.convex.cloud`).
  - `CONVEX_DEPLOYMENT`: Your Convex deployment name (e.g., `production:happy-otter-123`).

## 4. Finalizing
- Run `npx convex deploy` locally to push your final schema and functions to the production Convex environment.
- Netlify will build and deploy your frontend.
