# 📁 Portfolio — Built with MkDocs Material

A personal data analytics / data science portfolio website built using **MkDocs** with the **Material** theme.

🔗 **Live site:** https://rmszk.github.io/
📦 **Official MkDocs docs:** https://www.mkdocs.org/getting-started/
🎨 **Material theme docs:** https://squidfunk.github.io/mkdocs-material/

---

## 📌 What This Project Uses

This is a static portfolio site built with the following tools and integrations:

| Category | Tool |
|----------|------|
| Static site generator | MkDocs |
| Theme | Material for MkDocs |
| Hosting | GitHub Pages |
| Contact form | Formspree |
| Comments | Giscus (GitHub Discussions) |
| Analytics | Google Analytics |
| Image optimization | `pngquant` + `optimize` plugin |

---

## 🛠️ 1. Environment Setup (First Time Only)

Create a dedicated conda environment so this project's packages do not conflict with other Python projects.

```bash
conda create -n mkdocs python=3.13 -y
conda activate mkdocs
```

### Install MkDocs and Material theme

```bash
pip install mkdocs
pip install mkdocs-material
```

### Install the imaging extras (needed for social cards and optimized images)

```bash
pip install mkdocs-material[imaging]
```

### Install pngquant (required by `optimize` plugin)

- Download from: https://pngquant.org/releases/
- Extract the zip
- Copy `pngquant.exe` to `C:\Windows\System32\`
- Verify install:

```bash
pngquant --version
```

> ⚠️ The `optimize` plugin will fail during build if `pngquant` is not installed.

---

## 📂 2. Project Structure

```
portfolio_of_shahroz/
├── mkdocs.yml                  # Main config file (theme, navigation, plugins, extras)
├── docs/                       # All website content living in markdown form
│   ├── index.md                # Home page
│   ├── skills.md
│   ├── about.md
│   ├── resume.md
│   ├── contact.md
│   ├── projects/
│   │   ├── index.md
│   │   ├── project_1.md
│   │   ├── project_2.md
│   │   ├── project_3.md
│   ├── blog/
│   │   └── posts/               # Blog post files
│   ├── assets/                  # Images, profile picture, other static assets
│   └── stylesheets/
│       └── extra.css            # Custom CSS changes and animations
├── overrides/                   # Theme customization directory
│   └── partials/
│       └── comments.html        # Giscus comment system injection
└── site/                        # Generated output (DO NOT edit directly)
```

---

## ⚙️ 3. Plugins and Features Used

The following plugins and Material theme options are configured in `mkdocs.yml`:

| Plugin / Feature | Purpose |
|---|---|
| `search` | Built-in search functionality |
| `optimize` | Compresses images automatically |
| `social` | Generates preview cards for social links |
| `blog` | Adds blog categories, archive, and read time |
| `navigation.icons` | Adds icons to nav items |
| `navigation.tabs.image` | Uses image tabs for navigation |
| `navigation.tracking` | Tracks current section while scrolling |
| `navigation.sections` | Groups nav entries into sections |
| `navigation.top` | Adds top-level navigation links |
| `navigation.indexes` | Adds page indexes for longer content |
| `navigation.footer` | Shows footer links in navigation |
| `content.code.copy` | Adds copy buttons to code blocks |
| `content.tabs.link` | Enables tabbed content navigation |
| `content.action.edit` | Adds an edit button to pages |
| `content.action.view` | Adds a view button to pages |
| `header.autohide` | Hides header on scroll down |

### Third-party integrations
- **Formspree** — handles static contact form submissions
- **Giscus** — GitHub Discussions comments embedded in the site
- **Google Analytics** — tracking configured under `extra.analytics.property`
- **Cookie consent** — visitor consent dialog before analytics load

---

## 🚀 4. Common Commands

### Start local development server

```bash
mkdocs serve
```

### Use a custom host/port

```bash
mkdocs serve -a 127.0.0.1:8501
```

### Build the static site

```bash
mkdocs build
```

---

## 🌐 5. Deploying to GitHub Pages

> ⚠️ Important: `git push` does not publish the live site alone. You must run `mkdocs gh-deploy` after pushing.

### First deployment setup

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/rmszk/rmszk.github.io.git
git push -u origin main
mkdocs gh-deploy
```

### Redeploy after changes

```bash
git add .
git commit -m "Update portfolio"
git push origin main
mkdocs gh-deploy
```

✅ Live site: https://rmszk.github.io/

---

## 🔑 6. Notes for Future Use

1. Recreate and activate the conda environment before installing or running MkDocs.
2. Install `mkdocs-material[imaging]` for social preview cards and image optimization.
3. Install `pngquant` separately and make sure it is available on `PATH`.
4. Enable GitHub Discussions for Giscus comments to work.
5. Always run `mkdocs gh-deploy` after pushing source changes.

---

## 📝 README Purpose

This file is the project reference and should remain in the repository at:

`01_portfolio/01_mkdocs/readme.md`

Keep it updated whenever a new plugin, integration, or deployment step is added.
conda activate mkdocsconda activate mkdocs