# Repository Rules

## Scope

- This repository owns only the toolbox landing page at `https://loogg.github.io/toolbox/`.
- Tool implementations, releases, and versions belong to their own repositories.
- `src/tools-config.json` may contain a tool's stable URL and presentation metadata, but never its version.
- Do not fetch tool versions from GitHub or from tool sites.

## Verification

- Run `npm ci`, `npm run lint`, and `npm run build` before committing.
- Verify every configured tool URL after changing the catalog.
- Do not commit `dist`, source maps, credentials, or local environment files.

## Release

- Use semantic versions in `package.json` for toolbox releases only.
- Create releases with `npm version patch|minor|major -m "chore(release): v%s"`.
- Push the release commit and tag with `git push origin main --follow-tags`.
- Only `v*.*.*` tags deploy GitHub Pages; ordinary commits run CI only.
