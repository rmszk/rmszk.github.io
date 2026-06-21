---
date: 2026-05-25
authors:
  - shahroz
categories:
  - Portfolio
  - MkDocs
---

# :material-web: How I Built My Data Analytics Portfolio Using MkDocs & Material Theme

Building a personal portfolio is one of the best ways to showcase your data journey, but creating one from scratch can be overwhelming. I wanted a clean, fast, and highly customizable site that holds my projects, vlogs, and resumes without slowing down.

Here is the honest truth: while I am confident in **Python** and **Markdown**, I didn't have deep knowledge of **CSS** or **JavaScript**. Instead of letting that stop me, I leveraged **AI collaboration** to code all the custom animations and layout tweaks, while I managed the core architecture, logic, and implementation myself!

<!-- more -->

## :material-tools: Technologies & Tools Used

<div align="center" markdown="1">

![MkDocs](https://img.shields.io/badge/MkDocs-526CFE?logo=materialformkdocs&logoColor=white)
![Material](https://img.shields.io/badge/Material_for_MkDocs-526CFE?logo=materialdesign&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-2A8C9A?logo=formspree&logoColor=white)
![Giscus](https://img.shields.io/badge/Giscus-24292E?logo=github&logoColor=white)
![Google Analytics](https://img.shields.io/badge/Google_Analytics-E37400?logo=googleanalytics&logoColor=white)
![pngquant](https://img.shields.io/badge/pngquant-FF6F00?logo=files&logoColor=white)

</div>

Below is a quick description of what each one does in this project:

- **MkDocs** — The fast and lightweight static site generator engine.
- **Material for MkDocs** — The premium theme providing a modern, responsive UI.
- **GitHub & GitHub Pages** — Used for version control and free public hosting.
- **Python** — The backbone for managing packages and environment control.
- **Formspree** — Handles the contact form submissions seamlessly without a backend.
- **Giscus** — GitHub Discussions-powered comment system injected into the blog.
- **Google Analytics** — Integrated tracking paired with a visitor cookie consent dialog.
- **pngquant** — Backend image compression via the `optimize` plugin.

---

## :material-video: Video Walkthrough

You can watch the quick video overview of my portfolio structure, custom animations, and layout here:

<div style="width: 100%; display: flex; justify-content: center; margin: 15px 0;">
  <iframe
    src="https://www.tiktok.com/embed/v2/"
    style="width: 100%; max-width: 280px; height: 500px; border: none; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);"
    allowfullscreen
    scrolling="no"
    allow="encrypted-media;">
  </iframe>
</div>

---

## :material-text-alignment-left: Project Description & Step-by-Step Guide

Here is the exact step-by-step roadmap showing how this architecture was configured and how you can replicate it.

### Step 1: Environment & Tool Setup

First, set up an isolated virtual environment using Conda to avoid version conflicts, then install the core packages:

```bash
conda create -n mkdocs python=3.13 -y
conda activate mkdocs

pip install mkdocs mkdocs-material
pip install mkdocs-material[imaging]
```

!!! warning "Important Note for Image Optimization"
    I downloaded `pngquant` from its official site, extracted it, and pasted `pngquant.exe` into `C:\Windows\System32\`. This allows the `optimize` plugin to auto-compress image files without throwing errors during site compilation.

### Step 2: Organizing the Folder Structure

I structured my workspace so adding new projects, resumes, or blogs in the future becomes seamless:

```text
portfolio_of_shahroz/
├── mkdocs.yml                  # Global configuration (plugins, nav, colors)
├── docs/                       # Markdown source files
│   ├── index.md                # Homepage
│   ├── skills.md
│   ├── about.md
│   ├── resume.md
│   ├── contact.md
│   ├── projects/               # Data analyst & electrical project notes
│   │   ├── index.md
│   │   ├── project_1.md
│   │   ├── project_2.md
│   │   └── project_3.md
│   ├── blog/posts/             # My tech vlogs and articles
│   ├── assets/                 # Profile images and local static assets
│   └── stylesheets/
│       └── extra.css           # Custom CSS changes and animations
└── overrides/partials/
    └── comments.html           # Injecting Giscus comment system layout
```

### Step 3: Custom Animations & Advanced Features

This is where the magic happened. I used my Python background to handle the site logic, and used AI assistance to build custom CSS animations inside `extra.css`.

I also configured several built-in Material theme options in my `mkdocs.yml`:

- **Smart Navigation** — Enabled `navigation.top` (back-to-top button), `navigation.tracking` (highlights headers as you scroll), and `header.autohide` to maximize screen space on mobile.
- **Developer Tools** — Added `content.code.copy` so users can instantly copy my code blocks with a single click.
- **SEO & Analytics** — Configured custom cookie consent popups linked directly to Google Analytics.

### Step 4: Deploying to GitHub Pages

After pushing source code changes to the repository, you only need one single command to compile and publish the live site publicly:

```bash
# Step A: Push source code to GitHub
git add .
git commit -m "Updated portfolio layout"
git push origin main

# Step B: Compile and publish to GitHub Pages live link
mkdocs gh-deploy
```

---

## :material-lightbulb-on: Key Takeaways & Lessons Learned

Developing this platform taught me a lot more than just code syntax:

- :material-brain: **AI-Powered Development** — It taught me how to combine my core Python/Markdown skills with AI tools to build frontend features (like CSS animations) that I hadn't mastered yet. This is a massive superpower for modern developers!
- :material-folder-multiple: **Professional Organization** — It forced me to catalog my technical skills and local hardware projects in an organized grid system.
- :material-file-document-edit: **Documentation Mastery** — Writing clean markdown files taught me how to present complex technical workflows clearly.
- :material-briefcase: **Showcase My Work Effectively** — A live, structured site does more justice to my projects than a static PDF resume ever could.
- :material-rocket-launch: **Career Readiness** — Building this prepared me for future opportunities by proving I can ship a real, production-deployed product.

## :material-target: Conclusion

Building this site was a valuable step forward. It functions not just as a portfolio, but as proof of my adaptability and problem-solving mindset. In the real world, what matters is getting things done efficiently, and blending my programming base with AI assistance allowed me to build a premium product.

If you are looking to build your own online presence, I highly suggest trying the MkDocs + GitHub Pages combo. Don't let a lack of web development experience hold you back — use the tools available, start building, and share your journey!