# Yemi Onifade: Portfolio

React + Vite + Tailwind CSS. Projects load live from GitHub.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

## Edit your content
Everything is in `src/data/profile.js`: bio, skill percentages, experience, certifications, and per-repo titles/descriptions (`repoOverrides`).

## CV
The download button points to `public/Yemi_Onifade_Data_Scientist_CV.pdf`. To update it, replace that file, keeping the same name (or change `cvFile` in `profile.js`).

## Project previews
The two live-app cards (SanTrack, Diabetes Risk) use an illustration until you add real screenshots.
Save a screenshot of each app as `public/previews/santrack.png` and `public/previews/diabetes.png` (16:10 works best) and they replace the illustration automatically.
Edit titles, descriptions and links in `liveProjects` inside `src/data/profile.js`.

## Skills
Four short categories live in `skillCategories` (`src/data/profile.js`). Set `showLevels = false` to hide the percentages.
