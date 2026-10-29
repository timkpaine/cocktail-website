# Barrel Cocktail Co.

[![Build Status](https://github.com/timkpaine/cocktail-website/actions/workflows/build.yml/badge.svg?branch=main&event=push)](https://github.com/timkpaine/cocktail-website/actions/workflows/build.yml)

Website for [Barrel Cocktail Co.](https://barrelcocktail.co), built with SvelteKit and
prerendered for GitHub Pages with the static adapter.

## Develop

Use Node.js 22.17 or newer and the pnpm version pinned in package.json.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Verify

```bash
pnpm check
pnpm lint
pnpm exec playwright install chromium
pnpm test
pnpm build
```

Build output is written to `build/`, including the custom domain from `static/CNAME`.

## Update template tooling

The Copier answers track the `site-sveltekit` variant of
[python-project-templates/base](https://github.com/python-project-templates/base).
The site retains its own pages, branding, ESLint, Prettier, and Vitest configuration.

From a clean checkout, preview updates with
`copier update --answers-file .copier-answers.yaml --vcs-ref HEAD --defaults --pretend`,
then run the same command without `--pretend` on a branch. Review changes to site
content and resolve conflicts before running the verification commands above.
