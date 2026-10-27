# Install the Frictionless GitHub Pages Resource Hub

Prepared for repository: `https://github.com/timberzen/authors`

**Repository permissions:** The linked GitHub integration can read this repository but denied `create_branch` with `403 Resource not accessible by integration`. Accordingly, nothing in this ZIP is deployed. The paths below are ready for a normal git merge/push.

## 1. Add the files (without overwriting unrelated site content)

Unzip this package at the root of your local clone of `timberzen/authors`. All files are added beneath `doug-r-thompson/frictionless/`; no current root or author files are replaced.

```bash
git clone https://github.com/timberzen/authors.git
cd authors
# Copy the unzipped doug-r-thompson/frictionless folder into the repo.
git switch -c feature/frictionless-resource-hub
git add doug-r-thompson/frictionless
git commit -m "Add Frictionless resource hub and starter toolkit"
git push -u origin feature/frictionless-resource-hub
# Open a pull request from the feature branch, review, and merge.
```

## 2. Connect from the existing author homepage

Edit `doug-r-thompson/index.html` (do not overwrite it): insert the card in `AUTHOR_PAGE_CARD_SNIPPET.html` into the existing `<div class="grid">` under `#books`. It uses the current site's existing `.card` styles. Commit it along with the hub.

Optional: update the author's descriptive copy to mention technology and customer-experience books in addition to Buddhist writing, but preserve all existing book links.

## 3. GitHub Pages settings

The current site must be configured to publish from the branch/folder containing the site root. This package needs no build step; verify Pages deployment settings in the repository and adjust only if necessary.

Expected link **once deployed**:

https://timberzen.github.io/authors/doug-r-thompson/frictionless/

This is a **planned URL**, not a claim that it is currently live.

## 4. Verify after merge

- Visit the hub from desktop and mobile; use keyboard navigation.
- Download every Available PDF and XLSX; none of the Future cards should show a download button.
- Change the role and problem filters and use search/clear filters.
- Open each specialist holding page, the examples holding page, and the separate Toolkit product page.
- Confirm the public author card points to the hub.
- Keep the future product as "in development" until pricing, terms, scope and delivery are decided.

## 5. Publish updates safely

Always create a dated version/tag and update `CHANGELOG.md` and `resources.json`. Add real binary files before switching catalog status from planned to available. Maintain backups and preserve printed URLs.

## 6. Latest book manuscript (editorial handoff)

The user reports an upload of `Manuscript-Raw_V3 - humanized.docx` into their ChatGPT Project, but that file has not been accessible through the current conversation or project-file interface at packaging time. This hub does not incorporate or publish manuscript content. Four independently drafted chapter files remain separate, ready for a safe manuscript merge once the source Word file is visible. Do not commit an unpublished book manuscript into this public repository.
