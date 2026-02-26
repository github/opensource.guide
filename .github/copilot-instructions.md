<!--
Repository-specific instructions for AI coding assistants.
Keep this file concise (~20-50 lines). Do not add generic guidance; focus on discoverable, actionable patterns in this repo.
-->

# Copilot / AI assistant instructions — opensource.guide

Short, focused notes to help an AI agent be productive in this repository.

- Big picture: This is a Jekyll site (see `Gemfile`, `script/*`, `_config.yml`). Content lives under `_articles/` (and language subfolders). Templates are in `_layouts/` and `_includes/`. The site is built to `_site/` and deployed to GitHub Pages via the workflows in `.github/workflows/`.

- Key developer workflows (executable commands used by CI and local dev):
  - Bootstrap (install deps): `script/bootstrap` — runs `bundle install` (gems) and `npm install`.
  - Local dev server: `script/server` → runs `bundle exec jekyll serve --watch --incremental --baseurl ''`.
  - Build site: `script/build` → `bundle exec jekyll build` (used with extra configs in tests: `script/build --config _config.yml,test/_config.yml`).
  - Tests: `script/test` → builds with test config, runs `rake` (Rake::TestTask) and `script/html-proofer` plus `test/prose` checks.
  - CI uses `script/bootstrap` then `script/test` (see `.github/workflows/tests.yml`).

- Project conventions and patterns (explicit examples):
  - Content + translations: `_articles/<lang>/...` or `_articles/<slug>.md` with front matter key `lang` (see `_articles/best-practices.md`). Use `page.lang` in templates (see `_includes/nav.html`) to render language-aware navigation.
  - Layout defaults: `_config.yml` sets `collections: articles` and default layout `article` for collection items.
  - Asset pipeline: Uses Sass under `assets/css/` with `node_modules` in `sass.load_paths` (see `_config.yml` and `package.json` deps `primer-core`/`primer-marketing`).
  - Tests: HTMLProofer configuration is in `script/html-proofer` and ignores a curated list of external URLs—add any new ignores there rather than changing test harness logic.

- Integration points / external dependencies:
  - GitHub Pages via the `actions/jekyll-build-pages` and `actions/deploy-pages` workflows (`.github/workflows/jekyll.yml`).
  - Node packages (installed by `npm install` in root); run `npm ci` if you need deterministic installs in automation.
  - Ruby gems controlled via `Gemfile` (uses `github-pages` gem). CI sets up Ruby and Node (see `.github/workflows/tests.yml`).

- Editing content rules an AI should follow:
  - Preserve front matter keys (e.g., `lang`, `title`, `order`, `class`) and image paths. Example: `_articles/best-practices.md` header.
  - For translated content, put files under the language folder (e.g., `_articles/tr/...`) and set `lang: <code>` in front matter.
  - Prefer small, isolated PRs that change content or templates separately; large cross-cutting layout changes can affect tests and require `script/test` locally.

- When modifying code or templates, run the local checks:
  - `script/bootstrap` (once)
  - `script/build --config _config.yml` (or `script/build --config _config.yml,test/_config.yml` for test parity)
  - `script/test` to run the full test harness used by CI (includes `rake` and `html-proofer`).

- Files to inspect for guidance/reference when generating changes:
  - `_config.yml`, `Gemfile`, `package.json`, `Rakefile`, `script/*`, `_includes/nav.html`, `_layouts/article.html`, `_articles/*` (language folders).

- Error & debugging notes:
  - HTMLProofer failures usually indicate broken external links or missing local assets; see `script/html-proofer` to add ignores.
  - If CI fails on `bundle install`, check `script/bootstrap` and `SKIP_BUNDLER` env var behavior in workflows.

If anything above is unclear or you want more examples (e.g., a template-focused checklist), tell me which area to expand and I will iterate.
