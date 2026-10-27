# Frictionless — Publisher-managed Resources

Official Timberzen companion-resource hub for *Frictionless* by Doug R. Thompson.

## What ships in v0.1

- Responsive, keyboard-accessible, dependency-free resource finder (`index.html`, `styles.css`, `app.js`) with search, role and problem filters.
- Six **real**, downloadable items in `resources/core/`: three PDFs and three XLSX files.
- Every specialist directory contains its own honest *future release* landing page and README. The `resources/examples/` directory has a stable placeholder and links to the available worked example.
- Separate future commercial product holding page at `toolkit/`.
- Machine-readable `resources.json` catalog including role, status, format, relevant chapters and download path.

## Start here

1. Download `resources/core/quick-start.pdf`.
2. Complete `resources/core/friction-evidence-card.pdf` for one observed problem.
3. Log repeated burden in `resources/core/friction-ledger.xlsx`.
4. Use `resources/core/stakeholder-alignment.xlsx` to agree a small pilot and who can approve it.
5. Check the before/after results using `resources/core/improvement-scorecard.xlsx`.
6. Review the illustrative `resources/core/worked-example.pdf`.

No login, tracking or external dependencies. XLSX workbooks are macro-free and include visibly labeled fictional examples.

## Static hosting

This directory is designed for `timberzen/authors`, served by GitHub Pages at:

`https://timberzen.github.io/authors/doug-r-thompson/frictionless/`

To test locally:

```sh
cd <repository-root>
python -m http.server 8000
# browse http://localhost:8000/doug-r-thompson/frictionless/
```

`index.html` embeds a versioned JSON snapshot to allow offline opening. Keep it synchronized with `resources.json` when updating. The resource listing is rendered by `app.js` without a framework.

## Publishing workflow

- Only set `status: available` when the exact local file exists and has been verified.
- Keep URLs permanent and use semantic versioning. Use `CHANGELOG.md` for release notes.
- Keep specialist holding pages in place if a tool is retired; redirect to a replacement rather than breaking printed QR codes.
- Preserve accessibility and avoid adding analytics or external scripts without explicit review.
- Archive versioned release ZIPs independently of GitHub in a publisher-controlled archive.
- Do not put customer data or private case-study details into the public repository.

## Editorial distinction

The book's core concepts and short practical exercises remain in print. This starter pack is a free companion; the more comprehensive *Practical Toolkit* is a **planned separate product**, not yet sold or released.
