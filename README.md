# companies-directory

React + Tailwind CSS frontend assignment for "Companies Directory".
This project includes searching, filtering, sorting, pagination, and a mock API (static JSON).

---
## What's included
- React (Create React App) skeleton
- Tailwind CSS setup (postcss + tailwind)
- Components: CompanyCard, Filter, Pagination
- Mock data: `public/data/companies.json`
- README with run & deploy steps and a video walkthrough script

---
## How to run locally (on your machine)

1. Clone the repo or extract the zip:
```bash
git clone <your-repo-url>
cd companies-directory
```

2. Install dependencies:
```bash
npm install
```

3. Initialize Tailwind (already configured in repo). Then start:
```bash
npm start
```

Open http://localhost:3000

**Notes:** Create React App + Tailwind require Node (>=14). If CSS does not render, ensure dependencies installed: `tailwindcss`, `postcss`, `autoprefixer` are present (they are listed in devDependencies in package.json).

---
## Deploy to Netlify

1. Push your repository to GitHub.
2. In Netlify, choose "New site from Git", connect GitHub and pick the repository.
3. Build command: `npm run build`
4. Publish directory: `build`
5. Click Deploy — Netlify will build and provide a live link.

---
## Files to include in your submission
- GitHub repository link (code)
- Netlify live link
- 2–3 minute video walkthrough (script included below)

---
## 2–3 Minute Video Walkthrough Script (use as guide)

**Intro (10s):** Hi, I'm {"Yagneswari"} — I'm presenting my frontend assignment: Companies Directory.
**Overview (15s):** Built with React and Tailwind CSS. The app fetches company data from a mock JSON file and displays it in a responsive card layout.
**Code Structure (35s):** Briefly show the repo structure: `src/components` (CompanyCard, Filter, Pagination), `src/pages/Home.js`, `public/data/companies.json`, `README.md`.
**Functionality Demo (40s):** Show search, filter by location/industry, sort A–Z/Z–A, reset, and pagination. Mention loading and empty states.
**Decisions & Extras (10s):** I used Tailwind for rapid responsive styling, axios for data fetch, and react-paginate for pagination. The backend was mocked with a static JSON as backend is optional.
**Closing (10s):** Thank you — link to GitHub and Netlify are in the submission; happy to answer questions.

---
## Additional notes for reviewers
- To use a real backend, replace the axios URL in `src/pages/Home.js`.
- You can increase items per page by editing `itemsPerPage` in `Home.js`.
