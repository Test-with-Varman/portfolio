# Keerthi Varman Portfolio

A professional single-page portfolio for an Automation Test Engineer, built with plain HTML, CSS, and JavaScript for easy hosting on GitHub Pages or any static hosting provider.

## Features
- Clean, recruiter-friendly design with graphite-and-verdant styling
- Sticky navigation and responsive mobile menu
- Clear project narrative for QA automation work
- Download and view resume actions using a placeholder `resume.pdf`
- Copy-to-clipboard for phone and email
- Working mailto-based contact form fallback
- Scroll progress indicator
- Print-friendly stylesheet
- SEO meta tags for social sharing

## Project structure
- `index.html` — page structure and content
- `styles.css` — styling and responsive layout
- `script.js` — interactions, mobile nav, copy behavior, progress bar, and contact form fallback
- `resume.pdf` — place your actual PDF in this location before publishing

## Resume file
Place your actual resume PDF in the portfolio root as:

- `resume.pdf`

The buttons currently point to this file and will download or open it in a new tab. If you later rename the file, update the links in `index.html` accordingly.

## Run locally
Open `index.html` directly in the browser, or run a local static server:

```bash
cd c:\Users\bashu\portfolio\portfolio
python -m http.server 8000
```

Then visit:

- http://localhost:8000/

## Deploy on GitHub Pages
1. Push this project to a GitHub repository.
2. Open the repository in GitHub.
3. Go to Settings → Pages.
4. Choose the `Deploy from a branch` option.
5. Select the `main` branch and the root folder `/`.
6. Save the settings.

Your site will be published at a GitHub Pages URL like:

- `https://<your-username>.github.io/<repo-name>/`

## Contact form note
The form uses a `mailto:` fallback so it opens the visitor's mail app and sends the message to `Keerthivarman780@gmail.com`. For a production-ready form, connect Formspree, EmailJS, or another backend service and replace the `mailto:` logic in `script.js`.

## Analytics placeholder
Add your analytics script in `index.html` before the closing `</body>` tag when ready.
